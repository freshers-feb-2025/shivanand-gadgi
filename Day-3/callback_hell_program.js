function getData(dataID){

    setTimeout(()=>{
        console.log("Data:"+dataID);
     },2000);
    
}

getData(200);

//------------------------------------------------------------------------------------------------------------------

//Using only same function example
function getData(dataID,nextDataCallback){
    setTimeout(()=>{
        console.log("Data:"+dataID);
        if(nextDataCallback)//During getData(3) We are not passing any callback function so we need to stop this chain so using this condition we can stop
        nextDataCallback(dataID,nextDataCallback);
    },2000);
}

getData(1,()=>{
    getData(2,()=>{
        getData(3);
    })
});

//------------------------------------------------------------------------------------------------------------------

//Using three different functions
function getData1(dataID,nextDataCallback){
    setTimeout(()=>{
        console.log("Data:"+dataID);
        
        nextDataCallback(dataID,nextDataCallback);
    },2000);
}

function getData2(dataID,nextDataCallback){
    setTimeout(()=>{
        console.log("Data:"+dataID);
        
        nextDataCallback(dataID);
        //nextDataCallback(dataID,nextDataCallback);
    },2000);
}

function getData3(dataID){
    setTimeout(()=>{
        console.log("Data:"+dataID);
       // console.log(nextDataCallback);
    },2000);
}


getData1(1,()=>{
    getData2(2,()=>{
        getData3(3);
    });
})

//--------------------------------------------------------------------------------------------------------------------



