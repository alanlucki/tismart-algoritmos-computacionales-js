const imprimir = (x) => {
    console.log(x)
}

const main = ()=>{

    for (let i = 0; i <= 12; i++) {

        imprimir('===============')    
        imprimir('Tabla del ' + i )    
        imprimir('===============')
        
        for (let j = 0; j <= 12; j++) {

            imprimir(  i + ' x ' + j + ' = '+  i *  j )

        }   

    }

} 

main()
