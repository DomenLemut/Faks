#!/bin/bash

echo "Bash Version ${BASH_VERSION}"
for i in {0..100}
do
	if [ $((i % 2)) == 0 ]
	then
		echo "$i"
	fi
done
