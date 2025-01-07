#include<iostream>
using namespace std;
bool is_perfect(int n)
{
  int sum = 0;
  for(int i = 1; i <= n / 2; ++i)
  {
    if(n % i == 0)
      sum += i;
  }
  return sum == n;
}

void solve()
{
  int n;
  cout<<"Enter the number: ";
  cin>>n;
  cout<<"\nPerfect number 1 to "<<n<<endl;
  for(int i = 1; i <= n; ++i)
  {
    if(is_perfect(i))
    {
      cout<<i<<" ";
    }
  }
  cout<<endl;
}

int main()
{
  solve();
}