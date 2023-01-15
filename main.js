const regExMaster = /^[4][0-9]{11}$/;
const regExVisa = /^[5][0-9]{11}$/;
const regExVerve = /^[6][0-9]{11}$/;

document.querySelector(".check").addEventListener("click", function () {
  let valueWork = Number(document.querySelector(".test").value);

  if (regExMaster.test(valueWork)) {
    document.querySelector(".display").textContent = "mastercard";
  } else if (regExVisa.test(valueWork)) {
    document.querySelector(".display").textContent = "Visa";
  } else if (regExVerve.test(valueWork)) {
    document.querySelector(".display").textContent = "Verve";
  } else {
    document.querySelector(".display").textContent = "Invalid card";
  }
});

// validate();
