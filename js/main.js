//BUY CRYPTO
window.onload = () => {
  const form = document.getElementById("form");
  form.onsubmit = (e) => {
    e.preventDefault();
    
    const charginAmmount = () => {
      const ammount = document.getElementById("ammount");
      const valueAmmount = ammount.value;
      console.log(
        "Estas invirtiendo un total de " + " " + valueAmmount + " " + "USD",
      );

      const cryptoCategory = () => {
        const selectCrypto = document.getElementById("selectedCrypto");
        const selectedCrypto =
          selectCrypto.options[selectCrypto.selectedIndex].value;
        console.log(selectedCrypto);

        //ENGINE
        const engineFunction = () => {
          for (const cryptos of cryptoConcat) {
            if (cryptos.name === selectedCrypto && cryptos.id > 0) {
              taxes(valueAmmount, iva(valueAmmount), cryptos.value);
              break;
            };
          };
        };
        engineFunction();
      };
      cryptoCategory();
    };
    charginAmmount();
  };
};
