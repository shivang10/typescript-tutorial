"use strict";
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} - ${this.details} - ${this.amount}`;
    }
}
const inOne = new Invoice("Shivang", "mytasks", 1000);
const inTwo = new Invoice("Shiv", "mytasks", 100);
let invoices = [];
invoices.push(inOne, inTwo);
console.log(invoices);
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
