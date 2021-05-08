txtPen.focus()

txtUsd.disabled = true
txtEur.disabled = true
txtBtc.disabled = true

btnProcesar.onclick = () => {
  
  // constantes
  valorUsd = 3.80
  valorEur = 4.62
  valorBtc = 220296.84
    
  // leer
  soles = parseFloat(txtPen.value)
  
  // procesar
  usd = soles / valorUsd
  eur = soles / valorEur
  btc = soles / valorBtc

  // salida
  txtUsd.value = usd
  txtEur.value = eur
  txtBtc.value = btc

};

btnLimpiar.onclick = () => {
  txtUsd.value = ''
  txtEur.value = ''
  txtBtc.value = ''
  txtRadio.focus()
};
