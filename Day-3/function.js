function getValue()
{
    //return; To Exit Prematurely
}

function displayMessage()
{
    console.log("Hello World");
}

function getSquare(num)
{
    return num*num;
}

function getAdd(num1,num2)
{
  return num1+num2;
} 

let val = ()=>{ // Arrow Function Example
  console.log("Line 1");
  console.log("Line 2");
}

let func1=function(){ //Function Expression
  console.log("Line 1");
  console.log("Line 2");
};


(function(){
  console.log("Line 1");
  console.log("Line 2");
})();






displayMessage();//Default Function
console.log(getSquare(2));//Single Parameter Function
console.log(getAdd(5,8));//Multiple Parameters
let value=getValue();
console.log(value);//By Default Every Function in JS returns Undefined Value
val()
func1();

