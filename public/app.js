const me = {
    name: "Shivang",
    age: 23,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent ", amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log(person.name);
};
greetPerson(me);
console.log(me);
import {Invoice} from "./classess/Invoice.js";

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
