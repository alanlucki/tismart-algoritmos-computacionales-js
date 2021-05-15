const getNameMonth = ( x ) => {

    nombre = ''

    switch( x ){
        case 0:nombre= 'Enero'; break;
        case 1:nombre= 'Febrero'; break;
        case 2:nombre= 'Marzo'; break;
        case 3:nombre= 'Abril'; break;
        case 4:nombre= 'Mayo'; break;
        case 5:nombre= 'Junio'; break;
        case 6:nombre= 'Julio'; break;
        case 7:nombre= 'Agosto'; break;
        case 8:nombre= 'Setiembre'; break;
        case 9:nombre= 'Octubre'; break;
        case 10:nombre= 'Noviembre'; break;
        case 11:nombre= 'Diciembre'; break;
    }

    return nombre
}

const getNameDay = ( x ) => {
    
    x--
    nombre = ''
    switch( x ){
         
        case 0:nombre= 'Lunes'; break;
        case 1:nombre= 'Martes'; break;
        case 2:nombre= 'Miercoles'; break;
        case 3:nombre= 'Jueves'; break;
        case 4:nombre= 'Viernes'; break;
        case 5:nombre= 'Sábado'; break;
        case 6:nombre= 'Domingo'; break;
    }

    return nombre
}

btnProcesar.onclick = () => {

    let now= new Date();

    set( txtNow , now )
    set( txtYear , now.getFullYear() )
    set( txtMonth , now.getMonth() + 1 )
    set( txtNameMonth , getNameMonth( now.getMonth() ) )
    set( txtDate , now.getDate() )
    set( txtNameDay , getNameDay( now.getDay() ) )
    set( txtHour , now.getHours() )
    set( txtMinute , now.getMinutes() )
    set( txtSecond , now.getSeconds() )
    set( txtMillis , now.getMilliseconds() )

};

btnLimpiar.onclick = () => {

};