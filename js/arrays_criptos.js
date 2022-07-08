//Array
const cryptocurrencie = [
  {
    name: 'Bitcoin',
    abbr: 'BTC',
    id: 1,
    value: 19250,
    mkt: 350000,
    type: 'ETF',
    img: '../img/icons/btc.svg',
  },
  {
    name: 'Etherum',
    abbr: 'ETH',
    id: 2,
    value: 1400,
    mkt: 133046,
    type: 'ETF',
    img: '../img/icons/eth.svg',
  },
  {
    name: 'XPR',
    abbr: 'XPR',
    id: 3,
    value: 0.3,
    mkt: 351220,
    type: 'ETF',
    img: '../img/icons/xpr.svg',
  },
  {
    name: 'Cardano',
    abbr: 'ADA',
    id: 4,
    value: 6.8,
    mkt: 33220,
    type: 'POS',
    img: '../img/icons/ada.svg',
  },
  {
    name: 'LiteCoin',
    abbr: 'LTC',
    id: 5,
    value: 52,
    mkt: 33220,
    type: 'POS',
    img: '../img/icons/ltc.svg',
  },
];

//Array for class
const cryptocurrencieClass = [];
// console.log(cryptocurrencieClass)

//Constructor increasing id automatically
class Cryptos {
  static count = 5;
  constructor(name, abbr, value, mkt, type, img) {
    this.name = name;
    this.abbr = abbr;
    this.id = ++this.constructor.count;
    this.value = value;
    this.mkt = mkt;
    this.type = type;
    this.img = img;
  }
}

//NFT
cryptocurrencieClass.push(new Cryptos("My neighbor Alice", "ALICE", 2.48, 7488000, 'NFT','../img/icons/algo.svg'));
cryptocurrencieClass.push(new Cryptos("ApeCoin", "APE", 5.13, 15370000, 'NFT','../img/icons/agrs.svg'));
cryptocurrencieClass.push(new Cryptos("Axie Infinity", "AXS", 15.92, 1261100, 'NFT', '../img/icons/deez.svg'));
cryptocurrencieClass.push(new Cryptos("Bakery Token", "BAKE", 0.300, 5807300, 'NFT', '../img/icons/dta.svg'));
cryptocurrencieClass.push(new Cryptos("BinaryX", "BNX", 118.20, 23910100, 'NFT','../img/icons/drgn.svg'));
cryptocurrencieClass.push(new Cryptos("Chromia", "CRX", 0.190, 1083200, 'NFT','../img/icons/dock.svg'));
cryptocurrencieClass.push(new Cryptos("SuperRare", "RARE",0.24 , 2513300, 'NFT','../img/icons/dgb.svg'));
cryptocurrencieClass.push(new Cryptos("Green Token Metaverse", "GTM", 0.90, 5891500, 'NFT','../img/icons/coqui.svg'));
cryptocurrencieClass.push(new Cryptos("HighStreet", "HIGH", 1.45, 1783232, 'NFT','../img/icons/dai.svg'));
cryptocurrencieClass.push(new Cryptos("Immutable X", "IMX",  1.01, 2376323, 'NFT','../img/icons/dash.svg'));
cryptocurrencieClass.push(new Cryptos("Decentraland", "MANA", 0.93, 1726023, 'NFT','../img/icons/dai.svg'));
cryptocurrencieClass.push(new Cryptos("OriginToken", "OGN", 0.26, 10670323, 'NFT','../img/icons/cob.svg'));
cryptocurrencieClass.push(new Cryptos("The SandBox", "SAND", 0.45, 532392, 'NFT','../img/icons/cny.svg'));
cryptocurrencieClass.push(new Cryptos("Dego Finance", "1.62", 1.62, 139499, 'NFT','../img/icons/cnd.svg'));
cryptocurrencieClass.push(new Cryptos("Enjin Coin", "ENJ", 0.56, 50232932, 'NFT','../img/icons/bsd.svg'));
cryptocurrencieClass.push(new Cryptos("Ethernity Chain", "ERN", 1.59, 2460932, 'NFT','../img/icons/blk.svg'));

