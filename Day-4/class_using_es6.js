class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
     //So here we don't use explicitly prototype keyword here 
     //By default this method is shared among objects
     print(){
       console.log("Hello my name is "+this.name);
    }
}

let p1=new Person("Shiva",23);
let p2=new Person("Prem",23);
p1.print();
p2.print();
console.log("Both methods share function print():",p1.print===p2.print);//Here we can check whether print() is shared among objects or not
