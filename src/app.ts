import {Invoice} from "./classess/Invoice.js";
import {Payment} from "./classess/Payments.js";
import {HasFormatter} from "./interfaces/HasFormatter.js";
import {ListTemplate} from "./classess/ListTemplate.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;
//
// docOne = new Invoice('Shiva', "webdev", 230);
// docTwo = new Payment("Shiv", "ios",2423);
//
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
//
// console.log(docs);

// const inOne = new Invoice("Shivang", "mytasks", 1000);
// const inTwo = new Invoice("Shiv", "mytasks", 100);
//
// let invoices: Invoice[] = [];
// invoices.push(inOne, inTwo);
// console.log(invoices);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);


form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, 'end');
});
