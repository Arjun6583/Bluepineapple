#include<iostream>
using namespace std;

class Tree
{
  public:
  Tree(int val)
  {
    this->val = val;
    this->left = nullptr;
    this->right = nullptr;
  }

  void add(int val)
  {
    Tree* cur = this, *prev = nullptr;

    while(cur != nullptr)
    {
      prev = cur;
      if(cur->val < val)
        cur = cur->right;
      else 
        cur = cur->left;
    }
    if(prev->val < val)
      prev->right = new Tree(val);
    else 
      prev->left = new Tree(val);
  }


  bool search(int val)
  {
    Tree *node = this;
    while(node != nullptr)
    {
      if(node->val == val)
        return true;
      if(node->val < val)
        node = node->right;
      else 
        node = node->left;
    }
    return false;
  }

  static void inorder(Tree *node)
  {
    if(node != nullptr)
    {
      inorder(node->left);
      cout<<node->val<<" ";
      inorder(node->right);
    }
  }

  static void postorder(Tree *node)
  {
    if(node != nullptr)
    {
      postorder(node->left);
      postorder(node->right);
      cout<<node->val<<" ";
    }
  }

  static void preorder(Tree *node)
  {
    if(node != nullptr)
    {
      cout<<node->val<<" ";
      preorder(node->left);
      preorder(node->right);
    }
  }

  private:
  int val;
  Tree *left, *right;
};

int main()
{
  Tree* root = new Tree(10);
  root->add(3);
  root->add(1);
  root->add(4);
  root->add(15);
  root->add(12);
  root->add(16);
  cout<<"\nInorder"<<endl;
  Tree::inorder(root);
  cout<<"\nPreorder"<<endl;
  Tree::preorder(root);
  cout<<"\nPostorder"<<endl;
  Tree::postorder(root);
  int n;
  cout<<"\nEnter the value to search: ";
  cin>>n;
  if(root->search(n))
    cout<<"\nGiven Value Present in Tree"<<endl;
  else 
    cout<<"\nGiven Value not Present in Tree"<<endl;
  return 0;
}
