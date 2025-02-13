//Basic Promise Program

let value=new Promise((resolve,reject)=>{
    console.log("I am a Promise...");
    resolve("Success");
   // reject("Error");
});

console.log(value);

//--------------------------------------------------------------------------------------------------------------

//In realworld projects we don't create promises explicitly.
let val = function getData(dataID,getNextData){ //Storing return object of Promise inside val variable
        return new Promise((resolve,reject)=>{

            setTimeout(()=>{
                console.log("Data:"+dataID);
                //resolve("Success");
                if(dataID==1)
                resolve("Success");
                else
                reject("Error");
                if(getNextData)
                getNextData(dataID,getNextData);
            },2000);
        });
}

val(1).then((result)=>{//handling resolve method using then() and reject method using using catch
        console.log("Status:"+result);
}).catch((error)=>{
    console.log("Status:"+error);
});

//--------------------------------------------------------------------------------------------------------------




















