const imprimir = (x) =>{
    console.log(x)
}

const eliminarEspacios = ( cad )=>{

    cadenaFinal = ''
    
    for (let i = 0; i < cad.length; i++) {        
        if( cad.charAt(i) !== ' ' && cad.charAt(i+1) !== ' '  ){
            cadenaFinal = cadenaFinal + cad.charAt(i) 
        }else if(  cad.charAt(i) !== ' ' && cad.charAt(i+1) == ' '   ){
            cadenaFinal = cadenaFinal + cad.charAt(i) + ' '
        }
    }    
    return cadenaFinal
}

cadena = 'Hola                mundo  buenos  días'

imprimir( "Cadena Inicial = " + cadena)
imprimir(  "Cadena Final = " + eliminarEspacios(cadena) )

// 'Hola mundo buenos días'