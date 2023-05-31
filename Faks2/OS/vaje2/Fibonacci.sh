#!/bin/bash

loading_line() {
	local input=$1
    	local width=20
    	#local i=$(echo "$input * $width" | bc)
    	local i=3

       	printf "\r[" 
	printf '%*s' $((i)) '█'
	printf '%*s' $((width - i)) ''
	printf "]"
}

fibonacci(){
	n=$1
  	if [[ $n -eq 0 || $n -eq 1 ]]; then
    		echo $n
  	else
		loading_line 1
    		a=$(fibonacci $((n-1)))
    		b=$(fibonacci $((n-2)))
    		echo $((a+b))
  	fi
}

if(($# > 0)) 
then
	echo "Iskanje $1 Fibbonaccijevega stevila:"
	fibonacci $1
else 
	echo "Not enough arguments!!"
fi
