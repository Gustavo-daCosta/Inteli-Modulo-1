function somaDeMatrizes(matrizA, matrizB) {
  if (matrizA.length !== matrizB.length) {
    return "As matrizes não podem ser somadas";
  } else {
    var linhas = matrizA.length;
    var colunas = matrizA[0].length;

    var matrizResultado = Array.from(Array(linhas), () => Array(colunas).fill(0));

    for (var i = 0; i < linhas; i++) {
      for (var j = 0; j < colunas; j++) {
        matrizResultado[i][j] = matrizA[i][j] + matrizB[i][j];
      }
    }
    return matrizResultado;
  }
}

const matrizA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const matrizB = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
];

var matrizSoma = somaDeMatrizes(matrizA, matrizB);
console.log("Soma de Matrizes: ", matrizSoma);
