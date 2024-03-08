class SomadorDeNotas {
  constructor() {
    this.total = 0;
  }

  adicionarNota(nota) {
    this.total += nota;
  }

  verTotal() {
    console.log(`Total: R$${this.total.toFixed(2)}`);
  }
}

var somador = new SomadorDeNotas();
somador.adicionarNota(50.5);
somador.adicionarNota(10);
somador.adicionarNota(15);
somador.verTotal();
