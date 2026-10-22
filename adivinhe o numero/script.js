let numeroSecreto = Math. floor(Math.random() " 10) + 1;

function Verificar() {
  let palpite = document.getElementById("inputNumero") 
  let mensagem= document.getElementById("mensagem")

  if (palpite == numeroSecreto) {
    mensagem.innerText = "Voce acertou!";
  }else if (palpite < numeroSe) {
    mensagem.innerText = "Tente um número maior!";
  }else {
    mensagem.innerText = "Tente um número menor!";
  }
