const laberinto = () =>  {
    const prueba = [
        [0, 1, 0, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 1, '*']
      ];
      
    let miPosicion;
    let cordenadas = {
        x:  0,
        y: 0
    }

    while(miPosicion != '*'){
        for(let e = 0; e < 4; e++){
           if(cordenadas.x > 0 && cordenadas.y > 0){
            if(prueba[cordenadas.x - 1][cordenadas.y] === 0){
                cordenadas.x -= 1;
                miPosicion = prueba[cordenadas.x - 1][cordenadas.y]; 
            }else if(prueba[cordenadas.x + 1][cordenadas.y] === 0){
                cordenadas.x += 1;
                miPosicion = prueba[cordenadas.x + 1][cordenadas.y]; 
            }else if(prueba[cordenadas.x][cordenadas.y - 1] === 0){
                cordenadas.y -= 1;
                miPosicion = prueba[cordenadas.x][cordenadas.y - 1]; 
            }else if(prueba[cordenadas.x][cordenadas.y + 1] === 0){
                cordenadas.y += 1;
                miPosicion = prueba[cordenadas.x][cordenadas.y + 1]; 
            }
           }else{
            if(prueba[cordenadas.x + 1][cordenadas.y] === 0){
                cordenadas.x += 1;
                miPosicion = prueba[cordenadas.x + 1][cordenadas.y]; 
            }else if(prueba[cordenadas.x][cordenadas.y + 1] === 0){
                cordenadas.y += 1;
                miPosicion = prueba[cordenadas.x][cordenadas.y + 1]; 
            }
           }
        }
    }
    for (let i = 0; i < prueba.length; i++) {
        console.log(prueba[i]);
    }
}  

laberinto()