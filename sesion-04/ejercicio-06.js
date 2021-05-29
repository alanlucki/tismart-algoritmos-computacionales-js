const imprimir = (x) => {
    console.log(x)
}


function main() {


    for (let i = 1; i <= 12; i++) {

        imprimir( '' )
        imprimir( 'Tabla de ' + i )
        imprimir( '==============' )

        for (let j = 1; j <= 12; j++) {
            
            imprimir( i + ' * ' + j + ' = ' + i * j  )

        }        
    }

}

main()