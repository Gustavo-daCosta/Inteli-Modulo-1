function calcularLancamento(velocidade = Math.sqrt(9.8), altura = 1, angulo = Math.PI / 6) {
  var distancia;
  var gravidade = 9.8;

  distancia = 
  ((velocidade ** 2) / (2 * gravidade)) *
  (1 + Math.sqrt(1 + ((2 * gravidade * altura) / ((velocidade ** 2) * (Math.sin(angulo) ** 2))))) *
  Math.sin(2 * angulo);

  return distancia;
}

var resultado = calcularLancamento();
console.log(resultado);
