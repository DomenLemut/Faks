#include <iostream>
#include <vector>

using namespace std;

vector<int> merge(vector<int> &arr1, vector<int> &arr2)
{
    vector<int> merged(arr1.size() + arr2.size());

    int i = 0, j = 0;

    while (i < arr1.size() && j < arr2.size())
    {
        if (arr1[i] < arr2[j])
        {
            merged[i + j] = arr1[i];
            i++;
        }
        else
        {
            merged[i + j] = arr2[j];
            j++;
        }
    }

    while (i < arr1.size())
    {
        merged[i + j] = arr1[i];
        i++;
    }

    while (j < arr2.size())
    {
        merged[i + j] = arr2[j];
        j++;
    }

    return merged;
}

vector<vector<int>> naturalMerge(vector<vector<int>> &arr, int k, int a)
{
    if (a == 0)
        return arr;

    if (arr.size() <= 1)
        return arr;

    vector<vector<int>> hehe;

    for (int x = 0; x < arr.size(); x += k)
    {
        vector<int> merged = arr[x];
        for (int i = x + 1; i < x + k && i < arr.size(); i++)
            merged = merge(merged, arr[i]);

        hehe.push_back(merged);
    }

    return naturalMerge(hehe, k, a - 1);
}

vector<int> naturalMergeSort(vector<int> &arr, int k, int a)
{
    vector<vector<int>> hehe;
    int previous = 0;
    for (int i = 1; i < arr.size(); i++)
    {
        if (arr[i] < arr[i - 1])
        {
            hehe.push_back(vector<int>(arr.begin() + previous, arr.begin() + i));
            previous = i;
        }
    }

    hehe.push_back(vector<int>(arr.begin() + previous, arr.end()));

    // works so far :)

    hehe = naturalMerge(hehe, k, a);

    vector<int> out;
    for (int i = 0; i < hehe.size(); i++)
        for (int j = 0; j < hehe[i].size(); j++)
            out.push_back(hehe[i][j]);

    return out;
}

int main()
{
    int n, k, a;
    cin >> n >> k >> a;

    vector<int> arr(n);

    for (int i = 0; i < n; i++)
        cin >> arr[i];

    arr = naturalMergeSort(arr, k, a);

    for (int i = 0; i < n; i++)
        cout << arr[i] << "\n";

    return 0;
}