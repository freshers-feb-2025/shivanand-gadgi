let num = 123.456;

console.log(num.toString());       
console.log(num.toFixed(2));       
 
console.log(num.toPrecision(2)); //total digits to be showed
console.log(Number.parseInt("10abc"));  // Extracts 10 
console.log(Number.parseInt("abc10"));  // Fails Number should be infront returns Nan
console.log(Number.parseFloat("3.14abc"));// Extracts 3.14 
console.log(Number.parseFloat("abc3.14"));// Fails Number should be infront returns Nan