var form , player , game;

var database;

var Gamestate = 0;

var PlayerCount = 0;

var tree;

var car1, car2, car3, car4 

var track;

var gorund;

var c1, c2, c3, c4;

var array = []

function preload(){
    car1 = loadImage("sprite_0.png");
    car2 = loadImage("sprite_1.png");
    car3 = loadImage("sprite_2.png");
    car4 = loadImage("sprite_3.png");

    track = loadImage("track.jpg");

    ground = loadImage("ground.png");
}
function setup(){
    createCanvas(displayWidth - 20,displayHeight - 30)

    database = firebase.database();

    game = new Game();

    game.getstate();
    game.start();
}

 function draw(){
     if(PlayerCount === 4){
         game.update(1);
     }
     if(Gamestate === 1){
         clear();
         game.play();
         drawSprites();
     }
     if(Gamestate === 2){
        game.end();
     }
 }