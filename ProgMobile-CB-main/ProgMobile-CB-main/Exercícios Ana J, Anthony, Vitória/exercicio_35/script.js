var meuFormulario = document.getElementById("meu-formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();
  somar();
});

function ordenarDecrescente() {
  var numero1 = parseInt(document.getElementById("numero1").value);
  var numero2 = parseInt(document.getElementById("numero2").value);
  var numero3 = parseInt(document.getElementById("numero3").value);

  // Utilizando o método sort() para ordenar os números em ordem decrescente
  var numerosOrdenados = [numero1, numero2, numero3].sort(function(a, b) {
    return b - a;
  });

  var resultado = "Números em ordem decrescente: " + numerosOrdenados.join(", ");
  document.getElementById("resultado").innerHTML = resultado;
}