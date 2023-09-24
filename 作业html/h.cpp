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
cout<<"请输入结点的个数："<<endl;
cin>>n;

for(int i=0;i<n;i++)
{
    p=new list<int> ;
    if(i==0)head=p,last=p;
    cout<<"请输入第"<<i+1<<"个结点的数据："<<endl;
    p->setDate();
    p->next=NULL;
if(i>0)
{
    last->next=p;
    last=p;
};



}
cout<<"链表建立成功！"<<endl;
cout<<"链表的数据为："<<endl;
p=head;
while(p)
{
    cout<<p->data<<'\t';
    p=p->next;
}





}