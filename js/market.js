const criptoAPI = async() => {
    try {
        const rsp = await fetch('https://rest.coinapi.io/v1/assets?apikey=F49623C9-A3F7-4CDA-9749-D02D2FF35840'); //assets
        console.log(rsp);

        if(rsp.status === 200) {
            const data = await rsp.json();
            console.log(data);

            // let arrayCopy = [...data];
            // console.log(arrayCopy)
            // arrayCopy.sort((a,b) => {
            //     if(a < b) return 1;
            //     if(a > b) return -1;
            //     return 0;
            // });
            // console.log(arrayCopy)

            let sliceX = data.slice(0, 100);

            let cryptos = []
            sliceX.forEach(item => {
                let s = Math.round(item.volume_1day_usd * 100) / 100;
                let p = Math.round(item.volume_1hrs_usd * 200) / 200;
                let v = Math.round(item.volume_1mth_usd * 100) / 100;
                // console.log(item.response)
                cryptos += `
                    <div class="columns is-flex border-bottom is-mobile">
                            <span class="pl-3 is-size-7 has-text-dark has-text-weight-light addingImg is-flex is-vcentered is-justify-content-center is
                            align-items-center is-flex-direction-column is-hidden-mobile"><img src="../img/icons/btc.svg"></span>
                        <div class="column list-negative-afirmative is-mobile is-size-6 is-flex">
                        ${item.asset_id}
                        <span class="pl-3 is-size-7 has-text-dark has-text-weight-light addingImg is-flex is-vcentered is-justify-content-center is
                        align-items-center is-flex-direction-column is-hidden-mobile">${item.name}</span>
                        </div>
                        <div id="priceID" class="column list-negative-afirmative is-mobile is-size-6 "><strong>${moneyFormat(item.price_usd)}</strong></div>
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
                for (const i of data) {
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
                let _d = JSON.parse(data[x].volume_1day_usd);
                    d.textContent = _d.toFixed(c);   
            }; 

            const highlight = () => {

                //BTC
                document.getElementById('btc-img').src = '../img/icons/btc.svg';
                document.getElementById('span-bitcoin').textContent = data[2].asset_id;
                document.querySelector('.btc-highlight-value').textContent = moneyFormat(data[2].price_usd);
                reduce('.btc-highlight-mkt', 0, 0);

                //ETC
                document.getElementById('etc-img').src = '../img/icons/etc.svg';
                document.getElementById('span-ether').textContent = data[5].asset_id;
                document.querySelector('.etc-highlight-value').textContent = moneyFormat(data[5].price_usd);
                document.querySelector('.etc-highlight-mkt').textContent = data[5].volume_1hrs_usd;
                reduce('.etc-highlight-mkt', 5,0)
                
                //XPRR
                document.getElementById('xpr-img').src = '../img/icons/tusd.svg';
                document.getElementById('span-xpr').textContent = data[4].asset_id
                document.querySelector('.xpr-highlight-value').textContent = moneyFormat(data[4].price_usd)
                reduce('.xpr-highlight-mkt', 4,0)
            };
            highlight();

            const newListing = () => {
                //LTC
                document.getElementById('ltc-img').src = '../img/icons/usd.svg';
                document.getElementById('span-ltc').textContent = data[1].asset_id
                document.querySelector('.ltc-highlight-value').textContent = moneyFormat(data[1].price_usd)
                reduce('.ltc-highlight-mkt', 1,0)
                

                //kETC
                document.getElementById('ada-img').src = '../img/icons/bnb.svg';
                document.getElementById('span-ada').textContent = data[400].asset_id
                document.querySelector('.ada-highlight-value').textContent = moneyFormat(data[400].price_usd)
                reduce('.ada-highlight-mkt', 400,0)

                //XPRR
                document.getElementById('ape-img').src = '../img/icons/bsd.svg';
                document.getElementById('span-ape').textContent = data[50].asset_id
                document.querySelector('.ape-highlight-value').textContent = moneyFormat(data[50].price_usd)
                reduce('.ape-highlight-mkt', 50,0)
            };
            newListing();

            const topGainerCoin = () => {
                //BTC
                document.getElementById('axie-img').src = '../img/icons/xpr.svg';
                document.getElementById('span-axie').textContent = data[70].asset_id;
                document.querySelector('.axie-highlight-value').textContent = moneyFormat(data[70].price_usd);
                reduce('.axie-highlight-mkt', 70,0)

                //ETC
                document.getElementById('bake-img').src = '../img/icons/sol.svg';
                document.getElementById('span-bake').textContent = data[821].asset_id;
                document.querySelector('.bake-highlight-value').textContent = moneyFormat(data[821].price_usd);
                reduce('.bake-highlight-mkt', 821,0)

                //XPRR
                document.getElementById('rare-img').src = '../img/icons/dot.svg';
                document.getElementById('span-rare').textContent = data[9].asset_id;
                document.querySelector('.rare-highlight-value').textContent = moneyFormat(data[9].price_usd);
                reduce('.rare-highlight-mkt', 9,0)
            };
            topGainerCoin();

            const topVolumeCoin = () => {
                //BTC
                document.getElementById('ankr-img').src = '../img/icons/neu.svg';
                document.getElementById('span-ankr').textContent = data[25].asset_id;
                document.querySelector('.ankr-highlight-value').textContent = moneyFormat(data[25].price_usd);
                reduce('.ankr-highlight-mkt', 25,0)

                //ETC
                document.getElementById('ant-img').src = '../img/icons/xlm.svg';
                document.getElementById('span-ant').textContent = data[26].asset_id;
                document.querySelector('.ant-highlight-value').textContent = moneyFormat(data[26].price_usd);
                reduce('.ant-highlight-mkt', 26,0)

                //XPRR
                document.getElementById('ardr-img').src = '../img/icons/xmr.svg'
                document.getElementById('span-ardr').textContent = data[27].asset_id;
                document.querySelector('.ardr-highlight-value').textContent = moneyFormat(data[27].price_usd);
                document.querySelector('.ardr-highlight-mkt').textContent = data[27].volume_1day_usd;
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