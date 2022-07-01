//Alerts


//Input numbers validation
window.addEventListener("load", function () {
  form.ammount.addEventListener("keypress", inputNumber, false);
});

//Input numbers validation
const inputNumber = (e) => {
  let key = window.event ? e.which : e.keyCode;
  if (key < 48 || key > 57) {
    e.preventDefault();
  }
};

//IVA
const iva = (x) => x * 0.21;
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
