//fp principles : rule A:


//is this function is pure or not : pure 
function Hello(message) {
    return message
}
console.log(Hello('hello'))

//is this function is pure or not: impure function
function doubleIt(value) {
    return value * 2
}
console.log(doubleIt(20))