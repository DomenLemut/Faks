#include <iostream>
#include <vector>
#include <queue>

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
        vector<int> distances(N, -1);  // najkrajsa pot
        vector<int> distances1(N, -1); // druga najkrajsa

        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;

        pq.push({0, 0});
        distances[0] = 0;

        while (!pq.empty())
        {
            int index = pq.top().second;
            int distance = pq.top().first;
            pq.pop();

            for (Edge edge : nodes[index])
            {
                int nextIndex = edge.index;
                int edgeValue = edge.value;

                vector<int> &currentDistances = (distances[nextIndex] == -1) ? distances : distances1;

                if (currentDistances[nextIndex] == -1 || currentDistances[nextIndex] > distance + edgeValue)
                {
                    currentDistances[nextIndex] = distance + edgeValue;
                    pq.push({currentDistances[nextIndex], nextIndex});
                }
            }
        }

        return distances1[N - 1];
    }
};

int main()
{
    int N, M; // N is the number of nodes, M is the number of edges

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
