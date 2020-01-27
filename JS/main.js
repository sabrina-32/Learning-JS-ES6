
//ES6


class  Person6{
    constructor (name,  yearOfBirth,  job){
        this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    }


    calculateAge(){
        var   age  = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
    }
}

const john6= new Person6('John' , 1990, 'Teacher');