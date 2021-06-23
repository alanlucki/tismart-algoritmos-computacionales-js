
// Recursividad
const imprimir = (x) =>{
    console.log(x)
}

const numera = (x) => {

    imprimir( x )

    if( x > 0 )
        numera( x - 1 )
  
} 

const main = () =>{

    // numerar del 0 - 10, con recursividad
    numera( 10 )

}

main()