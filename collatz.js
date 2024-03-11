const collatz = (valor) => {
    let secuencia = 1;
    if(valor >= 0 && Number.isInteger(valor)){
        console.log(valor);
        do {
            if(valor % 2 ===0){
                valor /= 2;
            }else{
                valor = valor * 3 + 1;
            }
            secuencia++;
            console.log(valor);
        } while (valor != 1);
    }
    console.log(`Longitud de la secuencia: ${secuencia}`)
}

collatz(1)