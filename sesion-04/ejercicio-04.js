
// Recursividad
const imprimir = (x) =>{
    console.log(x)
}

/*
    if( x == 0 || x == 1)
        return x
*/
const fib = (x) => {

    if( x == 0 )
        return 0
    if( x == 1 )
        return 1

    return fib( x - 1 ) + fib( x - 2 )
  
} 

const main = () =>{

    // numerar del 0 - 10, con recursividad

    /*

    fib( 0 ) = 0
    fib( 1 ) = 1
    fib( 2 ) = 1
    fib( 3 ) = 2
    fib( 4 ) = 3
    fib( 5 ) = 5
    fib( 6 ) = 8
    fib( 7 ) = 13
    ...
    fib( x ) = fib( x - 1 ) + fib( x - 2 )

    */

    for (let i = 0; i < 20; i++) {
        
        imprimir( 'fib( ' + i + ' )= ' + fib( i ) )

    }

}

main()