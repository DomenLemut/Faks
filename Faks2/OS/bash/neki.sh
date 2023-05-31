#!/bin/bash

sum=0
curr=0

for FILE in *
do 
curr=$(stat -c %s $FILE)
((sum += curr))
echo $FILE $curr bytes
done

echo
echo Sum: $sum bytes

echo "this file($0): $(stat -c %s $0)"

false

echo $?
echo *
