/*What is abstraction
  Abstraction in object-oriented programming refers to the process of hiding complex 
  implementation details and showing only the essential features of an object.
  
   It allows developers to focus on what an object does rather than how it achieves its 
   functionality, promoting simplicity, modularity, and maintainability in code. 
*/



// Define a BankAccount class and As a user he is not aware processing of the 
//cash like withdraw deposit balance. with out knowing that he can see the output.

class BankAccount{
     accountnumber;
     balance;
     ownername;

    constructor(accountnumber, initialbalance, ownername){
        this.accountnumber = accountnumber;
        this.balance = initialbalance;
        this.ownername = ownername;
    }
    //You know deposit
    deposit(amount){
        this.balance = this.balance + amount;
        console.log(`Deposited ${amount} into account ${this.accountnumber} `);
    }

    //5000000
    //500
    withdraw(amount){
        if(this.balance >= amount){
            this.balance = this.balance - amount;
            console.log(`Withdraw ${amount} from account ${this.accountnumber} `);
        }
        else{
           console.log(`Insufficient funds to withdraw ${amount} from account ${this.accountnumber}`)
        }
    }

    checkbalance(){
        console.log(`Account ${this.accountnumber} balance : ${this.balance}`);
    }

}

var myAccount = new BankAccount("123456789", 1000, "John Doe");

//User do know 
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.checkbalance();




/*Explanation :
In this example:

The BankAccount class encapsulates the properties and methods related to a bank account.
Abstraction is achieved by hiding the internal implementation details 
(like how balances are stored or updated) 
and exposing only the essential functionalities 
(like depositing, withdrawing, and checking balance) to the user.
Users interact with the bank account object (myAccount)
 through its public methods (deposit, withdraw, checkBalance) 
 without needing to know the internal workings of the class. 
 This separation of concerns allows for easier maintenance and modification of the codebase.

*/

