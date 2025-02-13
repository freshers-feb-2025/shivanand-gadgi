//Whenever we declare any function as async function then that function returns us Promise object.

async function displayMessage(){
    console.log("Hello World");
}

displayMessage().then((res)=>{
    console.log(res);
});