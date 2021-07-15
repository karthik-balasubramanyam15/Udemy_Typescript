function add(n1: number, n2: number) {
    return "Hello " + ((+n1) + (+n2)); //14
    //return "Hello " + (+n1) + (+n2); //77
}

const number1 = '7'
const number2 = 7

const result = add(+number1, number2)

console.log('Result: ', result)

//object with explict types
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Karu',
//     age: 30
// }

//simple object
const person = {
    name: 'Karu',
    age: 30
}

console.log(person.name + ' is ' + person.age)

//nested object
const product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
}

console.log(typeof product)