

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayInfo() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Pages: ${this.pages}`);
    }
}






class Account {
    constructor(account, balance, owner) {
        this.account = account;
        this.balance = balance;
        this.owner = owner;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. new balance is ${this.account}.`);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Successfully withdrawn $${amount}. New balance is ${this.account}.`);
        } else {
            console.log(`Insufficient funds.`);
        }
    }

    CompoundInterest(rate, years) {
        const n = 1; 
        const principal = this.balance;
        const exponent = n * years;
        const amount = principal * Math.pow((1 + rate / n), exponent);
        const roundedAmount = Math.ceil(amount);
        console.log(`Compound interest after ${years} years: $${roundedAmount - principal}`);
    }
}

