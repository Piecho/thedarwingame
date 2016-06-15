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
    game.load.spritesheet('car', 'img/cars1.png');
}

var car;
var player;
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
var siatkaflag = true;
var glownaflag = true;
var flagacar = false;
var textsiatka;
var gdziejestes;

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

    player = game.add.sprite(6070, 6000, 'dude');
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
    //car.body.allowRotation = true;
    car.body.immovable = true;
    car.body.mass = 1000;
    car.body.setSize(96, 66, 0, 0);

    cursors = game.input.keyboard.createCursorKeys();
	cursors2 = game.input.keyboard.addKeys({ 'Q': Phaser.KeyCode.Q, 'E': Phaser.KeyCode.E, 'W': Phaser.KeyCode.W, 'S': Phaser.KeyCode.S, 'A': Phaser.KeyCode.A, 'D': Phaser.KeyCode.D });

	textsiatka = game.add.text(32, 32, "", { font:'40px Hobo, cursive',  fill: '#E85C2F' });
	textsiatka.stroke = '#000000';
    textsiatka.strokeThickness = 6;
    textsiatka.align = 'center';
	textsiatka.anchor.setTo(0.5, 0.5);
	textsiatka.fixedToCamera = true;
    textsiatka.cameraOffset.setTo(window.innerWidth/2, window.innerHeight-50);

    gdziejestes = game.add.text(32, 32, "PARKING I", { font:'30px Hobo, cursive',  fill: '#E85C2F' });
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
    else if (flagacar === false && player.body.x < car.body.x + 130 && player.body.x > car.body.x - 60 && player.body.y < car.body.y + 90 && player.body.y > car.body.y - 80){
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
		$("#myBar").append('<div onclick="graj();" id="siatka" style="width: 100px, height: 40px; ">GRAJ</div>');
	}
};

function graj () {
	$('#contener').remove();
    $('#glowna').show();
    // glownaflag = false;
    // siatkaflag = true; 
}

move();
