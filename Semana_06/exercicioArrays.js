// Maria foi ao mercado com sua lista de compras e precisa realizar operações com ela. Ajude-a a resolver as seguintes tarefas:
// 1. Maria possui uma lista inicial de compra: maçã, fósforo, água, peito de
// frango, feijão e arroz.
var listaCompras = ["Maçã", "Fósforo", "Água", "Peito de frango", "Feijão", "Arroz"];

// 2. Ela quer saber qual é o quarto item da lista.
console.log("Quarto item da lista:", listaCompras[3]);

// 3. Maria percebeu que a maçã está muito verde e trocou por uma pêra.
// Atualize a lista de compras.
listaCompras[0] = "Pêra";

// 4. Ela lembrou que também precisa comprar papel higiênico e suco de laranja. Junte esses itens à lista atual.
listaCompras.push("Papel higiênico", "Suco de laranja");

// 5. Maria quer saber em que posição está o arroz na lista.
var posicaoArroz = listaCompras.findIndex(x => x === "Arroz");
console.log("Posição do Arroz:", posicaoArroz);

// 6. Organize a lista de compras em ordem alfabética.
listaCompras.sort();

// 7. João quer fazer uma cópia da lista atual para backup.
var copiaListaCompras = listaCompras.slice();

// 8. Por fim, Maria comprou todos os itens. Esvazie a lista.
listaCompras.length = 0;

console.log(listaCompras);
