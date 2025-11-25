// Question-1

function createCounter (){
    let count=0;
    return {
    increment() {
      count++;
      console.log("Current count:", count);
    },
    decrement() {
      count--;
      console.log("Current count:", count);
    },
    show() {
      console.log("Current count:", count);
    }
}
}

const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement(); 
counter.show();  


// Question-2

function createBankAccount(){
let balance=0;
return {
    deposit(amount) {
      balance += amount;
      console.log(`Deposited Amount: ${amount}`);
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient balance");
      } else {
        balance -= amount;
        console.log(`Withdrawn: ${amount}`);
      }
    },
     checkBalance() {
      console.log(`Current balance: ${balance}`);
    }
}
}

const account = createBankAccount();

account.deposit(500);   
account.withdraw(200);    
account.withdraw(400);    

console.log(account.balance); 
account.checkBalance();       
