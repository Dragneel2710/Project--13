class Game{
    constructor(){

    }
    getstate(){
        var go = database.ref("Gamestate")
        go.on("value",function(data){
            Gamestate = data.val();         
        })
    }
    update(red){
    database.ref('/').update({
        Gamestate : red
    })
    }
    start(){
        if(Gamestate === 0){
            player = new Player()
            form = new Form()
            player.getcount()
            form.display()
        }
        c1 = createSprite(100,200);
        c1.addImage("say",car1);
        scale(0.5);
        c2 = createSprite(300,200);
        c2.addImage("for",car2);
        c3 = createSprite(500,200);
        c3.addImage("do",car3);
        c4 = createSprite(700,200);
        c4.addImage("so",car4);
        array = [c1, c2, c3, c4]
    }
    play(){
        form.hide();
        player.getRank();
        text("Welcome!!!",200,200);
        Player.Info();
        if(tree !== undefined){
            var fine = 0;
            var x = 150;
            var y;
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
          for(var a in tree){
             x = x + 200;
             y = displayHeight - tree[a].distance;
             fine = fine + 1;
             array[fine - 1].x = x;
             array[fine - 1].y = y;
             if(fine === player.index){
                 array[fine - 1].shapeColor = "red";
                 camera.position.x = displayWidth/2;
                 camera.position.y = array[fine - 1].y;
                 fill("blue");
                 rectMode(CENTER);
                 rect(x, y, 50, 50);
             }
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 20
             player.update();
        }
        if(player.distance === 1600){
            Gamestate = 2;
            player.rank = player.rank + 1;
            Player.updateRank(player.rank);
            console.log(player.rank);
        }
    }
    end(){
        game.update(2);
        console.log(player.distance);
    }
}