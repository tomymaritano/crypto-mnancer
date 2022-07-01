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

//Constructor increasing id automatically

class Cryptos {
  static count = 5;
  constructor(name, value) {
    this.name = name;
    this.id = ++this.constructor.count;
    this.value = value;
  };
};

cryptocurrencieClass.push(new Cryptos("LUNA", 2.3));
cryptocurrencieClass.push(new Cryptos("GMT", 0.9));
cryptocurrencieClass.push(new Cryptos("DogeCoin", 0.07));
cryptocurrencieClass.push(new Cryptos("YFII", 0.2));
cryptocurrencieClass.push(new Cryptos("EOS", 30));
cryptocurrencieClass.push(new Cryptos("Tether", 0.9));
cryptocurrencieClass.push(new Cryptos("USD Coin", 1.0));
cryptocurrencieClass.push(new Cryptos("BNB", 220.21));
cryptocurrencieClass.push(new Cryptos("Solana", 0.3));
cryptocurrencieClass.push(new Cryptos("Polkadot", 7.23));
cryptocurrencieClass.push(new Cryptos("Shiba", 0.004));
cryptocurrencieClass.push(new Cryptos("Wrapped Coin", 20.063));
cryptocurrencieClass.push(new Cryptos("Avalance", 17.78));
cryptocurrencieClass.push(new Cryptos("Polygon", 0.50));
cryptocurrencieClass.push(new Cryptos("Uniswap", 5.15 ));
cryptocurrencieClass.push(new Cryptos("FTX Token", 25.27));
cryptocurrencieClass.push(new Cryptos("ChainLink", 6.40));
cryptocurrencieClass.push(new Cryptos("Cronos", 0.11));
cryptocurrencieClass.push(new Cryptos("Stellar", 0.1097));
cryptocurrencieClass.push(new Cryptos("NEAR Protocol", 3.51));
cryptocurrencieClass.push(new Cryptos("Monero", 124.61));
cryptocurrencieClass.push(new Cryptos("Algorand", 0.3052));
cryptocurrencieClass.push(new Cryptos("Cosmos", 7.27));
cryptocurrencieClass.push(new Cryptos("Etherum Classic", 15.35));
cryptocurrencieClass.push(new Cryptos("Bitcoin Cash", 106.92));
cryptocurrencieClass.push(new Cryptos("VeChain", 0.02313));
cryptocurrencieClass.push(new Cryptos("Flow", 1.61));
cryptocurrencieClass.push(new Cryptos("Decentraland", 0.8869));
cryptocurrencieClass.push(new Cryptos("ApeCoin", 4.80));
cryptocurrencieClass.push(new Cryptos("Hedera", 0.06604));
cryptocurrencieClass.push(new Cryptos("Tezos", 1.51));
cryptocurrencieClass.push(new Cryptos("The SandBox", 1.05));

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
const listElements = document.getElementById("selectedCrypto");

const addingListArray = () => {
  for (const cryptos of cryptoConcat) {
    let element = document.createElement("option");
    element.textContent = `${cryptos.name}`;
    listElements.appendChild(element);
  }
};
addingListArray();

//Reduce method to get total USD ammount of crypto money
const totalCryptoValue = cryptoConcat.reduce((a, b) => a + b.value, 0);
// console.log(totalCryptoValue);
