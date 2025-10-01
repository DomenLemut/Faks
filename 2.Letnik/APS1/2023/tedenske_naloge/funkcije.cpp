#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;

// Definicija funkcije fi(x)
int fi(int x, int i, int N)
{
    return floor(x * pow(log2(x), i * 1.0 / N));
}

int main()
{
    int N, k;
    cin >> N >> k;

    vector<int> mergedList;

    for (int i = 0; i < N; ++i)
    {
        int a, b;
        cin >> a >> b;

        for (int x = a; x <= b; ++x)
        {
            mergedList.push_back(fi(x, i + 1, N));
        }
    }

    sort(mergedList.begin(), mergedList.end());

    cout << mergedList[k - 1] << endl;

    return 0;
}
