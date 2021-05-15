const get = (control) => {
  return control.value;
};

const set = (control, valor) => {
  control.value = valor;
};

const flo = (cadena) => {
  return parseFloat(cadena);
};

const int = (cadena) => {
  return parseInt(cadena);
};

const foc = (control) => {
  control.focus();
};

const dis = (control) => {
  control.disabled = true;
};
