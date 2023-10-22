#include <iostream>
#include <vector>
#include <stack>

using namespace std;

int main()
{
    int n;
    cin >> n;

    vector<int> heights(n);
    for (int i = 0; i < n; i++)
        cin >> heights[i];

    stack<int> s;

    long long count = 0;

    for (int i = 0; i < n; i++)
    {
        while (!s.empty() && heights[i] > heights[s.top()])
        {
            count += i - s.top();
            s.pop();
        }

        s.push(i);
    }

    while (!s.empty())
    {
        count += n - s.top();
        s.pop();
    }

    cout << count << endl;

    return 0;
}