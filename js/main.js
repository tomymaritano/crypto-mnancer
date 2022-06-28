//BUYCRYPTO 
window.onload = () => {
  const form = document.getElementById("form");
  form.onsubmit = (e) => {
    e.preventDefault();

    const charginAmmount = () => {
      const ammount = document.getElementById("ammount");
      const valueAmmount = ammount.value;
      ammount.value = "";
      console.log(
        "Estas invirtiendo un total de " + " " + valueAmmount + " " + "USD"
      );

      const cryptoCategory = () => {
        const selectCrypto = document.getElementById("selectedCrypto");
        const selectedCrypto = selectCrypto.options[selectCrypto.selectedIndex].value;
        // console.log(selectedCrypto);

        //ENGINE
        const engine = () => {
          for (const cryptos of cryptocurrencie) {
            if (cryptos.name === selectedCrypto) {
              const mainFunction = cryptocurrencie.find((a) => a.name === selectedCrypto);
              // console.log(mainFunction)
              let mainFunctionResult;
              mainFunctionResult = mainFunction.value;
              // console.log(mainFunctionResult);
              const mainResult = valueAmmount / mainFunctionResult;
              // console.log(mainResult)
              alert("Compraste un total de" + " " + mainResult + " " + cryptos.name);

            };
          };
        };
        engine();
      };
      cryptoCategory();
    };
    charginAmmount();
  };
};
