var meuFormulario = document.getElementById("meu-formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();
  somar();
});

function calcularMedia() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
   const nota2 = parseFloat(document.getElementById("nota2").value);
     const nota3 = parseFloat(document.getElementById("nota3").value);
      const nota4 = parseFloat(document.getElementById("nota4").value);

  const quantidadeDeNotas = 4;
    const media = (nota1 + nota2 + nota3 + nota4) / quantidadeDeNotas;

   document.getElementById("resultado_media").textContent = media;
}
