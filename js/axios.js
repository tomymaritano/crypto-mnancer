const criptoAPI = async() => {
    try {
        const rsp = await fetch('https://fcsapi.com/api-v3/crypto/supply?sort=rank&order=ASC&limit=50&access_key=AdwRv3RwS56tV0PPSoyD8')
        console.log(rsp);

        if(rsp.status === 200) {
            const data = await rsp.json();
            console.log(data.response);

            let cryptos = []
            data.response.forEach(item => {
                // console.log(item.response)
                cryptos += `
                    <div class="columns is-flex">
                        <div class="column list-negative-afirmative border-bottom is-mobile is-size-6 is-flex">
                        ${item.name}
                        <span class="pl-3 is-size-7 has-text-dark has-text-weight-light addingImg is-flex is-vcentered is-justify-content-center is
                        align-items-center is-flex-direction-column">${item.symbol}</span>
                        </div>
                        <div class="column list-negative-afirmative border-bottom is-mobile is-size-6">${item.rank}</div>
                        <div class="column list-negative-afirmative border-bottom is-mobile is-size-6">${item.quote.USD.price}</div>
                        <div class="column list-negative-afirmative border-bottom is-mobile is-size-6">${item.update}</div>
                        <div class="column list-negative-afirmative border-bottom is-mobile is-size-6">${item.quote.USD.percentage_change_1h}</div>
                        <div class="column list-negative-afirmative border-bottom is-mobile is-size-6">${item.quote.USD.percentage_change_7d}</div>
                        <div class="column list-negative-afirmative border-bottom is-mobile is-size-6">${item.quote.USD.percentage_change_24h}</div>
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