const pascal = (valor) => {
    let triangulo = [];
    let numero = 1;
    triangulo[0] = [1]
    for(let i = 0; i < valor; i++){
        triangulo[i] = [];
        for(let e = 0; e < numero; e++){
            triangulo[i][e] = (factorial(i) / (factorial(e) * factorial(i - e)));
        }
        numero++
    }

    for (let i = 0; i < triangulo.length; i++) {
        console.log(triangulo[i]);
    }
}


function factorial(numero) {
    let total = 1
    for(let e = 1; e <= numero; e++){
        total *= e;
    }
    return total
}

pascal(10)
