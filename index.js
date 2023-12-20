// Write your solution in this file!

const employee = {
    name : "Patrick",
    streetAddress : "1111 Nairobi"
}


function updateEmployeeWithKeyAndValue(employee,name,address){
    let newEmployee = {...employee}
    newEmployee.name = "Sam"
    newEmployee.streetAddress = "11 Broadway"
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.name = "Sam"
    employee.streetAddress = "12 Broadway"
    return employee
}

function deleteFromEmployeeByKey(employee,name){
    let newEmployee = {...employee}
    delete newEmployee[name]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee,name){
    let newEmployee = employee
    delete newEmployee[name]
    return newEmployee
}