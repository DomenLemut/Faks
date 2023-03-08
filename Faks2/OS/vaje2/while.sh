#!/bin/bash

echo "Bash Version ${BASH_VERSION}"
i=0

while true
do 
	if [ $((i % 4)) == 0 ]
	then
		echo Majketi, Majketi, peder!
	else
		echo Magnifico je peder!
	fi
	sleep 1
	((i+=1))
	echo $i
done
