// Classe Funcionário que será utilizada como pai
class Funcionario {
  // Construtor da classe, que define o nome e idade do funcionário
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  // Método base para calcular salário
  calcularSalario(salario) {
    this.salario = salario;
  }
}

// Classe Professor que herda atributos e métodos da classe Funcionário
class Professor extends Funcionario {
  // Construtor da classe que herda atributos da classe Funcionário e cria a disciplina e a quantidade de horas de aula
  constructor(nome, idade, disciplina, horasDeAula) {
    super(nome, idade);
    this.disciplina = disciplina;
    this.horasDeAula = horasDeAula;
  }

  // Método para calcular e mostrar o salário do Professor
  calcularSalario(valorHoraAula) {
    this.salario = valorHoraAula * this.horasDeAula;
    console.log(`Salário: R$${this.salario.toFixed(2)}`);
  }
}

// Cria instâncias da classe Professor
var carlos = new Professor('Carlos', 39, 'Matemática', 20);
var marina = new Professor('Marina', 27, 'Design', 15);

// Calcula o salário dos professores
carlos.calcularSalario(70);
marina.calcularSalario(80);
