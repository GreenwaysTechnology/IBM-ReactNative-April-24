
// function getStock() {
//     return {
//         id: 1,
//         symbol: 'GOOGLE',
//         price: 10000,
//         qty: 111
//     }
// }
// function getStock(id = 1, symbol = 'Google', price = 10000, qty = 10) {
//     return {
//         id: id,
//         symbol: symbol,
//         price: price,
//         qty: qty
//     }
// }
// function getStock(id = 1, symbol = 'Google', price = 10000, qty = 10) {
//     //left:right is same, remove any one of them
//     return {
//         id,
//         symbol,
//         price,
//         qty
//     }
// }
// const getStock = (id = 1, symbol = 'Google', price = 10000, qty = 10) => {
//     return {
//         id,
//         symbol,
//         price,
//         qty
//     }
// }
const getStock = (id = 1, symbol = 'Google', price = 10000, qty = 10) => ({
    id,
    symbol,
    price,
    qty
})

console.log(getStock())
console.log(getStock(2, 'Microsoft', 3500, 100))