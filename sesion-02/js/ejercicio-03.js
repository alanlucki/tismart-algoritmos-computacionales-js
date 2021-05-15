foc( txtInferior )
dis( txtGenerado )

const getAleatorioEntre = ( x , y  )=> {
    // Math.random()    
    return Math.round( x + ( y - x ) * Math.random() )
}

btnProcesar.onclick = () => {

    // lectura de datos

    inf = int( get( txtInferior  ) )
    sup = int( get( txtSuperior  ) )

    // procedimiento
    ale = getAleatorioEntre( inf , sup )
    
    // resultados
    set( txtGenerado , ale )

};

btnLimpiar.onclick = () => {

    cle(txtInferior)
    cle(txtSuperior)
    cle(txtGenerado)
    foc( txtInferior )

};