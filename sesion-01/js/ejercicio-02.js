txtNumero01.focus();

btnProcesar.onclick = () => {

  // ingreso de datos
  n1 = parseFloat(txtNumero01.value) // parseFloat: convierte texto a numero real
  n2 = parseFloat(txtNumero02.value)

  // procedimiento
  suma = n1 + n2

  // salida de resultados  
  txtResultado.value = suma

};
btnLimpiar.onclick = () => {

  txtNumero01.value = ''
  txtNumero02.value = ''
  txtResultado.value = ''
  txtNumero01.focus();

};