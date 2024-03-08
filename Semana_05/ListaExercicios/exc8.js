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

class Gato extends Animal {
  constructor(nome, idade, cor) {
    super(nome, idade);
    this.cor = cor;
  }

  miar() {
    console.log(`O gato ${this.cor} chamado ${this.nome} diz 'Miau'`);
  }
}

var cachorro = new Animal("Cachorro", 14);
var gato = new Gato("Gato", 10, "Laranja");

cachorro.descrever();
gato.descrever();
gato.miar();
