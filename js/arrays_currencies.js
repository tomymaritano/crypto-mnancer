const currencies = [
    {
        name: dolar,
        id: 1,
    },
    {
        name: euro,
        id: 2,
    },
    {
        name: argentinianPeso,
        id: 3,
    }
];

class currencie {
    currenciesConstructor (name, id) {
    this.name = name;
    this.id = id;
    }
}

currencie.push (new currencieConstructor('yen', 4));

