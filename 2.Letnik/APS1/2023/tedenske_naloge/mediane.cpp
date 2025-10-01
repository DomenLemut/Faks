#include <iostream>
#include <queue>

using namespace std;

int main()
{
    int n;
    cin >> n;

    priority_queue<int> lower;
    priority_queue<int, vector<int>, greater<int>> upper;

    for (int i = 0; i < n; i++)
    {
        int curr;
        cin >> curr;

        if (lower.empty() || curr <= lower.top())
            lower.push(curr);
        else
            upper.push(curr);

        if (lower.size() > upper.size() + 1)
        {
            upper.push(lower.top());
            lower.pop();
        }
        else if (upper.size() > lower.size())
        {
            lower.push(upper.top());
            upper.pop();
        }

        cout << lower.top() << "\n";
    }

    return 0;
}
