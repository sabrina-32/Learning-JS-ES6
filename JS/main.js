/// Maps

const question = new Map();
question.set('question', 'what is the  official  name  of the  latest  major  JS version?');

question.set(1,'ES5');

question.set(2,'ES6');
question.set(3,'ES7');
question.set(4,'ES8');

question.set('correct', 3);

question.set(true, 'Correct Answer');


question.set(false, 'Wrong Answer, Please  try  Again!');


console.log(question.get('question'));

console.log(question.size);

if(question.has(4)){

    console.log("ans 4 is here");   

}
question.clear();



question.forEach((value,  key)=> console.log(`this  is ${key}, and  it's  set  to ${value}`));


for(let  [key,value  ] of question.entries()){


}