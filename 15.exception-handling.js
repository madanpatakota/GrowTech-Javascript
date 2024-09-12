

// //  "john" , --> "JOHN" 10 , 123.89 , true , undefined , //null is defined value but nothing.

// "" --> string is empty  null nothing

// var username = ""  -- empty value

//  var x ;

//compile time --> before you are going to execute the code you can find the error

//run time -> after executes the code you can get idea where is the exception.


//exception-handling you can do for fix the run time exceptions.


//try

//catch

//finally

var age = 50;

var cuslocation = 10; 

var cusname = "john";

//age.toUpperCase();  // its giving the issue.

//incase if you have any issue in this try bloack

//then that issue will be thrown to the catch


//10 lines code 
// 1 2 3 4 
// try{
// 10
// }

try{
  age.toUpperCase();  // Exception or error .. bug
}
catch(exception){
   console.log(exception);
}
finally{
    console.log("Code has executed...");
}

console.log("Javascript");
console.log("HTML");




//1 st task is exception handling....

// lowercase , uppercaase



var universeLength = "1000000";  //undefined

var cusnmae = "john";  //--> 4

//["" , ""] // --> 2


try{
var length = universeLength.length;
console.log(length);
}
catch(ex){
    console.log(ex);
    console.log("we cannot calculate the undefined values");
}
finally{
    console.log("complted");
}



productsList = ["Iphone" , "Samsung"] ; // today

productsList = null; //tomorrow


productsList.length  // it will ok once you are having the data.......















