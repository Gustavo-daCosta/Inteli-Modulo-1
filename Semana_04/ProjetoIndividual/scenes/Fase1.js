class Fase1 extends Phaser.Scene {
  constructor() {
    super({ key: 'Fase1' });
  }

  preload() {
    this.load.image('tiles', '../assets/Tiles.png');
    this.load.tilemapTiledJSON('mapa', '../assets/MapaPonderada.json');
  }

  create() {
    this.criarMapa();
    this.player = new Player(this, 100, 450, 'jogador');
  }

  criarMapa() {
    this.mapa = this.make.tilemap({ key: 'mapa' });

    const tile = this.mapa.addTilesetImage('Paper-Pixels-Tiles', 'tiles');

    this.background = this.mapa.createLayer('Background', tile, 0, 0).setScale(2);
    this.LowLevelObjects = this.mapa.createLayer('LowLevelObjects', tile, 0, 0).setScale(2);
    this.EqualLevelObjects = this.mapa.createLayer('EqualLevelObjects', tile, 0, 0).setScale(2);
    this.porta = this.mapa.createLayer('Porta', tile, 0, 0).setScale(2);
    this.highLevelObjects = this.mapa.createLayer('HighLevelObjects', tile, 0, 0).setScale(2);
  }

  update() {
    this.player.update();
  }
}