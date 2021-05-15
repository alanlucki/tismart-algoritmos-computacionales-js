const par = (control, x) =>{

    if( x % 2 == 0 ) {
        color(control , 'azul' )
        return 'Par'
    }    
    color(control , 'rojo' )
    return 'Impar' 

} 

const color = (control , x ) =>{

    if( x == 'rojo' ){
        txtResultado.classList.remove("color-blue");
        txtResultado.classList.add("color-red");
    }
    if( x == 'azul' ){
        txtResultado.classList.remove("color-red");
        txtResultado.classList.add("color-blue");
    }
    
} 

btnProcesar.onclick = () => {

    n = int( get( txtNumero ) )
    set( txtResultado , par(txtResultado,n) )
    
};

btnLimpiar.onclick = () => {

};