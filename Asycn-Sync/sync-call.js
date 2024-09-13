/*
  Q)What is Synchronous Call?
  A)In programming, synchronous call refers to a type of function invocation where the execution happens sequentially, one after the other.
   In other words, each operation or task must wait for the previous one to finish before starting.
*/

//setTimeout  - Alarm

//one statement after some 1 sec or 5 secs

// note : we can pass one function as a parameter to the another function.

// console.log("First");
// setTimeout(() => {
//   console.log("Second");
// }, 5000);


// calling function within the funcion.(sync call);

function Cooking() {
  console.log("Cooking has started");
  setTimeout(() => {
    console.log("Cooking has Completed");
    WashingDishes();
  }, 5000);
}

function WashingDishes() {
    console.log("WashingDishes has started");
    setTimeout(() => {
      console.log("WashingDishes has Completed");
      CleaningFloor()
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

function SyncCallsTasks(){
    Cooking();
}


var startdate = new Date();
console.log(startdate);
SyncCallsTasks();

