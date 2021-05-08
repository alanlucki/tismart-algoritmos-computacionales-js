txtNumero01.focus();

btnSuma.onclick = () => {
  // leer
  n1 = txtNumero01.value;
  n2 = txtNumero02.value;

  // procesar
  r = parseFloat(n1) + parseFloat(n2);

  // imprimir
  txtResultado.value = r;
};
btnResta.onclick = () => {
  // leer
  n1 = txtNumero01.value;
  n2 = txtNumero02.value;

  // procesar
  r = parseFloat(n1) - parseFloat(n2);

  // imprimir
  txtResultado.value = r;
};
btnMultiplicacion.onclick = () => {
  // leer
  n1 = txtNumero01.value;
  n2 = txtNumero02.value;

  // procesar
  r = parseFloat(n1) * parseFloat(n2);

  // imprimir
  txtResultado.value = r;
};
btnDivision.onclick = () => {
  // leer
  n1 = txtNumero01.value;
  n2 = txtNumero02.value;

  // procesar
  r = parseFloat(n1) / parseFloat(n2);

  // imprimir
  txtResultado.value = r;
};
btnResiduo.onclick = () => {
  // leer
  n1 = txtNumero01.value;
  n2 = txtNumero02.value;

  // procesar
  r = parseInt(n1) % parseInt(n2);

  // imprimir
  txtResultado.value = r;
};
btnLimpiar.onclick = () => {
  txtNumero01.value = "";
  txtNumero02.value = "";
  txtResultado.value = "";
  txtNumero01.focus();
};
