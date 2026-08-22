// single line = ctrl+/    
// multi line = shift+Alt+A    

//console.log("Welcome")

/*console.log("Welcome")
console.log("Welcome")
console.log("Welcome")
console.log("Welcome")*/


// Variables - containers which can hold/store some Data.

// var, let,const, 


//syntax - keyword variablename : data type = value
//ex : var age(number)=30 

// var age =30;
// console.log(age);
// console.log("Age");


/**
 * scope 
 * declaration/value assignment
 * re-declaration
 * re-initialization / re-assignment
 * hosting 
 * 
 */

/**
 * var = we do not use this in modern JS/TS. Avoid var because it has function scope and can lead to unexpected 
 * let = use let when you need a variable that can change
 * const = use const when the variable value should not change 
 * 
 * 
 */

//Scope = Accessible area (functional scope(var) & Block scope(let,const))

// ex. var (Functional Scope)

// function varScope(){
//   if(true){
//     var msg = "Hello";
//     //console.log(msg);
//   }
//   console.log(msg);
// }

// varScope();


//Ex2. let and const (block scope)

/*
function blockScope()
{
    if(true){
        let msg = "Typescript";
        const greet = "Good Lang";

        console.log(msg);
        console.log(greet);

    }
}
blockScope();
*/

//Ex3 : 

/*
function scopeDiff(){
    if(true){
        var num1 = 10;
        let num2 = 20;
        const num3 = 30;

    }
    console.log(num1);
    console.log(num2);
    console.log(num3);
}


// var = scope can be access from anywhere
// let and const = cannot be access out of block {}

scopeDiff();
*/

//Declaration/Value Assignment


//ex. var can be declared without initialization 

/*
var x; // declaration
console.log(x);  //- undefined 

x = 30;  // initialization 
console.log(x);

//ex. let can be declared without initialization 

let y; // declaration
console.log(y);
y =10;
console.log(y);

//ex. const must be initialized at the time of declaration 
// const z; - incorrect
const z = 30; //- cannot be changed
console.log(z);

*/



/**
 * Re-declaration 
 * var = allows the re-declaration
 * let and const = not allows the Re-declaration (making code safer)
 * 
 */

//ex 1: var allows the re-declaration
// var city = "New york";
// var city = "Los Angeles";
// console.log(city);


/* let = not allowd re-declaration 
let country = "Indina";
let country = "US";
console.log(country);
*/


//ex. = const - not allowed re-declaration 

// const x = 34;
// // x =345;  // not allowed 
// console.log(x);




//re-assignment/ re-initialization 

//var and let - Re-assignment allowed 
//const = re-assignment not allowed (only constants allowed - cannot change the value)

// var age = 2;
// var age = 6; // allowed
// age = 4;

// let c = 4;
// // let c = 6; --> not allowed 
// c = 6;

// const d = 5;
// const d = 6; --> not allowed
// d = 6; --> allowed


//hosting - var (hosted with undefined), let and const (not initialized)

//console.log(a);  - undefined
// var a = 10;
// console.log(a);


// console.log(a); // not initialized
// let a = 20;
// console.log(a);


// console.log(a); // not initialized
// const a = 30;
// console.log(a);



let a: number = 4, b: number = 5, c: number = 4.5;



