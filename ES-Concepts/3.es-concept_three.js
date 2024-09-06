/*****************************default parameters *****************
 * A function can accept the default values 
 * incase if we would't the pass the parameters from the function.....
 */

function getcustomerIntroduction(cusName,cusLocation, cusAge= 25){
    console.log(cusAge); //25;
}

getcustomerIntroduction("John","UK");



/*****************************Rest parameters *****************
 * The rest parameter syntax allows a function to accept an indefinite number of arguments 
 * as an array,
 */
function getcustomerIntroduction1(cusName,cusLocation , ...info){
    console.log(info); 
}

getcustomerIntroduction1("John","UK" , 25 , "SoftwareEngineer", "ES202454");


//*****************************Spread operator*******************/
var customerInfo = ["William","London","12-10-1965","Male"];
var customerInfo1 = [customerInfo , "198.06" , "Olivia"];
var customerInfo2 = [...customerInfo ,"198.06" , "Olivia" ]

// ["William","London","12-10-1965","Male", "198.06" , "Olivia"]

console.log(customerInfo1);
console.log(customerInfo2);


/*De-structure
Destructuring means to break down a complex structure into  parts and we have to assign
the each part to the variable.
*/

var food = ["eggs","chicken","grapes"];
var [veg, nonveg, fruit] = ["eggs","chicken","grapes"];

console.log(veg);
console.log(nonveg);
console.log(fruit); 

var [veg, nonveg, ...info] = ["eggs","chicken","grapes" ,"data-1", "data-2"];
console.log(info);

/**********************************Template literals 
Template Literals are strings that can include embedded expressions. 
we use with `(backtick) and ${}  symobols
*/
//""

// `` --> 3 lines
var customer = "Peter";
var role  = "Admin";
var greeting = `Hello ${customer}    and his role is ${role}`;
console.log(greeting);












