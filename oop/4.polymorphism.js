/************Polymorphism
Polymorphism in object-oriented programming refers to the ability
 of different objects to respond to the same message or method call
  in different ways. It allows objects of different classes to be treated as objects of a
   common superclass, enabling code reuse and flexibility.
*/

class Person{
    //name;
    constructor(name){
        this.name = name;
    }
    act(){
       console.log(`${this.name} s`);
    }
}

//new Person("John").act();


class OfficeGoer extends Person {
    // Override act() method for office going behavior
    act() {
        console.log(`${this.name} goes to the office.`);
    }
}

//new OfficeGoer("John").act();
class GoesToMarket extends Person {
    // Override act() method for going to the market behavior
    act() {
      console.log(`${this.name} goes to the market.`);
    }
}


class ChatWithWife extends Person {
    // Override act() method for chatting with wife behavior
    act() {
      console.log(`${this.name} chats with his wife.`);
    }
  }
  
//new GoesToMarket("John").act();



var personBehviour1 = new OfficeGoer("John");
personBehviour1.act();

var personBehviour2 = new GoesToMarket("John");
personBehviour2.act();

var personBehviour3 = new ChatWithWife("John");
personBehviour2.act();



