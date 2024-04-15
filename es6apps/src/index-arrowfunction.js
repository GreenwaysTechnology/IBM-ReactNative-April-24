
//es 5 anonymous function
let hello = function () {
    console.log('hello')
}
hello()
//es 6 anonymous function => arrow functions
let hai = () => {
    console.log('hai')
}
hai()

//if arrow having only one line of body, we can remove {}
hai = () => console.log('hai')
hai()

let add = (a = 0, b = 0) => {
    let c = a + b
    console.log(c)
}
add(10, 10)

add = (a = 0, b = 0) => {
    return a + b
}
console.log(add(10, 10))

//if function has return statement only: we can remove return keyword and {}

add = (a = 0, b = 0) => a + b
console.log(add(10, 10))

//if function takes single args,without default value and returns the same,we can remove {},return statement, ()

let getStock = stock => stock * 10

console.log(getStock(10))
