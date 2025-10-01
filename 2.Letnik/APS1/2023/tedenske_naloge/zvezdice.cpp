#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Effort
{
    int time, level, stars;
};

int main()
{
    int n, w;
    cin >> n >> w;

    vector<Effort> efforts1(n);
    vector<Effort> efforts2(n);

    for (int i = 0; i < n; i++)
    {
        int time1, time2;
        cin >> time1 >> time2;

        efforts1[i].level = i;
        efforts1[i].stars = 1;
        efforts1[i].time = time1;

        efforts2[i].level = i;
        efforts2[i].stars = 2;
        efforts2[i].time = time2;
    }

    sort(efforts1.begin(), efforts1.end(), [](const Effort &a, const Effort &b)
         { return (a.time < b.time); });

    sort(efforts2.begin(), efforts2.end(), [](const Effort &a, const Effort &b)
         { return (a.time < b.time); });

    vector<int> levels(n);

    int index1 = 0;
    int index2 = 0;
    int totalTime = 0;
    int totalStars = 0;

    while (w - totalStars > 3)
    {
        if ((double)efforts1[index1].time > (double)efforts2[index2].time / 2)
        {
            if (levels[efforts2[index2].level] > 0)
            {
                totalStars += efforts2[index2].stars;
                totalTime += efforts2[index2].time;
                levels[efforts2[index2].level] = 2;
            }

            index2++;
        }
        else
        {
            if (levels[efforts1[index1].level] > 0)
            {
                totalStars += efforts1[index1].stars;
                totalTime += efforts1[index1].time;
                levels[efforts1[index1].level] = 1;
            }

            index1++;
        }
    }

    cout << totalTime << endl;
    for (int i : levels)
        cout << i;
    cout << endl;

    int hehe = 0;
    return 0;
}