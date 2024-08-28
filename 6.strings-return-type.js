//function basics

/* 1.collection | set | group of statements 

   2.once you call the function then statements in function triggerd| executed step by step by browser

   function organized the group of statements and executed by browser step by step*/
//string-return types


// function <fnname>(){
//     -------------------------;


// }


//Declaratin the function

//wrapper..
function showMessages()
 {
    console.log("HTML");
    console.log("Javascript");
    console.log("CSS");
 }
 //Calling the function
   showMessages();
//Declared the function..
function addition(){
     var first = 10;
     var second = 20;
     var output = first + second;
     console.log(output);
}

addition();


/* 2 types 1 . return data  
           2. non-return data
*/

/*Note :  */
function getEmpName(){
    var empName3 =  "Siva Raina";
    return empName3;
}
var output1 = getEmpName();//Siva raina
console.log(output1);


function getFullMessage(){
    var Message1 = "Message from whatsup";
    var Message2 = "Message from Insta";
    var totalMessage = Message1.concat(Message2);
    return totalMessage;
}

var whatIsThat = getFullMessage();
console.log(whatIsThat);





//----------------------------Non return type--------------------------------------
function showEmpNames(){
    var empName1 = "Karthik Reddy";
    var empName2 = "Shashank";
}
var output2 = showEmpNames();
console.log(output2);

//--function --> js --> any IT technology




// Terminology


//whatever function in string is called the method

var customerName = "Robert";


//----------------------------getFullMessage1 we have created---------------------------
function getFullMessage1(){
    return "watsup and insta";
}
var whatIsThat = getFullMessage1();
console.log(whatIsThat);

//------------------------- string functions i.e. lowercase and uppercase----------------------------------------------

var lowercaseCharcters = customerName.toLowerCase();
console.log(lowercaseCharcters);

var uppercaseCharcters = customerName.toUpperCase();
console.log(uppercaseCharcters);



//--------------------Role of input parameter in function -------------------------------

// once you are going to call function if you want to pass any message(s) to the 
//  function then you have to pass throught the input parameter


// Give me your input parameters ?? Give me your thoughts


//declartion of the function  // non-return function
function myFreindMessage(firstMessage , secondMessage){
    console.log(firstMessage + "😜");
    console.log(secondMessage + "☺" );
}

myFreindMessage("Hello GoodMorning!!!" , "How do you do? ");


function myAnotherFreindMessage(firstMessage , secondMessage){
    return "😜😜😜😜😜😜😜😜😜😜"
}

var statusOfMyfreind = myAnotherFreindMessage("Hello GoodMorning!!!" , "How do you do? ");
console.log(statusOfMyfreind);



                  //0123
var employeeName = "R.Plant";
var firstCharcter  = employeeName.charAt(0) //  -->  R
                    
var  captureIndex = employeeName.indexOf("t")  // --> 5
console.log(captureIndex);