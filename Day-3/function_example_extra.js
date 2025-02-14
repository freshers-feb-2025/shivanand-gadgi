function getName(name="Shiva"){  //Default Parameter Function
        console.log(name);
}

getName("John");

//Closure Function Example

function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
            console.log(outerVariable+innerVariable);
    };

}

let cloFun=outerFunction("Hello ");
cloFun("Shiva");