const getAleatorioEntre = (x, y) => {
  return Math.round(x + (y - x) * Math.random());
};

btnProcesar.onclick = () => {
  inf = int(get(txtInferior));
  sup = int(get(txtSuperior));
  res = getAleatorioEntre(inf, sup);

  set(txtGenerado, res);
};

btnLimpiar.onclick = () => {};
