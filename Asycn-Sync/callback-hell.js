// If you are going to pass a function as a parameter to the another funciton
//lets say i.e. callback call.

/* Callback functions hell

  In a callback-based approach, we would organize our tasks into separate functions,
  and each function would accept a callback function as a parameter.
  This callback function would be invoked once the task is completed,
  signaling that the next task can begin

*/

function Cooking(callback) {
    console.log("Cooking has started");
    setTimeout(() => {
      console.log("Cooking has Completed");
      callback();
    }, 5000);
}

function WashingDishes(callback) {
    console.log("WashingDishes has started");
    setTimeout(() => {
      console.log("WashingDishes has Completed");
      callback()
    }, 7000);
}

function CleaningFloor() {
    console.log("Cleaning the floor has started");
    setTimeout(() => {
      console.log("Cleaning the floor has Completed");
      console.log("All tasks are completed.");
      var enddate = new Date();
      console.log(enddate);
    }, 4000);
}

var startdate = new Date();
console.log(startdate);

//Pass a function as a parameter to the another funciton
Cooking(()=>
    { 
       WashingDishes(()=>{
          CleaningFloor();
       });
    })


// function abc(name){
    
// }
// abc("John");


