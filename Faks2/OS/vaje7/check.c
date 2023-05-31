#include <unistd.h> // should be first, because of crypt()
#include <string.h>
#include <stdio.h>
#include <stdlib.h>

// gcc -lcrypt passwd_check.c -o passwd_check

void help(char *cmd)
{
	printf("Uporaba %s encpass pass.\n", cmd);
	printf("  encpass ... zgoščeno geslo, npr. $6$sol$geslo$\n");
	printf("  guess ... poskus ugibanja gesla\n");
	printf("  Izgodni status: če je guess geslo, ki ustreza encpass");
}

int main(int argc, char *argv[])
{
	if (argc < 3)
	{
		fprintf(stderr, "Napačna uporaba.\n");
		help(argv[0]);
		exit(1);
	}
	char *encrypted = argv[1];
	char *guess = argv[2];

	// salt is at the beginning of the encrypted password
	char *salt = encrypted;

	char *hashed_guess = crypt(guess, salt);
	int found = strcmp(hashed_guess, encrypted);

	// explicilty return 0 or 1
	return !found ? 0 : 1;
}
