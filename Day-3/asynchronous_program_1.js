//setTimeOut Function Example

/*function getMessage(){
    console.log("Hello World");
}

setTimeout(getMessage,2000);*/



//----------------------------------------------------------------------------------------------

/*function calculator(num1,num2,sumCallback){
      sumCallback(num1,num2);
}

function sum(num1,num2){
    console.log(num1+num2);
}

//calculator(5,8,sum);

calculator(5,8,(num1,num2)=>{
        console.log(num1+num2);
});*/
//----------------------------------------------------------------------------------------------

//Callback using setTimeout function
function msg1(callback){
    console.log("Hello from msg 1");

    setTimeout(()=>{
        callback();
    }, 5000);

    console.log("Please wait...");
}

function msg2(){
    console.log("Hello from msg 2");
}

msg1(msg2);
//----------------------------------------------------------------------------------------------














