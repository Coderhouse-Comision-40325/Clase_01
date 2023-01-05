let numero = 10;
(function(){
    let numero = 20;
    console.log(numero); // output = 20
    if (true) {
        //let numero = 30;
        //numero = 40;
        console.log(numero); // output = 40
    }
    console.log(numero); // output = 20
})()
console.log(numero); // output = 10