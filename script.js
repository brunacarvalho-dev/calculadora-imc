function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");

  if (!peso || !altura) {
    resultado.innerHTML = "⚠️ Preencha todos os campos corretamente!";
    resultado.style.color = "red";
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = "";
  let cor = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
    cor = "#3498db";
  } else if (imc < 25) {
    classificacao = "Peso normal";
    cor = "#2ecc71";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
    cor = "#f1c40f";
  } else {
    classificacao = "Obesidade";
    cor = "#e74c3c";
  }

  resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong><br>${classificacao}`;
  resultado.style.color = cor;
}