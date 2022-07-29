
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
  x.classList.toggle('dark-mode');
};


const changeIcon = () => {
  let x = document.getElementById('fa-moon')
  x.classList.remove('fa-moon');
  x.classList.add('fa-sun-bright');
  console.log(x)
}


//NUMBER COLORs
const moneyComparative = (x) => {
  if(x > 0) {  
    return x
  } else {
    return x
  }
};

//DARKMODE
const darkModeOnOff = () => {
  let darkMode = localStorage.getItem('darkMode')
  console.log(darkMode)
  const toggleEvent = () => {
      let x = document.getElementById('color-toggle')
      x.addEventListener('click', () => changeToggle())
      let z = localStorage.setItem('darkMode', 'enable');
  };
  const toogleEventDisable = () => {
      let x = document.getElementById('color-toggle')
      let z = localStorage.setItem('darkMode', null);
  }
  
  const darkModeAD = () => { toggleEvent() === true ? toogleEvent() : toogleEventDisable() };
  
  darkModeAD();
};
darkModeOnOff();
