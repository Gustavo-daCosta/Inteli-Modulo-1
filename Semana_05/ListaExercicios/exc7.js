class Animal {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  descrever() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);
  }
}

var cachorro = new Animal("Cachorro", 11);
var gato = new Animal("Gato", 7);

cachorro.descrever();
gato.descrever();
