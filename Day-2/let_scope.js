for(var i=0;i<=3;i++)
    {
        let j=i;
        console.log("Inside For Block using j :"+j);
    }
    console.log("Outside For Block using i :"+i); //Still Accessible Because var creates a variable with function scope or global scope not block scope
   // not defined :
   //  console.log("Outside For Block using j :"+j); Not accessible only block scope for let keyword
    
    