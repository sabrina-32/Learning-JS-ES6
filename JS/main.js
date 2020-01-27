// classes with  subclasses

// var Person5 = function(name,  yearOfBirth,  Job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.Job = Job;
// }

// Person5.prototype.calculateAge = function(){
//     var  age = new Date().getFullYear()-this.yearOfBirth;
//     console.log(age);
    
// }

// var  Athlets =  function(name,  yearOfBirth,  Job, olympicGames,  Madels){
//     Person5.call(this,  name,  yearOfBirth, Job);
//     this.olympicGames = olympicGames;
//     this.Madels = Madels;

// }




// Athlets.prototype = Object.create(Person5.prototype);

// var  johnAthlets5 = new Athlets('john', 1990,'swimmer',3,10);
// Athlets.prototype.wonMedal = function(){
//     this.Madels++;
//     console.log(this.Madels);
    
// }

// johnAthlets5.calculateAge();
// johnAthlets5.wonMedal();



class  Person6 {
    constructor (name,  yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        var  age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
        
    }
}


class  Athlets6 extends Person6{
    constructor  (name ,yearOfBirth, job, olympicGames,  medals){
        super(name ,yearOfBirth, job);

        this.olympicGames = olympicGames;
        this.medals = medals;


    }

    wonMedals(){
        this.medals++;
        console.log( this.medals);
        
    }

    
}


const  johnAthlets6 = new Athlets6('john', 1990,'swimmer',3,10);

johnAthlets6.wonMedals();
johnAthlets6.calculateAge();
