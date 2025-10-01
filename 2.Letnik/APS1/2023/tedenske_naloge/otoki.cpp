#include <iostream>
#include <queue>
#include <vector>

using namespace std;

int V, S;

const vector<pair<int, int>> d = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

bool isValid(int i, int j, int V, int S, vector<vector<bool>> &visited)
{
    return i >= 0 && i < V && j >= 0 && j < S && !visited[i][j];
}

void bfs(vector<vector<int>> &grid, int i, int j, vector<vector<bool>> &visited, int current_height)
{
    queue<pair<int, int>> q;
    q.push({i, j});
    visited[i][j] = true;

    while (!q.empty())
    {
        int x = q.front().first;
        int y = q.front().second;
        q.pop();

        for (int k = 0; k < d.size(); ++k)
        {
            int new_i = x + d[k].first;
            int new_j = y + d[k].second;

            if (isValid(new_i, new_j, V, S, visited) && grid[new_i][new_j] > current_height)
            {
                q.push({new_i, new_j});
                visited[new_i][new_j] = true;
            }
        }
    }
}

int countIslands(vector<vector<int>> &grid, int current_height)
{
    vector<vector<bool>> visited(V, vector<bool>(S, false));

    int islandCount = 0;

    for (int i = 0; i < V; ++i)
    {
        for (int j = 0; j < S; ++j)
        {
            if (!visited[i][j] && grid[i][j] > current_height)
            {
                bfs(grid, i, j, visited, current_height);
                islandCount++;
            }
        }
    }

    return islandCount;
}

int main()
{
    cin >> V >> S;

    vector<vector<int>> grid(V, vector<int>(S));

    // put values into grid
    int maxHeight = 0;
    for (int i = 0; i < V; ++i)
    {
        for (int j = 0; j < S; ++j)
        {
            cin >> grid[i][j];
            maxHeight = max(maxHeight, grid[i][j]);
        }
    }

    // count islands for each height
    for (int currentHeight = 0; currentHeight <= maxHeight; ++currentHeight)
    {
        int islandCount = countIslands(grid, currentHeight);
        cout << islandCount << "\n";
    }

    return 0;
}
