#include <iostream>
#include <vector>
#include <stack>
#include <algorithm>

using namespace std;

class Graph
{

public:
    Graph(int N)
    {
        nodes.reserve(N);
    }
    void addEdge(int first, int second)
    {
        nodes[first].neighbours.push_back(&nodes[second]);
        nodes[second].neighbours.push_back(&nodes[first]);
    }

    bool makeGroups()
    {
        for (Node &node : nodes)
        {
            if (!node.visited && !nodeWalk(node, false))
                return false;
        }

        return true;
    }

    void printGroups()
    {
        for (Node node : nodes)
            cout << (node.group ? "2\n" : "1\n");
    }

private:
    struct Node
    {
        int index;
        bool visited = false;
        bool group;
        vector<Node *> neighbours;
    };

    vector<Node> nodes;

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
};

int main(int argc, char const *argv[])
{
    int N, M;
    std::cin >> N >> M;

    Graph graph(N);

    int first, second; // temp data
    for (int i = 0; i < M; i++)
    {
        cin >> first >> second;
        graph.addEdge(first, second);
    }

    if (!graph.makeGroups())
    {
        cout << "-1\n";
        return 0;
    }

    graph.printGroups();

    return 0;
}
