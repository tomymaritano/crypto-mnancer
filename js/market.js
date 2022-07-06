let market = document.getElementById('market')
console.log(market)


const marketList = () => {
    for (const item of cryptoConcat) {
        const columnsMarket = () => {
            const columns = document.createElement('div');
                columns.classList.add('columns', 'border-bottom', 'is-mobile', 'is-size-7')
                market.appendChild(columns);
    
            let columnName = document.createElement('div')
                columnName.classList.add('column');
                columnName.textContent = item.name;
                columns.appendChild(columnName);
    
            let columnValue = document.createElement('div')
                columnValue.classList.add('column');
                columnValue.textContent = item.value;
                columns.appendChild(columnValue);
    
            let columnId = document.createElement('div')
                columnId.classList.add('column');
                columnId.textContent = item.id;
                columns.appendChild(columnId);
    
            let columnMkt = document.createElement('div')
                columnMkt.classList.add('column');
                columnMkt.textContent = item.mkt;
                columns.appendChild(columnMkt);
        };
        columnsMarket() 
    }
}
marketList();
