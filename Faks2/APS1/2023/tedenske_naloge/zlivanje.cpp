#include <iostream>
#include <vector>

void merge(int arr[], int temp[], int size, int start, int middle, int end)
{
    int p1 = start;
    int p2 = middle;

    for (int i = start; i < end; i++)
    {
        if ((p1 < middle) && (p2 >= end || arr[p1] <= arr[p2]))
        {
            temp[i] = arr[p1];
            p1++;
        }
        else
        {
            temp[i] = arr[p2];
            p2++;
        }
    }
}

void naturalMergeSort(int arr[], int temp[], int size, int k, int a)
{
    if (size <= 1)
        return;

    for (int circles = 1; circles < k; circles++)
    {
        int start = 0;
        int middle = 0;
        int sorts = 0;

        for (int i = 1; i <= size; i++)
        {
            if ((i == size) || (arr[i] < arr[i - 1]))
            {
                if (middle == 0)
                    middle = i;
                else
                {
                    merge(arr, temp, size, start, middle, i);
                    for (int j = start; j < i; j++)
                        arr[j] = temp[j];

                    sorts++;
                    if (sorts >= a)
                    {
                        start = i;
                        middle = 0;
                        sorts = 0;
                    }
                    else
                        middle = i;
                }
            }
        }
    }
}

int main()
{
    int n, k, a;
    std::cin >> n >> k >> a;

    int arr[n];
    int temp[n];

    for (int i = 0; i < n; i++)
        std::cin >> arr[i];

    naturalMergeSort(arr, temp, n, k, a);

    for (int i = 0; i < n; i++)
        std::cout << arr[i] << "\n";

    return 0;
}
