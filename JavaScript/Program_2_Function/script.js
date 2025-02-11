let numOne,numTwo;

function getValues(){
    numOne = Number(document.getElementById("numberOne").value);
    numTwo = Number(document.getElementById("numberTwo").value);
}

function performAdd(){
    getValues();
    alert(numOne+numTwo);
}

function performSub(){
    getValues();
    alert(numOne-numTwo);
}

function performMult(){
    getValues();
    alert(numOne*numTwo);
}

function performDiv(){
    getValues();
    alert(numOne/numTwo);
}

function performClear(){
    document.getElementById("numberOne").value="";
    document.getElementById("numberTwo").value="";
}