//object creation using es 6 classes

class Employee {
    //instance variables,methods
    id = 1
    name = 'Subramanian'

    //methods
    calculateSalary() {
        return 100
    }
    //arrow
    calculateLeave = () => 10
}

//how to create object 
//let -keyword
//emp -variable
//new is keyword 
//Employee() - constructor call 
let emp = new Employee()
console.log(emp.id,emp.name,emp.calculateSalary(),emp.calculateLeave())