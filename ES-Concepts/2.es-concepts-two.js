// MOre on arrow function .

// arrow function in real time enviorment.

var getCollegeName = (location) => {
  return "SKSC College in " + location;
};

var collegeName = getCollegeName("Bangolore");
console.log(collegeName);

//Array of objects.

//[0,1,2,3,4] ;


//console.log(customers[2].location);//--->//washington;

// customers[2] = {
//     name: "Andy",
//     location: "Washington",
//   }

//Q)I want to get the location names who are having the name of Andy...
// ()=>{}
    var filteredCustomers3 = [];
    //Practice
    
    
    
var customers = [
  {
    name: "Clerk",
    location: "London",
  },
  {
    name: "William",
    location: "London",
  },
  {
    name: "Andy",
    location: "Washington",
  },
  {
    name: "Andy",
    location: "Bern",
  },
];

//                Each customer
customers.filter((customer)=>{
    console.log(customer); //Each customer
    if(customer.name  == "Andy"){
        filteredCustomers3.push(customer.location);
    }
})
//console.log(filteredCustomers3);

//Clerk , william.

//Debugging
// code for freshers.......
var filteredCustomers = [];  
for(var i = 0 ; i < customers.length ; i = i+1){
    if(customers[i].location == "London"){
        filteredCustomers.push(customers[i].name)  
    }
}
console.log(filteredCustomers);

//Another way......

var fileredCustomers2 =[];
//filter member which is useful for filteed the data...
customers.filter((customer)=>{
    if(customer.location == "London"){
        fileredCustomers2.push(customer.name);
    }
})
console.log(fileredCustomers2);




var fileredCustomers4 =[];
//filter member which is useful for filteed the data...


//return type is having

// var abc = [];
// var c = abc.push("2");    
// console.log(c);  --> 1
// console.log(abc); ==> ["2"]


var fcusomers5 = customers.filter((customer)=>{
    if(customer.name == "Andy"){
       return  customer
    }
})
console.log(fcusomers5);


//---------------------First filter or first find value

var fcusomers7 = customers.find((customer)=>{
    if(customer.name == "Andy"){
       return  customer
    }
})
console.log(fcusomers7);


//======================find index
var fcusomers7 = customers.findIndex((customer)=>{
    if(customer.name == "Andy"){
       return  customer
    }
})
console.log(fcusomers7);  //2


var numbers = [1, 2, 3 , 4 ,5];
var output = numbers.filter((x)=>{
//     2)6(2
//       4
// ----------------
//       0

    //reminder
    if(x%2 == 0){
        return x;
    }
})
console.log(output);



//filtered out the who is siva ..retun that guy details...
var students = ["Keerthi" , "Siva" , "Sreedevi" , "Siva"];

//I have set up the code.
var output1 = students.filter((student)=>{
    if(student == "Siva"){
      return student;
    }
});

console.log(output1);

//Q)1. find out the who is siva. then give me that guy details. I need the first siva.

var ouput4 =  students.find((x)=>{
     if(x == "Siva"){
        return x;
     }
   });
console.log(ouput4);


//Q)1. find out the who is siva . then give me that guy details. 
//I need the first  index of siva.

var ouput5 =  students.findIndex((x)=>{
    if(x == "Siva"){
       return x;
    }
  });
console.log(ouput5);













