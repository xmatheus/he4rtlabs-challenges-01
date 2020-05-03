let tempoinv = null;
let diasefet = null;
let diasferias = null;
let valortotal = null;

document.querySelector("#tempoinv").addEventListener("change", (e) => {
  tempoinv = e.target.value;
});

document.querySelector("#diasefet").addEventListener("change", (e) => {
  diasefet = e.target.value;
});

document.querySelector("#diasferias").addEventListener("change", (e) => {
  diasferias = e.target.value;
});

document.querySelector("#valortotal").addEventListener("change", (e) => {
  valortotal = e.target.value;
});

const createResultDiv = (result) => {
  if (window.matchMedia("(max-device-width: 650px)").matches) {
    let grid = document.querySelector(".grid-input");
    let div = document.createElement("div");
    div.id = "myMoneyT";
    div.innerText = `R$ ${result}`;

    grid.appendChild(div);
    setTimeout(() => {
      div.parentNode.removeChild(div);
    }, 7000);
  } else {
    let container = document.querySelector(".container");

    let div = document.createElement("div");
    div.id = "myMoney";
    div.innerText = `R$ ${result}`;
    container.appendChild(div);

    setTimeout(() => {
      div.parentNode.removeChild(div);
    }, 7000);
  }
};

document.querySelector("#calcButton").addEventListener("click", () => {
  if (tempoinv && diasefet && diasferias && valortotal) {
    let valorHora =
      valortotal / (diasefet * 4 * tempoinv) + diasferias * diasefet * tempoinv;

    valorHora = parseFloat(valorHora.toFixed(2));
    createResultDiv(valorHora);
  } else {
    alert("preencha todos os campos");
  }
});
