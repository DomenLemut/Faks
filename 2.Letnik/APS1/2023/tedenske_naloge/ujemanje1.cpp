#include <iostream>
using namespace std;

// *... = ...

bool wildcardMatch(int *start, int *end, string text, string pattern, bool returnable)
{
    int n = text.size();
    int m = pattern.size();

    if (returnable && n == 0)
        return true;

    while (n > 0 && m > 0)
    {
        if (pattern[0] == '?')
            return wildcardMatch(start, end, text.substr(1), pattern.substr(1), returnable);
        else if (pattern[0] == '*')
            return wildcardMatch(start, end, text, pattern.substr(1), false);
        else if (text[0] != pattern[0])
            return (!returnable && wildcardMatch(start, end, text.substr(1), pattern, returnable));
        return (wildcardMatch(start, end, text.substr(1), pattern.substr(1), true) ||
                wildcardMatch(start, end, text.substr(1), pattern, returnable));
    }

    if (m != 0)
        return false;

    *end = n;
    return true;
}

int main()
{
    int N;
    cin >> N;

    cout << "\n";

    string str1, str2;
    for (int i = 0; i < N; i++)
    {
        cin >> str1 >> str2;

        int start = -1;
        int end = 0;
        cout << wildcardMatch(&start, &end, str2, str1, false) << " end: " << str2.size() - end - 1 << "\n";
    }

    return 0;
}
