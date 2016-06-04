var game = new Phaser.Game(window.innerWidth, window.innerHeight-15, Phaser.CANVAS, 'glowna', { preload: preload, create: create, update: update});

function preload() {
	game.load.tilemap('mapaglowna', 'json/mapaglowna.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'json/interior.png', 32, 32);
    game.load.spritesheet('dude', 'img/sprite2.png', 32, 48);
}


var player;
var cursors;
var map;
var layer;
var siatkaflag = true;
var glownaflag = true;
var textsiatka;

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	map = game.add.tilemap('mapaglowna');
    map.addTilesetImage('biblioteka', 'tiles');

    layer = map.createLayer(0);
    map.setCollisionBetween(1, 48);
    map.setCollisionBetween(50, 64);
    map.setCollisionBetween(66, 256);
    layer.resizeWorld();

    player = game.add.sprite(150, 32, 'dude');
    game.physics.arcade.enable(player);


	player.animations.add('left', [4, 5, 6, 7], 10, true);
	player.animations.add('right', [8, 9, 10, 11], 10, true);
	player.animations.add('up', [12, 13, 14, 15], 10, true);
	player.animations.add('down', [0, 1, 2, 3], 10, true);

    game.camera.follow(player);

    cursors = game.input.keyboard.createCursorKeys();
	cursors2 = game.input.keyboard.addKeys({ 'E': Phaser.KeyCode.E, 'W': Phaser.KeyCode.W, 'S': Phaser.KeyCode.S, 'A': Phaser.KeyCode.A, 'D': Phaser.KeyCode.D });

	textsiatka = game.add.text(32, 32, "...", { font:'30px Hobo, cursive',  fill: '#E85C2F' });
	textsiatka.stroke = '#000000';
    textsiatka.strokeThickness = 6;
    textsiatka.align = 'center';
	textsiatka.anchor.setTo(0.5, 0.5);
	textsiatka.fixedToCamera = true;
    textsiatka.cameraOffset.setTo(window.innerWidth/2, window.innerHeight-50);
}

function update() {
	game.physics.arcade.collide(player, layer);

	player.body.velocity.x	= 0;
	player.body.velocity.y	= 0;

	if(siatkaflag == true){
		if (cursors.left.isDown || cursors2.A.isDown)
		{
			player.body.velocity.x	= -250;
			player.animations.play('left');
		}
		else if (cursors.right.isDown || cursors2.D.isDown)
		{
			player.body.velocity.x	= 250;
			player.animations.play('right');
		}
		else if (cursors.up.isDown || cursors2.W.isDown)
		{
			player.body.velocity.y	= -250;
			player.animations.play('up');
		}
		else if (cursors.down.isDown || cursors2.S.isDown)
		{
			player.body.velocity.y	= 250;
			player.animations.play('down');
		}
		else
		{
			player.animations.stop();
			player.frame = 0;
		}
	}

	if (cursors2.E.isDown && siatkaflag == true && player.body.x >= 2980 && player.body.x <= 3040 && player.body.y >= 864 && player.body.y <= 896)
    {
    	$("body").append('<div id="siatka" style="display: none;"></div>');
    	siatka();
    	$('#glowna').hide();
		$('#siatka').show();
		game.paused = true;
    	siatkaflag = false;
    	glownaflag = true;
    }

    if (siatkaflag == true && player.body.x >= 2980 && player.body.x <= 3040 && player.body.y >= 864 && player.body.y <= 896)
    {
		textsiatka.text = "Aby zagrać w siatkę nacisnij E.";
    }
    else {
    	textsiatka.text = "...";
    }
}
