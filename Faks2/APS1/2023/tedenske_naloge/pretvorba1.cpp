#include <iostream>

int main(int argc, char const *argv[])
{
    int x, y, z;
    string S, F;

    cin >> x >> y >> z;
    cin >> S >> F;

    int n = S.size();
    int m = F.size();

    vector<vector<int>> arr(n, m);

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            int first = arr[i - 1];
            int second = arr[j - 1];
            if (S[i] == F[j])
            {
                arr[i][j] = arr[i - 1][j - 1];
            }
        }
    }
    return 0;
}
