#!/bin/bash

g++ -std=c++20 -o program ../osvetlitev.cpp

NUMBER="$1"

cat ./1/testi/test${NUMBER}.txt | ./program > out.txt
diff ./1/testi/test${NUMBER}res.txt out.txt

rm program