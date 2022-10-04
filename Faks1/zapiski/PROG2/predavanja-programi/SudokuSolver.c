include <stdio.h>
include <stdbool.h>

#define DIM 9 //dimenzija sudokuja
#define BOX 3 //dimenzija box-a

int sudoku[DIM][DIM] = {{1,0,0,0,0,0,5,6,7},...,{4,0,0,0,0,4,5,6,9}}

//check if number already exists in box with element (x, y)
bool NumInBox(int [][] sudoku, int x, int y, int num){
	//zacetni in koncni parametri boxa
	int strX = (x / BOX) * BOX;
	int endX = strX + BOX;
	int strY = (y / BOX) * BOX;
	int endY = strY + BOX;
	
	for(int currX = strX; x < endX; currX++){
		for(int currY = strY; y < endY; currY++){
			if(sudoku[currX][currY] == num)
				return true;
		}
	}
	
	return false;
}

//check if number already exists in row x
bool NumInRow(int [][] sudoku, int x, int num){
	for(int i = 0; i < dimension; i++){
		if(sudoku[x][i] == num)
			return true;
	}
	
	return false;

}

//check if number already exists in collumn y
bool NumInColl(int [][] sudoku, int y, int num){
	for(int i = 0; i < dimension; i++){
		if(sudoku[i][y] == num)
			return true;
	}
	
	return false;
}

void PrintSudoku(int [][] sudoku){
	for(int x = 0; x < DIM; x++){
		for(int y = 0, y < DIM; y++){
			printf("%d", sudoku[x][y]);
		}
		printf("\n");
	}
}

//solve sudoku
int solve(int s[DIM][DIM], int i, int j){
	if(i == DIM)
		//izpise se rešitev, return 1
	if(s[i][j] != 0) return solve(s, j == 8 ? i+1:i, j == 8 ? 0: j + 1);

	int n = 0;

	for(int m = 1; m <= DIM; m++){
		//preveri vse pogoje

		s[i][j] = m;
		n = n + solve(s, j == 8?i + 1:i, j == 8?0:j + 1);
		s[i][j] = 0;
	}
	return n;
}
