

console.log("-----1. Employee Class-----");

class Employee {
    constructor (id, firstName, lastName, taxId, salary) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.taxId = taxId
        this.salary = salary
    }

    generatePaySlip(){

        console.log(`Employee ID: ${this.id}`);
        console.log(`Name: ${this.firstName} ${this.lastName}`);
        console.log(`TaxID: ${this.taxId}`);
        console.log(`Pay: ${(this.salary / 12).toFixed(2)}`);

        
        
        }
    }


const employee1 = new Employee(1, 'Hunter S.', 'Thompson', 789789, 50000)



console.log(employee1);
employee1.generatePaySlip()

console.log("-----2. Manager Class-----");

class Manager extends Employee {

    constructor (id, firstName, lastName, taxId, salary) {

        super(id, firstName, lastName, taxId, salary)

        this.managedEmployees = []

        // console.log(this);

        // this.managedEmployees = []
    }


    addManagedEmployee(addition) {
        this.managedEmployees.push(addition)
        // console.log(this.managedEmployees);
      
    }

    removeManagedEmployee(employee) {
        // this.managedEmployees = this.managedEmployees.filter ((item) => item.id !== managedEmployee.id)
        // console.log(this.managedEmployees);

        const idx = this.managedEmployees.findIndex(item => employee.id === item.id)
        this.managedEmployees.splice(idx, 1)
    }

}
const lala = new Employee (2, 'Lala', 'Christl', 456456, 75000)

const daniel = new Employee (3, 'Daniel', 'Reiller', 456456, 75000)
const manager = new Manager (4, 'Esther', 'Reiller', 456456, 75000
)

manager.addManagedEmployee(employee1)
manager.addManagedEmployee(lala)
manager.addManagedEmployee(daniel)



manager.removeManagedEmployee(lala)
console.log(manager)


