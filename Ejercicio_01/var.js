var numero = 10;
(function(){
    var numero = 20;
    console.log(numero); // output = 20
    if(true){
        var numero = 30;
        numero = 40;
        console.log(numero) // output = 40
    }
    console.log(numero) // output = 40
})()
console.log(numero); // output = 10