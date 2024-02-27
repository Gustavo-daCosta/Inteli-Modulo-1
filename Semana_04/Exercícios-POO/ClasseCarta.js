class Carta {
  constructor(naipe, valor, posicao) {
    this.naipe = naipe;
    this.valor = valor;
    this.posicao = posicao;
  }

  verCarta() {
    if (this.posicao === 'cima') {
      console.log(`
        Naipe: ${this.naipe}
        Valor: ${this.valor}
        Posição: para ${this.posicao}
      `);
    } else {
      console.log(`
        Naipe: * oculta *
        Valor: * oculta *
        Posição: para ${this.posicao}
      `);
    }
  }

  virarCarta() {
    this.posicao = this.posicao === 'cima' ? 'baixo' : 'cima';
  }
}

let carta = new Carta('copas', 7, 'cima');

carta.verCarta();
carta.virarCarta();
carta.verCarta();
