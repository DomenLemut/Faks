#include <iostream>
#include <queue>
#include <vector>
using namespace std;

struct Search
{
    int txt = 0;
    int pat = 0;
    int start = -1;
};

bool wildcardMatch(pair<int, int> *p, string text, string pattern)
{
    int textLen = text.size();
    int patternLen = pattern.size();

    queue<Search> searchQueue;

    for (int i = 0; i < textLen; i++)
        searchQueue.push({i, 0, i});

    while (!searchQueue.empty())
    {
        Search currentSearch = searchQueue.front();
        searchQueue.pop();

        if (currentSearch.pat == patternLen)
        {
            p->first = currentSearch.start;
            p->second = currentSearch.txt;
            return true;
        }

        if (currentSearch.txt == textLen)
            continue;

        if (pattern[currentSearch.pat] == '?')
            searchQueue.push({currentSearch.txt + 1, currentSearch.pat + 1, currentSearch.start});
        else if (pattern[currentSearch.pat] == '*')
        {
            for (int i = currentSearch.txt; i < textLen; i++)
                searchQueue.push({i, currentSearch.pat + 1, currentSearch.start});
        }
        else if (text[currentSearch.txt] == pattern[currentSearch.pat])
            searchQueue.push({currentSearch.txt + 1, currentSearch.pat + 1, currentSearch.start});
    }

    return false;
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

        size_t pos;
        while ((pos = str1.find("**")) != string::npos)
        {
            str1.replace(pos, 2, "*");
        }

        pair<int, int> startEnd;
        if (!wildcardMatch(&startEnd, str2, str1))
            cout << "-1\n";
        else
        {
            if (startEnd.second == 0)
                startEnd.second = 1;
            cout << startEnd.first << " " << startEnd.second - 1 << "\n";
        }
    }

    return 0;
}
