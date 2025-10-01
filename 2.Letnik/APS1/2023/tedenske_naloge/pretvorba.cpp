#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
    int x, y, z;
    cin >> x >> y >> z;

    string S, T;
    cin >> S >> T;

    const int n = S.length();
    const int m = T.length();

    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));

    for (int i = 1; i <= n; ++i)
        dp[i][0] = dp[i - 1][0] + y; // Izbriši znak

    for (int j = 1; j <= m; ++j)
        dp[0][j] = dp[0][j - 1] + x; // Vstavi nov znak

    for (int i = 1; i <= n; ++i)
    {
        for (int j = 1; j <= m; ++j)
        {
            /*
            for (int a = 0; a <= n; a++)
            {
                for (int b = 0; b <= m; b++)
                {
                    cout << dp[a][b] << " ";
                }
                cout << "\n";
            }

            cout << "\n";
            */

            if (S[i - 1] == T[j - 1])

                dp[i][j] = dp[i - 1][j - 1]; // Znak je nespremenjen
            else
                dp[i][j] = min({
                    dp[i - 1][j] + y,    // Izbriši znak
                    dp[i][j - 1] + x,    // Vstavi nov znak
                    dp[i - 1][j - 1] + z // Zamenjaj znak
                });
        }
    }

    int minCost = dp[n][m];
    cout << minCost << "\n";

    int i = n;
    int j = m;
    vector<string> operations;

    while (i > 0 && j > 0)
    {
        if (S[i - 1] == T[j - 1])
        {
            operations.push_back(S.substr(i - 1, 1)); // Znak je nespremenjen
            i--;
            j--;
        }
        else if (dp[i][j] == dp[i - 1][j] + y)
        {
            operations.push_back("-" + S.substr(i - 1, 1)); // Izbriši znak
            i--;
        }
        else if (dp[i][j] == dp[i][j - 1] + x)
        {
            operations.push_back("+" + T.substr(j - 1, 1)); // Vstavi nov znak
            j--;
        }
        else
        {
            operations.push_back(S.substr(i - 1, 1) + ">" + T.substr(j - 1, 1)); // Zamenjaj znak
            i--;
            j--;
        }
    }

    while (i > 0)
    {
        operations.push_back("-" + S.substr(i - 1, 1));
        i--;
    }

    while (j > 0)
    {
        operations.push_back("+" + T.substr(j - 1, 1));
        j--;
    }

    // Izpis najcenejše transformacije
    for (i = operations.size() - 1; i >= 0; i--)
        cout << operations[i] << " ";

    return 0;
}