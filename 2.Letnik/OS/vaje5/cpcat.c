#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <fcntl.h>
#include <errno.h>
#include <string.h>

#define BUFFER_SIZE 1024

void copyData(int inputRtrn, int outputRtrn);

int main(int argc, char *argv[])
{
	char *in = "-";
	char *out = "-";

	if (argc == 3)
	{
		in = argv[1];
		out = argv[2];
	}
	else if (argc == 2)
		in = argv[1];

	int inputRtrn, outputRtrn;

	// INPUT
	//***********************************************************************************************************
	if (strcmp(in, "-") == 0)
		inputRtrn = STDIN_FILENO;
	else
		inputRtrn = open(in, O_RDONLY);
	if (inputRtrn < 0)
	{
		perror("Failed to open in file");
		exit(errno);
	}
	//***********************************************************************************************************

	// OUTPUT
	//***********************************************************************************************************
	if (strcmp(out, "-") == 0)
		outputRtrn = STDOUT_FILENO;
	else
		outputRtrn = open(out, O_WRONLY | O_CREAT | O_TRUNC, 0644); // tazadna stvar pomeni permissione

	if (outputRtrn < 0)
	{
		perror("Failed to open out file");
		close(inputRtrn);
		exit(errno);
	}
	//***********************************************************************************************************

	copyData(inputRtrn, outputRtrn);

	return 0;
}

void copyData(int inputRtrn, int outputRtrn)
{
	char buffer[BUFFER_SIZE];
	int bytesRead, bytesWritten;

	// READ'N WRITE
	//***********************************************************************************************************
	while ((bytesRead = read(inputRtrn, buffer, sizeof(buffer))) > 0)
	{
		bytesWritten = write(outputRtrn, buffer, bytesRead);
		if (bytesWritten != bytesRead)
		{
			perror("Failed to write");
			close(inputRtrn);
			close(outputRtrn);
			exit(errno);
		}
	}

	if (bytesRead < 0)
	{
		perror("Failed to read");
		close(inputRtrn);
		close(outputRtrn);
		exit(errno);
	}

	if (close(inputRtrn) < 0)
	{
		perror("Failed to close input file");
		exit(errno);
	}

	if (close(outputRtrn) < 0)
	{
		perror("Failed to close output file");
		exit(errno);
	}
	//***********************************************************************************************************
}
