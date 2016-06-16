var game = new Phaser.Game(window.innerWidth, window.innerHeight-15, Phaser.CANVAS, 'glowna', { preload: preload, create: create, update: update, render: render});

function preload() {
	game.load.tilemap('trawa', 'json/trawa.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.tilemap('podlogi_sciany_droga', 'json/podlogi_sciany_droga.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.tilemap('krzesla_biurowe_komputery', 'json/krzesla_biurowe_komputery.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.tilemap('samochody', 'json/samochody.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.tilemap('szafy_krzesla_lawki_regaly', 'json/szafy_krzesla_lawki_regaly.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.tilemap('drzewa', 'json/drzewa.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.tilemap('tablice', 'json/tablice.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('drzewa', 'img/sprite/drzewa.png', 32, 32);
	game.load.image('krzesla_biurowe_komputery', 'img/sprite/krzesla_biurowe_komputery.png', 32, 32);
	game.load.image('samochody', 'img/sprite/samochody.png', 32, 32);
	game.load.image('szafy_krzesla_lawki_regaly', 'img/sprite/szafy_krzesla_lawki_regaly.png', 32, 32);
	game.load.image('podlogi_sciany_droga', 'img/sprite/podlogi_sciany_droga.png', 32, 32);
	game.load.image('trawa', 'img/sprite/trawa.png', 32, 32);
	game.load.image('tablice', 'img/sprite/tablice.png', 32, 32);
    game.load.spritesheet('dude', 'img/sprite2.png', 32, 48);
    game.load.spritesheet('dude2', 'img/sprite3.png', 32, 48);
    game.load.spritesheet('car', 'img/cars1.png');
}

var car;
var player;
var player2;
var cursors;
var wid = 0;
var map;
var map1;
var map2;
var map3;
var map4;
var map5;
var map6;
var layer;
var layer1;
var layer2;
var layer3;
var layer4;
var layer5;
var layer6;
var siatkaflag = false;
var glownaflag = false;
var flagacar = false;
var flagaintro = false;
var flagaintro2 = false;
var flagaintro3 = false;
var textsiatka;
var gdziejestes;
var textintro0;
var textintro1;
var textintro2;
var textintro3;
var textintro4;
var textintro5;
var textintro01;
var textintro02;
var textintro03;
var textintro04;
var textintro05;
var textintro06;
var textintro07;
var textintro08;
var textintro09;


function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);

	map = game.add.tilemap('trawa');
    map.addTilesetImage('trawa', 'trawa');

	layer = map.createLayer(0);
	layer.resizeWorld();

	map = game.add.tilemap('podlogi_sciany_droga');
	map.addTilesetImage('podlogi_sciany_droga', 'podlogi_sciany_droga');

    layer1 = map.createLayer(0);
 	map.setCollisionBetween(85, 91);
	map.setCollisionBetween(97, 105);
	map.setCollisionBetween(109, 111);
	map.setCollisionBetween(114, 115);
	map.setCollisionBetween(67, 68);
	map.setCollisionBetween(145, 147);
	map.setCollisionBetween(150, 151);
	map.setCollisionBetween(157, 158);
	map.setCollisionBetween(162, 163);
	map.setCollisionBetween(169, 171);
    layer1.resizeWorld();
    game.physics.arcade.enable(layer1);
    layer1.body.mass = 100;

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

    map6 = game.add.tilemap('tablice');
    map6.addTilesetImage('tablice', 'tablice');

	layer6 = map6.createLayer(0);
	layer6.resizeWorld();

    player = game.add.sprite(-100, -100, 'dude');
    game.physics.arcade.enable(player);

	player.animations.add('left', [4, 5, 6, 7], 10, true);
	player.animations.add('right', [8, 9, 10, 11], 10, true);
	player.animations.add('up', [12, 13, 14, 15], 10, true);
	player.animations.add('down', [0, 1, 2, 3], 10, true);

	player2 = game.add.sprite(9280, 6201, 'dude2');
    game.physics.arcade.enable(player2);

	player2.animations.add('left', [4, 5, 6, 7], 10, true);
	player2.animations.add('right', [8, 9, 10, 11], 10, true);
	player2.animations.add('up', [12, 13, 14, 15], 10, true);
	player2.animations.add('down', [0, 1, 2, 3], 10, true);

    game.camera.follow(player);

    car = game.add.sprite(7520, 13054, 'car');
    car.name = 'car';
    car.anchor.set(0.5);

    game.physics.arcade.enable(car);

    car.body.collideWorldBounds = true;
    car.body.bounce.set(0.8);
    //car.body.allowRotation = true;
    car.body.immovable = true;
    car.body.mass = 1000;
    car.body.setSize(96, 66, 0, 0);

    cursors = game.input.keyboard.createCursorKeys();
	cursors2 = game.input.keyboard.addKeys({ 'N': Phaser.KeyCode.N, 'B': Phaser.KeyCode.B,'V': Phaser.KeyCode.V,'C': Phaser.KeyCode.C,'X': Phaser.KeyCode.X,'Z': Phaser.KeyCode.Z, 'Q': Phaser.KeyCode.Q, 'E': Phaser.KeyCode.E, 'W': Phaser.KeyCode.W, 'S': Phaser.KeyCode.S, 'A': Phaser.KeyCode.A, 'D': Phaser.KeyCode.D });

	textsiatka = game.add.text(32, 32, "", { font:'40px Hobo, cursive',  fill: '#E85C2F' });
	textsiatka.stroke = '#000000';
    textsiatka.strokeThickness = 6;
    textsiatka.align = 'center';
	textsiatka.anchor.setTo(0.5, 0.5);
	textsiatka.fixedToCamera = true;
    textsiatka.cameraOffset.setTo(window.innerWidth/2, window.innerHeight-50);

    textintro09 = game.add.text(32, 32, "", { font:'25px Hobo, cursive',  fill: '#E85C2F' });
	textintro09.stroke = '#000000';
    textintro09.strokeThickness = 6;
    textintro09.align = 'center';
	textintro09.anchor.setTo(0.5, 0.5);
	textintro09.fixedToCamera = true;
    textintro09.cameraOffset.setTo(window.innerWidth/2, window.innerHeight-700);

    textintro08 = game.add.text(32, 32, "", { font:'25px Hobo, cursive',  fill: '#E85C2F' });
	textintro08.stroke = '#000000';
    textintro08.strokeThickness = 6;
    textintro08.align = 'center';
	textintro08.anchor.setTo(0.5, 0.5);
	textintro08.fixedToCamera = true;
    textintro08.cameraOffset.setTo(window.innerWidth/2, window.innerHeight-650);

    textintro07 = game.add.text(32, 32, "", { font:'25px Hobo, cursive',  fill: '#E85C2F' });
	textintro07.stroke = '#000000';
    textintro07.strokeThickness = 6;
    textintro07.align = 'center';
	textintro07.anchor.setTo(0.5, 0.5);
	textintro07.fixedToCamera = true;
    textintro07.cameraOffset.setTo(window.innerWidth/2, window.innerHeight-600);

    textintro06 = game.add.text(32, 32, "", { font:'25px Hobo, cursive',  fill: '#E85C2F' });
	textintro06.stroke = '#000000';
    textintro06.strokeThickness = 6;
    textintro06.align = 'center';
	textintro06.anchor.setTo(0.5, 0.5);
	textintro06.fixedToCamera = true;
    textintro06.cameraOffset.setTo(window.innerWidth/2, window.innerHeight-550);

    textintro05 = game.add.text(32, 32, "", { font:'25px Hobo, cursive',  fill: '#E85C2F' });
	textintro05.stroke = '#000000';
    textintro05.strokeThickness = 6;
    textintro05.align = 'center';
	textintro05.anchor.setTo(0.5, 0.5);
	textintro05.fixedToCamera = true;
    textintro05.cameraOffset.setTo(window.innerWidth/2, window.innerHeight-500);

    textintro04 = game.add.text(32, 32, "", { font:'25px Hobo, cursive',  fill: '#E85C2F' });
	textintro04.stroke = '#000000';
    textintro04.strokeThickness = 6;
    textintro04.align = 'center';
	textintro04.anchor.setTo(0.5, 0.5);
	textintro04.fixedToCamera = true;
    textintro04.cameraOffset.setTo(window.innerWidth/2, window.innerHeight-450);

    textintro03 = game.add.text(32, 32, "", { font:'25px Hobo, cursive',  fill: '#E85C2F' });
	textintro03.stroke = '#000000';
    textintro03.strokeThickness = 6;
    textintro03.align = 'center';
	textintro03.anchor.setTo(0.5, 0.5);
	textintro03.fixedToCamera = true;
    textintro03.cameraOffset.setTo(window.innerWidth/2, window.innerHeight-400);

    textintro02 = game.add.text(32, 32, "", { font:'25px Hobo, cursive',  fill: '#E85C2F' });
	textintro02.stroke = '#000000';
    textintro02.strokeThickness = 6;
    textintro02.align = 'center';
	textintro02.anchor.setTo(0.5, 0.5);
	textintro02.fixedToCamera = true;
    textintro02.cameraOffset.setTo(window.innerWidth/2, window.innerHeight-350);

    textintro01 = game.add.text(32, 32, "", { font:'25px Hobo, cursive',  fill: '#E85C2F' });
	textintro01.stroke = '#000000';
    textintro01.strokeThickness = 6;
    textintro01.align = 'center';
	textintro01.anchor.setTo(0.5, 0.5);
	textintro01.fixedToCamera = true;
    textintro01.cameraOffset.setTo(window.innerWidth/2, window.innerHeight-300);

    textintro0 = game.add.text(32, 32, "", { font:'28px Hobo, cursive',  fill: '#E85C2F' });
	textintro0.stroke = '#000000';
    textintro0.strokeThickness = 6;
    textintro0.align = 'center';
	textintro0.anchor.setTo(0.5, 0.5);
	textintro0.fixedToCamera = true;
    textintro0.cameraOffset.setTo(window.innerWidth/2, window.innerHeight-250);

    textintro1 = game.add.text(32, 32, "", { font:'28px Hobo, cursive',  fill: '#E85C2F' });
	textintro1.stroke = '#000000';
    textintro1.strokeThickness = 6;
    textintro1.align = 'center';
	textintro1.anchor.setTo(0.5, 0.5);
	textintro1.fixedToCamera = true;
    textintro1.cameraOffset.setTo(window.innerWidth/2, window.innerHeight-200);

    textintro2 = game.add.text(32, 32, "", { font:'28px Hobo, cursive',  fill: '#E85C2F' });
	textintro2.stroke = '#000000';
    textintro2.strokeThickness = 6;
    textintro2.align = 'center';
	textintro2.anchor.setTo(0.5, 0.5);
	textintro2.fixedToCamera = true;
    textintro2.cameraOffset.setTo(window.innerWidth/2, window.innerHeight-150);

    textintro3 = game.add.text(32, 32, "", { font:'28px Hobo, cursive',  fill: '#E85C2F' });
	textintro3.stroke = '#000000';
    textintro3.strokeThickness = 6;
    textintro3.align = 'center';
	textintro3.anchor.setTo(0.5, 0.5);
	textintro3.fixedToCamera = true;
    textintro3.cameraOffset.setTo(window.innerWidth/2, window.innerHeight-100);

    textintro4 = game.add.text(32, 32, "", { font:'28px Hobo, cursive',  fill: '#E85C2F' });
	textintro4.stroke = '#000000';
    textintro4.strokeThickness = 6;
    textintro4.align = 'center';
	textintro4.anchor.setTo(0.5, 0.5);
	textintro4.fixedToCamera = true;
    textintro4.cameraOffset.setTo(window.innerWidth/2, window.innerHeight-50);

    textintro5 = game.add.text(32, 32, "", { font:'28px Hobo, cursive',  fill: '#E85C2F' });
	textintro5.stroke = '#000000';
    textintro5.strokeThickness = 6;
    textintro5.align = 'center';
	textintro5.anchor.setTo(0.5, 0.5);
	textintro5.fixedToCamera = true;
    textintro5.cameraOffset.setTo(window.innerWidth/2, window.innerHeight-780);

    gdziejestes = game.add.text(32, 32, "DROGA", { font:'30px Hobo, cursive',  fill: '#E85C2F' });
	gdziejestes.stroke = '#000000';
    gdziejestes.strokeThickness = 6;
    gdziejestes.align = 'left';
	gdziejestes.anchor.setTo(0.0, 0.5);
	gdziejestes.fixedToCamera = true;
    gdziejestes.cameraOffset.setTo(32, 32);

}

function update() {
	game.physics.arcade.collide(player, layer1);
	game.physics.arcade.collide(player, layer2);
	game.physics.arcade.collide(player, layer4);
	game.physics.arcade.collide(player, layer5);
	game.physics.arcade.collide(car, layer1);
	game.physics.arcade.collide(car, layer2);
	game.physics.arcade.collide(car, layer4);
	game.physics.arcade.collide(car, layer5);
	game.physics.arcade.collide(player, car);

	car.body.velocity.x = 0;
    car.body.velocity.y = 0;
    car.body.angularVelocity = 0;

	player.body.velocity.x	= 0;
	player.body.velocity.y	= 0;

	player2.body.velocity.x	= 0;
	player2.body.velocity.y	= 0;

	if(siatkaflag == true){
		if (cursors.left.isDown || cursors2.A.isDown)
		{
			player.body.velocity.x	= -350;
			player.animations.play('left');
		}
		else if (cursors.right.isDown || cursors2.D.isDown)
		{
			player.body.velocity.x	= 350;
			player.animations.play('right');
		}
		else if (cursors.up.isDown || cursors2.W.isDown)
		{
			player.body.velocity.y	= -350;
			player.animations.play('up');
		}
		else if (cursors.down.isDown || cursors2.S.isDown)
		{
			player.body.velocity.y	= 350;
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
	        car.body.velocity.copyFrom(game.physics.arcade.velocityFromAngle(car.angle, 600));
	    }
	}

	//napisy góra

	if (siatkaflag == true && player.body.x >= 8750 && player.body.x <= 8770 && player.body.y <= 6080 && player.body.y >= 5980 || flagacar == true && car.body.x >= 8750 && car.body.x <= 8770 && car.body.y <= 6080 && car.body.y >= 5980){
		gdziejestes.text = "PORTIERNIA";
    }
    if (siatkaflag == true && player.body.x >= 8730 && player.body.x <= 8750 && player.body.y <= 6080 && player.body.y >= 5980 || flagacar == true && car.body.x >= 8730 && car.body.x <= 8750 && car.body.y <= 6080 && car.body.y >= 5980){
		gdziejestes.text = "PARKING I";
    }
    if (siatkaflag == true && player.body.x >= 9088 && player.body.x <= 9248 && player.body.y <= 7135 && player.body.y >= 7120 || flagacar == true && car.body.x >= 9088 && car.body.x <= 9248 && car.body.y <= 7135 && car.body.y >= 7120){
		gdziejestes.text = "PORTIERNIA";
    }
    if (siatkaflag == true && player.body.x >= 9088 && player.body.x <= 9248 && player.body.y <= 7150 && player.body.y >= 7135 || flagacar == true && car.body.x >= 9088 && car.body.x <= 9248 && car.body.y <= 7150 && car.body.y >= 7135){
		gdziejestes.text = "KORYTARZ";
    }
    if (siatkaflag == true && player.body.x >= 9376 && player.body.x <= 9472 && player.body.y <= 7630 && player.body.y >= 7615 || flagacar == true && car.body.x >= 9376 && car.body.x <= 9472 && car.body.y <= 7630 && car.body.y >= 7615){
		gdziejestes.text = "KORYTARZ";
    }
    if (siatkaflag == true && player.body.x >= 9376 && player.body.x <= 9472 && player.body.y <= 7645 && player.body.y >= 7630 || flagacar == true && car.body.x >= 9376 && car.body.x <= 9472 && car.body.y <= 7645 && car.body.y >= 7630){
		gdziejestes.text = "PARKING NAUCZYCIELSKI";
    }
    if (siatkaflag == true && player.body.x >= 12207 && player.body.x <= 12224 && player.body.y <= 7376 && player.body.y >= 7328 || flagacar == true && car.body.x >= 12207 && car.body.x <= 12224 && car.body.y <= 7376 && car.body.y >= 7328){
		gdziejestes.text = "KORYTARZ";
    }
    if (siatkaflag == true && player.body.x >= 12224 && player.body.x <= 12241 && player.body.y <= 7376 && player.body.y >= 7328 || flagacar == true && car.body.x >= 12224 && car.body.x <= 12241 && car.body.y <= 7376 && car.body.y >= 7328){
		gdziejestes.text = "BUDYNEK I";
    }
    if (siatkaflag == true && player.body.x >= 13167 && player.body.x <= 13184 && player.body.y <= 6992 && player.body.y >= 6912 || flagacar == true && car.body.x >= 13167 && car.body.x <= 13184 && car.body.y <= 6992 && car.body.y >= 6912){
		gdziejestes.text = "BUDYNEK I";
    }
    if (siatkaflag == true && player.body.x >= 13184 && player.body.x <= 13201 && player.body.y <= 6992 && player.body.y >= 6912 || flagacar == true && car.body.x >= 13184 && car.body.x <= 13201 && car.body.y <= 6992 && car.body.y >= 6912){
		gdziejestes.text = "'NARNIA'";
    }
    if (siatkaflag == true && player.body.x >= 15055 && player.body.x <= 15072 && player.body.y <= 6992 && player.body.y >= 6912 || flagacar == true && car.body.x >= 15055 && car.body.x <= 15072 && car.body.y <= 6992 && car.body.y >= 6912){
		gdziejestes.text = '"NARNIA"';
    }
    if (siatkaflag == true && player.body.x >= 15072 && player.body.x <= 15089 && player.body.y <= 6992 && player.body.y >= 6912 || flagacar == true && car.body.x >= 15072 && car.body.x <= 15089 && car.body.y <= 6992 && car.body.y >= 6912){
		gdziejestes.text = "BUDYNEK V";
    }
    if (siatkaflag == true && player.body.x >= 15678 && player.body.x <= 15695 && player.body.y <= 7472 && player.body.y >= 7424 || flagacar == true && car.body.x >= 15678 && car.body.x <= 15695 && car.body.y <= 7472 && car.body.y >= 7424){
		gdziejestes.text = "BIBLIOTEKA";
    }
    if (siatkaflag == true && player.body.x >= 15695 && player.body.x <= 15712 && player.body.y <= 7472 && player.body.y >= 7424 || flagacar == true && car.body.x >= 15695 && car.body.x <= 15712 && car.body.y <= 7472 && car.body.y >= 7424){
		gdziejestes.text = "BUDYNEK V";
    }
    if (siatkaflag == true && player.body.x >= 15744 && player.body.x <= 15808 && player.body.y <= 7568 && player.body.y >= 7551 || flagacar == true && car.body.x >= 15744 && car.body.x <= 15808 && car.body.y <= 7568 && car.body.y >= 7551){
		gdziejestes.text = "BUDYNEK V";
    }
    if (siatkaflag == true && player.body.x >= 15744 && player.body.x <= 15808 && player.body.y <= 7585 && player.body.y >= 7568 || flagacar == true && car.body.x >= 15744 && car.body.x <= 15808 && car.body.y <= 7585 && car.body.y >= 7568){
		gdziejestes.text = "SALA 6/V";
    }
    if (siatkaflag == true && player.body.x >= 15695 && player.body.x <= 15712 && player.body.y <= 5648 && player.body.y >= 5600 || flagacar == true && car.body.x >= 15695 && car.body.x <= 15712 && car.body.y <= 5648 && car.body.y >= 5600){
		gdziejestes.text = "BUDYNEK V";
    }
    if (siatkaflag == true && player.body.x >= 15678 && player.body.x <= 15695 && player.body.y <= 5648 && player.body.y >= 5600 || flagacar == true && car.body.x >= 15678 && car.body.x <= 15695 && car.body.y <= 5648 && car.body.y >= 5600){
		gdziejestes.text = "SALA 1/V";
    }  
    if (siatkaflag == true && player.body.x >= 10112 && player.body.x <= 10496 && player.body.y <= 9984 && player.body.y >= 9967 || flagacar == true && car.body.x >= 10112 && car.body.x <= 10496 && car.body.y <= 9984 && car.body.y >= 9967){
		gdziejestes.text = "PARKING NAUCZYCIELSKI";
    }
    if (siatkaflag == true && player.body.x >= 10112 && player.body.x <= 10496 && player.body.y <= 10001 && player.body.y >= 9984 || flagacar == true && car.body.x >= 10112 && car.body.x <= 10496 && car.body.y <= 10001 && car.body.y >= 9984){
		gdziejestes.text = "DROGA";
    }
    if (siatkaflag == true && player.body.x >= 5536 && player.body.x <= 6080 && player.body.y <= 7520 && player.body.y >= 7503 || flagacar == true && car.body.x >= 5536 && car.body.x <= 6080 && car.body.y <= 7520 && car.body.y >= 7503){
		gdziejestes.text = "PARKING I";
    }
    if (siatkaflag == true && player.body.x >= 5536 && player.body.x <= 6080 && player.body.y <= 7537 && player.body.y >= 7520 || flagacar == true && car.body.x >= 5536 && car.body.x <= 6080 && car.body.y <= 7537 && car.body.y >= 7520){
		gdziejestes.text = "DROGA";
    }
    if (siatkaflag == true && player.body.x >= 2016 && player.body.x <= 2033 && player.body.y <= 3216 && player.body.y >= 2816 || flagacar == true && car.body.x >= 2016 && car.body.x <= 2033 && car.body.y <= 3216 && car.body.y >= 2816){
		gdziejestes.text = "PARKING I";
    }
    if (siatkaflag == true && player.body.x >= 2033 && player.body.x <= 2050 && player.body.y <= 3216 && player.body.y >= 2816 || flagacar == true && car.body.x >= 2033 && car.body.x <= 2050 && car.body.y <= 3216 && car.body.y >= 2816){
		gdziejestes.text = "PARKING II";
    }
	if (siatkaflag == true && player.body.x >= 1152 && player.body.x <= 1169 && player.body.y <= 4560 && player.body.y >= 3040 || flagacar == true && car.body.x >= 1152 && car.body.x <= 1169 && car.body.y <= 4560 && car.body.y >= 3040){
		gdziejestes.text = "DROGA";
    }
	if (siatkaflag == true && player.body.x >= 1169 && player.body.x <= 1186 && player.body.y <= 4560 && player.body.y >= 3040 || flagacar == true && car.body.x >= 1169 && car.body.x <= 1186 && car.body.y <= 4560 && car.body.y >= 3040){
		gdziejestes.text = "PARKING I";
    }
    if (siatkaflag == true && player.body.x >= 1152 && player.body.x <= 1169 && player.body.y <= 6544 && player.body.y >= 5408 || flagacar == true && car.body.x >= 1152 && car.body.x <= 1169 && car.body.y <= 6544 && car.body.y >= 5408){
		gdziejestes.text = "DROGA";
    }
	if (siatkaflag == true && player.body.x >= 1169 && player.body.x <= 1186 && player.body.y <= 6544 && player.body.y >= 5408 || flagacar == true && car.body.x >= 1169 && car.body.x <= 1186 && car.body.y <= 6544 && car.body.y >= 5408){
		gdziejestes.text = "PARKING I";
    }

	//napisy dół

    if (siatkaflag == true && player.body.x >= 15435 && player.body.x <= 15480 && player.body.y <= 7212 && player.body.y >= 7200){
		textsiatka.text = "Aby zagrać w siatkę naciśnij E.";
    }
    else if (flagacar === false && siatkaflag == true && player.body.x < car.body.x + 130 && player.body.x > car.body.x - 60 && player.body.y < car.body.y + 90 && player.body.y > car.body.y - 80){
		textsiatka.text = "Aby wsiąść do samochodu naciśnij E.";
	}
	else {
    	textsiatka.text = "";
    }

    if (flagacar === true) {
		textsiatka.text = "Aby wysiąść z samochodu naciśnij Q.";
	}

	//włączanie siatkówki
	
	if (cursors2.E.isDown && siatkaflag == true && player.body.x >= 15435 && player.body.x <= 15480 && player.body.y <= 7212 && player.body.y >= 7200)
    {
    	$("body").append('<div id="siatka" style="display: none;"></div>');
    	siatka();
    	$('#glowna').hide();
		$('#siatka').show();
		game.paused = true;
    	siatkaflag = false;
    	glownaflag = true;
    }

    //wsiadanie i wysiadanie z samochodu

    if (cursors2.E.isDown && player.body.x < car.body.x + 130 && player.body.x > car.body.x - 60 && player.body.y < car.body.y + 90 && player.body.y > car.body.y - 80){
		flagacar = true;
		siatkaflag = false;
		player.body.y = -100;
		player.body.x = -100;
		game.camera.follow(car);
	}

	if (cursors2.Q.isDown && flagacar === true){
		flagacar = false;
		siatkaflag = true;
		player.body.y = car.body.y;
		player.body.x = car.body.x + 100;
		game.camera.follow(player);
	}

	if(flagaintro === true){
		if(car.body.x >= 5536 && car.body.x <= 6080 && car.body.y <= 7520 && car.body.y >= 7503){
			gdziejestes.text = "PARKING I";
		}
		if(car.body.x >= 6000 && car.angle === 160){
			car.body.velocity.copyFrom(game.physics.arcade.velocityFromAngle(car.angle, 1000));
		}
		if(car.body.x < 6000 && car.angle === 160){
			car.angle = -90;
		}
		if(car.angle === -90 && car.body.x < 6050 && car.body.y > 5900){
			car.body.velocity.copyFrom(game.physics.arcade.velocityFromAngle(car.angle, 1000));
		}
		if(car.angle === -90 && car.body.x < 6050 && car.body.y < 5960 && car.body.y > 5950){
			flagaintro = false;
			player.body.x = car.body.x + 100;
			player.body.y = car.body.y;
			flagaintro2 = true;
		}
	}

	if(flagaintro2 === true){
		player2.animations.stop();
		player2.frame = 4;
		game.camera.follow(player);
		if(player.body.x >= 8750 && player.body.x <= 8770 && player.body.y <= 6080 && player.body.y >= 5980){
			gdziejestes.text = "PORTIERNIA";
		}
		if(player.body.x < 9230){
			player.body.velocity.x	= 350;
			player.animations.play('right');
		}
		if(player.body.x > 8500 && player.body.y < 6020){
			player.body.velocity.y	= 350;
			player.animations.play('down');
		}
		if(player.body.x > 8990 && player.body.y < 6200){
			player.body.velocity.y	= 350;
			player.animations.play('down');
		}
		if(player.body.x > 9224 && player.body.x < 9227){
			player.animations.stop();
			player.frame = 8;
			flagaintro2 = false;
			flagaintro3 = true;
		}					
	}

	if(flagaintro3 === true){
			textintro09.text = "Witaj przybyszu!";
			textintro08.text = "Sterować swą postacią możesz WSAD'em bądź strałkami.";
			textintro07.text = "Prowadzenie samochodu odbywa się po przez strazłki.";
			textintro06.text = "Aktualnie znajdujesz się w pobliżu portierni";
			textintro05.text = "o czym informuje Cię napis w lewym-górnym rogu.";
			textintro04.text = "Przed budynkiem, w miejscu gdzie zaparkowałeś";
			textintro03.text = "czeka na Ciebie samochód, dokłądnie ten którym tu przyjechałeś.";
			textintro02.text = "Aby do niego wsiąść i pojeździć po okolicznych parkingach,";
			textintro01.text = "i drodze, podejdź do niego i kliknij klawisz E.";
			textintro0.text = "W bibiotece, możesz pograć w mini gry takie jak siatkówka.";
			textintro1.text = "Aby to zrobić podejdź do komputera znajdującego się";
			textintro2.text = "w bibliotece i naciśnij klawisz E. Biblioteka znajduje się w Budynku V,";
			textintro3.text = "do którego poprowadzą Cię drogowskazy umiesczone na ziemi."
			textintro4.text = "Do zobaczenia!";
			textintro5.text = "Aby wyjść z tutorialu naciśnij klawisz Q";
		if(cursors2.Q.isDown){
			glownaflag = true;
    		siatkaflag = true;
    		flagaintro3 = false;
    		textintro0.text = "";
			textintro1.text = "";
			textintro2.text = "";
			textintro3.text = "";
			textintro4.text = "";
			textintro5.text = "";
			textintro01.text = "";
			textintro02.text = "";
			textintro03.text = "";
			textintro04.text = "";
			textintro05.text = "";
			textintro06.text = "";
			textintro07.text = "";
			textintro08.text = "";
			textintro09.text = "";
			player2.body.x = -100;
		}
	}
}

function render() {
    // game.debug.body(player);
    // game.debug.body(car);
    // game.debug.spriteInfo(player, 32, 32);
    // game.debug.spriteInfo(car, 800, 32);
}

function move() {
  	setInterval(frame, 10);
}

function frame () {
	if (wid <= 400){
		wid += 1;
	}
	$('#myBar').css({'width' : wid});
	if(wid === 400){
		$("#myBar").append('<div onclick="graj();" style="width: 100px, height: 40px; ">GRAJ</div>');
	}
};

function graj () {
	$('#contener').remove();
    $('#glowna').show();
    glownaflag = false;
    siatkaflag = false;
    game.camera.follow(car); 
    intro();
}

function intro () {
	car.angle = 160;
	flagaintro = true;
}

move();
