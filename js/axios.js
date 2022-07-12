const criptoAPI = async() => {
    try {
        const rsp = await fetch('https://api.coincap.io/v2/assets')
        console.log(rsp);

        if(rsp.status === 200) {
            const data = await rsp.json();
            console.log(data.data);

            let cryptos = []
            data.data.forEach(item => {
                // console.log(item.response)
                cryptos += `
                    <div class="columns is-flex border-bottom is-mobile">
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