var meuFormulario = document.getElementById("meu-formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();
  somar();
});

function verificarMaioridade() {
  var idade = parseInt(document.getElementById("idade").value);
  var anosFaltantes = 18 - idade;

  if (idade >= 18) {
    document.getElementById("mensagem").textContent = "Parabéns! Você atingiu a maioridade!";
  } else {
    document.getElementById("mensagem").textContent = "Desculpe, você ainda não atingiu a maioridade. Faltam " + anosFaltantes + " anos.";
  }
}
