//Spread  operator


function addFourAges (a,b,c,d){

    return  a+b+c+d;
}

var  sum1 =  addFourAges(18,15,10,22);

console.log(sum1);



//ES5


var ages = [18,15,10,22];

var  sum2 = addFourAges.apply(null, ages);
console.log(sum2);


//ES6


const sum3 = addFourAges(...ages);
console.log(sum3);


const familySmith = ["John", "jane","mark"];
const familyMiller = ['mary',  'bob', 'ann'];

const bigFamily = [...familyMiller, ...familySmith, "lily"];
console.log(bigFamily);



const h =  document.querySelector('h1');
const  boxes = document.querySelectorAll('.box');

const  all = [h, ...boxes];


Array.from(all).forEach(cur => cur.style.color = 'purple');
