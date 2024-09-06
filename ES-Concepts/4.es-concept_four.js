
// class

// class is a special type of a function which maintains the group of relative members
// member can be properties , methods and constructor.


//method in class is nothing but a function only . 
//but method do't have a function keyword

class employee{
    //Members
    
    //property..
    employeeID = 1;
    employeeName = "William";

    // constuctor is a special type of method member
    // which automatically executes when you call the class
    constructor(){
        console.log("Constructor trigger");
    }

    //method
    getEmpLocation(){
        return "UK";
    }
}


//new employee();  // call the class

// console.log(new employee().employeeID);
// console.log(new employee().employeeName);

//The way how you have to access the members.

var refEmployee = new employee();
console.log(refEmployee.employeeID);
console.log(refEmployee.employeeName);
console.log(refEmployee.getEmpLocation());



//========================================================================

// i want to make communication b/w the classes


class emp_class1{
    constructor(id,name){
       console.log(id);
       console.log(name);
    }
}

class emp_class2 extends emp_class1{
    constructor(){
        super(1 , "John");
    }
}

new emp_class2();

