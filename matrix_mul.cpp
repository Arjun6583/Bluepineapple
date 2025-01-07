#include<iostream>
#include<vector>
using namespace std;

void display(vector<vector<int>>&m)
{
  int row = m.size(), col = m[0].size();
  for(int i = 0; i < row; ++i)
  {
    for(int j = 0; j < col; ++j)
      cout<<m[i][j]<<" ";
    cout<<endl;
  }
}

void calculate(vector<vector<int>>&m1, vector<vector<int>>&m2, int r1, int c1, int r2, int c2)
{
  vector<vector<int>>res(r1, vector<int>(c2, 0));
  for(int i = 0; i < r1; ++i)
  {
    for(int j = 0; j < c2; ++j)
    {
      for(int k = 0; k < r2; ++k)
        res[i][j] += m1[i][k] * m2[k][j];
      //cout<<res[i][j]<<endl;
    }

  }
  cout<<"Matrix Multiplication is: \n";
  display(res);
}

void solve()
{
  int r1, c1, r2, c2;
  cout<<"Enter first matrix row column size: ";
  cin>>r1>>c1;
  cout<<"\nEnter second matrix the row column size: ";
  cin>>r2>>c2;
  if(c1 != r2)
  {
    cout<<"\nInvalid Input.."<<endl;
    return;
  }
  vector<vector<int>>m1(r1, vector<int>(c1, 0));
  vector<vector<int>>m2(r2, vector<int>(c2, 0));
  cout<<"\nEnter the first matrix value"<<endl;
  for(int i = 0; i < r1; ++i)
  {
    for(int j = 0; j < c1; ++j)
      cin>>m1[i][j];
  }
  cout<<"\nEnter the second matrix value"<<endl;
  for(int i = 0; i < r2; ++i)
  {
    for(int j = 0; j < c2; ++j)
      cin>>m2[i][j];
  }
  calculate(m1, m2, r1, c1, r2, c2);
}

int main()
{
  solve();
}