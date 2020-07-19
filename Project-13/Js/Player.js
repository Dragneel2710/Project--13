class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.distance = 0;
        this.rank = null;
    }
    update(){
        var index = "players/player" + this.index;
        database.ref(index).set({
            name : this.name,
            distance : this.distance
        });
    }
    getcount(){
        var count = database.ref('PlayerCount');
        count.on("value",(data)=>{
            PlayerCount = data.val();         
        })
    }
    updateCount(Count){
        database.ref('/').update({
            PlayerCount : Count 
        })
    } 
    static Info(){
        var players = database.ref('players');
        players.on("value",(data)=>{
            tree = data.val();
        })
    }
    Remove(){
        var player1 = database.ref('players');
        player1.set({
            tree : []
        });
    }
    getRank(){
        var ranking = database.ref('Rank');
        ranking.on("value",(data)=>{
            this.rank = data.val();
        })
    }
    static updateRank(board){
        database.ref('/').update({
           Rank : board
        });
    }
}