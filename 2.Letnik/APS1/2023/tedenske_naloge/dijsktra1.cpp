#include <iostream>
#include <vector>
#include <queue>
#include <limits>

using namespace std;

class Graph
{
    struct Edge
    {
        int index;
        int value;
    };

    vector<vector<Edge>> nodes;
    int N, M;

public:
    Graph(int N, int M) : N(N), M(M)
    {
        nodes.resize(N);
    }

    void addEdge(int first, int second, int value)
    {
        nodes[first].push_back({second, value});
    }

    int findShortestPath()
    {
        vector<int> shortestDistances(N, numeric_limits<int>::max());
        vector<int> secondShortestDistances(N, numeric_limits<int>::max());

        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;

        pq.push({0, 0});
        shortestDistances[0] = 0;

        while (!pq.empty())
        {
            int index = pq.top().second;
            int distance = pq.top().first;
            pq.pop();

            for (Edge edge : nodes[index])
            {
                int nextIndex = edge.index;
                int edgeValue = edge.value;

                int potentialDistance = distance + edgeValue;

                if (potentialDistance < shortestDistances[nextIndex])
                {
                    secondShortestDistances[nextIndex] = shortestDistances[nextIndex];
                    shortestDistances[nextIndex] = potentialDistance;

                    pq.push({potentialDistance, nextIndex});
                }
                else if (potentialDistance < secondShortestDistances[nextIndex] && potentialDistance != shortestDistances[nextIndex])
                {
                    secondShortestDistances[nextIndex] = potentialDistance;

                    pq.push({potentialDistance, nextIndex});
                }
            }
        }

        return (secondShortestDistances[N - 1] == numeric_limits<int>::max()) ? -1 : secondShortestDistances[N - 1];
    }
};

int main()
{
    int N, M;

    cin >> N >> M;

    Graph g(N, M);

    for (int i = 0; i < M; i++)
    {
        int first, second, value;
        cin >> first >> second >> value;
        g.addEdge(first, second, value);
    }

    cout << g.findShortestPath() << "\n";

    return 0;
}
