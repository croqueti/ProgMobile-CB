var meuFormulario = document.getElementById("meu-formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();
  somar();
});

function verificarMaior() {
//


  let A = parseInt(document.getElementById("numeroA").value);
  let B = parseInt(document.getElementById("numeroB").value);
//


  let maior;
  if (A > B) {
      maior = A;
  } else if (B > A) {
      maior = B;
  } else {
      document.getElementById("resultado").innerHTML = "Os números são iguais.";
      return;
  }
//


  document.getElementById("resultado").innerHTML = "O maior número é " + maior + ".";
}