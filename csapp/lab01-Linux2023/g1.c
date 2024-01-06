/*
#include<stdio.h>
long f(int n)
{
  if(n==0||n==1)
   return 1;
  else 
   return f(n-1)+f(n-2);
}
int main()
{
  int n;
  printf("input n\n");
  scanf("%d",&n);
  float g=f(n)/f(n-1);
  printf("g=%.8f",g);
  double d=f(n)/f(n-1);
  printf("d=%.8lf",d);
  return 0;
}

*/

#include<stdio.h>
int fib[102]={0};
int f(int n)
{
  fib[0]=1;
  fib[1]=1;
  int i=2;
  if(n==1||n==2);
    return 1;
  for(i=2;i<=n+1;i++)
  {
    fib[i]=fib[i-1]+fib[i-2];
    return fib[n];

  }
}
int main()
{
  int n;
  printf("input");
  scanf("%d",&n);
  float d=(float)(f(n))/(float)(f(n-1));
  printf("float g=%.8f",d);
  double g=(double)f((n))/(double)(f(n-1));
  printf("double g=%.8lf\n",g);
}