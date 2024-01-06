#include<stdio.h>
#include<stdlib.h>
FILE *fp;

int main(int argc, char * argv)
{
 int i, n=0;
 fp = fopen("Number222.txt","r+");
 /*r �����ı��ļ��ķ�ʽ�����ļ������ڣ����ʧ�� ��fp == NULL 
  r+ ������д�ı��ļ��ķ�ʽ������ļ������ڣ����ʧ�ܣ�fp == NULL 
 */


 if(fp==NULL) 
 {
 	printf("Can't open file\n");
  exit(1);
 } 
 
 printf("pos of file on open:%d\n",ftell(fp));
  //ftell(fp)��ȡ�ļ��ĵ�ǰ��дָ��λ��ֵ
 
 fseek(fp,10,SEEK_SET );//SEEK_END, �趨�ļ���дָ��λ��
 printf("pos of file after fseek:%d\n",ftell(fp));
 for(i=0; i<5; i++)
 {
	if(fscanf(fp,"%d",&n) == 1)//��һ��������n��
		printf("%d\n",n);//����Ļ�����ʾn�ж�������ֵ
	else
	  printf("Fail to read");
 }
 printf("pos of file after fscanf:%d\n",ftell(fp)); 
 fclose(fp);
 printf("Finish!\n");
 return 0;
}


