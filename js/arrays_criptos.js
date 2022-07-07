//Array
const cryptocurrencie = [
  {
    name: 'Bitcoin',
    abbr: 'BTC',
    id: 1,
    value: 19250,
    mkt: 350000,
    type: 'ETF',
  },
  {
    name: 'Etherum',
    abbr: 'ETH',
    id: 2,
    value: 1400,
    mkt: 133046,
    type: 'ETF',
  },
  {
    name: 'XPR',
    abbr: 'XPR',
    id: 3,
    value: 0.3,
    mkt: 35.0,
    type: 'ETF',
  },
  {
    name: 'Cardano',
    abbr: 'ADA',
    id: 4,
    value: 6.8,
    mkt: 35.0,
    type: 'POS',
  },
  {
    name: 'LiteCoin',
    abbr: 'LTC',
    id: 5,
    value: 52,
    mkt: 35.0,
    type: 'POS',
  },
];

//Array for class
const cryptocurrencieClass = [];
// console.log(cryptocurrencieClass)

//Constructor increasing id automatically

class Cryptos {
  static count = 5;
  constructor(name, abbr, value, mkt, type) {
    this.name = name;
    this.abbr = abbr;
    this.id = ++this.constructor.count;
    this.value = value;
    this.mkt = mkt;
    this.type = type;
  }
}

//Va


//NFT
cryptocurrencieClass.push(new Cryptos("My neighbor Alice", "ALICE", 2.48, 74.88, 'NFT'));
cryptocurrencieClass.push(new Cryptos("ApeCoin", "APE", 5.13, 1.537, 'NFT'));
cryptocurrencieClass.push(new Cryptos("Axie Infinity", "AXS", 15.92, 1.261, 'NFT'));
cryptocurrencieClass.push(new Cryptos("Bakery Token", "BAKE", 0.300, 58.07, 'NFT'));
cryptocurrencieClass.push(new Cryptos("BinaryX", "BNX", 118.20, 239.10, 'NFT'));
cryptocurrencieClass.push(new Cryptos("Chromia", "CRX", 0.190, 108.34, 'NFT'));
cryptocurrencieClass.push(new Cryptos("SuperRare", "RARE",0.24 , 25.13, 'NFT'));
cryptocurrencieClass.push(new Cryptos("Green Token Metaverse", "GTM", 0.90, 589.15, 'NFT'));
cryptocurrencieClass.push(new Cryptos("HighStreet", "HIGH", 1.45, 17.83, 'NFT'));
cryptocurrencieClass.push(new Cryptos("Immutable X", "IMX",  1.01, 237.63, 'NFT'));
cryptocurrencieClass.push(new Cryptos("Decentraland", "MANA", 0.93, 1.726, 'NFT'));
cryptocurrencieClass.push(new Cryptos("OriginToken", "OGN", 0.26, 106.70, 'NFT'));
cryptocurrencieClass.push(new Cryptos("The SandBox", "SAND", 0.45, 53.43, 'NFT'));
cryptocurrencieClass.push(new Cryptos("Dego Finance", "1.62", 1.62, 13.94, 'NFT'));
cryptocurrencieClass.push(new Cryptos("Enjin Coin", "ENJ", 0.56, 502.32, 'NFT'));
cryptocurrencieClass.push(new Cryptos("Ethernity Chain", "ERN", 1.59, 24.60, 'NFT'));


