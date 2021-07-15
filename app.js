function add(n1, n2) {
    return "Hello " + ((+n1) + (+n2)); //14
    //return "Hello " + (+n1) + (+n2); //77
}
var number1 = '7';
var number2 = 7;
var result = add(+number1, number2);
console.log('Result: ', result);
//object with explict types
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Karu',
//     age: 30
// }
//simple object
var person = {
    name: 'Karu',
    age: 30
};
console.log(person.name + ' is ' + person.age);
//nested object
var product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
console.log(typeof product);
