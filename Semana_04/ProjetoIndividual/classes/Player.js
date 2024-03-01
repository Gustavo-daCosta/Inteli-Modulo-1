class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(jogador, x, y, texture) {
      super(jogador, x, y, texture);
  }

  preload() {
    this.load.spritesheet('player', '../assets/Player.png',  {
        frameWidth: 8,
        frameHeight: 8,
    });
  }

  create() {
    jogador.add.existing(this);
    jogador.physics.add.existing(this);

    this.setCollideWorldBounds(true);
    // this.setGravityY(500); // Example gravity value

    // Set up player animations (if needed)
    // this.anims.create({ key: 'walk', frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }), repeat: -1 });

    this.cursors = jogador.input.keyboard.createCursorKeys();

    // Adicionar o conflito do o Player com a camada
  }

  update() {
      // Handle player input
      if (this.cursors.left.isDown) {
          this.setVelocityX(-200); // Example velocity value
          // this.play('walk', true); // Example animation call
      } else if (this.cursors.right.isDown) {
          this.setVelocityX(200); // Example velocity value
          // this.play('walk', true); // Example animation call
      } else {
          this.setVelocityX(0);
          // this.anims.stop('walk'); // Example animation stop
      }

      if (this.cursors.up.isDown && this.body.onFloor()) {
          this.setVelocityY(-300); // Example jump velocity
      }
  }
}
