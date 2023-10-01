#!/bin/bash

# Check if an argument was provided
if [ $# -eq 0 ]; then
    echo "Usage: $0: parameter je steviljka podnaloge"
    exit 1
fi

# Get the input parameter
number="$1"

a="1:2:3:4:5"

case $number in
    1)
    	echo "$a" | sed 's/:/,/g'
     	;;
    2)
    	echo "$a" | sed 's/[^:]*://'
    	;;
    3)
    	echo "$a" | sed 's/.*://'
    	;;
    4)
    	echo "$a" | rev | sed 's/[^:]*://' | rev
		;;
   	*)
        echo "Invalid choice: $number"
        ;;
esac
