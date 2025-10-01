# !/bin/bash

i=1
for var in $@ 
do	
	var=$(echo $var | sed "s/a/ha/g")
	var=$(echo $var | sed "s/i/hi/g")
	var=$(echo $var | sed "s/o/ho/g")
	var=$(echo $var | sed "s/u/hu/g")
	echo $i: $var
	i=$(( i + 1 ))	
done
