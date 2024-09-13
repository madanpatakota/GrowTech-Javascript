
 async function Cooking() {
  console.log("Cooking has started");
   await new Promise((resolve, reject) => { 
      setTimeout(() => {
        console.log("Cooking has Completed");
        resolve(); // kind of information from promise says that it has success.
      }, 5000);
    });
  }
  
  async function WashingDishes() {
    console.log("WashingDishes has started");
   
    //Hey wait for 7 seconds

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("WashingDishes has Completed");
        resolve();
      }, 7000);
    });
  }
  
  async function CleaningFloor() {
    await new Promise((resolve, reject) => {
      console.log("Cleaning the floor has started");
      setTimeout(() => {
        console.log("Cleaning the floor has Completed");
        resolve();
      }, 4000);
    });
  }
  
  
  
  async function startwork(){
      var startTime = new Date();
      console.log("Start time:", startTime);

      await Promise.all([Cooking(),WashingDishes(),CleaningFloor()]);

      var endTime = new Date();
      console.log("End time:", endTime);
      
  }
  
  startwork();
  
  
  
  