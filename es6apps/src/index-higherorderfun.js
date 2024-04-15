function myFun(arg) {
    console.log(arg)
}
myFun('hello')
myFun(10)
myFun(undefined)
myFun(NaN)
myFun(Infinity)

//function as parameter : higher order function 

function connect(arg) {
    console.log(arg)
    arg()
}
let sqlConnect = function () {
    console.log('sqlconnect')
}
connect(sqlConnect)

connect(function () {
    console.log('oracle connect')
})