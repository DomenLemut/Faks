#include <stdio.h>
#include <stdbool.h>

#define NUMOFCARDS 5

int count = 0;

int abs(int a){
    if(a < 0)
        return -a;
    return a;
}

void swap(int* a, int* b){
    int temp = *a;
    *a = *b;
    *b = temp;
}

//quicksort functions
//------------------------------------------------------------
int partition (int num[], int suit[], int low, int high){
    int pivot = num[high];
    int i = low - 1;

    for (int j = low; j <= high - 1; j++){
        num[j] = abs(num[j]);
        if (num[j] < pivot){
            i++; 
            swap(&num[i], &num[j]);
            swap(&suit[i], &suit[j]);
        }
    }
    swap(&num[i + 1], &num[high]);
    swap(&suit[i + 1], &suit[high]);
    return (i + 1);
}

void quickSort(int num[], int suit[], int low, int high)
{
    if (low < high){
        int pi = partition(num, suit, low, high);

        quickSort(num, suit, low, pi - 1);
        quickSort(num, suit, pi + 1, high);
    }
}
//---------------------------------------------------------------

bool equal(int * arr, int equal){
    int possible = NUMOFCARDS - equal;
    for(int i = 0; i < NUMOFCARDS - 1; i++){
        if(arr[i] != arr[i + 1]){
            if(possible == 0)
                return  false;
            possible--;  
        }
    }
    return true;
}

bool conclusive(int * number, int equal){
    int possible = NUMOFCARDS - equal;
    for(int i = 0; i < NUMOFCARDS - 1; i++){
        if(number[i] != number[i + 1] - 1){
            if(possible == 0)
                return false;
            possible--;
        }
    }
    return true;
}

bool twoPairs(int * number){
    int pairs = 0;
    for(int i = 0; i < NUMOFCARDS; i++){
        for(int j = i + 1; j < NUMOFCARDS; j++){
            if(number[i] == number[j]) 
                pairs++;
        }
    }
    if(pairs == 2)
        return true;
    return false;
}







int PokerPlay(int * number, int * suit){
    //Royal Flush
    if(equal(suit, 5) && number[0] == 10)
        return 23;
    //Straight Flush
    if(equal(suit, 5) && conclusive(number, 5))
        return 22;
    //Four of a Kind
    if(equal(number, 4))
        return 21;
    //Full House
    if(equal(suit, 3) && equal(number, 2))
        return 20;
    //Flush
    if(equal(suit, 5))
        return 19;
    //Straight
    if(conclusive(number, 5))
        return 18;
    //Three of a kind
    if(equal(number, 3))
        return 17;
    //Two pairs
    if(twoPairs(number))
        return 16;
    //One Pair
    if(equal(number, 2))
        return 15;
    
    return number[NUMOFCARDS - 1];
}



int Poker(char * cards){
    //5H 5C 6S 7S KD
    int suit[NUMOFCARDS];
    int number[NUMOFCARDS];

    int count0 = 0;
    int writeTo = 0;

    //convert into an array
    for(int i = 0; i < 3 * NUMOFCARDS; i += 3){
        if(cards[i] == 'A'){
            number[writeTo] = 14;
        }else if(cards[i] == 'K'){
            number[writeTo] = 13;
        }else if(cards[i] == 'Q'){
            number[writeTo] = 12;
        }else if(cards[i] == 'J'){
            number[writeTo] = 11;
        }else if(cards[i] == '1'){
            if(cards[i + 1] == '0'){
                number[writeTo] = 10;
                i++;
            }
        }
        else number[writeTo] = cards[i] - '0';

        //S => 1  C => 2  H => 3  D => 4
        if(cards[i + 1] == 'S'){
            suit[writeTo] = 1;
        }else if(cards[i + 1] == 'C'){
            suit[writeTo] = 2;
        }else if(cards[i + 1] == 'H'){
            suit[writeTo] = 3;
        }else if(cards[i + 1] == 'D'){
            suit[writeTo] = 4;
        }
        writeTo++;
    }

    //sort by ascending value
    quickSort(number, suit, 0, NUMOFCARDS - 1);

    return PokerPlay(number, suit);
}

int main(){

    int players[] = {0, 0};
    char temp [15];

    FILE *fp;

    fp = fopen("poker", "r");

    if(fp == NULL){
        printf("Can't open file!\n");
        return 0;
    }

    int cnt = 0;
    char curr [15];
    for(int rounds = 0; rounds < 1000; rounds++){
        if (fp) {
            while(cnt < NUMOFCARDS * 3){
                fscanf(fp, "%c", &curr[cnt]);
                cnt++;
            }

            for(int i = 0; i < 15; i++){
                temp[i] = curr[i];
            }

            cnt = 0;
            while(cnt < NUMOFCARDS * 3){
                fscanf(fp, "%c", &curr[cnt]);
                cnt++;
            }

            if(Poker(temp) - Poker(curr) > 0){
                players[0]++;
            }

            else players[1]++;
        }
    }

    printf("Player1 wins: %d\nPlayer2 wins: %d\n", players[0], players[1]);

    fclose(fp);
    return 0;
}
/*
    High Card: Highest value card.
    One Pair: Two cards of the same value.
    Two Pairs: Two different pairs.
    Three of a Kind: Three cards of the same value.
    Straight: All cards are consecutive values.
    Flush: All cards of the same suit.
    Full House: Three of a kind and a pair.
    Four of a Kind: Four cards of the same value.
    Straight Flush: All cards are consecutive values of same suit.
    Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.
*/