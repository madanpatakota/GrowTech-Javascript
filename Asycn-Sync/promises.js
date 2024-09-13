// new Date()
// new Class1()

// new Promise((resolve,reject) => {})

    // function getname(){
    //     return "afasdas";
    // }

//half-hour
//.filter((x)=>{}) find findindex // 1 hour 15 mins


function Cooking() {
  return new Promise((resolve, reject) => {
    console.log("Cooking has started");
    setTimeout(() => {
      console.log("Cooking has Completed");
      resolve(); // kind of information from promise says that it has success.
    }, 5000);
  });
}

function WashingDishes() {
  return new Promise((resolve, reject) => {
    console.log("WashingDishes has started");
    setTimeout(() => {
      console.log("WashingDishes has Completed");
      resolve();
    }, 7000);
  });
}

function CleaningFloor() {
  return new Promise((resolve, reject) => {
    console.log("Cleaning the floor has started");
    setTimeout(() => {
      console.log("Cleaning the floor has Completed");
      resolve();
    }, 4000);
  });
}



function startwork(){
    var startTime = new Date();
    console.log("Start time:", startTime);
    Cooking().
    then(()=>{  WashingDishes()}).
    then(()=>{  CleaningFloor()}).
    then(()=>{
        var enddate = new Date();
        console.log("End time:", enddate);
        var totlseconds = (enddate - startTime) / 1000;
        console.log("Total seconds" , totlseconds);
    })
}

startwork();



