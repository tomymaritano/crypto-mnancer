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

cryptocurrencie.push(new Cryptos("LUNA", 6, 2.3));
cryptocurrencie.push(new Cryptos("GMT", 7, 0.9));
cryptocurrencie.push(new Cryptos("DogeCoin", 8, 0.07));
cryptocurrencie.push(new Cryptos("YFII", 9, 0.2 ));
cryptocurrencie.push(new Cryptos("EOS", 10, 30));

// console.log(cryptocurrencie);
// console.log(cryptocurrencie.length);

// CATEGORIES
//Order arrays by name
cryptocurrencie.sort((a, b) => {
  return (a.name > b.name) ? 1 : -1;
});
console.log(cryptocurrencie);

//Order arrays by price
cryptocurrencie.sort((a, b) => {
  return (a.value > b.value) ? 1 : -1;
});
console.log(cryptocurrencie);

