const cryptocurrencie = [
{
    name: bitcoin,
    id: 1,
    value: 250,
},
{
    name: etherum,
    id: 2,
    value: 140,
}
];

class Cryptos {
    constructor (name , id, value) {
        this.name = name;
        this.id = id;
        this.value = value;
    }
}

cryptocurrencie.push (new Cryptos('EOS', 3, 30));