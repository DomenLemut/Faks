#!/bin/bash

first_arg=$1

shift

for i in $@;
do
    (( i == first_arg )) && echo "1" || echo "0"
done