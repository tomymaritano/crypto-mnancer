//Array
const cryptocurrencie = [
  {
    name: "Bitcoin",
    id: 1,
    value: 19250,
  },
  {
    name: "Etherum",
    id: 2,
    value: 1400,
  },
  {
    name: "XPR",
    id: 3,
    value: 0.3,
  },
  {
    name: "ADA",
    id: 4,
    value: 6.8,
  },
  {
    name: "LiteCoin",
    id: 5,
    value: 52,
  },
];

//Constructor

class Cryptos {
  constructor(name, id, value) {
    this.name = name.toUpperCase();
    this.id = id;
    this.value = value;
  }
};

cryptocurrencie.push(new Cryptos("EOS", 3, 30));
cryptocurrencie.push(new Cryptos("XPR", 4, 25));

// console.log(cryptocurrencie);
// console.log(cryptocurrencie.length);

window.onload = () => {
  const form = document.getElementById('form');
  form.onsubmit = (e) => {
    e.preventDefault();

  function charginAmmount() {
  const ammount = document.getElementById('ammount');
  const valueAmmount = ammount.value;
  ammount.value = '';  
  console.log('Estas invirtiendo un total de ' + ' ' +valueAmmount + ' ' + 'USD');

  function cryptoCategory() {
  const selectCrypto = document.getElementById('selectedCrypto');
  const selectedCrypto = selectCrypto.options[selectCrypto.selectedIndex].value;
  // console.log(selectedCrypto);
  
  const engine = () => {
    for (const cryptos of cryptocurrencie) {
     if (cryptos.name == selectedCrypto) {
    const mainFunction = cryptocurrencie.find(element => element.name);
      mainFunctionResult = mainFunction.value;
    const mainResult = valueAmmount / mainFunction.value;
    console.log('Compraste un total de' + ' ' + mainResult + ' ' + cryptos.name); 
     }
    }
    };
  engine();
  };
  cryptoCategory();
  };  
  charginAmmount();
  };
};