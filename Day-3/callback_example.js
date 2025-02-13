function displayMsg1(callback){
     console.log("Hello From Outer Function");
     callback();
}

function displayMsg2(){
    console.log("Hello From Inner Function");
}

displayMsg1(displayMsg2);// Simple Callback Function Without Arguments


//-------------------------------------------------------------------------------------------------------------------------


function setName(msg,nm,callback){ 
    let name=nm;
    callback(msg,name);
}

function greet(msg,nm){
console.log(msg+nm);
}

setName("Hey ","Shiva",greet);//Passing Entire Function as Callback