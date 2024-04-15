//default args
function add(a = 0, b = 0) {
    let c = a + b
    console.log(`c ${c}`)
}
//10 and 10 are parameters
add(10, 10)
add() //undefined,undefined