/***************** What is looping ************/

/*
Looping is noting but a sequence of instructions.
and those instructions continually repeated until a certain condition is reached.
*/

//While waiting for the bus, I decided to talk my freinds"
//A while loop in JavaScript repeatedly executes a block of code
// as long as a specified condition is true

// while(<condition>){

//}

// if(0<5){

// }


var price  = 0;
var myAmount = 30;

// 10000 <10001

while(price < myAmount){
    //setTimeout(() => {
        //console.log("price" , price);
    //}, 1000);
    
    price = price + 1;
}

//console.log(price);


//for loop

var phonesBasket  = [];
/*   Writing the same code with for loop
                for(defaultvalue ; Apply the condition with the default value 
                                               ; targettheinitliztionvalue){
                                    statement ;
                                    statement ;
                                    statement ;
                                 }
*/

/* looping system will be process while condition is true) */
for(var phonesCount = 1; phonesCount < 10; phonesCount = phonesCount + 1){
    phonesBasket.push("PhoneCount" + phonesCount);
    console.log("Phones in the Basket" ,phonesBasket);
    console.log("phones Count" , phonesCount);
}

console.log(phonesBasket);



//HOme work :
// take one function apply while and for loop in the same situation .
// YOU have to create the one case study..


var customersList = ["Karthik" , "Keerthi" , "Sreedevi" , "Shashank" , "Shiva"];
//customersList.length = 5

    // customersList[1] = "Keethi";
    // customersList[2] = "Keethi";


    // customersList[3] = "Shashank";
    // console.log(customersList[3])

    

//for loop incase if my custome shashank . just print the value in console window.
// for loop

for(var customerIndex = 0 ; customerIndex < customersList.length ; customerIndex = customerIndex + 1){
    if(customersList[customerIndex] == "Shashank"){
         console.log(customersList[customerIndex] + "Printed");
    }
}




