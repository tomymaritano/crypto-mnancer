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
    mkt: 351220,
    type: 'ETF',
  },
  {
    name: 'Cardano',
    abbr: 'ADA',
    id: 4,
    value: 6.8,
    mkt: 33220,
    type: 'POS',
  },
  {
    name: 'LiteCoin',
    abbr: 'LTC',
    id: 5,
    value: 52,
    mkt: 33220,
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

//NFT
cryptocurrencieClass.push(new Cryptos("My neighbor Alice", "ALICE", 2.48, 7488000, 'NFT'));
cryptocurrencieClass.push(new Cryptos("ApeCoin", "APE", 5.13, 15370000, 'NFT'));
cryptocurrencieClass.push(new Cryptos("Axie Infinity", "AXS", 15.92, 1261100, 'NFT'));
cryptocurrencieClass.push(new Cryptos("Bakery Token", "BAKE", 0.300, 5807300, 'NFT'));
cryptocurrencieClass.push(new Cryptos("BinaryX", "BNX", 118.20, 23910100, 'NFT'));
cryptocurrencieClass.push(new Cryptos("Chromia", "CRX", 0.190, 1083200, 'NFT'));
cryptocurrencieClass.push(new Cryptos("SuperRare", "RARE",0.24 , 2513300, 'NFT'));
cryptocurrencieClass.push(new Cryptos("Green Token Metaverse", "GTM", 0.90, 5891500, 'NFT'));
cryptocurrencieClass.push(new Cryptos("HighStreet", "HIGH", 1.45, 1783232, 'NFT'));
cryptocurrencieClass.push(new Cryptos("Immutable X", "IMX",  1.01, 2376323, 'NFT'));
cryptocurrencieClass.push(new Cryptos("Decentraland", "MANA", 0.93, 1726023, 'NFT'));
cryptocurrencieClass.push(new Cryptos("OriginToken", "OGN", 0.26, 10670323, 'NFT'));
cryptocurrencieClass.push(new Cryptos("The SandBox", "SAND", 0.45, 532392, 'NFT'));
cryptocurrencieClass.push(new Cryptos("Dego Finance", "1.62", 1.62, 139499, 'NFT'));
cryptocurrencieClass.push(new Cryptos("Enjin Coin", "ENJ", 0.56, 50232932, 'NFT'));
cryptocurrencieClass.push(new Cryptos("Ethernity Chain", "ERN", 1.59, 2460932, 'NFT'));

//POS
cryptocurrencieClass.push(new Cryptos("AERGO", "Aergo", 0.45, 53343, 'POS'));
cryptocurrencieClass.push(new Cryptos("AION", "AION", 0.13, 53247, 'POS'));
cryptocurrencieClass.push(new Cryptos("Algorand", "ALGO", 0.31, 21210, 'POS'));
cryptocurrencieClass.push(new Cryptos("Ambrous", "AMBO", 0.0005, 2317, 'POS'));
cryptocurrencieClass.push(new Cryptos("Ankr", "ANKR", 0.0029, 2383282, 'POS'));
cryptocurrencieClass.push(new Cryptos("Aragon", "ANT", 1.73, 6823252, 'POS'));
cryptocurrencieClass.push(new Cryptos("Ardor", "ARDR",  0.10, 1042398, 'POS'));
cryptocurrencieClass.push(new Cryptos("Ark", "ARK", 0.42, 592309, 'POS'));
cryptocurrencieClass.push(new Cryptos("Cosmos", "ATOS", 9.09, 2603, 'POS'));
cryptocurrencieClass.push(new Cryptos("Avalanche", "AVAX", 19.84, 5622, 'POS'));
cryptocurrencieClass.push(new Cryptos("BAND", "BAND", 1.4, 4925, 'POS'));
cryptocurrencieClass.push(new Cryptos("BNB", "BNB", 241.1, 39394, 'POS'));
cryptocurrencieClass.push(new Cryptos("BitShares", "BTS", 0.01, 3311, 'POS'));
cryptocurrencieClass.push(new Cryptos("BitTorrent", "BTTC", 0.0, 934943, 'POS'));
cryptocurrencieClass.push(new Cryptos("Clover Finance", "CLV", 0.09, 3066, 'POS'));
cryptocurrencieClass.push(new Cryptos("Cocos-BCX", "COCOS", 0.74, 4993, 'POS'));
cryptocurrencieClass.push(new Cryptos("Shentu", "CTK", 0.84, 8998, 'POS'));
cryptocurrencieClass.push(new Cryptos("Cartesei", "CTSI", 0.153, 8909, 'POS'));
cryptocurrencieClass.push(new Cryptos("Dash", "DASH", 45.20, 48853, 'POS'));
cryptocurrencieClass.push(new Cryptos("Decred", "DCR", 22.40, 31722, 'POS'));
cryptocurrencieClass.push(new Cryptos("DIA", "DIA", 0.41, 3328, 'POS'));
cryptocurrencieClass.push(new Cryptos("DOT", "Polkadot", 7.15, 7061, 'POS'));

//FANTOKEN
cryptocurrencieClass.push(new Cryptos("AC Milan", "ACM", 2.84000, 894, 'Fan Token'));
cryptocurrencieClass.push(new Cryptos("Alpine", "F1 ALPINE", 2.45, 2732, 'Fan Token'));
cryptocurrencieClass.push(new Cryptos("AS ROMA", "ASR", 2.95, 638, 'Fan Token'));
cryptocurrencieClass.push(new Cryptos("Atletico Madrid", "ATM", 3.19, 665, 'Fan Token'));
cryptocurrencieClass.push(new Cryptos("FC Barcelona", "BAR", 4.07, 1600, 'Fan Token'));
cryptocurrencieClass.push(new Cryptos("Chiliz", "CHZ", 0.10, 60843, 'Fan Token'));
cryptocurrencieClass.push(new Cryptos("Manchester City", "CITY", 4.52, 1586, 'Fan Token'));
cryptocurrencieClass.push(new Cryptos("Juventus", "JUV", 3.84, 502, 'Fan Token'));
cryptocurrencieClass.push(new Cryptos("LAZIO", "LAZIO", 2.14, 1840, 'Fan Token'));
cryptocurrencieClass.push(new Cryptos("OG", "OG", 3.48, 443, 'Fan Token'));
cryptocurrencieClass.push(new Cryptos("FC PORTO", "PORTO", 1.81, 1411, 'Fan Token'));
cryptocurrencieClass.push(new Cryptos("Paris Saint Germain", "PSG", 6.28, 1953, 'Fan Token'));
cryptocurrencieClass.push(new Cryptos("Santo FC", "SANTOS", 3.73, 1697, 'Fan Token'));

//STORAGE
cryptocurrencieClass.push(new Cryptos("SONM", "SNM", 0.05, 2500000, 'Storage'));
cryptocurrencieClass.push(new Cryptos("Holo", "HOT", 0.002, 371000000, 'Storage'));
cryptocurrencieClass.push(new Cryptos("SiaCoin", "SC", 3.73, 16.97, 'Storage'));
cryptocurrencieClass.push(new Cryptos("RSK Infraestructure Network", "RIF", 0.05, 203000000, 'Storage'));
cryptocurrencieClass.push(new Cryptos("Bluzelle", "BLZ", 0.091, 30000000, 'Storage'));
cryptocurrencieClass.push(new Cryptos("Stacks", "STX", 0.040, 53667000, 'Storage'));
cryptocurrencieClass.push(new Cryptos("Storj", "STORJ", 0.76, 30410000, 'Storage'));
cryptocurrencieClass.push(new Cryptos("Prometeus", "PROM", 5.33, 87670000, 'Storage'));
cryptocurrencieClass.push(new Cryptos("FileCoin", "FILE", 1324080000, 16.97, 'Storage'));



//Money Format
const moneyFormat = (price, sign = '$') => {
  const pieces = parseFloat(price).toFixed(2).split('')
  let ii = pieces.length - 3
  while ((ii-=3) > 0) {
    pieces.splice(ii, 0, ',')
  }
  return sign + pieces.join('')
};


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
// console.log(cryptoConcat);

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

// //MAGIC
// let imgString = [];
// console.log(imgString);
// let iterator = imgString.values();
// console.log(imgString);

// const magic = () => {
//   for (let i = 0; i < cryptoConcat.length; i++) {
//     let dir = '../img/icons/'
//     const element = cryptoConcat[i].id;
//     imgString.push(dir+element+'.svg')
//   }
// }
// magic();


//   const imageStringX = () => {
//     for (const item of cryptoConcat) {
//       // console.log(item.id)
//       let comp = item.id;
//       return comp
//     }
//   }
//   imageStringX();

//   const imageStringZ = () => {
//     for (let i = 1; i < imgString.length; i++) {
//       const element = [i++];
//       return console.log(element)
//     } 
//   }
//   imageStringZ();

//   const r = () => {
//     if (imageStringX() == imageStringZ()){ 
//       return imgString[true] 
//     }
//   }
// r();


// const prueba = () => {
//   for (const i of iterator) {
//     while(true){
//       if(imageStringX() === imageStringZ()) {
//         return console.log()
//       }
//     }
//     };
//     }


prueba();
// if(imageStringX() != imageStringZ()) {
//   while(true) {
//     return console.log(i)
//   }