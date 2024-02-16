var soma = 0;

function soma100Termos() {
  for (var expoente = 0; expoente <= 100; expoente++) {
    soma += 1 / 2 ** expoente;
    console.log(soma);
  }
  console.log(soma);
}
