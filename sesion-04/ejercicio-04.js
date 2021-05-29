// Recursividad
const imprimir = (x) =>{
    console.log(x)
}

const fibonacci = (x)=>{
    if(x == 0 || x == 1 ) 
        return x
    return fibonacci(x -1) + fibonacci(x -2)
}

n = 0 
while( n < 10 ){
    imprimir( 'fibo( ' + n + ' ) = ' + fibonacci(n) )
    n++
}
    