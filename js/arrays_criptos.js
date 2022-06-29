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
    name: "Cardano",
    id: 4,
    value: 6.8,
  },
  {
    name: "LiteCoin",
    id: 5,
    value: 52,
  },
];

//Array for class
const cryptocurrencieClass = [];
// console.log(cryptocurrencieClass)

//Constructor
class Cryptos {
  constructor(name, id, value) {
    this.name = name;
    this.id = id;
    this.value = value;
  }
}

cryptocurrencieClass.push(new Cryptos("LUNA", 6, 2.3));
cryptocurrencieClass.push(new Cryptos("GMT", 7, 0.9));
cryptocurrencieClass.push(new Cryptos("DogeCoin", 8, 0.07));
cryptocurrencieClass.push(new Cryptos("YFII", 9, 0.2));
cryptocurrencieClass.push(new Cryptos("EOS", 10, 30));
cryptocurrencieClass.push(new Cryptos("Tether", 11, 0.9));
cryptocurrencieClass.push(new Cryptos("USD Coin", 12, 1.0));
cryptocurrencieClass.push(new Cryptos("BNB", 13, 220.21));
cryptocurrencieClass.push(new Cryptos("Solana", 14, 0.3));
cryptocurrencieClass.push(new Cryptos("Polkadot", 15, 7.23));
cryptocurrencieClass.push(new Cryptos("Shiba", 16, 0.004));
cryptocurrencieClass.push(new Cryptos("Wrapped Coin", 17, 20.063));

// console.log(cryptocurrencie);
// console.log(cryptocurrencie.length);

//Order arrays by value, name and id

//Mapping array to get on each element
const cryptocurrencieMap = cryptocurrencie.map((x) => {
  return {
    name: x.name,
    value: x.value,
    id: x.id,
  };
});
// console.log(cryptocurrencieMap);

//Copying array copy
const cryptocurrencieCopy = cryptocurrencieClass.slice();
// console.log(cryptocurrencieCopy);

//Mapping array copy
const cryptocurrencieCopyMap = cryptocurrencieCopy.map((x) => {
  return {
    name: x.name,
    value: x.value,
    id: x.id,
  };
});
// console.log(cryptocurrencieCopyMap);

//Concat array class and main array
const cryptoConcat = cryptocurrencieMap.concat(cryptocurrencieCopyMap);
// console.log(cryptoConcat)

//Sort by value
const sortValue = () => {
  cryptocurrencieMap.sort((a, b) =>
    a.value > b.value ? 1 : b.value > a.value ? -1 : 0,
  );
  return console.log(cryptocurrencieMap);
};
//sortValue();

//Sort by name
const sortName = () => {
  cryptocurrencieMap.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0,
  );
  return console.log(cryptocurrencie);
};
//sortName();

//Adding All cryptos to options
const addingListArray = () => {
  let listElements = document.getElementById("selectedCrypto");
  for (const cryptos of cryptoConcat) {
    let element = document.createElement("option");
    element.innerHTML = `${cryptos.name}`;
    listElements.appendChild(element);
  }
};
addingListArray();

//Reduce method to get total USD ammount of crypto money
const totalCryptoValue = cryptoConcat.reduce((a, b) => a + b.value, 0);
// console.log(totalCryptoValue);
