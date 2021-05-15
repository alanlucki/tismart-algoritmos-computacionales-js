foc(txtA)

dis(txtSuma)
dis(txtResta)
dis(txtMultiplicacion)
dis(txtDivision)
dis(txtResiduo)

btnProcesar.onclick = () => {
    
    // leer datos
    a = flo(get( txtA ))
    b = flo(get( txtB ))

    // proceso
    s = a + b
    d = a - b
    p = a * b
    q = a / b
    r = a % b

    // salida de resultados
    set( txtSuma , s )
    set( txtResta , d )
    set( txtMultiplicacion , p )
    set( txtDivision , q )
    set( txtResiduo , r )

 
};

btnLimpiar.onclick = () => {

    set( txtSuma , '' )
    set( txtResta , '' )
    set( txtMultiplicacion , '' )
    set( txtDivision , '' )
    set( txtResiduo , '' )
    set( txtA , '' )
    set( txtB , '' )
    foc( txtA )

}
