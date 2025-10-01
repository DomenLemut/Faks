#include <stdlib.h>
#include <string.h>
#include <stdio.h>

void help(char* cmd) {
	printf("Uporaba: %s abeceda dolžina\n", cmd);
}

static char* alphabet;
static int alphabet_size;


void first(int len, char* counter) {
	for (int i = 0; i < len; i++) counter[i] = 0;
}


int next(int len, char* counter) {
	// find position
	int pos = 0;
	while (pos < len && counter[pos] == alphabet_size - 1) pos++;
	if (pos >= len) return 0;
	// reset previous chars
	for (int i = pos - 1; i >= 0; i--) counter[i] = 0;
	// increment char at position
	counter[pos]++;
	return 1;
}


void gen_guess(int len, char* counter, char* guess) {
	for (int i = 0; i < len; i++) guess[i] = alphabet[counter[i]];
	guess[len] = 0;
}


int main(int argc, char* argv[]) {
	if (argc >= 2) {
		if (!strcmp(argv[1], "-small"))
			alphabet = "abcdefghijklmnopqrstuvwxyz";
		else if (!strcmp(argv[1], "-large"))
			alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		else if (!strcmp(argv[1], "-digits"))
			alphabet = "0123456789";
		else if (!strcmp(argv[1], "-all"))
			alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		else 
			alphabet = argv[1];
	} else {
		fprintf(stderr, "Napačna abeceda.\n");
		help(argv[0]);
		exit(1);
	}
	alphabet_size = strlen(alphabet);
	fprintf(stderr, "Alphabet: %s\n", alphabet);
	fprintf(stderr, "Alphabet size: %d\n", alphabet_size);

	int len = (argc >= 3) ? atoi(argv[2]) : 1;
	fprintf(stderr, "Length: %d\n", len);

	char counter[len];
	char guess[len + 1];
	first(len, counter);
	do {
		gen_guess(len, counter, guess);
		printf("%s\n", guess);
	} while (next(len, counter) != 0);

	return 0;
}
