/*
 Why the ECMA Script?
  (European Computer Manufacturers Association Script)
  ECMAScript is a general-purpose programming language that is implemented in Javascript 
  and some other languages. 
  It is the scripting language that formed the basis of browser-based Javascript

 Javascript is using the ECMAScript standards.
 Current ECMAScript latest release is ECMA2022 June 13 =

 Note : Ecmascript first version is 1997

 Now a days people are thinking javascript contains the ecma latestversion

 In my current project we are using the ecma script 2015 version or es6 version.
 */

/******************************-----------------------------------------------********* */

// var customerName = "Clerk";
// var customerName = "123456";
// var customerName = "Jack";

// console.log(customerName); //"Peterson"


let customerName = "Clerk"; //blockscope
    customerName = "Peterson";

console.log(customerName); //"Peterson"


const customerLogo = "hr@tcs.com";
 //     customerLogo = "hr@infosis.com";

console.log(customerLogo);


//========================Arrow function
// can i pass parameter to the arrow function? we can...
// Next Friday .. HTML and Javasript.........

var getCollegeName = ()=> {
    return "SKSC College"
}
var collegeName = getCollegeName();
console.log(collegeName);


//==========================Template literals
//Template Literals are strings that can include in embedded expressions. 
//we use with `(backtick) and ${}  symobols


var greeting = "hello";

var response = ` Say ${greeting} `;
console.log(response); // Say hello;








