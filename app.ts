//Enums - enum {New, old}
// enum Role { ADMIN, READONLY, AUTHOR }; // 0,1,2 by default
//enum Role { ADMIN = 6, READONLY, AUTHOR }; // auto inclement happens - 6, 7, 8 values respectively
enum Role { ADMIN = 'ADMIN', READONLY = 5, AUTHOR }; // you can also mix and match numbers

const peter = {
    age: 29,
    name: 'peter',
    hobbies: ['Sports', 'Coding', 1, true, null, undefined], //hobbies: (string | number | boolean)[]
    role: 5
}

console.log(peter.role === Role.AUTHOR)
console.log("---------------------------")

//Arrays
const man: {
    name: string,
    age: number,
    hobbies: (string | number | boolean)[],
    role: [number, string] //array with fixed types and number of values - tuples
} = {
    age: 29,
    name: 'Karu',
    hobbies: ['Sports', 'Coding', 1, true, null, undefined], //hobbies: (string | number | boolean)[]
    role: [29, 'admin']
}

// man.role[1] = 8 - error coz of invalid type
man.role.push(8); //wont error - push has exception
man.role.pop(); ////wont error - array ops have exception
console.log(man.role)



let favorite: any[] = ['Cooking', 1, true, null, undefined] //any type


for (const hobby of man.hobbies) {
    typeof hobby === 'string' ? console.log(hobby.toUpperCase()) : console.log(hobby)
}
console.log("---------------------------")
for (const stuff of favorite) {
    console.log(stuff)
}
console.log("---------------------------")



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


