var game = new Phaser.Game(window.innerWidth, window.innerHeight-15, Phaser.CANVAS, 'glowna', { preload: preload, create: create, update: update});

function preload() {
	game.load.tilemap('trawa', 'json/trawa.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.tilemap('podlogi_sciany_droga', 'json/podlogi_sciany_droga.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.tilemap('krzesla_biurowe_komputery', 'json/krzesla_biurowe_komputery.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.tilemap('samochody', 'json/samochody.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.tilemap('szafy_krzesla_lawki_regaly', 'json/szafy_krzesla_lawki_regaly.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.tilemap('drzewa', 'json/drzewa.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('drzewa', 'img/sprite/drzewa.png', 32, 32);
	game.load.image('krzesla_biurowe_komputery', 'img/sprite/krzesla_biurowe_komputery.png', 32, 32);
	game.load.image('samochody', 'img/sprite/samochody.png', 32, 32);
	game.load.image('szafy_krzesla_lawki_regaly', 'img/sprite/szafy_krzesla_lawki_regaly.png', 32, 32);
	game.load.image('podlogi_sciany_droga', 'img/sprite/podlogi_sciany_droga.png', 32, 32);
	game.load.image('trawa', 'img/sprite/trawa.png', 32, 32);
    game.load.spritesheet('dude', 'img/sprite2.png', 32, 48);
    game.load.spritesheet('car', 'img/cars1.png');
}

var car;
var player;
var cursors;
var map;
var map1;
var map2;
var map3;
var map4;
var map5;
var layer;
var layer1;
var layer2;
var layer3;
var layer4;
var layer5;
var siatkaflag = true;
var glownaflag = true;
var flagacar = false;
var textsiatka;

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);

	map = game.add.tilemap('trawa');
    map.addTilesetImage('trawa', 'trawa');

	layer = map.createLayer(0);
	layer.resizeWorld();

	map1 = game.add.tilemap('podlogi_sciany_droga');
	map1.addTilesetImage('podlogi_sciany_droga', 'podlogi_sciany_droga');

    layer1 = map1.createLayer(0);
    map1.setCollisionBetween(85, 91);
	map1.setCollisionBetween(97, 105);
	map1.setCollisionBetween(109, 111);
	map1.setCollisionBetween(114, 115);
	map1.setCollisionBetween(67, 68);
	map1.setCollisionBetween(145, 147);
	map1.setCollisionBetween(150, 151);
	map1.setCollisionBetween(157, 158);
	map1.setCollisionBetween(162, 163);
	map1.setCollisionBetween(169, 171);
    layer1.resizeWorld();

    map2 = game.add.tilemap('szafy_krzesla_lawki_regaly');
    map2.addTilesetImage('szafy_krzesla_lawki_regaly', 'szafy_krzesla_lawki_regaly');

    layer2 = map2.createLayer(0);
    map2.setCollisionBetween(1, 17);
    map2.setCollisionBetween(22, 42);
    map2.setCollisionBetween(47, 800);
    layer2.resizeWorld();

	map3 = game.add.tilemap('krzesla_biurowe_komputery');
    map3.addTilesetImage('krzesla_biurowe_komputery', 'krzesla_biurowe_komputery');

    layer3 = map3.createLayer(0);
    map3.setCollisionBetween(1, 32);
    map3.setCollisionBetween(34, 208);
    map3.setCollisionBetween(213, 256);
    layer3.resizeWorld();

    map4 = game.add.tilemap('drzewa');
	map4.addTilesetImage('drzewa', 'drzewa');
    layer4 = map4.createLayer(0);
    map4.setCollisionBetween(1, 800);
    layer4.resizeWorld();

    map5 = game.add.tilemap('samochody');
    map5.addTilesetImage('samochody', 'samochody');

    layer5 = map5.createLayer(0);
    map5.setCollisionBetween(1, 1330);
    layer5.resizeWorld();

    player = game.add.sprite(6000, 6100, 'dude');
    game.physics.arcade.enable(player);

	player.animations.add('left', [4, 5, 6, 7], 10, true);
	player.animations.add('right', [8, 9, 10, 11], 10, true);
	player.animations.add('up', [12, 13, 14, 15], 10, true);
	player.animations.add('down', [0, 1, 2, 3], 10, true);

    game.camera.follow(player);

    car = game.add.sprite(6000, 6000, 'car');
    car.name = 'car';
    car.anchor.set(0.5);

    game.physics.arcade.enable(car);

    car.body.collideWorldBounds = true;
    car.body.bounce.set(0.8);
    car.body.allowRotation = true;
    car.body.immovable = true;

    cursors = game.input.keyboard.createCursorKeys();
	cursors2 = game.input.keyboard.addKeys({ 'Q': Phaser.KeyCode.Q, 'E': Phaser.KeyCode.E, 'W': Phaser.KeyCode.W, 'S': Phaser.KeyCode.S, 'A': Phaser.KeyCode.A, 'D': Phaser.KeyCode.D });

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
	game.physics.arcade.collide(player, layer1);
	game.physics.arcade.collide(player, layer2);
	game.physics.arcade.collide(player, layer3);
	game.physics.arcade.collide(player, layer4);
	game.physics.arcade.collide(player, layer5);
	game.physics.arcade.collide(car, layer);
	game.physics.arcade.collide(car, layer1);
	game.physics.arcade.collide(car, layer2);
	game.physics.arcade.collide(car, layer3);
	game.physics.arcade.collide(car, layer4);
	game.physics.arcade.collide(car, layer5);
	game.physics.arcade.collide(player, car);

	game.physics.arcade.overlap(player, car, collisionHandler, null, this);

	car.body.velocity.x = 0;
    car.body.velocity.y = 0;
    car.body.angularVelocity = 0;

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

	if (flagacar === true) {

		if (cursors.left.isDown)
	    {
	        car.body.angularVelocity = -200;
	    }
	    else if (cursors.right.isDown)
	    {
	        car.body.angularVelocity = 200;
	    }

	    if (cursors.up.isDown)
	    {
	        car.body.velocity.copyFrom(game.physics.arcade.velocityFromAngle(car.angle, 300));
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
    // else {
    // 	textsiatka.text = "...";
    // }

    if (cursors2.E.isDown){
		flagacar = true;
		siatkaflag = false;
		game.camera.follow(car);
	}

	if (cursors2.Q.isDown){
		flagacar = false;
		siatkaflag = true;
		game.camera.follow(player);
	}
}

function collisionHandler (textsiatka, flagacar) {

}
