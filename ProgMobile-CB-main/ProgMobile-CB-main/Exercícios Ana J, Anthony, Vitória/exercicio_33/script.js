var meuFormulario = document.getElementById("meu-formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();
  somar();
});

function verificarDivisão() {
  var numero = parseInt(document.getElementById("numero").value);

  if (numero > 0) {
    if (numero % 2 === 0) {
      document.getElementById("resultado").innerHTML = "O número " + numero + " é divisível por 2.";
    } else {
      document.getElementById("resultado").innerHTML = "O número " + numero + " não é divisível por 2.";
    }
  } else {
    document.getElementById("resultado").innerHTML = "Digite um número inteiro positivo.";
  }
}