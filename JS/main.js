/// rest  parameters

 //ES5

 function isFUllAges5(limit  ){
  //   console.log(arguments);

  var argsArr = Array.prototype.slice.call(arguments);
  argsArr.forEach(function(cur){
      console.log((2020 - cur)>=18);
      
  });
     
 }

 isFUllAges5(2005,  1996,1883);



 //ES6


 function  isFUllAges6(...years){
     console.log(years);
     
years.forEach(cur=>console.log((2020-cur)>=18));


 }


 isFUllAges6(1990,1994,1998);
