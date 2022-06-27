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
}

cryptocurrencie.push(new Cryptos("EOS", 3, 30));
cryptocurrencie.push(new Cryptos("XPR", 4, 25));


// console.log(cryptocurrencie);
// console.log(cryptocurrencie.length);
