
dis( txtNow )
dis( txtYear )
dis( txtMonth )
dis( txtNameMonth )
dis( txtDate )
dis( txtNameDay )
dis( txtHour )
dis( txtMinute )
dis( txtSecond )
dis( txtMillis )

const getNombreMes_ = ( x ) => {

    nombre = ''

    switch( x ){

        case 0: nombre = 'Enero'; break;
        case 1: nombre = 'Febrero'; break;
        case 2: nombre = 'Marzo'; break;
        case 3: nombre = 'Abril'; break;
        case 4: nombre = 'Mayo'; break;
        case 5: nombre = 'Junio'; break;
        case 6: nombre = 'Julio'; break;
        case 7: nombre = 'Agosto'; break;
        case 8: nombre = 'Setiembre'; break;
        case 9: nombre = 'Octubre'; break;
        case 10: nombre = 'Noviembre'; break;
        case 11: nombre = 'Diciembre'; break;

    }

    return nombre

}



btnProcesar.onclick = () => {

    let now = new Date()

    set( txtNow , now )
    set( txtYear , now.getFullYear() )
    set( txtMonth , now.getMonth() + 1)
    set( txtNameMonth , getNombreMes( now.getMonth() ) )
    set( txtDate , now.getDate() )
    set( txtNameDay , getNombreDia( now.getDay() ) )
    set( txtHour , now.getHours() )
    set( txtMinute , now.getMinutes() )
    set( txtSecond , now.getSeconds() )
    set( txtMillis , now.getMilliseconds() )

};

btnLimpiar.onclick = () => {

    cle( txtNow )
    cle( txtYear  )
    cle( txtMonth )
    cle( txtNameMonth  )
    cle( txtDate  )
    cle( txtNameDay )
    cle( txtHour)
    cle( txtMinute  )
    cle( txtSecond  )
    cle( txtMillis )

};