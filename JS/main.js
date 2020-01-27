

var  box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){


        document.querySelector('.green')
        .addEventListener('click',() =>{
            var str = 'This  is  box number '
            +this.position+' and  it is '+this.color;
            alert(str);
        });
    }
}

box6.clickMe();


var  box66 = {
    color: 'blue',
    position: 2,
    clickMe: function(){


        document.querySelector('.blue')
        .addEventListener('click',() =>{
            var str = 'This  is  box number '
            +this.position+' and  it is '+this.color;
            alert(str);
        });
    }
}
box66.clickMe();

var  box666 = {
    color: 'red',
    position: 3,
    clickMe: function(){


        document.querySelector('.red')
        .addEventListener('click',() =>{
            var str = 'This  is  box number '
            +this.position+' and  it is '+this.color;
            alert(str);
        });
    }
}

box666.clickMe();