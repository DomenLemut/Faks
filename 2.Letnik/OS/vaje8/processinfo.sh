#!/bin/bash

pid=${1:-$$}

a=$(readlink /proc/$pid/exe)
echo Izvršljiva datoteka: $a 

a=$(readlink /proc/$pid/cmdline)
echo Ukazna vrstica: $a

a=$(readlink /proc/$pid/cwd)
echo Delovni imenik: $a

a=$(readlink /proc/$pid/root)
echo Korenski imenik: $a

read a b c <<< $(cat /proc/$pid/status)
echo Ime procesa: $b


echo PID:

echo PPID:

a=$(ls /proc/$pid/task | wc -l)
echo Št. niti: $a

a=$(ll /proc/$pid/fd | cut -d' ' -f9-)
echo Odprte datoteke
echo $a
