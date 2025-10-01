#!/bin/bash

case $1 in
  compile)
    gcc -std=c99 genall.c -o genall
    gcc -std=c99 check.c -lcrypt -o check
  ;;

  clean)
    rm -f genall check
  ;;
  
  demo-md5)
    ./search.sh shadow md5-1 -all 1
    ./search.sh shadow md5-2 -all 2
    ./search.sh shadow md5-3 -digits 3
  ;;

  demo-sha256)
    ./search.sh shadow sha256-1 -all 1
    ./search.sh shadow sha256-2 -all 2
    ./search.sh shadow sha256-3 foo 3
  ;;

  demo-yescrypt)
    ./search.sh shadow yescrypt-1 -all 1
    ./search.sh shadow yescrypt-2 -all 2
  ;;

  *)
    cat $0
  ;;
  
esac
