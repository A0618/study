#include<iostream>
using namespace std;
template<typename T>
class list
{
    public:
    list(){};
   
    void setDate()
    {
        cin>>data;
    }
    T getData()
    {
        return data;
    }
    T* getNext()
    {
        return next;
    }



    T data;
    list* next;

};
int main()
{int n;
list<int> *p,*head,*last;
cout<<"��������ĸ�����"<<endl;
cin>>n;

for(int i=0;i<n;i++)
{
    p=new list<int> ;
    if(i==0)head=p,last=p;
    cout<<"�������"<<i+1<<"���������ݣ�"<<endl;
    p->setDate();
    p->next=NULL;
if(i>0)
{
    last->next=p;
    last=p;
};



}
cout<<"�������ɹ���"<<endl;
cout<<"���������Ϊ��"<<endl;
p=head;
while(p)
{
    cout<<p->data<<'\t';
    p=p->next;
}





}