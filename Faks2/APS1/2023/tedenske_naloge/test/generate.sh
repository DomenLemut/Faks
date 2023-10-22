gcc -std=c99 -o test $1

./test $2 > test.txt

rm test