#include <stdio.h>
#include <stdlib.h>

#define n1 3
#define n2 3

char** board;

int di[8]={+2,+1,-1,-2,-2,-1,+1,+2};
int dj[8]={+1,+2,+2,+1,-1,-2,-2,-1};

int makeBoard(){
	board = (char**) malloc(sizeof(char*)*n1);

	for(int i = 0; i < n1; i++){
		board[i]=(char*)malloc(sizeof(char)*n2);
		for(int j = 0; j < n2; j++)
			board[i][j] = ' ';
	}

	return board;
}

int knight(char **board, int i, int j, int n1, int n2){
	if(board[i][j] == 'x')
		return 0;
	int max = 0;
	
	board[i][j] == 'x';
	for(int m = 0; m < 8; m++){
		int ii = i + di[m];
		int jj = j + dj[m];

		if((0 <= ii) && (ii < n1) 
		&& (0 <= jj) && (jj < n2)) {
			int len = knight(board, ii, jj, n1, n2);
			if(len > max)
				max = len;
		}
	}
	board[i][j] = ' ';
	return max + 1;

}

knight(board, 0, 0, n1, n2);
