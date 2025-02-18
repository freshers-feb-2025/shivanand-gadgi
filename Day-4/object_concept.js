//Okay So in JS object is a one kind of datastructure using which we can store multiple key-value pair.

//Its an collection of properties(key-value pair)

//key will be string 
//Values can be number string arrays function even other object also

//person object with three properties
/*let P1={//name of object
    name:"Shivanand",//use comma not semi colon
    age:23,
    City:"Solapur"//no comma or semicolon here
};

//console.log(typeof person);//type 

//Other Ways to create object in JS

let P2=new Object();//creates an empty object with no properties
console.log("Type:"+typeof P2);//type object

//Adding properties after object creation
P2.name="Prem";
P2.age=23;
P2.City="Solapur";

console.log(P2);//Returns like a Dictionary With all properties inside it

//Using Constructor Function*/
//--------------------------------------------------------------------------------------------------------------------------------------

function P3(nm,ag,ci){//This is Constructor Function gets triggered when object gets created (new P3(.....)) gets Executed
    //Also defining key names here only and assigning values to it
   this.name=nm;
   this.age=ag;
   this.homeCity=ci;
}
let person3=new P3("Shiva",19,"Solapur");

console.log(person3);



