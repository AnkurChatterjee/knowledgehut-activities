class Person{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    display  = () => {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
    }
}

module.exports = Person;
