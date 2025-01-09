#include<iostream>
#include<map>
#include<vector>
#include<set>
using namespace std;
class BookManagment 
{
  public:

  void add()
  {
    string bname, author;
    cout<<"\nEnter the Book name: ";
    cin>>bname;
    cout<<"\nEnter the Author name: ";
    cin>>author;
    add_copy(bname);
    byAuthor[author].insert(bname);
  }

  bool search_book()
  {
    string bname;
    cout<<"\nEnter the book name: ";
    cin>>bname;
    for(auto it: byAuthor)
    {
      for(string book: it.second)
      {
        if(book == bname)
          return true;
      }
    }
    return false;
  }

  string get_author_name(string bname)
  {
    bool flag = false;
    string res = "";
    for(auto it: byAuthor)
    {
      for(string book: it.second)
      {
        if(book == bname)
        {
          flag = true;
        }
      }
      if(flag)
      {
        res = it.first;
        break;
      }
    }
    return res;
  }

  void add_copy(string s)
  {
    numberCopy[s] += 1;
  }
  void remove()
  {
    string bname;
    cout<<"\nEnter the Book Name: ";
    cin>>bname;
    if(numberCopy.find(bname) != numberCopy.end())
    {
      numberCopy[bname] -= 1;
      if(numberCopy[bname] == 0)
      {
        string author = get_author_name(bname);
        numberCopy.erase(bname);
        byAuthor[author].erase(bname);
        if(byAuthor[author].size() == 0)
        {
          byAuthor.erase(author);
        }
      }
    }
  }

  void display()
  {
    for(auto it: byAuthor)
    {
      cout<<"Author: "<<it.first<<endl;
      cout<<"Books"<<endl;
      for(string str: it.second)
        cout<<str<<" ";
      cout<<endl;
    }
    cout<<"\nNumber of copys...\n";
    for(auto it: numberCopy)
    {
      cout<<it.first<<" :"<<it.second<<endl;
    }
  }

  private:
  map<string, set<string>>byAuthor;
  map<string, int>numberCopy;
};
int main()
{
  BookManagment ob;
  while(true)
  {
    int choice;
    bool flag = false;
    cout<<"\n---------------------\n";
    cout<<"\n1: Insert\n2: Delete\n3: Display\n4: Exit\nEnter the choice ==> ";
    cin>>choice;
    switch(choice)
    {
      case 1: ob.add();
      break;
      case 2: ob.remove();
      break;
      case 3: ob.display();
      break;
      case 4: flag = true;
      break;
      default:
      cout<<"\nInvalid Choice..\n";
    }
     cout<<"\n---------------------\n";
    if(flag)
    {
      cout<<"\nThanks..\n";
      break;
    }
  }
}
