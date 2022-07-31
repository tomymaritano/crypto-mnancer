const indexAPI = async() => {
    try {
        const rsp = await fetch('https://api.coincap.io/v2/assets')
        console.log(rsp);

        if(rsp.status === 200) {
            const data = await rsp.json();

            //INDEX
            let indexPop = document.getElementById('firstColumn');
            let indexPop2 = document.getElementById('secondColumn');
            let indexPop3 = document.getElementById('thirdColumn');
            let indexPop4 = document.getElementById('fourthColumn');
            let indexPop5 = document.getElementById('fifthColumn');

            const line = () => {
                const lineOne = () => {
                    const firstLine = () => {
                        let first = document.createElement('span')
                        first.classList.add('span', 'icon-text');
                        first.innerHTML = `
                        <span class="icon-text">
                            <span class="icon">
                                <img src="../img/icons/btc.svg">
                            </span>
                            <span>${data.data[0].name}</span>
                        </span>`
                        let firstElement = document.createElement('div')
                        firstElement.classList.add('column');
                        indexPop.appendChild(firstElement)
                        firstElement.appendChild(first)
                    }
                    firstLine();
                    const lastPrice = () => {
                        let z = document.createElement('div')
                        z.classList.add('column');
                        let lastPrice = document.createElement('p')
                        lastPrice.textContent = `${moneyFormat(data.data[0].priceUsd)}`
                        indexPop.appendChild(z)
                        z.appendChild(lastPrice)
                    }
                    lastPrice();
                    const hsChange = () => {
                        let z = document.createElement('div')
                        z.classList.add('column');
                        let hsChange = document.createElement('p')
                        hsChange.textContent = `${data.data[0].volumeUsd24Hr}`
                        indexPop.appendChild(z)
                        z.appendChild(hsChange)
                    }
                    hsChange();
                    const supply = () => {
                        let z = document.createElement('div')
                        z.classList.add('column');
                        let supply = document.createElement('p')
                        supply.textContent = `${data.data[0].supply}`
                        indexPop.appendChild(z)
                        z.appendChild(supply)
                    }
                    supply();
                };
                lineOne();    
            };
            line();

            // Second

            const line2 = () => {
                const lineOne = () => {
                    const firstLine = () => {
                        let first = document.createElement('span')
                        first.classList.add('span', 'icon-text');
                        first.innerHTML = `
                        <span class="icon-text">
                            <span class="icon">
                                <img src="../img/icons/bnb.svg">
                            </span>
                            <span>${data.data[4].name}</span>
                        </span>`
                        let firstElement = document.createElement('div')
                        firstElement.classList.add('column');
                        indexPop2.appendChild(firstElement)
                        firstElement.appendChild(first)
                    }
                    firstLine();
                    const lastPrice = () => {
                        let z = document.createElement('div')
                        z.classList.add('column');
                        let lastPrice = document.createElement('p')
                        lastPrice.textContent = `${moneyFormat(data.data[4].priceUsd)}`
                        indexPop2.appendChild(z)
                        z.appendChild(lastPrice)
                    }
                    lastPrice();
                    const hsChange = () => {
                        let z = document.createElement('div')
                        z.classList.add('column');
                        let hsChange = document.createElement('p')
                        hsChange.textContent = `${data.data[4].volumeUsd24Hr}`
                        indexPop2.appendChild(z)
                        z.appendChild(hsChange)
                    }
                    hsChange();
                    const supply = () => {
                        let z = document.createElement('div')
                        z.classList.add('column');
                        let supply = document.createElement('p')
                        supply.textContent = `${data.data[4].supply}`
                        indexPop2.appendChild(z)
                        z.appendChild(supply)
                    }
                    supply();
                };
                lineOne();    
            };
            line2();

            //Third 

            const line3 = () => {
                const lineOne = () => {
                    const firstLine = () => {
                        let first = document.createElement('span')
                        first.classList.add('span', 'icon-text');
                        first.innerHTML = `
                        <span class="icon-text">
                            <span class="icon">
                                <img src="../img/icons/etc.svg">
                            </span>
                            <span>${data.data[1].name}</span>
                        </span>`
                        let firstElement = document.createElement('div')
                        firstElement.classList.add('column');
                        indexPop3.appendChild(firstElement)
                        firstElement.appendChild(first)
                    }
                    firstLine();
                    const lastPrice = () => {
                        let z = document.createElement('div')
                        z.classList.add('column');
                        let lastPrice = document.createElement('p')
                        lastPrice.textContent = `${moneyFormat(data.data[1].priceUsd)}`
                        indexPop3.appendChild(z)
                        z.appendChild(lastPrice)
                    }
                    lastPrice();
                    const hsChange = () => {
                        let z = document.createElement('div')
                        z.classList.add('column');
                        let hsChange = document.createElement('p')
                        hsChange.textContent = `${data.data[1].volumeUsd24Hr}`
                        indexPop3.appendChild(z)
                        z.appendChild(hsChange)
                    }
                    hsChange();
                    const supply = () => {
                        let z = document.createElement('div')
                        z.classList.add('column');
                        let supply = document.createElement('p')
                        supply.textContent = `${data.data[1].supply}`
                        indexPop3.appendChild(z)
                        z.appendChild(supply)
                    }
                    supply();
                };
                lineOne();    
            };
            line3();

            // Fourth

            const line4 = () => {
                const lineOne = () => {
                    const firstLine = () => {
                        let first = document.createElement('span')
                        first.classList.add('span', 'icon-text');
                        first.innerHTML = `
                        <span class="icon-text">
                            <span class="icon">
                                <img src="../img/icons/xpr.svg">
                            </span>
                            <span>${data.data[7].name}</span>
                        </span>`
                        let firstElement = document.createElement('div')
                        firstElement.classList.add('column');
                        indexPop4.appendChild(firstElement)
                        firstElement.appendChild(first)
                    }
                    firstLine();
                    const lastPrice = () => {
                        let z = document.createElement('div')
                        z.classList.add('column');
                        let lastPrice = document.createElement('p')
                        lastPrice.textContent = `${moneyFormat(data.data[7].priceUsd)}`
                        indexPop4.appendChild(z)
                        z.appendChild(lastPrice)
                    }
                    lastPrice();
                    const hsChange = () => {
                        let z = document.createElement('div')
                        z.classList.add('column');
                        let hsChange = document.createElement('p')
                        hsChange.textContent = `${data.data[7].volumeUsd24Hr}`
                        indexPop4.appendChild(z)
                        z.appendChild(hsChange)
                    }
                    hsChange();
                    const supply = () => {
                        let z = document.createElement('div')
                        z.classList.add('column');
                        let supply = document.createElement('p')
                        supply.textContent = `${data.data[7].supply}`
                        indexPop4.appendChild(z)
                        z.appendChild(supply)
                    }
                    supply();
                };
                lineOne();    
            };
            line4();

            //fifth

            const line5 = () => {
                const lineOne = () => {
                    const firstLine = () => {
                        let first = document.createElement('span')
                        first.classList.add('span', 'icon-text');
                        first.innerHTML = `
                        <span class="icon-text">
                            <span class="icon">
                                <img src="../img/icons/doge.svg">
                            </span>
                            <span>${data.data[10].name}</span>
                        </span>`
                        let firstElement = document.createElement('div')
                        firstElement.classList.add('column');
                        indexPop5.appendChild(firstElement)
                        firstElement.appendChild(first)
                    }
                    firstLine();
                    const lastPrice = () => {
                        let z = document.createElement('div')
                        z.classList.add('column');
                        let lastPrice = document.createElement('p')
                        lastPrice.textContent = `${moneyFormat(data.data[10].priceUsd)}`
                        indexPop5.appendChild(z)
                        z.appendChild(lastPrice)
                    }
                    lastPrice();
                    const hsChange = () => {
                        let z = document.createElement('div')
                        z.classList.add('column');
                        let hsChange = document.createElement('p')
                        hsChange.textContent = `${data.data[10].volumeUsd24Hr}`
                        indexPop5.appendChild(z)
                        z.appendChild(hsChange)
                    }
                    hsChange();
                    const supply = () => {
                        let z = document.createElement('div')
                        z.classList.add('column');
                        let supply = document.createElement('p')
                        supply.textContent = `${data.data[10].supply}`
                        indexPop5.appendChild(z)
                        z.appendChild(supply)
                    }
                    supply();
                };
                lineOne();    
            };
            line5();

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

indexAPI();

//Get started email
const emailStarted = (email) => {
    email = document.getElementById('emailStarted').value;
    alert('tu email es' + ' ' + email)
};

const buttonEmail = () => {
        document.getElementById('emailStartedButton').addEventListener('click', () => {emailStarted()});
}

buttonEmail();

