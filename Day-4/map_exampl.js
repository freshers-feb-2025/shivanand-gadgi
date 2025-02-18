//Ok Now Map is also an object but unlike normal object map object can have key of any data type 

//Creating a Map
let m1=new Map();//Empty Map
//Creating Map With Values
let m2=new Map([
    [1,"One"],
    [2,"Two"],
    [3,"Three"]
]);

console.log(m1);
console.log(m2);

//Now Setting Values to empty map
m1.set(4,"Four");
m1.set(5,"Five");
m1.set(6,"Six");

console.log(m1);

//using get() we can access values by passing key as arguments
console.log(m2.get(2));

console.log(m2.delete(3));
console.log(m2);
console.log(m2.size);

//Converting map into array
let map_arr=Array.from(m2);
console.log(map_arr);


//converting only map keys to array
let map_keys_arr=Array.from(m2.keys());
console.log(map_keys_arr);


//converting only map values to array
let map_values_arr=Array.from(m2.values());
console.log(map_values_arr);
