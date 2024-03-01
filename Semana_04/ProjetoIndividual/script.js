var config = {
  type: Phaser.AUTO,
  width: 320 * 2,
  height: 240 * 2,
  backgroundColor: 0x39addd,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 400 },
      debug: true,
    }
  },
  scene: [Fase1, Fase2],
}

var game = new Phaser.Game(config);
