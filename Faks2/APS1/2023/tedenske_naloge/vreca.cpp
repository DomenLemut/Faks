#include <iostream>
#include <set>

using namespace std;

int main()
{
    int N;
    cin >> N;

    multiset<int> mset;
    mset.reserve(N);

    int sum = 0;
    for (int i = 0; i < N; i++)
    {

        int com, val;
        cin >> com >> val;
        if (com < 0)
            mset.emplace(val);
        else if (com == 0)
        {
            auto it = mset.find(val);
            if (it != mset.end())
                mset.erase(it);
        }
        else
        {
            int low = min(com, val);
            int high = max(com, val);

            auto it1 = mset.lower_bound(low);
            auto it2 = it1;
            it2 = mset.upper_bound(high);
            sum += distance(it1, it2);
        }
    }

    cout << sum << endl;
}