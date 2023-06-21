var meuFormulario = document.getElementById("meu-formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();
  somar();
});

 // Leitura dos números inteiros A e B
function capturarnumeroA() {
  const numeroA = Number(document.getElementById("numeroA").value);
  return numeroA;
}

function capturarnumeroB() {
  const numeroB = Number(document.getElementById("numeroB").value);
  return numeroB;
}

function verificarMaior() {
  // Verificação do maior número
  let maior;
  if (numeroA > numeroB) {
      maior = numeroA;
  } else if (numeroB > numeroA) {
      maior = numeroB;
  } else {
      document.getElementById("resultado").innerHTML = "Os números são iguais.";
      return;
  }

  // Impressão do maior número
  document.getElementById("resultado").innerHTML = "O maior número é " + maior + ".";
}

