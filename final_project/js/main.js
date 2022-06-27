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
    this.name = name;
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

  const charginAmmount = () => {
  const ammount = document.getElementById('ammount');
  const valueAmmount = ammount.value;
  ammount.value = '';  
  console.log('Estas invirtiendo un total de ' + ' ' +valueAmmount + ' ' + 'USD');

  const cryptoCategory = () => {
  const selectCrypto = document.getElementById('selectedCrypto');
  const selectedCrypto = selectCrypto.options[selectCrypto.selectedIndex].value;
  // console.log(selectedCrypto);

  //SEPA FEE
  const sepaFee = document.getElementById('sepaFee');
  sepaFee.value = 1;
  console.log(sepaFee.value)
  
  //VISA FEE
  const visaFee = document.getElementById('visaFee');
  visaFee.value = 1.8;
  console.log(visaFee.value);

  //ENGINE
  const engine = () => {
    for (const cryptos of cryptocurrencie) {
     if (cryptos.name === selectedCrypto) {
    const mainFunction = cryptocurrencie.find(element => element.name);
    let mainFunctionResult;
    mainFunctionResult = mainFunction.value;
      console.log(mainFunctionResult)
      if (sepaFee) {
        const mainResult = ((valueAmmount - 1) / mainFunctionResult);
        console.log('Comision por compra VISA' + ' ' + mainResult)
       console.log('Compraste un total de' + ' ' + mainResult + ' ' + cryptos.name);
      } else {
        const mainResult = (valueAmmount / mainFunctionResult) / 1.8;
        console.log('Compraste un total de' + ' ' + mainResult + ' ' + cryptos.name);
      };    
     };
    };
    };
  engine();
  };
  cryptoCategory();
  };  
  charginAmmount();
  };
};