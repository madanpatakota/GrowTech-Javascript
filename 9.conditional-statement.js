
/*conditional statement*/



/*boolean*/



var isPassed = false;

if(true){
 console.log("Hello");
}


//If   you have time do it 
//else some one pick the task

var isAgreed = false;

// if * else

if(isAgreed){
    console.log("Accepted");
}
else{
    console.log("Disagreed");
}



var isAdmin  = false;
if(isAdmin){
    console.log("Please uninstall the software");
}
else{
    console.log("Hey!!! i am not admin");
}


//=================================================================================


var customerLocation = "UK";

console.log(customerLocation);

//double equal operator cross-check the value is true or false
console.log(customerLocation == "UK"); //false

if(customerLocation == "UK"){
    console.log("Customer is from UK");
}
else{
    console.log("Custome is not from UK");
}


//==============================================


var studentName = "Siva";

//Keerthi , Siva and Karthik

if(studentName == "Sreedevi"){
    console.log("Sreedevi is from Bangolore");
}
else if(studentName == "Keerthi"){
    console.log("Keerthi is from Bangolore");
}
else if(studentName == "Siva"){
    console.log("Siva is from Chennai");
}
else if(studentName == "Karthik"){
    console.log("Karthik is from Hyderabad");
}
else{
    console.log("student name is not matched.Pleae check another studentName");
}



//-----------------------------------------------------------------------

var penPrice = 10;  //penPrice 10 rupees     == , > , < , >= , <=

if(penPrice > 10){
    console.log("Expensive");
}
else if(penPrice == 10){
    console.log("Price is OK to me");
}
else{
   console.log("Its cheap");
}


//----------------------------------------------------------------------------

// &&(AND)
// 
//    TRUE && TRUE --> T
//    TRUE && FALSE --> F
//    FALSE && TRUE --> F
//    FALSE && FALSE --> F

// ||(or)
// 
//    TRUE || TRUE   --> T
//    TRUE || FALSE  --> T
//    FALSE || TRUE  --> T
//    FALSE || FALSE --> F

var studentName     = "Keerthi"
var LocationName    = "Ban";

//=========================And=====================
if(studentName == "Sreedevi" && LocationName == "Ban"){
    console.log("Sreedevi is from Bangolore")
}
else{
    console.log("Records Not Matched");
}


//===================================Or===========================
if(studentName == "Sreedevi" || LocationName == "Ban"){
    console.log("Student record is OK..........")
}
else{
    console.log("Records Not Matched");
}


//===================================or=================================

var empName = "Madan";
var loc     = "Ban";
     //f             || f
if(empName == "Siva" || loc == "Chennai"){
    console.log("Record is matched");
}
else{
    console.log("Record is not matched");
}



//==================================!=

//Not(!)

var isHeZomotoEmp = true;

// if(isHeZomotoEmp){
//     console.log("Order will come within 15 mins");
// }
// else{
//     console.log("Order i am not sure......");
// }


// == * !=
//if(!isHeZomotoEmp)
if(isHeZomotoEmp != true){
    console.log("Order i am not sure......");
}
else{
    console.log("Order will come within 15 mins");
}

//=======================!

var studentName = "student-1";


if(studentName != "student-1"){
    //------------------------------------
}





