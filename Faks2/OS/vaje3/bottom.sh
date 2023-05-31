#!/bin/bash

RED="\e[31m"
GREEN="\e[32m"
ENDCOLOR="\e[0m"

INVERSESTART=$(tput smso)
INVERSEEND=$(tput sgr0)

show_pid=1
show_command=1
show_memory=1
show_user=1

ps_args=""

function get_ps_args {
  ps_args="-eo"
  if [ $show_pid -eq 1 ]; then
    ps_args+=" pid"
  fi
  if [ $show_command -eq 1 ]; then
    ps_args+=",comm"
  fi
  if [ $show_memory -eq 1 ]; then
    ps_args+=",%mem"
  fi
  if [ $show_user -eq 1 ]; then
    ps_args+=",user"
  fi
  ps_args+=",%cpu --sort=-%cpu | head -n 10"
}

while true; do
  clear
  echo -e """${GREEN} _____ ___  ____  ____ _____ _____ ____  
|_   _/ _ \|  _ \/ ___|_   _| ____|  _ \ 
  | || | | | |_) \___ \ | | |  _| | |_) |
  | || |_| |  __/ ___) || | | |___|  _ < 
  |_| \___/|_|   |____/ |_| |_____|_| \_\ ${ENDCOLOR}
"""
  echo -e "${GREEN} TOPSTER - top's ugly brother ${ENDCOLOR}\n"

  get_ps_args

   echo -e "${INVERSESTART}$(ps -eo pid,comm,%mem,user,%cpu --sort=-%cpu | head -n 10 | head -1) ${INVERSEEND}" && ps -eo pid,comm,%mem,user,%cpu --sort=-%cpu | head -n 10 | sed 1d
  
 # echo $ps_args

  # ps $ps_args

  echo -e "\n${INVERSESTART}  Press q to quit, h for help ${INVERSEEND}"

  read -t 1 -N 1 input #bere na 1s

  # vsi commandi

  if [[ $input = "q" ]]; then
    break
  fi  
  
  if [[ $input = "h" ]]; then
    clear
    show_help
    read -n 1 -r -s -p "${INVERSESTART} Press any key to return to the front page...  ${INVERSEEND}" # Vsak vnos je good, ne caka na enter
  fi    

  if [[ $input = "c" ]]; then
    if [ $show_command -eq 1 ]; then
      show_command=0
    else
      show_command=1
    fi
  fi  

  if [[ $input = "m" ]]; then
    if [ $show_memory -eq 1 ]; then
      show_memory=0
    else
      show_memory=1
    fi
  fi  

  if [[ $input = "p" ]]; then
    if [ $show_cpu -eq 1 ]; then
      show_cpu=0
    else
      show_cpu=1
    fi
  fi  

  if [[ $input = "u" ]]; then
    if [ $show_user -eq 1 ]; then
      show_user=0
    else
      show_user=1
    fi
  fi  

  function show_help {
    echo """${INVERSESTART}Help page:${INVERSEEND}
    q - Quit
    h - Help
    c - Toggle command display
    m - Toggle memory display
    p - Toggle PID display
    u - Toggle user display
    """
  }

done
