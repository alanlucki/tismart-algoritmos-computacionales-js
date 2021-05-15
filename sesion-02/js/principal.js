const get = (x) => {
    // x : cajita de texto
    return x.value
}

const set = (x, y) => {
    // x : cajita de texto
    // y : valor a asignar 
    x.value = y
}
/*

function get(){
    return control.value
}

*/

const flo = (x) => {
    return parseFloat(x)
}

const int = (x) => {
    return parseInt(x)
}

const dis = (x) => {
    x.disabled = true;
}

// funciones correspondientes a fechas
const getNombreMes = (x) => {

    return ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'][x]

}
const getNombreDia = (x) => {

    return ['Domingo','Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'][x]

}
const cle = (x) =>{
    x.value = ''
}
const foc = (x) => {
    x.focus()
}