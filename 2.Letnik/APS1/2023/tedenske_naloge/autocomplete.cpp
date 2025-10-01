#include <iostream>
#include <vector>
#include <memory>

using namespace std;

const int ALPHABET_SIZE = 26;

struct TrieNode
{
    TrieNode *children[ALPHABET_SIZE] = {};
    int maxImportance = 0;
    int wordIndex = 0;

    ~TrieNode()
    {
        for (auto &child : children)
        {
            delete child;
        }
    }
};

void insert(TrieNode *root, const string &word, int importance, int index)
{
    TrieNode *node = root;
    for (char ch : word)
    {
        int idx = ch - 'a';
        if (!node->children[idx])
        {
            node->children[idx] = new TrieNode();
        }
        node = node->children[idx];
        if (importance > node->maxImportance)
        {
            node->maxImportance = importance;
            node->wordIndex = index;
        }
    }
}

// Function to search for the word with highest importance with given prefix
int search(TrieNode *root, const string &prefix)
{
    TrieNode *node = root;
    for (char ch : prefix)
    {
        int idx = ch - 'a';
        if (!node->children[idx])
        {
            return 0;
        }
        node = node->children[idx];
    }
    return node->wordIndex;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int N, M;
    cin >> N;
    TrieNode *trieRoot = new TrieNode();

    for (int i = 0; i < N; ++i)
    {
        string word;
        int importance;
        cin >> word >> importance;
        insert(trieRoot, word, importance, i + 1);
    }

    cin >> M;
    vector<int> results;
    results.reserve(M);

    for (int i = 0; i < M; ++i)
    {
        string query;
        cin >> query;
        results.push_back(search(trieRoot, query));
    }

    for (int result : results)
    {
        cout << result << "\n";
    }

    delete trieRoot;
    return 0;
}