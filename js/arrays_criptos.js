//JSON 

let cryptoJson = [
  {
      "name": "Bitcoin",
      "abbr": "BTC",
      "id": 1,
      "value": 19250,
      "mkt": 35000000,
      "type": ["ETF", "POS"],
      "img": "img/icons/btc.svg"
  },
  {
      "name": "Etherum",
      "abbr": "ETH",
      "id": 2,
      "value": 1400,
      "mkt": 133046,
      "type": ["ETF", "POS"],
      "img": "img/icons/eth.svg"
  },
  {
      "name": "XPR",
      "abbr": "XPR",
      "id": 4,
      "value": 0.34,
      "mkt": 350023,
      "type": ["ETF"],
      "img": "img/icons/xpr.svg"
  },
  {
      "name": "Cardano",
      "abbr": "ADA",
      "id": 5,
      "value": 6.8,
      "mkt": 351220,
      "type": ["POS"],
      "img": "img/icons/ada.svg"
  },
  {
      "name": "LiteCoin",
      "abbr": "LTC",
      "id": 6,
      "value": 52,
      "mkt": 33200,
      "type": ["POS"],
      "img": "img/icons/ltc.svg"
  },
  {
      "name": "My neighbor Alice",
      "abbr": "ALICE",
      "id": 7,
      "value": 2.48,
      "mkt": 7488000,
      "type": ["NTF"],
      "img": "img/icons/algo.svg"
  },
  {
      "name": "ApeCoin",
      "abbr": "APE",
      "id": 8,
      "value": 5.13,
      "mkt": 15370000,
      "type": ["NTF"],
      "img": "img/icons/agrs.svg"
  },
  {
      "name": "Axie Infinity",
      "abbr": "AXS",
      "id": 9,
      "value": 15.92,
      "mkt": 1261100,
      "type": ["NTF"],
      "img": "img/icons/deez.svg"
  },
  {
      "name": "Bakery Token",
      "abbr": "BAKE",
      "id": 10,
      "value": 0.300,
      "mkt": 580730,
      "type": ["NTF"],
      "img": "img/icons/dta.svg"
  },
  {
      "name": "BinaryX",
      "abbr": "BNX",
      "id": 11,
      "value": 118.20,
      "mkt": 23910100,
      "type": ["NTF"],
      "img": "img/icons/drgn.svg"
  },
  {
      "name": "Chromia",
      "abbr": "CRX",
      "id": 12,
      "value": 0.190,
      "mkt": 1083200,
      "type": ["NTF"],
      "img": "img/icons/dock.svg"
  },
  {
      "name": "SuperRare",
      "abbr": "RARE",
      "id": 13,
      "value": 0.24,
      "mkt": 2513300,
      "type": ["NFT"],
      "img": "img/icons/dgb.svg"
  },
  {
      "name": "Green Token Metaverse",
      "abbr": "GTM",
      "id": 14,
      "value": 0.90,
      "mkt": 5891500,
      "type": ["NTF" ],
      "img": "img/icons/coqui.svg"
  },
  {
      "name": "HighStreet",
      "abbr": "HIGH",
      "id": 15,
      "value": 1.45,
      "mkt": 178323,
      "type": ["NTF"],
      "img": "img/icons/dai.svg"
  },
  {
      "name": "ImmutableX",
      "abbr": "IMX",
      "id": 16,
      "value": 1.01,
      "mkt": 2376323,
      "type": ["NTF"],
      "img": "img/icons/dash.svg"
  },
  {
      "name": "Decentraland",
      "abbr": "MANA",
      "id": 17,
      "value": 0.994,
      "mkt": 1726034,
      "type": ["NTF"],
      "img": "img/icons/dai.svg"
  },
  {
      "name": "OriginToken",
      "abbr": "OGN",
      "id": 18,
      "value": 0.26,
      "mkt": 10670323,
      "type": ["NFT"],
      "img": "img/icons/cob.svg"
  },
  {
      "name": "The SandBox",
      "abbr": "SAND",
      "id": 19,
      "value": 0.45,
      "mkt": 10670323,
      "type": ["NFT"],
      "img": "img/icons/cnd.svg"
  },
  {
      "name": "Enjin Coin",
      "abbr": "OGN",
      "id": 20,
      "value": 1.62,
      "mkt": 139499,
      "type": ["NFT"],
      "img": "img/icons/cny.svg"
  },
  {
      "name": "Ethernity Chain",
      "abbr": "ERN",
      "id": 21,
      "value": 19250,
      "mkt": 35000,
      "type": ["ETF", "POS"],
      "img": "img/icons/btc.svg"
  },
  {
      "name": "AERGO",
      "abbr": "Aergo",
      "id": 22,
      "value": 0.45,
      "mkt": 53247,
      "type": ["POS"],
      "img": "img/icons/fjc.svg"
  },
  {
      "name": "AION",
      "abbr": "AION",
      "id": 23,
      "value": 0.13,
      "mkt": 21210,
      "type": ["POS"],
      "img": "img/icons/game.svg"
  },
  {
      "name": "Algorand",
      "abbr": "ALGO",
      "id": 24,
      "value": 0.31,
      "mkt": 21210,
      "type": ["POS"],
      "img": "img/icons/gas.svg"
  },
  {
      "name": "Ambrous",
      "abbr": "AMBO",
      "id": 25,
      "value": 0.0005,
      "mkt": 2317,
      "type": ["POS"],
      "img": "img/icons/gbx.svg"
  },
  {
      "name": "Ankr",
      "abbr": "ANKR",
      "id": 26,
      "value": 0.0029,
      "mkt": 2383282,
      "type": ["POS"],
      "img": "img/icons/gnt.svg"
  },
  {
      "name": "Aragon",
      "abbr": "ANT",
      "id": 27,
      "value": 1.73,
      "mkt": 6823252,
      "type": ["POS"],
      "img": "img/icons/gno.svg"
  },
  {
      "name": "Ark",
      "abbr": "ARK",
      "id": 28,
      "value": 0.42,
      "mkt": 592309,
      "type": ["POS"],
      "img": "img/icons/gup.svg"
  },
  {
      "name": "Cosmos",
      "abbr": "ATOS",
      "id": 29,
      "value": 9.09,
      "mkt": 2603,
      "type": ["POS"],
      "img": "img/icons/gxs.svg"
  },
  {
      "name": "Avalanche",
      "abbr": "AVAX",
      "id": 30,
      "value": 19.82,
      "mkt": 5622,
      "type": ["POS"],
      "img": "img/icons/icn.svg"
  },
  {
      "name": "BAND",
      "abbr": "BAND",
      "id": 31,
      "value": 1.4,
      "mkt": 4925,
      "type": ["Metaverse"],
      "img": "img/icons/ilk.svg"
  },
  {
      "name": "BitTorrent",
      "abbr": "BTTC",
      "id": 32,
      "value": 0.0,
      "mkt": 934943,
      "type": ["Metaverse"],
      "img": 'img/icons/ion.svg'
  }
];


