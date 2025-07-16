"use strict";
// console.log('dave is here')

// Typescript classes 
// class person {
//     name: string;
// }
//  const person = new person ()
//  person.name = "han"
//  class person {
//     private name: string;
//  };
//  public constructor(name: string) {
//     this.name
//  }
//  public getName(): string {
//     return this.name;
//  }
//  const person = new person("jane");
//  console.log{person.name}
// class person {
//     private readonly name:string;
// }
// public constructor (private name: string) {
//      return this.name = "name"
// }
// interface shape {
//     getArea: () => number;
  // }
// class rectangle implements shape {
//     public constructor(protected readonly width: number)
// }
var arr = [, , ,];
console.log(arr.length);
var contacts = [
    { name: "david", phone: "08093578754" },
    { name: "peace", phone: "08093578754" },
];
function addContact(name, phone) {
    var trimmedName = name.trim();
    contacts.push({ name: trimmedName, phone: phone });
}
function listContacts() {
    contacts.forEach(function (contact, index) {
        console.log("".concat(index + 1, ". ").concat(contact.name, " -").concat(contact.phone));
    });
}
