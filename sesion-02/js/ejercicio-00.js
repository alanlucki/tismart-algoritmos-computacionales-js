txtA.focus()

txtSuma.disabled = true
txtResta.disabled = true
txtMultiplicacion.disabled = true
txtDivision.disabled = true
txtResiduo.disabled = true

const suma = ( n1 , n2 ) =>{
    return n1 + n2 
}
const diferencia = ( n1 , n2 ) =>{
    return n1 - n2 
}
const producto = ( n1 , n2 ) =>{
    return n1 * n2 
}
const cociente = ( n1 , n2 ) =>{
    return n1 / n2 
}
const resto = ( n1 , n2 ) =>{
    return n1 % n2 
}

btnProcesar.onclick = () => {
  
    // leer datos
    na = flo(get( txtA ))
    nb = flo(get( txtB ))

    // procesar datos
    s = suma( na , nb  )
    d = diferencia( na , nb  )
    p = producto(  na , nb )
    q = cociente( na , nb  )
    r = resto( na , nb  )

    // resultados
    set( txtSuma , s )
    set( txtResta , d )
    set( txtMultiplicacion , p )
    set( txtDivision , q )
    set( txtResiduo , r )
    
};

btnLimpiar.onclick = () => {
  
};
