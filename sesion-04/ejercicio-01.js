// Recursividad
const imprimir = (x) =>{
    console.log(x)
}

const numera = (x)=>{
    if(x > 0 ) 
        numera( x - 1 )
    
    imprimir(x)
}

numera(10)