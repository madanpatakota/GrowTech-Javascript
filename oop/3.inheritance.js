/*Inhertinace********
  Inheritance is noting but make a relationship 
***/



//parent
class Father{
    color;
    eyes;
    constructor(color,eyes){
        this.color = color;
        this.eyes = eyes;
    }
    displayFatherDetails(){
      console.log(`Father's color: ${this.color}`);
      console.log(`Father's eyes: ${this.eyes}`);
    }
}

//child
class Kid extends Father{
    constructor(kidcolor , kideyes){
        super(kidcolor,kideyes);
    }
    displayKidDetails(){
        this.displayFatherDetails();
    }
}

var kid1 = new Kid("Fair", "black");
kid1.displayKidDetails();

//debug the code f10 , f11