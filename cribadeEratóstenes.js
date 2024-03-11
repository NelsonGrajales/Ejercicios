function criba(rango) {
    let numeros = [];
    for (let i = 2; i <= rango; i++) {
        numeros.push(i);
    }

    for (let e = 2; e ** 2 <= rango; e++) {
        for (let j = e * e; j <= rango; j += e) {
            if (numeros[j - 2] > 0) {
                numeros[j - 2] = 0;
            }
        }
    }

    let primos = numeros.filter(num => num > 1);
    console.log(primos);
}

criba(100);
