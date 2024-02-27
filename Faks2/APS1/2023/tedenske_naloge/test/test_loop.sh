#!/bin/bash

NAME="$1"

g++ -std=c++20 -o program ../${NAME}.cpp

cat ${NAME}/test01.txt | ./program

rm program