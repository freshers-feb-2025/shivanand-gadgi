

function varReDeclaration(){

    var x=10;
    console.log("Before Re-declaration: x= "+x);
    var x=20;
    console.log("After Re-declaration: x= "+x);
}

function letReDeclaration(){

    let x=10;
    console.log("Only One Time Declaration using let : x = "+x);
    // let x=20;
    // console.log("After Re-declaration: x= "+x); Error let won't allow to re declare
}

varReDeclaration();
letReDeclaration();



