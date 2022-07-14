const {person, age, country} = require('./people')

// const newPerson  = {
//     person: person,
//     age: age
// }

const newArray = person.map(persons)
const newerArray = age.map(ages)
const newCountry = country

function persons(peeps) {
    
    console.log(peeps);
}
function ages(peeps2) {
   console.log(peeps2);
}

console.log(person[1],"is", age[1], "from",  newCountry);
console.log(person[0], "is", age[0])
// console.log(ages, persons);  

