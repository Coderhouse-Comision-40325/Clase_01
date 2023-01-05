const numero = 10;
(function(){
    const numero = 20;
    console.log(numero) // salida(output) = 20
    if (true) {
        const numero = 30;
        //numero = 40; // ERROR = TypeError
        console.log(numero); // output = 30
    }
    console.log(numero) // output = 20
})()
console.log(numero); // output = 10