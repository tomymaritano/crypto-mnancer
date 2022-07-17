



const criptoAPI = async() => {
    try {
        const rsp = await fetch('https://api.coincap.io/v2/assets')
        console.log(rsp);

        if(rsp.status === 200) {
            const data = await rsp.json();
            console.log(data);

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
                        <div class="column list-negative-afirmative is-mobile is-size-6 "><strong>${moneyFormat(item.priceUsd)}</strong></div>
                        <div class="column list-negative-afirmative is-mobile is-size-6 ">${item.changePercent24Hr}</div>
                        <div class="column list-negative-afirmative is-mobile is-size-6 is-flex is-justify-content-end">${item.volumeUsd24Hr}</div>
                    </div>
                `
            });
            let testing = document.getElementById('testing')
            testing.innerHTML = cryptos;

            const marketTopNavbar = () => {
                let navbar = document.getElementById('top-nav-market');
                for (const i of data.data) {
                    // console.log(i.id)
                    if (i.rank === '70') {
                        let add = `        
                        <div class="content">
                        <div class="columns is-flex-direction-row m-2">
                          <div class="column is-flex"><span class="pr-4"><strong>${i.name}</strong></span><p class="pr-2">Price</p><span class="span"><strong>${moneyFormat(i.priceUsd)}</strong></span></div>
                          <div class="column is-flex"><p class="pr-2">Exchange</p><span class="span percent"><strong>${moneyComparative(i.changePercent24Hr)}</strong></span></div>
                          <div class="column is-flex"><p class="pr-2">Supply</p><span class="span"><strong>${i.supply}</strong></span></div>
                          <div class="column is-flex"><p class="pr-2">Rank</p><span><strong>${i.rank}</strong></span></div>            
                        </div>
                      </div>`
                        console.log(navbar);
                        navbar.innerHTML = add;
                    }else{}

                    //UPMENU

const highlight = () => {
    //BTC
    document.getElementById('btc-img').src = cryptoJson[0].img
    document.getElementById('span-bitcoin').textContent = data.data[0].name;
    document.querySelector('.btc-highlight-value').textContent = moneyFormat(data.data[0].priceUsd);
    document.querySelector('.btc-highlight-mkt').textContent = data.data[0].supply;

    //ETC
    document.getElementById('etc-img').src = cryptoJson[1].img
    document.getElementById('span-ether').textContent = data.data[1].name;
    document.querySelector('.etc-highlight-value').textContent = moneyFormat(data.data[1].priceUsd);
    document.querySelector('.etc-highlight-mkt').textContent = data.data[1].supply;

    //XPRR
    document.getElementById('xpr-img').src = cryptoJson[2].img;
    document.getElementById('span-xpr').textContent = data.data[2].name
    document.querySelector('.xpr-highlight-value').textContent = moneyFormat(data.data[2].priceUsd)
    document.querySelector('.xpr-highlight-mkt').textContent = data.data[2].supply
};
highlight();

const newListing = () => {
    //LTC
    document.getElementById('ltc-img').src = cryptoJson[5].img;
    document.getElementById('span-ltc').textContent = data.data[3].symbol
    document.querySelector('.ltc-highlight-value').textContent = moneyFormat(data.data[3].priceUsd)
    document.querySelector('.ltc-highlight-mkt').textContent = data.data[3].supply

    //kETC
    document.getElementById('ada-img').src = cryptoJson[3].img;
    document.getElementById('span-ada').textContent = data.data[4].symbol
    document.querySelector('.ada-highlight-value').textContent = moneyFormat(data.data[4].priceUsd)
    document.querySelector('.ada-highlight-mkt').textContent = data.data[4].supply

    //XPRR
    document.getElementById('ape-img').src = cryptoJson[6].img;
    document.getElementById('span-ape').textContent = data.data[5].symbol
    document.querySelector('.ape-highlight-value').textContent = moneyFormat(data.data[5].priceUsd)
    document.querySelector('.ape-highlight-mkt').textContent = data.data[5].supply
};
newListing();

const topGainerCoin = () => {
    //BTC
    document.getElementById('axie-img').src = cryptoJson[7].img;
    document.getElementById('span-axie').textContent = data.data[7].symbol;
    document.querySelector('.axie-highlight-value').textContent = moneyFormat(data.data[7].priceUsd);
    document.querySelector('.axie-highlight-mkt').textContent = data.data[7].supply;

    //ETC
    document.getElementById('bake-img').src = cryptoJson[8].img;
    document.getElementById('span-bake').textContent = data.data[8].symbol;
    document.querySelector('.bake-highlight-value').textContent = moneyFormat(data.data[8].priceUsd);
    document.querySelector('.bake-highlight-mkt').textContent = data.data[8].supply

    //XPRR
    document.getElementById('rare-img').src = cryptoJson[9].img;
    document.getElementById('span-rare').textContent = data.data[9].symbol;
    document.querySelector('.rare-highlight-value').textContent = moneyFormat(data.data[9].priceUsd);
    document.querySelector('.rare-highlight-mkt').textContent = data.data[9].supply
};
topGainerCoin();

const topVolumeCoin = () => {
    //BTC
    document.getElementById('ankr-img').src = cryptoJson[25].img;
    document.getElementById('span-ankr').textContent = data.data[25].symbol;
    document.querySelector('.ankr-highlight-value').textContent = moneyFormat(data.data[0].priceUsd);
    document.querySelector('.ankr-highlight-mkt').textContent = data.data[0].supply;

    //ETC
    document.getElementById('ant-img').src = cryptoJson[26].img;
    document.getElementById('span-ant').textContent = data.data[26].symbol;
    document.querySelector('.ant-highlight-value').textContent = moneyFormat(data.data[26].priceUsd);
    document.querySelector('.ant-highlight-mkt').textContent = data.data[26].supply;

    //XPRR
    document.getElementById('ardr-img').src = cryptoJson[27].img;
    document.getElementById('span-ardr').textContent = data.data[27].symbol;
    document.querySelector('.ardr-highlight-value').textContent = moneyFormat(data.data[27].priceUsd);
    document.querySelector('.ardr-highlight-mkt').textContent = data.data[27].supply;
};
topVolumeCoin();

                }
            }
            marketTopNavbar();

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