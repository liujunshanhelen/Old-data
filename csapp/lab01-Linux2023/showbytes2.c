#include <stdio.h>

int main()
{
  FILE* file;
  char data[500];
  int i=0;
  file = fopen("./hello.c", "r");
  do
  {
    data[i] = fgetc(file);
  }while(data[i++] != -1);
  fclose(file);

  i -= 1;
  for(int j = 0; j < i ; j += 16)
  {
    int last = j + 16;
    if(last > i)
      last = i;
    for(int k = j; k < last; k++)
    {
      switch(data[k])
      {
        case 10:
          printf(" \\n\t");
          break;
        case 32:
          printf(" SP\t");
          break;
        default:
          printf(" %c\t", data[k]);
          break;
      }
    }
    printf("\n");
    for(int k = j; k < last; k++)
    {
      printf("%3d\t", data[k]);
    }
    printf("\n");
  }


}