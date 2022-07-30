const criptoAPI = async() => {
    try {
        const rsp = await fetch('https://api.coincap.io/v2/assets')
        console.log(rsp);

        if(rsp.status === 200) {
            const data = await rsp.json();
            console.log(data);

            let arrayCopy = [...data.data];
            console.log(arrayCopy)
            arrayCopy.sort((a,b) => {
                if(a < b) return 1;
                if(a > b) return -1;
                return 0;
            });
            console.log(arrayCopy)

            let cryptos = []
            data.data.forEach(item => {
                let s = Math.round(item.supply * 100) / 100;
                let p = Math.round(item.changePercent24Hr * 200) / 200;
                let v = Math.round(item.vwap24Hr * 100) / 100;
                // console.log(item.response)
                cryptos += `
                    <div class="columns is-flex border-bottom is-mobile">
                            <span class="pl-3 is-size-7 has-text-dark has-text-weight-light addingImg is-flex is-vcentered is-justify-content-center is
                            align-items-center is-flex-direction-column is-hidden-mobile"><img src="../img/icons/btc.svg"></span>
                        <div class="column list-negative-afirmative is-mobile is-size-6 is-flex">
                        ${item.symbol}
                        <span class="pl-3 is-size-7 has-text-dark has-text-weight-light addingImg is-flex is-vcentered is-justify-content-center is
                        align-items-center is-flex-direction-column is-hidden-mobile">${item.name}</span>
                        </div>
                        <div id="priceID" class="column list-negative-afirmative is-mobile is-size-6 "><strong>${moneyFormat(item.priceUsd)}</strong></div>
                        <div class="column list-negative-afirmative is-mobile is-size-6 ">${p}</div>
                        <div class="column list-negative-afirmative is-mobile is-size-6 ">${v}</div>
                        <div class="column list-negative-afirmative is-mobile is-size-6 is-flex is-justify-content-end is-hidden-mobile">${s}</div>
                    </div>
                `
            });
            let testing = document.getElementById('testing')
            testing.innerHTML = cryptos;

            const marketTopNavbar = () => {
                let navbar = document.getElementById('top-nav-market');
                for (const i of data.data) {
                    // console.log(i.id)
                    let s = Math.round(i.supply * 100) / 100;
                    let p = Math.round(i.changePercent24Hr * 200) / 200;
                    let v = Math.round(i.vwap24Hr * 100) / 100;
                    
                    if (i.rank === '70') {
                        let add = `        
                        <div class="content">
                        <div class="columns is-flex-direction-row m-2">
                          <div class="column is-flex"><span class="pr-4"><strong>${i.name}</strong></span><p class="pr-2">Price</p><span class="span"><strong>${moneyFormat(i.priceUsd)}</strong></span></div>
                          <div class="column is-flex"><p class="pr-2">Exchange</p><span class="span percent"><strong>${moneyComparative(p)}</strong></span></div>
                          <div class="column is-flex"><p class="pr-2">Supply</p><span class="span"><strong>${s}</strong></span></div>
                          <div class="column is-flex"><p class="pr-2">Rank</p><span><strong>${i.rank}</strong></span></div>            
                        </div>
                      </div>`
                        console.log(navbar);
                        navbar.innerHTML = add;
                    }else{}
            //UPMENU
            const reduce = (z,x,c) => {
                let d = document.querySelector(z)
                let _d = JSON.parse(data.data[x].supply);
                    d.textContent = _d.toFixed(c);   
            }; 

            const highlight = () => {

                //BTC
                document.getElementById('btc-img').src = '../img/icons/btc.svg';
                document.getElementById('span-bitcoin').textContent = data.data[0].name;
                document.querySelector('.btc-highlight-value').textContent = moneyFormat(data.data[0].priceUsd);
                reduce('.btc-highlight-mkt', 0, 0);



                //ETC
                document.getElementById('etc-img').src = '../img/icons/etc.svg';
                document.getElementById('span-ether').textContent = data.data[1].name;
                document.querySelector('.etc-highlight-value').textContent = moneyFormat(data.data[1].priceUsd);
                document.querySelector('.etc-highlight-mkt').textContent = data.data[1].supply;
                reduce('.etc-highlight-mkt', 1,0)
                

                //XPRR
                document.getElementById('xpr-img').src = '../img/icons/tusd.svg';
                document.getElementById('span-xpr').textContent = data.data[2].name
                document.querySelector('.xpr-highlight-value').textContent = moneyFormat(data.data[2].priceUsd)
                reduce('.xpr-highlight-mkt', 2,0)
            };
            highlight();

            const newListing = () => {
                //LTC
                document.getElementById('ltc-img').src = '../img/icons/usd.svg';
                document.getElementById('span-ltc').textContent = data.data[3].symbol
                document.querySelector('.ltc-highlight-value').textContent = moneyFormat(data.data[3].priceUsd)
                reduce('.ltc-highlight-mkt', 3,0)
                

                //kETC
                document.getElementById('ada-img').src = '../img/icons/bnb.svg';
                document.getElementById('span-ada').textContent = data.data[4].symbol
                document.querySelector('.ada-highlight-value').textContent = moneyFormat(data.data[4].priceUsd)
                reduce('.ada-highlight-mkt', 4,0)

                //XPRR
                document.getElementById('ape-img').src = '../img/icons/bsd.svg';
                document.getElementById('span-ape').textContent = data.data[5].symbol
                document.querySelector('.ape-highlight-value').textContent = moneyFormat(data.data[5].priceUsd)
                reduce('.ape-highlight-mkt', 6,0)
            };
            newListing();

            const topGainerCoin = () => {
                //BTC
                document.getElementById('axie-img').src = '../img/icons/xpr.svg';
                document.getElementById('span-axie').textContent = data.data[7].symbol;
                document.querySelector('.axie-highlight-value').textContent = moneyFormat(data.data[7].priceUsd);
                reduce('.axie-highlight-mkt', 7,0)

                //ETC
                document.getElementById('bake-img').src = '../img/icons/sol.svg';
                document.getElementById('span-bake').textContent = data.data[8].symbol;
                document.querySelector('.bake-highlight-value').textContent = moneyFormat(data.data[8].priceUsd);
                reduce('.bake-highlight-mkt', 8,0)

                //XPRR
                document.getElementById('rare-img').src = '../img/icons/dot.svg';
                document.getElementById('span-rare').textContent = data.data[9].symbol;
                document.querySelector('.rare-highlight-value').textContent = moneyFormat(data.data[9].priceUsd);
                reduce('.rare-highlight-mkt', 9,0)
            };
            topGainerCoin();

            const topVolumeCoin = () => {
                //BTC
                document.getElementById('ankr-img').src = '../img/icons/neu.svg';
                document.getElementById('span-ankr').textContent = data.data[25].symbol;
                document.querySelector('.ankr-highlight-value').textContent = moneyFormat(data.data[25].priceUsd);
                reduce('.ankr-highlight-mkt', 25,0)

                //ETC
                document.getElementById('ant-img').src = '../img/icons/xlm.svg';
                document.getElementById('span-ant').textContent = data.data[26].symbol;
                document.querySelector('.ant-highlight-value').textContent = moneyFormat(data.data[26].priceUsd);
                reduce('.ant-highlight-mkt', 26,0)

                //XPRR
                document.getElementById('ardr-img').src = '../img/icons/xmr.svg'
                document.getElementById('span-ardr').textContent = data.data[27].symbol;
                document.querySelector('.ardr-highlight-value').textContent = moneyFormat(data.data[27].priceUsd);
                document.querySelector('.ardr-highlight-mkt').textContent = data.data[27].supply;
                reduce('.ardr-highlight-mkt', 27,0)
            };
            topVolumeCoin();}}
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