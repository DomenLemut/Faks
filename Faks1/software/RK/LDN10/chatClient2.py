import socket
import struct
import sys
import threading

#-------------------SSL
import ssl
import sys


PORT = 1234
IP  = "localhost"
CLIENT = "client2"
HEADER_LENGTH = 2


client_name = "Neza"
active = False
user_bind = "@"

# skopirana koda iz ucilnice
# ----------------------------
def setup_SSL_context():
    global client_name
    global CLIENT

    #uporabi samo TLS, ne SSL
    context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)
    
    # certifikat je obvezen
    context.verify_mode = ssl.CERT_REQUIRED
    #nalozi svoje certifikate
    context.load_cert_chain(certfile="./cert/"+CLIENT+".pem", keyfile="./key/"+CLIENT+"key.pem")
    # nalozi certifikate CAjev (samopodp. cert.= svoja CA!)
    context.load_verify_locations('./cert/server.pem')
    # nastavi SSL CipherSuites (nacin kriptiranja)
    context.set_ciphers('ECDHE-RSA-AES128-GCM-SHA256')

    print(context)
    return context
# ----------------------------

def receive_fixed_length_msg(sock, msglen):
    message = b''
    while len(message) < msglen:
        chunk = sock.recv(msglen - len(message))  # preberi nekaj bajtov
        if chunk == b'':
            raise RuntimeError("socket connection broken")
        message = message + chunk  # pripni prebrane bajte sporocilu

    return message


def receive_message(sock):
    header = receive_fixed_length_msg(sock,
                                      HEADER_LENGTH)  # preberi glavo sporocila (v prvih 2 bytih je dolzina sporocila)
    message_length = struct.unpack("!H", header)[0]  # pretvori dolzino sporocila v int
    message = None
    if message_length > 0:  # ce je vse OK
        message = receive_fixed_length_msg(sock, message_length)  # preberi sporocilo
        message = message.decode("utf-8")

    return message


def send_message(sock, message):
    encoded_message = message.encode("utf-8")  # pretvori sporocilo v niz bajtov, uporabi UTF-8 kodno tabelo

    # ustvari glavo v prvih 2 bytih je dolzina sporocila (HEADER_LENGTH)
    # metoda pack "!H" : !=network byte order, H=unsigned short
    header = struct.pack("!H", len(encoded_message))

    message = header + encoded_message  # najprj posljemo dolzino sporocilo, slee nato sporocilo samo
    sock.sendall(message);


def handle_msg(sock, msg):
    #print(msg)
    if msg[0:3] == "RNR":
        if msg[3:] != "0":  #good system acceted our rename
            print("Welcome: "+ msg[3:])
            print("\n Za pomoč natipkaj '!help'")
            global client_name
            client_name = msg[3:]
            return
        else:
            # vprasaj uporabnika za ime
            print("---------------------------------------------------------------------")
            print(" \n \n [System] Uporabnik zvašim certifikatom je že prijavljen")
            print("[System] Izklapljam. \n \n \n")
            print("---------------------------------------------------------------------")

            quit()
    else:
        if msg[0:3] == "MSG":
            name_len= int(msg[3:5])
            name = msg[5:5+name_len]
            print("\n ["+name+"] " + msg[5+name_len:])
            #print(msg)
        else:
            if msg[0:3] == "ERR":
                if msg[3] == "0":
                    print(" RRR - client does not exist")
                    global user_bind
                    user_bind = "@"



def handle_command(sock, comm):
    global user_bind
    if len(comm) == 0:
        return

    if comm[0] != "!":
        if(user_bind == "@"):
            nameLen = "{:02d}".format(len(client_name))
            msg = "BCT"+nameLen+client_name+comm
            send_message(sock, msg)
        else:
            # send_message(sock, "BCT"+comm)
            nameLen = "{:02d}".format(len(user_bind))
            myNameLen = "{:02d}".format(len(client_name))
            msg = "PRV"+nameLen+user_bind+myNameLen+client_name+comm
            send_message(sock, msg)
            
    else:
        if "!help" in comm.lower():
            print("\n")

            print("!help pokaze trenuten izpis")
            print("-------------------- \n")

            print("![ime] spremeni vas chat tako da bodo sporočila poslana OSEBI")
            print("\n!@ spremeni vas chat tako da bodo sporočila poslana VSEMi")
            print("-------------------- \n")
        if(comm[1] == "@"):
            user_bind = "@"
        else:
            user_bind = comm[1:]



# message_receiver funkcija tece v loceni niti
def message_receiver():
    while True:
        msg_received = receive_message(sock)
        if len(msg_received) > 0:  # ce obstaja sporocilo
            #print("[RKchat] " + msg_received)  # izpisi
            handle_msg(sock, msg_received)




def send_rename(soc, new_name):
    typ = "RNM"
    send_message(soc, typ+new_name)



#-------- SSL
my_ssl_ctx = setup_SSL_context()



# povezi se na streznik
print("[system] connecting to chat server ...")
sock = s = my_ssl_ctx.wrap_socket(socket.socket(socket.AF_INET, socket.SOCK_STREAM))
sock.connect((IP, PORT))
print("[system] connected!")

# zazeni message_receiver funkcijo v loceni niti
thread = threading.Thread(target=message_receiver)
thread.daemon = True
thread.start()

# vprasaj uporabnika za ime
client_name = ""
send_rename(sock, client_name)


# pocakaj da uporabnik nekaj natipka in poslji na streznik
while True:
    try:
        msg_send = input("\n "+client_name+" to "+user_bind+": ")
        handle_command(sock, msg_send)
        #send_message(sock, msg_send)
    except KeyboardInterrupt:
        sys.exit()
