#include<stdio.h>
#include<string.h>
#include<stdlib.h>
#define MAXSIZE 10000
// count the number of words frequency

char words[MAXSIZE][MAXSIZE];
int count[MAXSIZE];
int size = 0; 
int search(char *str)
{
  for(int i = 0; i < size; ++i)
  {
    if(strcmp(words[i], str) == 0)
    {
      return i;
    }
  }
  return -1;
}
void insert(char *word)
{
  if(size == MAXSIZE)
  {
    printf("\nMap size exceed...\n");
    return;
  }
  int idx = search(word);
  if(idx == -1)
  {
    strcpy(words[size], word);
    count[size] = 1;
    size += 1;
  }
  else 
  {
    count[idx] += 1;
  }
}
void display()
{
  for(int i = 0; i < size; ++i)
  {
    printf("%s\t%d\n", words[i], count[i]);
  }
}
int main()
{
  char *s = "Virat Kohli (Hindi pronunciation: born 5 November 1988) is an Indian international cricketer who plays Test and ODI cricket for the Indian national team. A former captain in all formats of the game, Kohli retired from the T20I format following India's win at the 2024 T20 World Cup. He's a right-handed batsman and an occasional unorthodox right arm quick bowler. Kohli holds the highest IPL run-scorer record, ranks third in T20I, third in ODI, and stands the fourth-highest in international cricket.[4] Regarded as one of the greatest batsmen of all time, he also holds the record for scoring the most centuries in ODI cricket and is second in the list of most international centuries scored in international";
  char str[MAXSIZE];
  int index = 0;
  for(int i = 0; i <= strlen(s); ++i)
  {
    if(s[i] == 32 || i == strlen(s))
    {
      if(index == 0)
        break;
      while(s[i] == ' ')
        i += 1;
      i -= 1;
      str[index] = '\0';
      printf("\n%s\n", str);
      insert(str);
      str[0] = '\0';
      index = 0;
    }
    else
    {
      str[index++] = s[i];
    }
  }
  display();
}
