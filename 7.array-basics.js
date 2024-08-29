/*  What is Array ?
   
    set | group | collection of values and value can by any datatype ..

[]

spy your code -- Debug

*/

var num = 1;

var numbers = [ 1, 2 , 4 ];

var names = [ "john" , "Peter" , "Robert" ];

var customerDetails = [ 1 , "John" , "London"];

var customerPrices = [999.99 , 100.09, 10000.90];



//------------------------------------------Advanced in Arrays-------------------------

//Create your own example
var numbers = [ 1, 2 , 4 , 10];

//what are important members in Array
//push member : Add a new value to the Array.

 var output = numbers.push(10);   // you have to learn

 console.log(numbers);
 console.log(output); //4

 output = numbers.push(11);

 console.log(numbers);
 console.log(output); //5


 //Shashank : 5 


// pop (remove the last value)
 var names = [ "john" , "Peter" , "Robert" ];
 var output1 = names.pop();

 console.log(names);
 console.log(output1);


 //shift(first remove)
 var usCountryEmployees = [ "john" , "Peter" , "Robert" ];
 var output3 = usCountryEmployees.shift();

 console.log(usCountryEmployees);
 console.log(output3);


 //Unshift(Add new value in 0th position);
 var ukCountryEmployees = [ "john" , "Peter" , "Robert" ];
 
 var ouput4 = ukCountryEmployees.unshift("Junior Robert");

 console.log(ukCountryEmployees);
 console.log(ouput4);

var users = ["Karthik" , "Siva"];
 
 function btnClickRegisterUser(){
    users.push("Shanshank");
 }

 btnClickRegisterUser();
 console.log(users);


 


    
  
    








