
//arrow and higher order function

let connect = cb => cb('connecting..')

let sqlConnect = value => console.log(`sql ${value}`)
connect(sqlConnect)
connect(value => console.log(`oracle ${value}`))