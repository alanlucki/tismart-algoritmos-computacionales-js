// Numeros primos: retornar true si es primo y false si no lo es
// un numero es primo cuando tiene 2 divisores, la unidad y mismo numero

// 1 no es primo
// 2 si primo: 1 , 2 => tiene 2 divisores
// 3 si primo: 1 , 3 => tiene 2 divisores
// 4 no primo: 1 , 2 , 4 => tiene 3 divisores
// 5 si primo: 1 , 5 => tiene 2 divisores

const imprimir = (x) =>{
    console.log(x)
}

const numeroPrimo = ( n ) =>{

    c = 0 // contador

    for( i = 2 ; i <= n ; i++ ){
        if( n % i == 0 ){
            c++
        }
    }
    
    imprimir( c )

    return ( c == 1 ) ? true:false
    /*
    if ( c == 2 ) 
        return true
    return false
    */
}

imprimir( numeroPrimo( 45 ) )