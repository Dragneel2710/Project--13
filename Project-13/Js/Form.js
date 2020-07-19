class Form{
    constructor(){
     this.input = createInput("");
     this.button = createButton("PLAY");
     this.greet = createElement('h3');
     this.reset = createButton("Reset");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greet.hide();
    }
    display(){
        var heading = createElement('h1')
        heading.html("multiplayer car game")
        heading.position(displayWidth/2 - 40, 0);

        this.input.position(displayWidth/2 - 40, displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 30, displayHeight/2);
        this.reset.position(displayWidth/2 + 10, 10);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            PlayerCount += 1;
            player.index = PlayerCount;
            player.update();

            console.log("Form.js" + name);
            
            player.updateCount(PlayerCount);

            this.greet.html("Welcome_" + player.name);
            this.greet.position(displayWidth/2, displayHeight/2);
        })
        this.reset.mousePressed(()=>{
            game.update(0);
            player.updateCount(0);
            player.Remove();
        })
    }
}