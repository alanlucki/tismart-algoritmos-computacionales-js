const getMayor = ( x , y ) =>  {

    /*
    if( x > y ) return x
    else return y
    */
    
    if( x > y ) return x
    return y

}

const getMenor = ( x , y ) =>  {

    /*
    if( x > y ) return x
    else return y
    */
    
    if( x < y ) return x
    return y

}

foc( txtNumero01 )
dis( txtNumeroMayor )
dis( txtNumeroMenor )

btnProcesar.onclick = () => {

    // leer datos
    n1 = int( get( txtNumero01 ) )
    n2 = int( get( txtNumero02 ) )

    // procedimiento
    mayor = getMayor( n1 , n2  )
    menor = getMenor( n1 , n2  )

    // salida de resultados
    set( txtNumeroMayor , mayor  )
    set( txtNumeroMenor , menor  )


};

btnLimpiar.onclick = () => {

    cle( txtNumeroMayor )
    cle( txtNumeroMenor )
    cle( txtNumero01 )
    cle( txtNumero02 )
    foc( txtNumero01 )

};