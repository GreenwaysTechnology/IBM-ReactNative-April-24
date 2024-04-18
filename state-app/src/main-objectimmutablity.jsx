
//impure function
// function updateProfile(city, profile) {
//     profile.city = city
//     return profile
// }

// plain js pattern
// function updateProfile(city, profile) {
//     return {
//         name: profile.name,
//         city: city
//     }
// }
//object.assign method
// function updateProfile(city, profile) {
//     return Object.assign({}, profile, { city: city })
// }

//es 7 spread operator

function updateProfile(city, profile) {
    return {
        ...profile, city: city
    }
}
let profile = {
    name: 'Subramanian',
    city: 'Delhi'
}
console.log('before update', profile)
const result = updateProfile('Coimbatore', profile)
console.log(profile === result ? "Same Memory Address" : "Different Memory Address")
console.log('after update', profile)

function transform(data) {
    return data.map(item => item)
}

let list = ['subramanian', 'ram', 'murugan']

const response = transform(list)

console.log('Array is ',list === response ? "Same" : "Different")

function filter(data) {

    return data.filter(item => item.status === true)
}

let employees = [{
    id: 1,
    name: 'subramanian',
    status: true
},
{
    id: 2,
    name: 'Ram',
    status: false
},
{
    id: 3,
    name: 'Karthik',
    status: true
},
{
    id: 4,
    name: 'Murugan',
    status: false
}

]

const filterResponse = filter(employees)

console.log('Array filter is ',employees === filterResponse ? "Same" : "Different")

//is it pure or not
// function add(todos, todo) {
//     return todos.push(todo)
// }
//is it pure or not
// function add(todos, todo) {
//     // return todos.push(todo)
//     return todos.concat(todo)
//  }
function add(todos, todo) {
    // return todos.push(todo)
    //  return todos.concat(todo)
    return [...todos, todo]
}
let todos = [{
    title: 'Learn react',
    done: true
}];

//Testing 
Object.freeze(todos)

console.log(add(todos, { title: 'Learn Microservices', done: false }));