import { Invoice } from "./classess/Invoice.js";
import { Payment } from "./classess/Payments.js";
import { ListTemplate } from "./classess/ListTemplate.js";
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
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    // can't use spread operator for above values array as it does not its data type
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "yoshi", age: 40 });
console.log(docOne.name);
// tuples
let arr = ['ryu', 23, true];
arr[0] = 1;
arr[1] = false;
let tup = ["shiv", 23, true];
tup[0] = "Shivang";
let student;
student = ["Rooney", 34];
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["PERSON"] = 1] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docTwo = {
    uid: 1,
    resourceName: ResourceType.PERSON,
    data: { name: "shivang" }
};
const docThree = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: ["a", "b", "c"]
};
console.log(docTwo);
console.log(docThree);
