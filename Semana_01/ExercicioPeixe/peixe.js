// Define as configurações do Phaser
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

// Cria um jogo do Phaser
var game = new Phaser.Game(config);
// Declara a variável do peixinho
var peixinho;

// Função para carregar as imagens
function preload() {
  this.load.image("mar", "./assets/bg_azul-escuro.png");
  this.load.image("logo", "./assets/logo-inteli_branco.png");
  this.load.image("peixe", "./assets/peixes/peixe_logo.png");
  this.load.image("peixeCenografico1", "./assets/peixes/peixe_logo.png");
  this.load.image("peixeCenografico2", "./assets/peixes/peixe_logo.png");
  this.load.image("peixeCenografico3", "./assets/peixes/peixe_logo.png");
  this.load.image("peixeCenografico4", "./assets/peixes/peixe_logo.png");
}

// Função para adicionar as imagens na tela
function create() {
  this.add.image(400, 300, "mar");
  this.add.image(400, 525, "logo").setScale(0.5);
  this.add.image(200, 150, "peixeCenografico1").setOrigin(1, 1.5);
  this.add.image(200, 150, "peixeCenografico2").setOrigin(-2.6, 1.5);
  this.add.image(200, 150, "peixeCenografico3").setOrigin(1, -4);
  this.add.image(200, 150, "peixeCenografico4").setOrigin(-2.6, -4);
  peixinho = this.add.image(400, 300, "peixe").setOrigin(0.5, 0.5);
  peixinho.setFlip(false, false);
}

// Função para atualizar a imagem do peixe com base na posição do cursor
function update() {
  peixinho.x = this.input.x;
  peixinho.y = this.input.y;
}
