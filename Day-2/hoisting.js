//Example of hoisting


//After Memory Allocation Phase

/*function message()  Hoisted (Moved To Top Virtually)
{
    console.log("Hello World");
}

var i; Hoisted (Moved To Top Virtually But Undefined)*/

/*function message2() //Function is fully hoisted (Means Virtually moved to top)
{
        var j; //Hoisted To Top Inside Code Only But Undefined
        console.log(j);
        console.log("Hello World");
        var j=1;
}*/

//Imaginary 
//--------------------------------------------------------------------------------------------------------------
//Actual Code
message1();// Therefor After Hoisting This Function Executes Now
console.log("Value of i:"+i); // As Variable is Undefined So This Prints Undefined Only Not Value 1.
message2();

function message1() //Function is fully hoisted (Means Virtually moved to top)
{
        console.log("Hello World Message 1");
}

var i=1; //i variable is fully hoisted (Means Virtually moved to top but as undefined)


function message2() //Function is fully hoisted (Means Virtually moved to top)
{
        console.log("Value of j:"+j);
        console.log("Hello World Message 2");
        var j=1;
}