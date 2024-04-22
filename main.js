const cestaA = 100
const cestaB = 200
const cestaC = 1000

let cantidad; 
let tipodecesta;
let resultado;


function multiplicar(valor1, valor2){
    const resultado = valor1 * valor2;
    return resultado;
}

while (cantidad != 0){
    cantidad = parseInt(prompt("ingrede cuantas cestas quiere"));
    
    if (cantidad === 0){
        break;
    }

    tiendacestas = prompt("ingrese la cesta que desea:\n\ -Si quiere la cesta marca A ingrese = A \n\ -Si quiere la cesta marca B ingrese = B \n\ -Si quiere la cesta marca C ingrese = C");
     
    switch (tiendacestas){
        case "A":
           resultado = multiplicar(cestaA, cantidad);
           alert("Debe abonar $ "+ resultado + " por la cesta A");
           break;
        case "B":
            resultado = multiplicar(cestaB, cantidad);
            alert("Debe abonar $ "+ resultado + " por la cesta B");
            break;
        case "C":
            resultado = multiplicar(cestaC, cantidad);
            alert("Debe abonar $ "+ resultado+ " por la cesta C");
            break;
        default:
            alert("Operacion Invalida");
            break;
    }

    if (cantidad >= 10 ){
        valorEnvio = 0
        alert("Su costo de envio es $"+ valorEnvio);
    }
    else if (cantidad >=5 ){
        valorEnvio = 100
        alert("Su costo de envio es $"+ valorEnvio);
    }
    else {
        valorEnvio = 200
        alert("Su costo de envio es $"+ valorEnvio);
    }
}



