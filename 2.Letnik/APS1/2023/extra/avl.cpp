#include <iostream>

using namespace std;

class AVLNode
{
public:
    int value;
    AVLNode *left, *right;
    int height;
    AVLNode(int v) : value(v), left(NULL), right(NULL), height(1) {}
};

class AVLTree
{
public:
    AVLNode *root = NULL;

    int height() { return height(root); }
    int height(AVLNode *node) { return (node != NULL) ? node->height : 0; }
    int balance(AVLNode *node) { return height(node->right) - height(node->left); }
    void update(AVLNode *node) { node->height = 1 + max(height(node->left), height(node->right)); }

    AVLNode *rotateLeft(AVLNode *node)
    {
        AVLNode *R = node->right;
        node->right = R->left;
        R->left = node;
        update(node);
        update(R);
        return R;
    }

    AVLNode *rotateRight(AVLNode *node)
    {
        AVLNode *L = node->left;
        node->left = L->right;
        L->right = node;
        update(node);
        update(L);
        return L;
    }

    bool contains(int x) { return contains(x, root); }
    bool contains(int x, AVLNode *node)
    {
        if (node == NULL)
            return false;
        else if (node->value == x)
            return true;
        else if (x < node->value)
            return contains(x, node->left);
        else
            return contains(x, node->right);
    }

    void insert(int x) { root = insert(x, root); }
    AVLNode *insert(int x, AVLNode *node)
    {
        // navadno vstavljanje
        if (node == NULL)
        {
            return new AVLNode(x);
        }
        if (x <= node->value)
            node->left = insert(x, node->left);
        else
            node->right = insert(x, node->right);
        update(node);
        // uravnotezi po potrebi
        int b = balance(node);
        if (b == 2)
        { // prevelik desni
            int bR = balance(node->right);
            if (bR == 1 || bR == 0)
                return rotateLeft(node);
            else
            {
                node->right = rotateRight(node->right);
                return rotateLeft(node);
            }
        }
        else if (b == -2)
        { // prevelik levi
            int bL = balance(node->left);
            if (bL == -1 || bL == 0)
                return rotateRight(node);
            else
            {
                node->left = rotateLeft(node->left);
                return rotateRight(node);
            }
        }
        return node;
    }

    // pomozna funkcija za preverjanje pravilnosti
    bool check(AVLNode *node)
    {
        if (node == NULL)
            return true;
        int b = balance(node);
        if (b < -1 || 1 < b)
            return false;
        return check(node->left) && check(node->right);
    }
};

int main(int argc, char const *argv[])
{
    AVLTree tree;
    tree.insert(3);
    tree.insert(5);
    tree.insert(2);
    tree.insert(7);
    tree.insert(10);
    tree.insert(72);

    return 0;
}
