const criptoAPI2 = async() => {
    try {
        const rsp = await fetch('https://api.coincap.io/v2/assets')
        console.log(rsp);

        if(rsp.status === 200) {
            const data = await rsp.json();
            console.log(data);

            const form = document.getElementById("form");
            form.onsubmit = (e) => {
              e.preventDefault();
              //Getting investment ammount
              const charginAmmount = () => {
                const ammount = document.getElementById("ammount");
                const valueAmmount = ammount.value;
          
                //Getting crypto category
                const cryptoCategory = () => {
                  const selectCrypto = document.getElementById("selectedCrypto");
                  let selectedCrypto = selectCrypto.options[selectCrypto.selectedIndex].value;
                  console.log(selectedCrypto);
                  // console.log(selectedCrypto)
                  //Engine function and parseFloat function with toFixed() to get 3 decimals;
                  const engineFunction = () => {
                    
                    for (const item of data.data) {
                      if (item.name === selectedCrypto) {
                        return taxes(valueAmmount, iva(valueAmmount), item.priceUsd);
                      } else {}
                    }
                  };
          
                  // console.log(engineFunction())
          
                  //Event button to show results
                  const btnClickFunction = () => {
                    //Button Validation
                    const btnValidation = (btn) => {
                      //Transaction
                      if (valueAmmount > 0) {
                        this.btn = Swal.fire(
                          'Transaction Complete!',
                          'Check history to get more info!',
                          'success'
                        )
                        document.querySelector("#buyButton").addEventListener("click", () => { return transactionFunction(); });
          
                        const transactionHistory = document.querySelector("#transactions-history");
          
                        const transactionFunction = (value) => {
                          let add = document.createElement("div");
                          add.classList.add("container", "history-container");
                          add.textContent = value;
                          return add;
                        };
          
                        // const sellFunction = () => {}
                        let date = new Date();
                        console.log(date)
                        let idNumber = Math.floor((Math.random() * 1000) + 1)
                        console.log(idNumber)
                        let transactionParse = engineFunction();
                        console.log(transactionParse);
          
                        const tResultLocal = (a, b, c) => { return console.log(a, b, c) };
                        tResultLocal(date, transactionParse, selectCrypto.value);
          
                        
                        let tResult = transactionFunction(`Date : ${date} / ${selectCrypto.value} = ${transactionParse} - TRANSACTION NUMBER ${idNumber}`);
                        transactionHistory.appendChild(tResult);
                      } else if (valueAmmount == false) {
                        Swal.fire(
                          'Something is wrong!',
                          'Enter ammount!',
                          'error'
                        )
                      } else {
                        console.log("wrong");
                      }
                    };
                    btnValidation();
                  };
                  btnClickFunction();
                };
                cryptoCategory();
              };
              charginAmmount();
            };
          
            //Adding All cryptos to options
            const listElements = document.getElementById("selectedCrypto");
            const addingListArray = () => {
              for (const item of data.data) {
                let element = document.createElement("option");
                element.textContent = `${item.name}`;
                listElements.appendChild(element);
              }
            };
            addingListArray(); 

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

criptoAPI2();