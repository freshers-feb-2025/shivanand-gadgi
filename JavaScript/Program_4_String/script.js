let string;



function getString(){
    if (string === "") {
        alert("Please enter a valid string!");
    }
    else{
        string = document.getElementById("string").value;
    }
}


function getLength(){
    getString()
    alert(string.length);
}

function getFirstChar(){
    getString()
    alert(string.charAt(0));
}


function getLastChar(){
    getString()
    alert(string.charAt(string.length - 1));
}


function convertToUpperCase(){
    getString()
    if(string === string.toUpperCase()){
        alert("String is already in uppercase.");
    }
    else{
        alert(string.toUpperCase());
    }
    
}

function convertToLowerCase(){
    getString()
    if(string === string.toLowerCase()){
        alert("String is already in lowercase.");
    }else{
        alert(string.toLowerCase());
    }
    
}


function reverseString(){
    getString()
    alert(string.split("").reverse().join(""));
}

function isContaining(){
    let userInput = prompt("Enter string to search for:");
    getString();

    if (string.includes(userInput)) {
        alert(userInput+" found inside "+string);
    } else {
        alert(userInput+" not found inside "+string);
    }
}

function performClear(){
    document.getElementById("string").value = "";
}




