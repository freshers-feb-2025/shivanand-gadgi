let person={
    name:"Shivanand",
    age:23,
    city:"Solapur"
}






//Accessing properties Separately
//So We can access properties in two ways
//First way  using Dot Notation
//console.log("Name:"+person.name);//This one is like explicitly accessing the value not dynamic
//console.log("Age:"+person.age);
//console.log("City:"+person.city);

 //Second way
 //Bracket Notation 
 // This one is useful when we want to access properties dynamically in runtime based on our requirements
 //console.log("Name:"+person["name"]);
 //console.log("Age:"+person["age"]);
 //console.log("City:"+person["city"]);

 //Dynamic Access Example

 let key=prompt("Please type key to access:\n1.name \n2.age \n3.city");
 if(key!="name" && key!="age" && key!="city")
    console.log("Wrong Key");
else
    console.log(person[key]);


    


    

    

