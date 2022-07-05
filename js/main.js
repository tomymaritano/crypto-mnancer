//BUY CRYPTO
window.onload = () => {
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
        const selectedCrypto =
          selectCrypto.options[selectCrypto.selectedIndex].value;
        // console.log(selectedCrypto);

        //Engine function and parseFloat function with toFixed() to get 3 decimals;
        const engineFunction = () => {
          for (const cryptos of cryptoConcat) {
            if (cryptos.name === selectedCrypto) {
              return parseFloat(taxes(valueAmmount, iva(valueAmmount), cryptos.value)).toFixed(3);
            }
          }
        };

        //Event button to show results
        const clickButtonFunction = () => {
          //Button Validation
          const buttonValidation = (button) => {
            //Money spent
            const moneySpent = cryptoBuying.push(engineFunction())
              console.log(moneySpent, cryptoBuying)

            //Transaction
            if (valueAmmount > 0) {
              this.button = alert("Transaction complete! Taxes included.");
              document.querySelector("#buyButton").addEventListener("click", () => { return transactionFunction(); });

              const transactionHistory = document.querySelector("#transactions-history");
              const transactionFunction = (value) => {
                let add = document.createElement("div");
                add.classList.add("container", "history-container");
                add.textContent = value;
                return add;
              };

              transactionHistory.appendChild(transactionFunction(`Date 29.02.3 (Prueba) , Total ${selectCrypto.value} = ${engineFunction()}`));
            } else if (valueAmmount == false) {
              alert("Enter ammount to buy crypto");
            } else {
              console.log("wrong");
            }
          };
          buttonValidation();
        };
        clickButtonFunction();
      };
      cryptoCategory();
    };
    charginAmmount();
  };

  //Adding All cryptos to options
  const listElements = document.getElementById("selectedCrypto");
  const addingListArray = () => {
    for (const cryptos of cryptoConcat) {
      let element = document.createElement("option");
      element.textContent = `${cryptos.name}`;
      listElements.appendChild(element);
    }
  };
  addingListArray();
};

