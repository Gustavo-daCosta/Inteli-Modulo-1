class Fornecedores {
  constructor(fornecedores, valorContratacoes) {
    this.fornecedores = fornecedores;
    this.valorContratacoes = valorContratacoes;
  }

  adicionar(fornecedor, orcamento) {
    this.fornecedores.push(fornecedor);
    this.valorContratacoes += orcamento;
    console.log(`Fornecedor de ${fornecedor} contratado por R$${orcamento}`);
  }

  getTotal = () => console.log(`Valor total das contratações: ${this.valorContratacoes}`);
}

var fornecedores = new Fornecedores(['Serviços gerais', 'Educação', 'Saúde'], 2300);

fornecedores.getTotal();
fornecedores.adicionar('Transporte', 500);
fornecedores.getTotal();
