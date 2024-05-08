function employees(arr) {
    let employees = []

    class Employee {
        constructor(name, personalNumber) {
            this.name = name
            this.personalNumber = personalNumber
        }

    }

    for (let i = 0; i < arr.length; i++) {
        let name = arr[i].split(', ')
        for (let j = 0; j < name.length; j++) {
            let personalNumber = name[j].length
            let employee = new Employee(name, personalNumber)
            employees.push(employee)
        }

    }

    return employees.forEach((i)=>console.log(`Name: ${i.name} -- Personal Number: ${i.personalNumber}`))


}

employees([
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
)