function add(n1: number, n2: number) {
    return "Hello " + ((+n1) + (+n2)); //14
    //return "Hello " + (+n1) + (+n2); //77
}

const number1 = '7'
const number2 = 7

const result = add(+number1, number2)

console.log('Result: ', result)