#include <stdio.h>

//razdeli v dve podmnozici
//absolutna vrednost med vsoto stevil v prvi podmnozici
//in v drugi podmnozici najmanjsa mozna
int abs(int n){
    if(n < 0) n *= -1;
    return n;
}

void swap(int* a, int* b){
    int temp = *a;
    *a = *b;
    *b = temp;
}
 
int partition (int arr[], int low, int high){
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j <= high - 1; j++){
        arr[j] = abs(arr[j]);
        if (arr[j] < pivot){
            i++; 
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}
 
void quickSort(int arr[], int low, int high)
{
    if (low < high){
        int pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main(){
    int n; // 1 - 20
    int * num; // 1 - 10⁷

    scanf("%d", &n);

    for(int i = 0; i < n; i++)
        scanf("%d", &num[i]);
    
    quickSort(num, 0, n - 1);

    for(int i = 0; i < n; i++){
        printf("[%d] --> %d\n", i, num[i]);
    }

    int pointer = n - 1;

    int sum0 = 0;
    int sum1 = 0;
    
    while(pointer >= 0){
        if(sum0 < sum1)
            sum0 += num[pointer];
        else 
            sum1 += num[pointer];

        pointer--;
    }

    printf("[rezultat] == %d\n", abs(sum0 - sum1));
    return 0;
}