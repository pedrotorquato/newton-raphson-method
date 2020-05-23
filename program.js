function f(x){
    return Math.pow(x, 2) + x - 1; // f(x) = x² + x - 1
}

function df(x){
    return 2*x + 1; // f'(x) = 2x + 1
}

function resultado(cont, x){
    var cont = cont;
    var x = x;
    while(cont > 0){
        console.log("Valor atual: " + x);
        x = x - (f(x) / df(x));
        cont--;
    }
    console.log("Resultado: " + x);
}

resultado(2, -1); //X = 2 and Y = -1








