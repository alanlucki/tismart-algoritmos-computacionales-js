const getMayor = (x , y )=>{

    if( x > y ) return x
    return y

}
const getMenor = (x , y )=>{

    if( x < y ) return x
    return y

}

btnProcesar.onclick = () => {

    n1 = flo( get( txtNumero01  ) )
    n2 = flo( get( txtNumero02  ) )

    mayor = getMayor( n1,n2 )
    menor = getMenor( n1,n2 )

    set( txtNumeroMayor , mayor )
    set( txtNumeroMenor , menor )

};

btnLimpiar.onclick = () => {

};