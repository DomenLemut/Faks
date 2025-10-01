import signal

signal.signal(signal.SIGINT, signal.SIG_DFL)
import socket
import struct
import threading
import time

PORT = 1234
HEADER_LENGTH = 2

users = {}


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


# funkcija za komunikacijo z odjemalcem (tece v loceni niti za vsakega odjemalca)
def client_thread(client_sock, client_addr):
    global clients
    global users

    print("[system] connected with " + client_addr[0] + ":" + str(client_addr[1]))
    print("[system] we now have " + str(len(clients)) + " clients")

    try:

        while True:  # neskoncna zanka
            msg_received = receive_message(client_sock)

            parameter = msg_received.split(" ")
            msg_type = parameter[0]
            user = parameter[1]
            user_to = parameter[2]
            # if(msg_type == "pairing"):
            #     exists = False
            #     for client in clients:
            #         if users[user] == client:
            #             print("exists")
            #             send_message(client, "user exists")
            #     if exists == False:
            #         send_message(client, "user doesnt exist")
            #         print("doesnt exist")
                
        


            if not msg_received:  # ce obstaja sporocilo
                break
            
           
            if user_to == "0":
                print("[" + user + " BROADCAST] [" + client_addr[0] + ":" + str(client_addr[1]) + "]")
                for client in clients:
                    if not(client == users[user]):
                        send_message(client, msg_received)

            else:
                print("[" + user + " to " + user_to + "] [" + client_addr[0] + ":" + str(client_addr[1]) + "]")
                for client in clients:
                    if users[user_to] == client:
                        send_message(client, msg_received)


    except:
        # tule bi lahko bolj elegantno reagirali, npr. na posamezne izjeme. Trenutno kar pozremo izjemo
        pass

    # prisli smo iz neskoncne zanke
    with clients_lock:
        clients.remove(client_sock)
    print("[system] we now have " + str(len(clients)) + " clients")
    client_sock.close()


# kreiraj socket
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(("localhost", PORT))
server_socket.listen(1)

# cakaj na nove odjemalce
print("[system] listening ...")
clients = set()
clients_lock = threading.Lock()
while True:
    try:
        # pocakaj na novo povezavo - blokirajoc klic
        client_sock, client_addr = server_socket.accept()
        with clients_lock:
            clients.add(client_sock)

        thread = threading.Thread(target=client_thread, args=(client_sock, client_addr));

        curr_username = receive_message(client_sock)

        if client_sock not in users.keys():
            users[curr_username] = client_sock
        

        else:
          send_message(client_sock, "Your username is already being used by another socket")


        print(client_sock)
        thread.daemon = True
        thread.start()

    except KeyboardInterrupt:
        break

print("[system] closing server socket ...")
server_socket.close()
