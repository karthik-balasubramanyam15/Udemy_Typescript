//Enums - enum {New, old}
// enum Role { ADMIN, READONLY, AUTHOR }; // 0,1,2 by default
//enum Role { ADMIN = 6, READONLY, AUTHOR }; // auto inclement happens - 6, 7, 8 values respectively
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READONLY"] = 5] = "READONLY";
    Role[Role["AUTHOR"] = 6] = "AUTHOR";
})(Role || (Role = {}));
; // you can also mix and match numbers
var peter = {
    age: 29,
    name: 'peter',
    hobbies: ['Sports', 'Coding', 1, true, null, undefined],
    role: 5
};
console.log(peter.role === Role.AUTHOR);
console.log("---------------------------");
//Arrays
var man = {
    age: 29,
    name: 'Karu',
    hobbies: ['Sports', 'Coding', 1, true, null, undefined],
    role: [29, 'admin']
};
// man.role[1] = 8 - error coz of invalid type
man.role.push(8); //wont error - push has exception
man.role.pop(); ////wont error - array ops have exception
console.log(man.role);
var favorite = ['Cooking', 1, true, null, undefined]; //any type
for (var _i = 0, _a = man.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    typeof hobby === 'string' ? console.log(hobby.toUpperCase()) : console.log(hobby);
}
console.log("---------------------------");
for (var _b = 0, favorite_1 = favorite; _b < favorite_1.length; _b++) {
    var stuff = favorite_1[_b];
    console.log(stuff);
}
console.log("---------------------------");
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
