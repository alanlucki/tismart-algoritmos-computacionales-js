txtRadio.focus()

txtArea.disabled = true
txtPerimetro.disabled = true

btnProcesar.onclick = () => {
  // leer
  r = parseFloat(txtRadio.value)

  // procesar
  txtArea.value = Math.PI * r * r
  txtPerimetro.value = 2 * Math.PI * r
  
};

btnLimpiar.onclick = () => {
  txtRadio.value = ''
  txtArea.value = ''
  txtPerimetro.value = ''
  txtRadio.focus()
};
