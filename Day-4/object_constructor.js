let p1=new Person("Shiva",23,"Solapur");

function Person(name,age,city){
    
    this.Name=name;
    this.Age=age;
    this.City=city;

    //Now I am defining a method inside a constructor
    //Ok now here problem is this below function is created as many times as object is created 
    //So I dont want this 
    //To Solve this problem Now We have a concept of Prototype
   /* this.msg=function(){
           console.log("Hello I am "+this.Name);
    }*/

}

//Now this proptotype function is shared among all objects of Person Class

Person.prototype.msg=function(){
    console.log("Hello my name is "+this.Name);
}



console.log(p1);
p1.msg();
