//IVA
const iva = (x) => x * 0.21;

//TAXESIIIII
const taxes = (a, b, c) => {
  return (a - b) / c;
};

//Bank transfers
const sepa = (x) => {
  x--;
};

const visaFee = (x) => {
  x * 0.18;
};

const changeToggle = () => {
  let x = document.body
  console.log(x)
  x.classList.toggle('dark-mode')
};

const toggleEvent = () => {
  document.getElementById('color-toggle').addEventListener('click', () => changeToggle())
};
toggleEvent();