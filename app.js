function add(n1, n2) {
    return "Hello " + ((+n1) + (+n2)); //14
    //return "Hello " + (+n1) + (+n2); //77
}
var number1 = '7';
var number2 = 7;
var result = add(+number1, number2);
console.log('Result: ', result);
