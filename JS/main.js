const  second = () =>{

    setTimeout(()=>{
        console.log(' Async hey there');

    }, 2000);
    
}


const  first = () =>{
    console.log('hey there');
    second();
    console.log('the end');
    
  
}

first();




