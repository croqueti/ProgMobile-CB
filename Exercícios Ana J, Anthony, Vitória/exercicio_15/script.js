var meuFormulario = document.getElementById("meu-formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();
  somar();
});

function calcularCompra() {
  var nomeCliente = document.getElementById("nomeCliente").value;
  var quantidadeResistores = parseInt(document.getElementById("quantidadeResistores").value);
  var quantidadeDiodos = parseInt(document.getElementById("quantidadeDiodos").value);
  var quantidadeTransistores = parseInt(document.getElementById("quantidadeTransistores").value);

  var precoResistor = 0.70;
  var precoDiodo = 0.80;
  var precoTransistor = 0.95;

  var descontoResistor = 0.05;
  var descontoDiodo = 0.06;
  var descontoTransistor = 0.09;

  var totalDesconto =
   (quantidadeResistores * precoResistor * descontoResistor) +             
   (quantidadeDiodos * precoDiodo * descontoDiodo) +
   (quantidadeTransistores * precoTransistor * descontoTransistor);

  var valorTotal = 
  (quantidadeResistores * precoResistor) +
  (quantidadeDiodos * precoDiodo) +
  (quantidadeTransistores * precoTransistor);

  var valorLiquido = valorTotal - totalDesconto;

  var resultado = 
  "Cliente: " + nomeCliente + "<br>" +
  "Valor total de desconto: R$" + totalDesconto.toFixed(2) + "<br>" +
  "Valor líquido a ser pago: R$" + valorLiquido.toFixed(2);

  document.getElementById("resultado").innerHTML = resultado;
}