var meuFormulario = document.getElementById("meu-formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();
  somar();
});

function capturarPrimeiroNumeroInteiro() {
  const primeiro_numero_inteiro = Number(document.getElementById("primeiro_numero_inteiro").value);
  return primeiro_numero_inteiro;
}

function capturarSegundoNumeroInteiro() {
  const segundo_numero_inteiro = Number(document.getElementById("segundo_numero_inteiro").value); 
  return segundo_numero_inteiro;
}

function capturarTerceiroNumeroInteiro() {
  const terceiro_numero_inteiro = Number(document.getElementById("terceiro_numero_inteiro").value); 
  return terceiro_numero_inteiro;
}

function capturarQuartoNumeroInteiro() {
  const quarto_numero_inteiro = Number(document.getElementById("quarto_numero_inteiro").value); 
  return quarto_numero_inteiro;
}

function somar() {
  let primeiro_numero_inteiro = capturarPrimeiroNumeroInteiro();
  let segundo_numero_inteiro = capturarSegundoNumeroInteiro();
  let terceiro_numero_inteiro = capturarTerceiroNumeroInteiro();
  let quarto_numero_inteiro = capturarQuartoNumeroInteiro();
  let resultado_media = (primeiro_numero_inteiro + segundo_numero_inteiro + terceiro_numero_inteiro + quarto_numero_inteiro) / 4;
  // Arredondar o resultado para duas casas decimais
  resultado_media = resultado_media.toFixed(2);
  imprimirResultadoNaTela(resultado_media);
}

function imprimirResultadoNaTela(resultado_media) {
  document.getElementById("resultado_media").value = resultado_media;
}