cryptoJson.push({ 'name': 'Clover Finance', 'abbr': 'CLV', 'id': 31, 'value': 0.09, 'mkt': 3066, 'type': 'POS', 'img': '../img/icons/iotx.svg' });
cryptoJson.push({ 'name': 'Cocox BCX', 'abbr': 'COCOS', 'id': 32, 'value': 0.923, 'mkt': 3066231, 'type': 'POS', 'img': '../img/icons/kcs.svg' });
cryptoJson.push({ 'name': 'Shentu', 'abbr': 'CTK', 'id': 33, 'value': 19, 'mkt': 30663123, 'type': 'POS', 'img': '../img/icons/kin.svg' });
cryptoJson.push({ 'name': 'Cartesei', 'abbr': 'CTSI', 'id': 34, 'value': 309, 'mkt': 30622332, 'type': 'POS', 'img': '../img/icons/leo.svg' });
cryptoJson.push({ 'name': 'Dash', 'abbr': 'DASH', 'id': 35, 'value': 43, 'mkt': 306600, 'type': 'POS', 'img': '../img/icons/lend.svg' });
cryptoJson.push({ 'name': 'Decred', 'abbr': 'DCR', 'id': 36, 'value': 23, 'mkt': 23123, 'type': 'POS', 'img': '../img/icons/link.svg' });
cryptoJson.push({ 'name': 'DIA', 'abbr': 'DIA', 'id': 37, 'value': 0.09, 'mkt': 42321123, 'type': 'POS', 'img': '../img/icons/loom.svg' });
cryptoJson.push({ 'name': 'Polkdat', 'abbr': 'DOT', 'id': 38, 'value': 0.09, 'mkt': 30663123, 'type': 'POS', 'img': '../img/icons/maid.svg' });
cryptoJson.push({ 'name': 'AC MILAN', 'abbr': 'ACM', 'id': 39, 'value': 0.09, 'mkt': 3123066, 'type': 'Metaverse', 'img': '../img/icons/wabi.svg' });
cryptoJson.push({ 'name': 'Alpine', 'abbr': 'F1 ALpine', 'id': 40, 'value': 0.09, 'mkt': 23213066, 'type': 'POS', 'img': '../img/icons/waves.svg' });
cryptoJson.push({ 'name': 'AS ROMA', 'abbr': 'ASR', 'id': 41, 'value': 0.09, 'mkt': 113066, 'type': 'POS', 'img': '../img/icons/vtc.svg' });
cryptoJson.push({ 'name': 'Atletico Madrid', 'abbr': 'ATM', 'id': 42, 'value': 0.09, 'mkt': 12066, 'type': 'POS', 'img': '../img/icons/xrp.svg' });
cryptoJson.push({ 'name': 'FC Barcelona', 'abbr': 'BAR', 'id': 43, 'value': 0.09, 'mkt': 993066, 'type': 'POS', 'img': '../img/icons/vivo.svg' });


//Order by type



localStorage.setItem('cryptoList', JSON.stringify(cryptoJson));

let restoredSession = JSON.parse(localStorage.getItem('cryptoList'));
console.log(restoredSession);


const filterArray = cryptoJson.filter(e =>  e.type == 'Metaverse');
console.log(filterArray);
  

//Money Format
const moneyFormat = (price, sign = '$') => {
  const pieces = parseFloat(price).toFixed(2).split('')
  let ii = pieces.length - 3
  while ((ii-=3) > 0) {
    pieces.splice(ii, 0, ',')
  }
  return sign + pieces.join('')
};

//IMG PUSHING
let imgString = [];
// console.log(imgString);

const magic = () => {
  for (let i = 0; i < cryptoJson.length; i++) {
    let dir = '../img/icons/'
    const element = cryptoJson[i].id;
    imgString.push(dir+element+'.svg')
  }
};

magic();

const test = () => {
  imgString.forEach((num1, index) => {
    const num2 = cryptoJson[index];
    return console.log(num1)
  })
};