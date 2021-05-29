// Recursividad
const imprimir = (x) =>{
    console.log(x)
}

const numera = (x)=>{
    
    imprimir(x)
    
    if(x > 0 ) 
        numera( x - 1 )
}

numera(10)