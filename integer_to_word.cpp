#include<iostream>
#include<vector>
#include<string>
using namespace std;
vector<string> belowTen = {"", "one", "two", "three", "four", "five", "six", "seven", "eoght", "nine"};
vector<string> belowTwenty = {"ten", "eleven", "twelve", "thirteen", "fourteen", "fivteen", "sixteen", "seventeen", "eighteen", "nineteen"};
vector<string> belowHundred = {"", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"};

string convertToWords(int num)
{
   if (num < 10) {
            return belowTen[num];
        }
        if (num < 20) {
            return belowTwenty[num - 10];
        }
        if (num < 100) {
            return belowHundred[num / 10] + (num % 10 ? " " + convertToWords(num % 10) : "");
        }
        if (num < 1000) {
            return convertToWords(num / 100) + " hundred" + (num % 100 ? " " + convertToWords(num % 100) : "");
        }
        if (num < 100000) {
            return convertToWords(num / 1000) + " thousand" + (num % 1000 ? " " + convertToWords(num % 1000) : "");
        }
        if (num < 10000000) {
            return convertToWords(num / 100000) + " lakh" + (num % 100000 ? " " + convertToWords(num % 100000) : "");
        }
        return convertToWords(num / 10000000) + " crore" + (num % 10000000 ? " " + convertToWords(num % 10000000) : "");
  
}

string numbertoword()
{
  int num;
  cout<<"Enter the Number: ";
  cin>>num;
  cout<<endl;
  if(num == 0)
    return "zero";
  cout<<convertToWords(num)<<endl;
}
int main()
{
  numbertoword();
}