//BUY CRYPTO
window.onload = () => {
  const form = document.getElementById("form");
  form.onsubmit = (e) => {
    e.preventDefault();

    //Getting investment ammount
    const charginAmmount = () => {
      const ammount = document.getElementById("ammount");
      const valueAmmount = ammount.value;
      // console.log(
      //   "Estas invirtiendo un total de " + " " + valueAmmount + " " + "USD",
      // );

      //Getting crypto category
      const cryptoCategory = () => {
        const selectCrypto = document.getElementById("selectedCrypto");
        const selectedCrypto =
          selectCrypto.options[selectCrypto.selectedIndex].value;
        // console.log(selectedCrypto);

        //Engine function and parseFloat function with toFixed() to get 3 decimals;
        const engineFunction = () => {
          for (const cryptos of cryptoConcat) {
            if (cryptos.name === selectedCrypto && cryptos.id > 0) {
              return parseFloat(
                taxes(valueAmmount, iva(valueAmmount), cryptos.value),
              ).toFixed(3)
            };
          };
        };
        const buttonFunction = () => {
          const buyButton = document
            .querySelector("#buyButton")
            .addEventListener("click", () => {
              return transactionFunction();
            });
          const transactionHistory = document.querySelector(
            "#transactions-history",
          );

          const transactionFunction = (value) => {
            let add = document.createElement("div");
            add.classList.add("container");
            add.textContent = value;
            return add;
          };

          transactionHistory.appendChild(
            transactionFunction(`Total ${selectCrypto.value} = ${engineFunction()}
            `)
          );
        };

        buttonFunction();
      };
      cryptoCategory();
    };
    charginAmmount();
  };
};
