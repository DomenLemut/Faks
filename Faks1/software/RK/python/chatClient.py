import socket
import struct
import sys
import threading
import json
import time

PORT = 1234
HEADER_LENGTH = 2

user = str()
user_to = str() 
user_from = str()

public = True #public or private messaging mode

# JSON file
f = open ('user.json',)
 
# Reading from file
data = json.load(f)

if (data['username'] == ""):
    print("you have no username! No access allowed!")
    while(data['username'] == ""):
        time.sleep(15) # pocaka 15s in ponovno prebere username
        f = open ('user.json',)
        data = json.load(f)

user = data['username']

f.close()

def printBanner():
    print("""
 ____  _  __   ____ _           _   
|  _ \| |/ /  / ___| |__   __ _| |_ 
| |_) | ' /  | |   | '_ \ / _` | __|
|  _ <| . \  | |___| | | | (_| | |_ 
|_| \_\_|\_\  \____|_| |_|\__,_|\__|

-------------------------------------
Chat with your best FRIends!
-------------------------------------

use !help if you get stuck
""")

#function for processing commands in the program
def proc_comm(command):
    global user
    global user_to
    global user_from
    global public

    global users

    if(command == "help"):
        print("""
!help --manual
!public
!user {target Username}
!time
!profile
        """)

    elif(command == "help --manual"):
        print("""
------------------------------------------------------------------------
Welcome to RK Chat!

it is a simple python program made for messaging in your local network. 
In the program you have your own username which needs to be set asap.

There are two modes in RK Chat app, public and private.

To switch between them you use commands:

to set to public: !public
to set stream to private !user {target username}

when you are in one of the modes you can simpy type in message you want to send
and then press enter to send.


OTHER USEFUL COMMANDS:

to set private mode to last user           !lastuser
to view current time                       !time
to view your profile details               !profile
to view your current status                !status
------------------------------------------------------------------------
        """)

    elif(command == "public"):
        print("Public mode is enabled")
        public = True
    
    elif(command[:4] == "user"):
        public = False
        user_to = command[5:] #check if user exists - needed implementation
        #send_message(sock, "pairing" + user_to)
        print("Private mode with " + "'" + user_to + "'" + " is selected")


    elif(command == "time"):
        named_tuple = time.localtime() # get struct_time
        time_string = time.strftime("%d/%m/%Y, %H:%M:%S", named_tuple)
        print("Date and time: " + time_string)

    elif(command == "profile"):
        print(user)

    elif(command == "status"):
        print(str(public) + "\n" + user + user_to + user_from)

    elif(command == "lastuser"):
        public = False
        print("Private mode with '" + user_to + "' is selected")

    else:
        print("unvalid command")

def proc_message(msg_raw, type):
    global user
    global public
    global user_to

    if public == True:
        user_send_to = "0"
    else:
        user_send_to = user_to

    msg_processed = type + " " + user + " " + user_send_to + " " + msg_raw
    return msg_processed

def receive_fixed_length_msg(sock, msglen):
    message = b''
    while len(message) < msglen:
        chunk = sock.recv(msglen - len(message))  # preberi nekaj bajtov
        if chunk == b'':
            raise RuntimeError("socket connection broken")
        message = message + chunk  # pripni prebrane bajte sporocilu

    return message


def receive_message(sock):
    header = receive_fixed_length_msg(sock,HEADER_LENGTH)  # preberi glavo sporocila (v prvih 2 bytih je dolzina sporocila)
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


# message_receiver funkcija tece v loceni niti
def message_receiver():
    while True:
        msg_received = receive_message(sock)
        parametri = msg_received.split(" ")

        msg_type = parametri[0]
        user_to = parametri[1]
        user_me = parametri[2]
        message = parametri[3:]

        message_new = " ".join(message)

        

        if msg_type == "message":
            if len(msg_received) > 0:  # ce obstaja sporocilo
                if user_me == "0":
                    print("[public from " + user_to + "] " + message_new)  # izpisi
                else:
                    print("[" + user_to + "] " + message_new)  # izpisi

printBanner()

# povezi se na streznik
print("[system] connecting to chat server ...")
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect(("localhost", PORT))

#poslji svoj username
send_message(sock, user)

print("[system] connected!")

print("")
print("Hello " + user + "!")
print("")
print("")

# zazeni message_receiver funkcijo v loceni niti
thread = threading.Thread(target=message_receiver)
thread.daemon = True
thread.start()



# pocakaj da uporabnik nekaj natipka in poslji na streznik
while True:
    try:
        msg_raw = raw_input()

        if msg_raw[0] == "!":
            proc_comm(msg_raw[1:])
        else:    
            named_tuple = time.localtime() # get time
            time_string = time.strftime("%m/%d/%Y, %H:%M:%S", named_tuple)

            if(len(msg_raw) > 0):
                msg_send = proc_message(msg_raw, "message")
                send_message(sock, msg_send)
            print(time_string)
    except KeyboardInterrupt:
        sys.exit()
