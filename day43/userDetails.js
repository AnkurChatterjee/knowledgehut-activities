class User{
    constructor(id,name,gender,salary){
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.salary = salary;
    }
    display = () => {
        console.log(`Id: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`Salary: ${this.salary}`);
    }
}

module.exports = User;