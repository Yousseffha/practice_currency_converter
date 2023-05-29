let amount = document.querySelector(".amount input");
let select = document.querySelectorAll("select");
let switchBtn = document.getElementById("switch");
let convertBtn = document.getElementById("convert");
let form = document.querySelector("form");
let exchangeRate = document.getElementById("exchange-rate");
let errorMessage = document.getElementById("error-message");

function submit(e) {
  e.preventDefault();
}
form.addEventListener("submit", submit);

switchBtn.onclick = function () {
  let firstSelect = select[0].value;
  let secondSelect = select[1].value;
  select[0].value = secondSelect;
  select[1].value = firstSelect;
};

convertBtn.onclick = function () {
  if (amount.value === "") {
    errorMessage.style.opacity = "1";
    amount.style.borderColor = "red";
  }
  amount.oninput = function () {
    errorMessage.style.opacity = "0";
    amount.style.borderColor = "var(--MainColor)";
  };
  if (select[0].value === "USD" && select[1].value === "TND") {
    exchangeRate.innerHTML = `${Number(amount.value * 3)
      .toString()
      .slice(0, 4)}<span class="currency-name">DT</span>`;
  }
  if (select[0].value === "USD" && select[1].value === "EGP") {
    exchangeRate.innerHTML = `${Number(amount.value * 30)
      .toString()
      .slice(0, 4)}<span class="currency-name">EGP</span>`;
  }
  if (select[0].value === "USD" && select[1].value === "USD") {
    exchangeRate.innerHTML = `<span class="currency-name">$</span>${Number(
      amount.value / 1
    )}`;
  }
  if (select[0].value === "TND" && select[1].value === "USD") {
    exchangeRate.innerHTML = `<span class="currency-name">$</span>${Number(
      amount.value / 3
    )
      .toString()
      .slice(0, 4)}`;
  }
  if (select[0].value === "TND" && select[1].value === "EGP") {
    exchangeRate.innerHTML = `${Number(amount.value * 10)
      .toString()
      .slice(0, 4)}<span class="currency-name">EGP</span>`;
  }
  if (select[0].value === "TND" && select[1].value === "TND") {
    exchangeRate.innerHTML = `${Number(
      amount.value / 1
    )}<span class="currency-name">DT</span>`;
  }
  if (select[0].value === "EGP" && select[1].value === "USD") {
    exchangeRate.innerHTML = `<span class="currency-name">$</span>${Number(
      amount.value / 30
    )
      .toString()
      .slice(0, 4)}`;
  }
  if (select[0].value === "EGP" && select[1].value === "TND") {
    exchangeRate.innerHTML = `${Number(amount.value / 10)
      .toString()
      .slice(0, 4)}<span class="currency-name">DT</span>`;
  }
  if (select[0].value === "EGP" && select[1].value === "EGP") {
    exchangeRate.innerHTML = `${Number(
      amount.value / 1
    )}<span class="currency-name">EGP</span>`;
  }
  switchBtn.onclick = function () {
    let firstSelect = select[0].value;
    let secondSelect = select[1].value;
    select[0].value = secondSelect;
    select[1].value = firstSelect;

    if (select[0].value === "USD" && select[1].value === "TND") {
      exchangeRate.innerHTML = `${Number(amount.value * 3)
        .toString()
        .slice(0, 4)}<span class="currency-name">DT</span>`;
    }
    if (select[0].value === "USD" && select[1].value === "EGP") {
      exchangeRate.innerHTML = `${Number(amount.value * 30)
        .toString()
        .slice(0, 4)}<span class="currency-name">EGP</span>`;
    }
    if (select[0].value === "USD" && select[1].value === "USD") {
      exchangeRate.innerHTML = `<span class="currency-name">$</span>${Number(
        amount.value / 1
      )}`;
    }
    if (select[0].value === "TND" && select[1].value === "USD") {
      exchangeRate.innerHTML = `<span class="currency-name">$</span>${Number(
        amount.value / 3
      )
        .toString()
        .slice(0, 4)}`;
    }
    if (select[0].value === "TND" && select[1].value === "EGP") {
      exchangeRate.innerHTML = `${Number(amount.value * 10)
        .toString()
        .slice(0, 4)}<span class="currency-name">EGP</span>`;
    }
    if (select[0].value === "TND" && select[1].value === "TND") {
      exchangeRate.innerHTML = `${Number(
        amount.value / 1
      )}<span class="currency-name">DT</span>`;
    }
    if (select[0].value === "EGP" && select[1].value === "USD") {
      exchangeRate.innerHTML = `<span class="currency-name">$</span>${Number(
        amount.value / 30
      )
        .toString()
        .slice(0, 4)}`;
    }
    if (select[0].value === "EGP" && select[1].value === "TND") {
      exchangeRate.innerHTML = `${Number(amount.value / 10)
        .toString()
        .slice(0, 4)}<span class="currency-name">DT</span>`;
    }
    if (select[0].value === "EGP" && select[1].value === "EGP") {
      exchangeRate.innerHTML = `${Number(
        amount.value / 1
      )}<span class="currency-name">EGP</span>`;
    }
  };
};