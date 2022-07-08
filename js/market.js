//UP MENU

const highlight = () => {
    //BTC
    document.getElementById('btc-img').src = cryptoConcat[0].img;
    document.getElementById('span-bitcoin').textContent = cryptoConcat[0].abbr;
    document.querySelector('.btc-highlight-value').textContent = cryptoConcat[0].value;
    document.querySelector('.btc-highlight-mkt').textContent = moneyFormat(cryptoConcat[0].mkt);

    //ETC
    document.getElementById('etc-img').src = cryptoConcat[1].img;
    document.getElementById('span-ether').textContent = cryptoConcat[1].abbr;
    document.querySelector('.etc-highlight-value').textContent = cryptoConcat[1].value;
    document.querySelector('.etc-highlight-mkt').textContent = moneyFormat(cryptoConcat[1].mkt);

    //XPRR
    document.getElementById('xpr-img').src = cryptoConcat[2].img;
    document.getElementById('span-xpr').textContent = cryptoConcat[2].name;
    document.querySelector('.xpr-highlight-value').textContent = cryptoConcat[2].value;
    document.querySelector('.xpr-highlight-mkt').textContent = moneyFormat(cryptoConcat[2].mkt);
}
highlight();

const newListing = () => {
    //LTC
    document.getElementById('ltc-img').src = cryptoConcat[5].img;
    document.getElementById('span-ltc').textContent = cryptoConcat[5].abbr;
    document.querySelector('.ltc-highlight-value').textContent = cryptoConcat[5].value;
    document.querySelector('.ltc-highlight-mkt').textContent = moneyFormat(cryptoConcat[5].mkt);

    //ETC
    document.getElementById('ada-img').src = cryptoConcat[3].img;
    document.getElementById('span-ada').textContent = cryptoConcat[3].abbr;
    document.querySelector('.ada-highlight-value').textContent = cryptoConcat[3].value;
    document.querySelector('.ada-highlight-mkt').textContent = moneyFormat(cryptoConcat[3].mkt);

    //XPRR
    document.getElementById('ape-img').src = cryptoConcat[6].img;
    document.getElementById('span-ape').textContent = cryptoConcat[6].abbr;
    document.querySelector('.ape-highlight-value').textContent = cryptoConcat[6].value;
    document.querySelector('.ape-highlight-mkt').textContent = moneyFormat(cryptoConcat[6].mkt);
}
newListing();

const topGainerCoin = () => {
    //BTC
    document.getElementById('axie-img').src = cryptoConcat[7].img;
    document.getElementById('span-axie').textContent = cryptoConcat[7].abbr;
    document.querySelector('.axie-highlight-value').textContent = cryptoConcat[7].value;
    document.querySelector('.axie-highlight-mkt').textContent = moneyFormat(cryptoConcat[7].mkt);

    //ETC
    document.getElementById('bake-img').src = cryptoConcat[8].img;
    document.getElementById('span-bake').textContent = cryptoConcat[8].abbr;
    document.querySelector('.bake-highlight-value').textContent = cryptoConcat[8].value;
    document.querySelector('.bake-highlight-mkt').textContent = moneyFormat(cryptoConcat[8].mkt);

    //XPRR
    document.getElementById('rare-img').src = cryptoConcat[9].img;
    document.getElementById('span-rare').textContent = cryptoConcat[9].abbr;
    document.querySelector('.rare-highlight-value').textContent = cryptoConcat[9].value;
    document.querySelector('.rare-highlight-mkt').textContent = moneyFormat(cryptoConcat[9].mkt);
}
topGainerCoin();

const topVolumeCoin = () => {
    //BTC
    document.getElementById('ankr-img').src = cryptoConcat[25].img;
    document.getElementById('span-ankr').textContent = cryptoConcat[25].abbr;
    document.querySelector('.ankr-highlight-value').textContent = cryptoConcat[0].value;
    document.querySelector('.ankr-highlight-mkt').textContent = moneyFormat(cryptoConcat[0].mkt);

    //ETC
    document.getElementById('ant-img').src = cryptoConcat[26].img;
    document.getElementById('span-ant').textContent = cryptoConcat[26].abbr;
    document.querySelector('.ant-highlight-value').textContent = cryptoConcat[26].value;
    document.querySelector('.ant-highlight-mkt').textContent = moneyFormat(cryptoConcat[26].mkt);

    //XPRR
    document.getElementById('ardr-img').src = cryptoConcat[27].img;
    document.getElementById('span-ardr').textContent = cryptoConcat[27].abbr;
    document.querySelector('.ardr-highlight-value').textContent = cryptoConcat[27].value;
    document.querySelector('.ardr-highlight-mkt').textContent = moneyFormat(cryptoConcat[27].mkt);
}
topVolumeCoin();


//
let market = document.getElementById('market')
// console.log(market)

const marketList = () => {
    for (const item of cryptoConcat) {
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
                span.classList.add('pl-3', 'is-size-7', 'has-text-dark', 'has-text-weight-light')
                span.textContent = item.name;
                columnName.appendChild(span);
    
            let columnValue = document.createElement('div')
                columnValue.classList.add('column', 'has-text-weight-bold', );
                columnValue.textContent = moneyFormat(item.value);
                columns.appendChild(columnValue);
    
            let columnId = document.createElement('div')
                columnId.classList.add('column');
                columnId.textContent = item.id;
                columns.appendChild(columnId);
    
            let columnMkt = document.createElement('div')
                columnMkt.classList.add('column', 'has-text-weight-bold');
                columnMkt.textContent = moneyFormat(item.mkt);
                columns.appendChild(columnMkt);
        };
        columnsMarket();
    }
}
marketList();

