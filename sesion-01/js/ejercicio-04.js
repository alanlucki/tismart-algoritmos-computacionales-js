txtA.focus()

txtSuma.disabled = true
txtResta.disabled = true
txtMultiplicacion.disabled = true
txtDivision.disabled = true
txtResiduo.disabled = true

btnProcesar.onclick = () => {
  // leer
  n1 = parseFloat(txtA.value)
  n2 = parseFloat(txtB.value)

  // procesar
  txtSuma.value = n1 + n2
  txtResta.value = n1 - n2
  txtMultiplicacion.value = n1 * n2
  txtDivision.value = n1 * n2
  txtResiduo.value = n1 % n2

};

btnLimpiar.onclick = () => {
  txtA.focus()
  txtA.value = ""
  txtB.value = ""
  txtSuma.value = ""
  txtResta.value = ""
  txtMultiplicacion.value = ""
  txtDivision.value = ""
  txtResiduo.value = ""
};
