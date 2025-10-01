#!/bin/bash
if[$1 == $2]
then
    echo $3
else
    Fibonacci_rek.sh $1 $(($2+1)) $4 $(($3+$4))
fi