//POS
cryptocurrencieClass.push(new Cryptos("AERGO", "Aergo", 0.45, 53343, 'POS','../img/icons/fjc.svg'));
cryptocurrencieClass.push(new Cryptos("AION", "AION", 0.13, 53247, 'POS','../img/icons/game.svg'));
cryptocurrencieClass.push(new Cryptos("Algorand", "ALGO", 0.31, 21210, 'POS','../img/icons/gas.svg'));
cryptocurrencieClass.push(new Cryptos("Ambrous", "AMBO", 0.0005, 2317, 'POS','../img/icons/gbx.svg'));
cryptocurrencieClass.push(new Cryptos("Ankr", "ANKR", 0.0029, 2383282, 'POS','../img/icons/gnt.svg'));
cryptocurrencieClass.push(new Cryptos("Aragon", "ANT", 1.73, 6823252, 'POS','../img/icons/gno.svg'));
cryptocurrencieClass.push(new Cryptos("Ardor", "ARDR",  0.10, 1042398, 'POS','../img/icons/gto.svg'));
cryptocurrencieClass.push(new Cryptos("Ark", "ARK", 0.42, 592309, 'POS','../img/icons/gup.svg'));
cryptocurrencieClass.push(new Cryptos("Cosmos", "ATOS", 9.09, 2603, 'POS','../img/icons/gxs.svg'));
cryptocurrencieClass.push(new Cryptos("Avalanche", "AVAX", 19.84, 5622, 'POS','../img/icons/hsr.svg'));
cryptocurrencieClass.push(new Cryptos("BAND", "BAND", 1.4, 4925, 'POS','../img/icons/icn.svg'));
cryptocurrencieClass.push(new Cryptos("BNB", "BNB", 241.1, 39394, 'POS','../img/icons/ilk.svg'));
cryptocurrencieClass.push(new Cryptos("BitShares", "BTS", 0.01, 3311, 'POS','../img/icons/ins.svg'));
cryptocurrencieClass.push(new Cryptos("BitTorrent", "BTTC", 0.0, 934943, 'POS','../img/icons/ion.svg'));
cryptocurrencieClass.push(new Cryptos("Clover Finance", "CLV", 0.09, 3066, 'POS','../img/icons/iotx.svg'));
cryptocurrencieClass.push(new Cryptos("Cocos-BCX", "COCOS", 0.74, 4993, 'POS','../img/icons/kcs.svg'));
cryptocurrencieClass.push(new Cryptos("Shentu", "CTK", 0.84, 8998, 'POS','../img/icons/kin.svg'));
cryptocurrencieClass.push(new Cryptos("Cartesei", "CTSI", 0.153, 8909, 'POS','../img/icons/leo.svg'));
cryptocurrencieClass.push(new Cryptos("Dash", "DASH", 45.20, 48853, 'POS','../img/icons/lend.svg'));
cryptocurrencieClass.push(new Cryptos("Decred", "DCR", 22.40, 31722, 'POS','../img/icons/link.svg'));
cryptocurrencieClass.push(new Cryptos("DIA", "DIA", 0.41, 3328, 'POS','../img/icons/loom.svg'));
cryptocurrencieClass.push(new Cryptos("DOT", "Polkadot", 7.15, 7061, 'POS','../img/icons/maid.svg'));

