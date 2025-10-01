#!/bin/bash

# Napišite bash skripto sigsend.sh, ki pošilja signale. Proces, ki mu pošiljamo signale, podamo kot prvi argument skripte:

# če je prvi argument število (lahko preverite le prvi znak), potem gre za PID procesa;
# sicer gre za ime procesa (poiščite proces).
# Skripta naj se v zanki odziva na naslednje tipke:

# x - izhod iz programa;
# h - izpis pomoči;
# w - pošlje signal SIGHUP (končanje pripadajočega terminala);
# i - SIGINT (končanje kot Ctrl+C);
# q - SIGQUIT (končanje procesa, Ctrl+/);
# t - SIGTERM (končanje procesa);
# k - SIGKILL (brezpogojno končanje procesa);
# c - SIGCONT (nadaljevanje izvajanja procesa);
# s - SIGSTOP (brezpogojna ustavitev izvajanja procesa);
# z - SIGTSTP (ustavitev izvajanja procesa kot Ctrl-Z);
# 1 - SIGUSR1 (1. uporabniški signal);
# 2 - SIGUSR2 (2. uporabniški signal); in
# y - SIGCHLD (končanje otroka).
# Pred pošiljanjem signala preverite, če prejemnik še obstaja in če ne, potem naj se skripta konča. Izpišite tudi obvestilo o usephu pošiljanja signala.


# Preveri število argumentov
if [[ $# -lt 1 ]]; then
  echo "Navedite PID procesa ali ime procesa kot prvi argument."
  exit 1
fi

# Preveri, ali je prvi argument številka
if [[ ${1:0:1} == [a-zA-Z] ]]; then
  target_pid=$1
else
  # Poišči PID procesa
  target_pid=$(pgrep -x "$1")
fi

# Preveri, ali je proces najden
if [[ -z $target_pid ]]; then
  echo "Proces '$1' ni bil najden."
  exit 1
fi

# Funkcija za pošiljanje signala in izpis uspeha
send_signal() {
  signal=$1
  if kill -0 $target_pid &>/dev/null; then
    if kill -$signal $target_pid; then
      echo "Signal $signal poslan procesu $target_pid."
    else
      echo "Napaka pri pošiljanju signala $signal procesu $target_pid."
    fi
  else
    echo "Proces $target_pid ne obstaja več."
    exit 1
  fi
}

# Zanka za uporabniški vnos
while true; do
  read -n 1 -p "Vnesite znak: " input
  echo

  case $input in
    x) exit ;;
    h) echo "Pomoč: ..."
       echo ;;
    w) send_signal HUP ;;
    i) send_signal INT ;;
    q) send_signal QUIT ;;
    t) send_signal TERM ;;
    k) send_signal KILL ;;
    c) send_signal CONT ;;
    s) send_signal STOP ;;
    z) send_signal TSTP ;;
    1) send_signal USR1 ;;
    2) send_signal USR2 ;;
    y) send_signal CHLD ;;
    *) echo "Neveljaven znak. Poskusite znova." ;;
  esac
done
