for(var i=0;i<=3;i++)
{
    var j=i;
    console.log("Inside For Block :"+j);
}
console.log("Outside For Block :"+j); //Still Accessible Because var creates a variable with function scope or global scope not block scope


