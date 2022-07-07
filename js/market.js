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
            // let imageToSpan = document.createElement('img')
            //     imageToSpan.src = prueba();
            //     console.log(imageToSpan)
                columns.appendChild(spanImg);
                // spanImg.appendChild(imageToSpan);

                
            
            let addingImg = document.getElementsByClassName('addingImg');
                addingImg.src
    
            let columnName = document.createElement('div')
                columnName.classList.add('column', 'is-size-6', 'has-text-weight-bold' );
                columnName.textContent = item.abbr;
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
    //     document.getElementById('clickname').onchange = () => {
    //     return console.log('Hola')
    // }; 
}
marketList();

