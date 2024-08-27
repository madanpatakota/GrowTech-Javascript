// Organization
// group of members
// each member have the responsibility;
// freshers , seniors , superseniors , admins , HRs
// each member has to take the input and then he has to give the output.
// few member gives the output without taking any input from boss


// method member    _________()
// property member  _________
                    
var employeeName = "R.Plant";
var firstCharcter  = employeeName.charAt(0) //  -->  R
var secondCharcter = employeeName.charAt(1) //  ---> .
var thirdCharcter  = employeeName.charAt(2) //  ---> a

console.log(firstCharcter);
console.log(secondCharcter);
console.log(thirdCharcter);

var employeeNameLength = employeeName.length;  //property
console.log(employeeNameLength);  

var employeeNameInUpperCase = employeeName.toUpperCase();  //Method
console.log(employeeNameInUpperCase);

var employeeNameInLowerCase = employeeName.toLowerCase();  //Method
console.log(employeeNameInLowerCase);


var firstName = "Robert";
var lastName =  " Plant";
                 //Robert Plant
var fullName  = firstName.concat(lastName);
              //firstName.concat(lastName).toUpperCase();
console.log(fullName);

var uppercaseFullName = fullName.toUpperCase();
console.log(uppercaseFullName);


var message = "Hello world";

var finalMessage = message.
                   charAt(0).
                   toLowerCase().
                   toUpperCase().
                   concat("ello world");

var finalMessage1 = message.charAt(0) //--> "H"

var finalMessage2 = message.charAt(0).toLowerCase() //--> "h"

var finalMessage3 = message.charAt(0).toLowerCase().toUpperCase(); //"H"
  
var finalMessage4 = message.charAt(0).toLowerCase().toUpperCase().concat("ello world"); //Hello world


//var finalMessage = "Hello world";
                   //concat("ello world");
console.log(finalMessage);

// siva -->    'h' 
// karthik --> 'H'
// shashank --> 'h'
// keerthi -->  'H'
// Sreedevi --> "HELLO WORLD"









