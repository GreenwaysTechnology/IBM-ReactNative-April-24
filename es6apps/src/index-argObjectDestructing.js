// function printEmployeeDetails(employee) {
//     console.log(`Id ${employee.id}`)
//     console.log(`Name ${employee.name}`)
//     console.log(`City ${employee.address.city}`)
// }
// function printEmployeeDetails(employee) {
//     const { id, name, address } = employee
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`City ${address.city}`)
// }

// function printEmployeeDetails(employee) {
//     const { id, name, address: { city } } = employee
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`City ${city}`)
// }
// function printEmployeeDetails({ id, name, address: { city } }) {
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`City ${city}`)
// }
const printEmployeeDetails = ({ id, name, address: { city } }) => {
    console.log(`Id ${id}`)
    console.log(`Name ${name}`)
    console.log(`City ${city}`)
}

let employee = {
    id: 1,
    name: 'Subramanian',
    address: {
        city: 'Coimbatore'
    }
}
printEmployeeDetails(employee)