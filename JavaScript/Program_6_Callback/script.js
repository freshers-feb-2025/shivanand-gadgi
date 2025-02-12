let nm;

function getName(){
   nm= document.getElementById("name").value;
}


function callSynchronously(){

    getName();
    function greet(name,callback){
        console.log("Hello "+name);
        callback();
    }
    function goodBye(){
        console.log("GoodBye!");
    }

    greet(nm,goodBye);
}

function callAsynchronously(){

    getName();
    function greet(name, callback) {
        console.log("Hello " + name);
        setTimeout(() => {  callback(); }, 2000); 
        console.log("Wait for 2 Seconds...");

    }

    function goodBye() {
        console.log("GoodBye!");
    }

    greet(nm, goodBye); 
}

function callBackHell(){

    getName();


    function greet(name, callback) {
        console.log("Hello " + name);
        setTimeout(() => {  
            callback();  
        }, 2000);  
        console.log("Wait For 2 Seconds...It's First Call Back");
    }
    
    function goodBye(callback) {
        console.log("GoodBye!");
        setTimeout(() => {  
            callback();  
        }, 2000);
        console.log("Wait For 2 Seconds...It's Second Call Back");
    }
    
    function takeCare() {
        console.log("Take care!");
    }
    
    
    

    greet(nm,function(){
        goodBye(function(){
            takeCare();
        });
    });
}


