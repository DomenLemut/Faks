#include <iostream>
#include <vector>
#include <stack>
#include <algorithm>

#define MAX_SAMPLE 1000000

using namespace std;

struct Node
{
    bool visited = false;
    bool group;
    vector<Node *> neighbours;
};

bool nodeWalk(Node &startNode, bool startGroup)
{
    stack<pair<Node *, bool>> nodeStack;

    nodeStack.push({&startNode, startGroup});

    while (!nodeStack.empty())
    {
        Node *currentNode = nodeStack.top().first;
        bool currentGroup = nodeStack.top().second;
        nodeStack.pop();

        if (currentNode->visited)
        {
            if (currentNode->group != currentGroup)
                return false;
            continue;
        }

        currentNode->visited = true;
        currentNode->group = currentGroup;

        for (Node *neighbour : currentNode->neighbours)
        {
            nodeStack.push({neighbour, !currentGroup});
        }
    }

    return true;
}

bool makeGroups(vector<Node> &graph)
{
    for (Node &node : graph)
    {
        if (!node.visited && !nodeWalk(node, false))
            return false;
    }

    return true;
}

int main(int argc, char const *argv[])
{
    int N, M;
    cin >> N >> M;

    vector<Node> graph(N);

    int first, second; // temp data
    for (int i = 0; i < M; i++)
    {
        cin >> first >> second;
        first--;
        second--;
        graph[first].neighbours.push_back(&graph[second]);
        graph[second].neighbours.push_back(&graph[first]);
    }

    if (makeGroups(graph))
    {
        for (Node &node : graph)
            cout << (node.group ? "2\n" : "1\n");
        return 0;
    }

    cout << "-1\n";
    return 0;
}
