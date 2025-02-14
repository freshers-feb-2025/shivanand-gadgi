
console.log("Value of i:"+i);
// So what happens here is i variable is Hoisted.
// (Moved To Top Virtually During Memory Allocation Phase) and set to undefined value as it is created using var keyword


//console.log("Value of j:"+j); 
//So above line throws error because j is created using let keyword
// due to which js hoist j (Move To Top) but not initialize any value but reserves only memory
// So there will be reference error

var i=1;
//Before this line j is in Temporal Dead Zone (Not initialize by any value)
let j=2;
//After this above line j gets initialized to value 2
console.log("Value of j :"+j); // This will work now.






