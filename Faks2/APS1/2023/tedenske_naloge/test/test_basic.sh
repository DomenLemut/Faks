g++ -std=c++20 -o program ../neboticniki.cpp
gcc -std=c99 -o test ./3/generator.c

./test $@ > test.txt
./program < test.txt > out.txt

rm program
rm test