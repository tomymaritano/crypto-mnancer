//BUY CRYPTO
window.onload = () => {
  const form = document.getElementById("form");
  form.onsubmit = (e) => {
    e.preventDefault();

    const charginAmmount = () => {
      const ammount = document.getElementById("ammount");
      const valueAmmount = ammount.value;
      // console.log(
      //   "Estas invirtiendo un total de " + " " + valueAmmount + " " + "USD",
      // );

      const cryptoCategory = () => {
        const selectCrypto = document.getElementById("selectedCrypto");
        const selectedCrypto =
          selectCrypto.options[selectCrypto.selectedIndex].value;
        // console.log(selectedCrypto);

        //ENGINE
        const engineFunction = () => {
          for (const cryptos of cryptoConcat) {
            if (cryptos.name === selectedCrypto && cryptos.id > 0) {
              return taxes(valueAmmount, iva(valueAmmount), cryptos.value);
            }
          }
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
            add.textContent = value;
            return add;
          };

          transactionHistory.appendChild(
            transactionFunction(`${engineFunction()}, ${selectCrypto.value}
            `),
          );
        };

        buttonFunction();
      };
      cryptoCategory();
    };
    charginAmmount();
  };
};
