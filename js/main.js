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
        let selectedCrypto = selectCrypto.options[selectCrypto.selectedIndex].value;
        // console.log(selectedCrypto);
        console.log(selectedCrypto)
        //Engine function and parseFloat function with toFixed() to get 3 decimals;
        const engineFunction = () => {
          
          for (const item of cryptoConcat) {
            if (item.name === selectedCrypto) {
              return parseFloat(taxes(valueAmmount, iva(valueAmmount), item.value)).toFixed(4);
            } else {}
          }
        };

        console.log(engineFunction())

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
              let date = new Date()
              transactionHistory.appendChild(transactionFunction(`Date : ${date.toLocaleString()} / ${selectCrypto.value} = ${engineFunction()}`));
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
    for (const item of cryptoConcat) {
      let element = document.createElement("option");
      element.textContent = `${item.name}`;
      listElements.appendChild(element);
    }
  };
  addingListArray();
};

