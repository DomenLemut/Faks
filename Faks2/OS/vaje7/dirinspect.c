#include <unistd.h>
#include <stdio.h>
#include <dirent.h>
#include <stdlib.h>

int main(int argc, char ** argv) {
	char * dir;
	if(argc < 2) dir = ".";
	else dir = argv[1];

	printf("Directory: %s\n", dir);

	DIR *d;
	d = opendir(dir);
	if(d == NULL) {
		perror("opendir");
		exit(EXIT_FAILURE);
	}

	struct dirent * entry;

	printf("%-10s %-10s %-10s\n", "Inode", "Type", "Name");
	for(int i = 0; i < 30; i++)
		printf("—");
	printf("\n");

	while((entry = readdir(d)) != NULL) {
		printf("%-10lu %-10c %-10s\n", entry->d_ino, entry->d_type, entry->d_name);
	}
	

	return EXIT_SUCCESS;   
}
