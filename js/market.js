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


//
let market = document.getElementById('market')
// console.log(market)

const marketList = () => {
    for (const item of cryptoJson) {
        const columnsMarket = () => {
            const columns = document.createElement('div');
                columns.classList.add('columns', 'border-bottom', 'is-mobile', 'is-size-7')
                market.appendChild(columns);

            let spanImg = document.createElement('span');
                spanImg.classList.add('pl-3', 'is-size-7', 'has-text-dark', 'has-text-weight-light', 'addingImg', 'is-flex')
            let imageToSpan = document.createElement('img')
                imageToSpan.classList.add('poder')
                imageToSpan.src = item.img;

                columns.appendChild(spanImg);
                spanImg.appendChild(imageToSpan);
            
            let addingImg = document.getElementsByClassName('addingImg');
                addingImg.src
    
            let columnName = document.createElement('div')
                columnName.classList.add('column', 'is-size-6', 'has-text-weight-bold' );
                columnName.textContent = item.abbr;
                // console.log(columnName.textContent)
                columns.appendChild(columnName);

            let span = document.createElement('span');
                span.classList.add('pl-3', 'is-size-7', 'has-text-dark', 'has-text-weight-light', 'is-hidden-mobile')
                span.textContent = item.name;
                columnName.appendChild(span);
    
            let columnValue = document.createElement('div')
                columnValue.classList.add('column', 'has-text-weight-bold', );
                columnValue.textContent = moneyFormat(item.value);
                columns.appendChild(columnValue);
    
            let columnId = document.createElement('div')
                columnId.classList.add('column', 'is-hidden-mobile');
                columnId.textContent = item.id;
                columns.appendChild(columnId);
    
            let columnMkt = document.createElement('div')
                columnMkt.classList.add('column', 'has-text-weight-bold');
                columnMkt.textContent = moneyFormat(item.mkt);
                columns.appendChild(columnMkt);
        };
        columnsMarket();
    };
};
marketList();