//POS
cryptocurrencieClass.push(new Cryptos("AERGO", "Aergo", 0.45, 53.43, 'POS'));
cryptocurrencieClass.push(new Cryptos("AION", "AION", 0.13, 53.47, 'POS'));
cryptocurrencieClass.push(new Cryptos("Algorand", "ALGO", 0.31, 2.210, 'POS'));
cryptocurrencieClass.push(new Cryptos("Ambrous", "AMBO", 0.0005, 5.17, 'POS'));
cryptocurrencieClass.push(new Cryptos("Ankr", "ANKR", 0.0029, 238.82, 'POS'));
cryptocurrencieClass.push(new Cryptos("Aragon", "ANT", 1.73, 68.52, 'POS'));
cryptocurrencieClass.push(new Cryptos("Ardor", "ARDR",  0.10, 104.98, 'POS'));
cryptocurrencieClass.push(new Cryptos("Ark", "ARK", 0.42, 59.09, 'POS'));
cryptocurrencieClass.push(new Cryptos("Cosmos", "ATOS", 9.09, 2.603, 'POS'));
cryptocurrencieClass.push(new Cryptos("Avalanche", "AVAX", 19.84, 5.622, 'POS'));
cryptocurrencieClass.push(new Cryptos("BAND", "BAND", 1.4, 49.25, 'POS'));
cryptocurrencieClass.push(new Cryptos("BNB", "BNB", 241.1, 39.394, 'POS'));
cryptocurrencieClass.push(new Cryptos("BitShares", "BTS", 0.01, 33.11, 'POS'));
cryptocurrencieClass.push(new Cryptos("BitTorrent", "BTTC", 0.0, 934.943, 'POS'));
cryptocurrencieClass.push(new Cryptos("Clover Finance", "CLV", 0.09, 30.66, 'POS'));
cryptocurrencieClass.push(new Cryptos("Cocos-BCX", "COCOS", 0.74, 49.93, 'POS'));
cryptocurrencieClass.push(new Cryptos("Shentu", "CTK", 0.84, 89.98, 'POS'));
cryptocurrencieClass.push(new Cryptos("Cartesei", "CTSI", 0.153, 89.09, 'POS'));
cryptocurrencieClass.push(new Cryptos("Dash", "DASH", 45.20, 488.53, 'POS'));
cryptocurrencieClass.push(new Cryptos("Decred", "DCR", 22.40, 317.22, 'POS'));
cryptocurrencieClass.push(new Cryptos("DIA", "DIA", 0.41, 33.28, 'POS'));
cryptocurrencieClass.push(new Cryptos("DOT", "Polkadot", 7.15, 7.061, 'POS'));

//FANTOKEN
cryptocurrencieClass.push(new Cryptos("AC Milan", "ACM", 2.84000, 8.94, 'Fan Token'));
cryptocurrencieClass.push(new Cryptos("Alpine", "F1 ALPINE", 2.45, 27.32, 'Fan Token'));
cryptocurrencieClass.push(new Cryptos("AS ROMA", "ASR", 2.95, 6.38, 'Fan Token'));
cryptocurrencieClass.push(new Cryptos("Atletico Madrid", "ATM", 3.19, 6.65, 'Fan Token'));
cryptocurrencieClass.push(new Cryptos("FC Barcelona", "BAR", 4.07, 16.00, 'Fan Token'));
cryptocurrencieClass.push(new Cryptos("Chiliz", "CHZ", 0.10, 608.43, 'Fan Token'));
cryptocurrencieClass.push(new Cryptos("Manchester City", "CITY", 4.52, 15.86, 'Fan Token'));
cryptocurrencieClass.push(new Cryptos("Juventus", "JUV", 3.84, 5.02, 'Fan Token'));
cryptocurrencieClass.push(new Cryptos("LAZIO", "LAZIO", 2.14, 18.40, 'Fan Token'));
cryptocurrencieClass.push(new Cryptos("OG", "OG", 3.48, 4.43, 'Fan Token'));
cryptocurrencieClass.push(new Cryptos("FC PORTO", "PORTO", 1.81, 14.11, 'Fan Token'));
cryptocurrencieClass.push(new Cryptos("Paris Saint Germain", "PSG", 6.28, 19.53, 'Fan Token'));
cryptocurrencieClass.push(new Cryptos("Santo FC", "SANTOS", 3.73, 16.97, 'Fan Token'));



//Money Format
function moneyFormat(price, sign = '$') {
  const pieces = parseFloat(price).toFixed(2).split('')
  let ii = pieces.length - 3
  while ((ii-=3) > 0) {
    pieces.splice(ii, 0, ',')
  }
  return sign + pieces.join('')
}

// console.log(cryptocurrencie);
// console.log(cryptocurrencie.length);

//Order arrays by value, name and id

//Mapping array to get on each element
const cryptocurrencieMap = cryptocurrencie.map((x) => {
  return {
    name: x.name,
    abbr: x.abbr,
    value: x.value,
    id: x.id,
    mkt: x.mkt,
    type: x.type,
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
    abbr: x.abbr,
    value: x.value,
    id: x.id,
    mkt: x.mkt,
    type: x.type,
  };
});
// console.log(cryptocurrencieCopyMap);

//Concat array class and main array
const cryptoConcat = cryptocurrencieMap.concat(cryptocurrencieCopyMap);
console.log(cryptoConcat);

const cryptoConcatCopy = [...cryptoConcat]
// console.log(cryptoConcatCopy)

//Sort by value
  cryptoConcatCopy.sort((a, b) => a.value > b.value ? 1 : b.value > a.value ? -1 : 0);
// sortValue();

//Sort by name
  cryptoConcatCopy.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0)
  // console.log(cryptoConcat)
// sortName();

//Reduce method to get total USD ammount of crypto money
const totalCryptoValue = cryptoConcat.reduce((a, b) => a + b.value, 0);
// console.log(totalCryptoValue);


