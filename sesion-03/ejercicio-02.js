// crear un algoritmo que nos brinde la suma de los numeros
const sumaNumeros = ( ini , fin ) =>{

    suma = 0 // acumulador

    for( i = ini ; i <= fin ; i++ ){

        suma = suma + i

    }

    return suma

}

console.log( sumaNumeros( 1 , 5 ) )
