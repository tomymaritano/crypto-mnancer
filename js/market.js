//UPMENU

const highlight = () => {
    //BTC
    document.getElementById('btc-img').src = cryptoJson[0].img;
    document.getElementById('span-bitcoin').textContent = cryptoJson[0].abbr;
    document.querySelector('.btc-highlight-value').textContent = cryptoJson[0].value;
    document.querySelector('.btc-highlight-mkt').textContent = moneyFormat(cryptoJson[0].mkt);

    //ETC
    document.getElementById('etc-img').src = cryptoJson[1].img;
    document.getElementById('span-ether').textContent = cryptoJson[1].abbr;
    document.querySelector('.etc-highlight-value').textContent = cryptoJson[1].value;
    document.querySelector('.etc-highlight-mkt').textContent = moneyFormat(cryptoJson[1].mkt);

    //XPRR
    document.getElementById('xpr-img').src = cryptoJson[2].img;
    document.getElementById('span-xpr').textContent = cryptoJson[2].name;
    document.querySelector('.xpr-highlight-value').textContent = cryptoJson[2].value;
    document.querySelector('.xpr-highlight-mkt').textContent = moneyFormat(cryptoJson[2].mkt);
};
highlight();

const newListing = () => {
    //LTC
    document.getElementById('ltc-img').src = cryptoJson[5].img;
    document.getElementById('span-ltc').textContent = cryptoJson[5].abbr;
    document.querySelector('.ltc-highlight-value').textContent = cryptoJson[5].value;
    document.querySelector('.ltc-highlight-mkt').textContent = moneyFormat(cryptoJson[5].mkt);

    //ETC
    document.getElementById('ada-img').src = cryptoJson[3].img;
    document.getElementById('span-ada').textContent = cryptoJson[3].abbr;
    document.querySelector('.ada-highlight-value').textContent = cryptoJson[3].value;
    document.querySelector('.ada-highlight-mkt').textContent = moneyFormat(cryptoJson[3].mkt);

    //XPRR
    document.getElementById('ape-img').src = cryptoJson[6].img;
    document.getElementById('span-ape').textContent = cryptoJson[6].abbr;
    document.querySelector('.ape-highlight-value').textContent = cryptoJson[6].value;
    document.querySelector('.ape-highlight-mkt').textContent = moneyFormat(cryptoJson[6].mkt);
};
newListing();

const topGainerCoin = () => {
    //BTC
    document.getElementById('axie-img').src = cryptoJson[7].img;
    document.getElementById('span-axie').textContent = cryptoJson[7].abbr;
    document.querySelector('.axie-highlight-value').textContent = cryptoJson[7].value;
    document.querySelector('.axie-highlight-mkt').textContent = moneyFormat(cryptoJson[7].mkt);

    //ETC
    document.getElementById('bake-img').src = cryptoJson[8].img;
    document.getElementById('span-bake').textContent = cryptoJson[8].abbr;
    document.querySelector('.bake-highlight-value').textContent = cryptoJson[8].value;
    document.querySelector('.bake-highlight-mkt').textContent = moneyFormat(cryptoJson[8].mkt);

    //XPRR
    document.getElementById('rare-img').src = cryptoJson[9].img;
    document.getElementById('span-rare').textContent = cryptoJson[9].abbr;
    document.querySelector('.rare-highlight-value').textContent = cryptoJson[9].value;
    document.querySelector('.rare-highlight-mkt').textContent = moneyFormat(cryptoJson[9].mkt);
};
topGainerCoin();

const topVolumeCoin = () => {
    //BTC
    document.getElementById('ankr-img').src = cryptoJson[25].img;
    document.getElementById('span-ankr').textContent = cryptoJson[25].abbr;
    document.querySelector('.ankr-highlight-value').textContent = cryptoJson[0].value;
    document.querySelector('.ankr-highlight-mkt').textContent = moneyFormat(cryptoJson[0].mkt);

    //ETC
    document.getElementById('ant-img').src = cryptoJson[26].img;
    document.getElementById('span-ant').textContent = cryptoJson[26].abbr;
    document.querySelector('.ant-highlight-value').textContent = cryptoJson[26].value;
    document.querySelector('.ant-highlight-mkt').textContent = moneyFormat(cryptoJson[26].mkt);

    //XPRR
    document.getElementById('ardr-img').src = cryptoJson[27].img;
    document.getElementById('span-ardr').textContent = cryptoJson[27].abbr;
    document.querySelector('.ardr-highlight-value').textContent = cryptoJson[27].value;
    document.querySelector('.ardr-highlight-mkt').textContent = moneyFormat(cryptoJson[27].mkt);
};
topVolumeCoin();




const criptoAPI = async() => {
    try {
        const rsp = await fetch('https://api.coincap.io/v2/assets')
        console.log(rsp);

        if(rsp.status === 200) {
            const data = await rsp.json();
            console.log(data);
//             asset_id: "USD"
// data_end: "2022-07-10"
// data_orderbook_end: "2022-07-10T00:00:00.0000000Z"
// data_orderbook_start: "2014-02-24T17:43:05.0000000Z"
// data_quote_end: "2022-07-10T00:00:00.0000000Z"
// data_quote_start: "2014-02-24T17:43:05.0000000Z"
// data_start: "2010-07-17"
// data_symbols_count: 123348
// data_trade_end: "2022-07-10T00:00:00.0000000Z"
// data_trade_start: "2010-07-17T23:09:17.0000000Z"
// id_icon: "0a4185f2-1a03-4a7c-b866-ba7076d8c73b"
// name: "US Dollar"
// type_is_crypto: 0
// volume_1day_usd: 14880810299575.45
// volume_1hrs_usd: 546088866134.67
// volume_1mth_usd: 640403318621349.6

            let cryptos = []
            data.data.forEach(item => {
                // console.log(item.response)
                cryptos += `
                    <div class="columns is-flex border-bottom is-mobile">
                            <span class="pl-3 is-size-7 has-text-dark has-text-weight-light addingImg is-flex is-vcentered is-justify-content-center is
                            align-items-center is-flex-direction-column is-hidden-mobile"><img src=""></span>
                        <div class="column list-negative-afirmative is-mobile is-size-6 is-flex">
                        ${item.symbol}
                        <span class="pl-3 is-size-7 has-text-dark has-text-weight-light addingImg is-flex is-vcentered is-justify-content-center is
                        align-items-center is-flex-direction-column is-hidden-mobile">${item.name}</span>
                        </div>
                        <div class="column list-negative-afirmative is-mobile is-size-6 ">${moneyFormat(item.priceUsd)}</div>
                        <div class="column list-negative-afirmative is-mobile is-size-6 ">${item.changePercent24Hr}</div>
                        <div class="column list-negative-afirmative is-mobile is-size-6 is-flex is-justify-content-end">${item.volumeUsd24Hr}</div>
                    </div>
                `
            });
            let testing = document.getElementById('testing')
            testing.innerHTML = cryptos;

        } else if (rsp === 401){
            console.log('Error 401');
        } else if (rsp === 404) {
            console.log('Error 404');
        } else {
            console.log('Wrong ERROR');
        }
    }catch(error) {
        console.log(error);
    };
};

criptoAPI();