/*
 
   Scope :

   Global scope : outside of function . global scope

   Local  scope:  inside of function  .  local scope



*/

//hint

var companyLogo = "";
    companyLogo = "🏢"
console.log(companyLogo); // "🏢"

var companyName = "TCS";
var password = "";
console.log(password); // "";

//Fix the issue.

function keerthiGmailPassword(){
    password = "$%$#@!$";   //password is in the localscope
    console.log(companyName);
}


//Before calling this funciton password is still empty
keerthiGmailPassword();
console.log(password);  //"$%$#@!$"


console.log(companyName);






//----------------Normal function
// function getBankName(){
//     return "HDFC Bank";
// }
//getBankName();


//----------------function declared by variable : varaible named function-------------

//Example 1 :
var getBankName = function(){
    return "HDFC Bank"
}
var bankName = getBankName();
console.log(bankName);

//Example 2 :

var studentNames = [];
var getStudentNames = function(){
    studentNames.push("Sreedevi");
}
getStudentNames();
console.log(studentNames);


//--------------------------------Arrow(=>) function


//Example 1
var getCollegeName = () => {
    return "SKSC College"
}
var collegeName = getCollegeName();
console.log(collegeName);


//Example 2

//() => { ------------------ ;}

var showMessages = () => {
     console.log("Message 1");
     console.log("Message 2");
     console.log("Message 3");
}

showMessages();


// Example 3
//Note : you have to implement arrow functions with the help of vairable ref
var getStudentDetails = (name , location) => {
    return name;
};

getStudentDetails("John", "UK");


              
function test(fn){
  fn();
}

//Example 1:
// function sayHello(){
//   console.log("hello");
// }

//Example 2: variable function
// var sayHello = function(){
//     console.log("hello");
// }

//Example3 : Arrow function
var sayHello = () => {
    console.log("hello");
}


test(sayHello);

// function getName(firtname){
//     console.log(firtname);
// }

// getName(10)



//setTimeout  js prebuildfunction

//executes statements after some time(some time your requiremen)


setTimeout(function(){
    console.log("👋"); 
},5000);































