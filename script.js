let telas = [];
let telaContador = 0;

function trocarTelas(obj, tela, transicao) {
  switch (transicao) {
    case false:
      document.querySelector("body").replaceChildren(telas[tela]);
      break;

    case true:
      break;
  }
}

//trocarTelas(null, 0, false);
//setTimeout(() => {document.querySelector("body").replaceChildren("")}, 1000)
