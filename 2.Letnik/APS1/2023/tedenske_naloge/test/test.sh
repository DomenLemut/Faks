#!/bin/bash

Help()
{
   echo "options:"
   echo "t     Generate a test and don't run the program."
   echo "r     Run the program with test.txt or another file if provided."
   echo "h     Print help."
   echo "c     Clear out.txt and time.log."
}

length=""
lights=""
execute=""
generator=""
out="out.txt"
test="test.txt"
log="time.log"

while getopts ":trhc" option; do
   case $option in
        h)
            Help
            exit;;
        \?)
            echo "Error: Invalid option -$OPTARG"
            exit;;
        t)
            shift $((OPTIND-1))
            gcc -std=c99 -o test $1
            ./test $@ > $test
            echo "New test generated."
            rm test
            exit;;
        r)
            shift $((OPTIND-1))

            execute=$1

            g++ -std=c++20 -o program $execute
            ./program < $test >> $out

            rm program
            exit;;
        c)
            shift $((OPTIND-1))
            > $out
            > $log
            exit;;
   esac
done

execute=$1
generator=$2

g++ -std=c++20 -o program $execute
gcc -std=c99 -o test $generator

./test $@ > $test
./program < $test > $out

rm program
rm test