//FANTOKEN
cryptocurrencieClass.push(new Cryptos("AC Milan", "ACM", 2.84000, 894, 'Fan Token','../img/icons/eqli.svg'));
cryptocurrencieClass.push(new Cryptos("Alpine", "F1 ALPINE", 2.45, 2732, 'Fan Token','../img/icons/eos.svg'));
cryptocurrencieClass.push(new Cryptos("AS ROMA", "ASR", 2.95, 638, 'Fan Token','../img/icons/eop.svg'));
cryptocurrencieClass.push(new Cryptos("Atletico Madrid", "ATM", 3.19, 665, 'Fan Token','../img/icons/emc.svg'));
cryptocurrencieClass.push(new Cryptos("FC Barcelona", "BAR", 4.07, 1600, 'Fan Token','../img/icons/emc2.svg'));
cryptocurrencieClass.push(new Cryptos("Chiliz", "CHZ", 0.10, 60843, 'Fan Token','../img/icons/emb.svg'));
cryptocurrencieClass.push(new Cryptos("Manchester City", "CITY", 4.52, 1586, 'Fan Token','../img/icons/d.svg'));
cryptocurrencieClass.push(new Cryptos("Juventus", "JUV", 3.84, 502, 'Fan Token','../img/icons/ctr.svg'));
cryptocurrencieClass.push(new Cryptos("LAZIO", "LAZIO", 2.14, 1840, 'Fan Token','../img/icons/cs.svg'));
cryptocurrencieClass.push(new Cryptos("OG", "OG", 3.48, 443, 'Fan Token','../img/icons/crpt.svg'));
cryptocurrencieClass.push(new Cryptos("FC PORTO", "PORTO", 1.81, 1411, 'Fan Token','../img/icons/colx.svg'));
cryptocurrencieClass.push(new Cryptos("Paris Saint Germain", "PSG", 6.28, 1953, 'Fan Token','../img/icons/chat.svg'));
cryptocurrencieClass.push(new Cryptos("Santo FC", "SANTOS", 3.73, 1697, 'Fan Token','../img/icons/chain.svg'));

//STORAGE
cryptocurrencieClass.push(new Cryptos("SONM", "SNM", 0.05, 2500000, 'Storage','../img/icons/cloak.svg'));
cryptocurrencieClass.push(new Cryptos("Holo", "HOT", 0.002, 371000000, 'Storage','../img/icons/chips.svg'));
cryptocurrencieClass.push(new Cryptos("SiaCoin", "SC", 3.73, 16.97, 'Storage','../img/icons/cdn.svg'));
cryptocurrencieClass.push(new Cryptos("RSK Infraestructure Network", "RIF", 0.05, 203000000, 'Storage','../img/icons/cc.svg'));
cryptocurrencieClass.push(new Cryptos("Bluzelle", "BLZ", 0.091, 30000000, 'Storage','../img/icons/brd.svg'));
cryptocurrencieClass.push(new Cryptos("Stacks", "STX", 0.040, 53667000, 'Storage','../img/icons/bnty.svg'));
cryptocurrencieClass.push(new Cryptos("Storj", "STORJ", 0.76, 30410000, 'Storage','../img/icons/block.svg'));
cryptocurrencieClass.push(new Cryptos("Prometeus", "PROM", 5.33, 87670000, 'Storage','../img/icons/beam.svg'));
cryptocurrencieClass.push(new Cryptos("FileCoin", "FILE", 1324080000, 16.97, 'Storage','../img/icons/ast.svg'));



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
    img: x.img,
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
    img: x.img,
  };
});
// console.log(cryptocurrencieCopyMap);

//Concat array class and main array
const cryptoConcat = cryptocurrencieMap.concat(cryptocurrencieCopyMap);
// console.log(cryptoConcat);

const cryptoConcatCopy = [...cryptoConcat];
const cryptoConcatForIdMap = [...cryptoConcat];
console.log(cryptoConcatCopy)

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







//SI EL ID DEL MAIN ARRAY ES IGUAL A LA POSICION DE LA FOTO RECORRELO TODO Y POR CADA UNO RETORNAME EL VALOR DE LA POSICION
//ARRAY OF IMG
let imgString = [];
console.log(imgString);

const magic = () => {
  for (let i = 0; i < cryptoConcat.length; i++) {
    let dir = '../img/icons/'
    const element = cryptoConcat[i].id;
    imgString.push(dir+element+'.svg')
  }
}
magic();

//MAP
  const cryptoConcatCopyIdMap = cryptoConcat.map((x) => {
    return {
      id: x.id,
    }
  });
  // console.log(cryptoConcatCopyIdMap)

  const test = () => {
    imgString.forEach((num1, index) => {
      const num2 = cryptoConcatCopyIdMap[index];
      return console.log(num1)
    })
  }