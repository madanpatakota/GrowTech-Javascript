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
        console.log("price" , price);
    //}, 1000);
    
    price = price + 1;
}

console.log(price);

