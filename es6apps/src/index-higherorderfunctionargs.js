//higher order function, args and parameters.

function connect(cb) {
    cb('connecting...')
}
let sqlConnect = function (value) {
    console.log(`sql ${value}`)
}
connect(sqlConnect)
connect(function (value) {
    console.log(`oracle ${value}`)
})