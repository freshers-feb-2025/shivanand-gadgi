

function asyncFunc1(){

    //We don't need to define this explicitly when working with realworld projects
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            console.log("Some Data1");
            resolve("Success");
        },2000);
        
    });
}

function asyncFunc2(){

    //We don't need to define this explicitly when working with realworld projects
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            console.log("Some Data2");
            resolve("Success");
        },2000);
        
    });
}


//First Way To Call
/*console.log("Fetching Data One...")
let promise1=asyncFunc1();
promise1.then((result)=>{
    console.log(result);
    console.log("Fetching Data Two...")
    let promise2=asyncFunc2();
    promise2.then((result)=>{
        console.log(result);
        //Another promise here if I need to call more promise in a chain
    });
});*/

//Second Way To Call

console.log("Fetching Data One...")
asyncFunc1().then((result)=>{
    console.log(result);
    console.log("Fetching Data Two...")
    asyncFunc2().then((result)=>{
        console.log(result);
        //Another promise here if I need to call more promise in a chain
    });
});



