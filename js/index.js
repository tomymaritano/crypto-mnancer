const createLine = (index, imgSrc, columnIndex) => {
    let first = document.createElement('span');
    first.classList.add('span', 'icon-text');
    first.innerHTML = `
      <span class="icon-text">
          <span class="icon">
              <img src="../img/icons/${imgSrc}">
          </span>
          <span>${data.data[index].name}</span>
      </span>`;
    let firstElement = document.createElement('div');
    firstElement.classList.add('column');
    columnIndex.appendChild(firstElement);
    firstElement.appendChild(first);
  
    let z = document.createElement('div');
    z.classList.add('column');
    let lastPrice = document.createElement('p');
    lastPrice.textContent = `${moneyFormat(data.data[index].priceUsd)}`;
    columnIndex.appendChild(z);
    z.appendChild(lastPrice);
  
    let hsChange = document.createElement('p');
    hsChange.textContent = `${data.data[index].volumeUsd24Hr}`;
    columnIndex.appendChild(z);
    z.appendChild(hsChange);
  
    let supply = document.createElement('p');
    supply.textContent = `${data.data[index].supply}`;
    columnIndex.appendChild(z);
    z.appendChild(supply);
  };
  
  createLine(0, "btc.svg", indexPop);
  createLine(4, "bnb.svg", indexPop2);
  createLine(1, "etc.svg", indexPop3);
  createLine(7, "xpr.svg", indexPop4);
  createLine(10, "doge.svg", indexPop5);
  

indexAPI();

//Get started email
const emailStarted = () => {
    let email = document.getElementById('emailStarted').value;
    alert('tu email es' + ' ' + email);
};


const buttonEmail = () => {
        document.getElementById('emailStartedButton').addEventListener('click', () => {emailStarted()});
}

buttonEmail();

