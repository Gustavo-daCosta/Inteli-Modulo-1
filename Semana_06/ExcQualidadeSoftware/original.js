// Função para realizar a adição de dois números
function somar(a, b) {
  return a + b;
}

// Função para realizar a subtração de dois números
function subtrair(a, b) {
  return a - b;
}

// Função para realizar a multiplicação de dois números
function multiplicar(a, b) {
  return a * b;
}

// Função para realizar a divisão de dois números
function dividir(a, b) {
  return a / b;
}


//Função que utiliza um switch para chamar a operação desejada
function calcular(operacao, a, b) {
  switch (operacao) {
    case '+':
      return somar(a, b);
    case '-':
      return subtrair(a, b);
    case '*':
      return multiplicar(a, b);
    case '/':
      return dividir(a, b);
    default:
      throw new Error('Operação inválida'); // Lança um erro para operações não suportadas
  }
 }
 
 // Exemplo de uso: adição
 const resultado = calcular('+', 2, 3);
 console.log(resultado); // 5
 
 // Exemplo de uso: multiplicação
 const resultado2 = calcular('*', 4, 5);
 console.log(resultado2); // 20
 