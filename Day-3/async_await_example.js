
//Simple Function to imitate fetching data using setTimeout 
//returns result as Promise object 
function getData(dataID){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("Data:"+dataID);
                resolve("Success");
            },2000)
        });
}

async function getAllData(){

    //await should always be inside async fubction
    //Execution flow
    //At initial promise object gets return but execution await for that object to resolve due to await keyword
    //When promise object gets resolved then next line gets executed 
    await getData(1); //first this line gets executed and we get resolve so getData(2) now gets executed
    await getData(2); //getData(2) returns resolve which represents settlement completed so getData(3) now gets executed
    await getData(3); //getData(3) returns resolve which represents settlement completed 
}


getAllData();