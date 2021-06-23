
// Recursividad
const imprimir = (x) =>{
    console.log(x)
}

// f = f * i
const factorial = (x) => {

    if( x == 0 )
        return 1
    return factorial( x - 1 ) * x
  
} 

const main = () =>{

    // numerar del 0 - 10, con recursividad

    /*
    0! = 1
    1! = 1
    2! = 2
    3! = 6
    4! = 24
    5! = 120
    6! = 720
    */

    for (let i = 0; i < 20; i++) {
        
        imprimir( i + '!=' + factorial( i ) )

    }

}

main()