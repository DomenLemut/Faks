#!/bin/bash

for arg in "$@"; do
	echo "$arg"
done | nl

for ((i = 1; i <= $#; i++)); do
	echo "$i: ${!i}"
done
