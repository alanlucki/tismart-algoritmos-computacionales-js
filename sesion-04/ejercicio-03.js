// Recursividad
const imprimir = (x) =>{
    console.log(x)
}

const factorial = (x)=>{
    if(x == 0 ) 
        return 1
    return x * factorial(x -1)
}

imprimir( factorial(7) )