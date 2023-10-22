#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Light
{
    int start, end;
};

int countDark(int l, int n, vector<Light> lights)
{
    if (n == 0)
        return l;

    sort(lights.begin(), lights.end(), [](const Light &a, const Light &b)
         { return a.start < b.start; });

    int count = 0;
    int index = 0;
    for (int i = 0; i < n; i++)
    {
        if (index > lights[i].end)
            continue;

        if (lights[i].start > index)
            count += lights[i].start - index;

        if (lights[i].end > l)
            return count;

        index = lights[i].end;
    }

    count += l - index;

    return count;
}

int main()
{
    int l;
    int n;

    cin >> l >> n;

    vector<Light> lights(n);

    int middle, reach;
    int start, end;
    for (int i = 0; i < n; i++)
    {
        cin >> middle >> reach;
        start = middle - reach;
        end = middle + reach;
        lights[i] = {start, end};
    }

    int dark = countDark(l, n, lights);

    cout << dark << endl;
    return 0;
}
