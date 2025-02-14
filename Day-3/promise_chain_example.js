function getData(dataID){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            console.log("Data"+dataID);
            resolve("Success");
        },2000);
    });

}

/*let p1=getData(1);
p1.then((res)=>{
    console.log(res);

});*/

//Promise Chaining is Easy To debug Compared to Callback Hell

//First Way

/*getData(1).then((res)=>{
    console.log(res);
    getData(2).then((res)=>{
        console.log(res);
        getData(3).then((res)=>{
            console.log(res);
        })
    });
})*/

//Second Way of Promise Chaining
//Flow 
//First getData(1) gets Called and executed then after that control goes to then block now here we are calling once again 
// getData(2) with 2 argument and returning promise object, now control goes to again then block now inside this block
//again calling getData(3) with 3 as argument now it gets executed and returning the current promise object and control goes to last then block and now finally 
// we are not calling getData function we are just printing the result which is returned by resolve handler of current promise object.

getData(1).then((res)=>{
        return getData(2);
}).then((res)=>{
        return getData(3);
}).then((res)=>{
        console.log(res);
});