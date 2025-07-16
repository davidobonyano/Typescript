// console.log('dave is here')

import { number } from "motion"

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
 
let arr = [,,,]
console.log(arr.length)

let contacts = [
    {name: "david", phone: "08093578754"},
    {name: "peace", phone: "08093578754"},
]
function addContact(name: string,phone: string) {
    const trimmedName = name.trim();
    contacts.push({name:trimmedName, phone})


}
function listContacts(){

    contacts.forEach((contact, index) =>{
        console.log(`${index + 1}. ${contact.name} -${contact.phone}`)
    })

}
export{}