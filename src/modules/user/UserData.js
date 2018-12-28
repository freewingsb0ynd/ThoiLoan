/**
 * Created by CPU11635_LOCAL on 12/17/2018.
 */
var UserData = cc.Class.extend({
    userName: null,
    usrExp: null,
    level: null,
    trophy: null,

    gold:null,
    elixir:null,
    darkElixir:null,
    gCoin:null,
    shieldTime:null,
    builders:null,
    max_gold:null,
    max_elixir:null,
    max_darkElixir:null,

    ctor:function() {
        this.loadInitData();
        //this.initGame();
    },

    loadInitData: function(){
        this.userName = "Fresher " + testnetwork.connector._id;

        this.trophy = 8888;

        this.gold = 100;
        this.elixir = 200;
        this.darkElixir = 250;
        this.gCoin = 150;
        this.shieldTime = 0;
        this.builders = 1;
        this.max_gold = 2000;
        this.max_elixir = 2000;
        this.max_darkElixir = 1000;
    },



    updateData: function(usrResPacket){

        this.level = usrResPacket.levelPoint;
        this.trophy = usrResPacket.trophy;
        this.usrExp = usrResPacket.usrExp;

        this.gold = usrResPacket.gold;
        this.elixir = usrResPacket.elixir;
        this.darkElixir = usrResPacket.darkElixir;
        this.gCoin = usrResPacket.coin;
        this.shieldTime = usrResPacket.shieldTime;


    },


    updateCheat: function(cheatPacket){

        switch (cheatPacket.typeCheat){
            case gv.RESOURCE_TYPE.GOLD:
                this.gold = cheatPacket.amountAfterCheated;
                cc.log("Gold updated: " + this.gold);
                break;
            case gv.RESOURCE_TYPE.ELIXIR:
                this.elixir = cheatPacket.amountAfterCheated;
                break;
            case gv.RESOURCE_TYPE.DARK_ELIXIR:
                this.darkElixir = cheatPacket.amountAfterCheated;
                break;
            case gv.RESOURCE_TYPE.COIN:
                this.gCoin = cheatPacket.amountAfterCheated;
                break;
        }


    }


});

UserData.getInstance = function() {
    if(this.instance == null) {
        this.instance = new UserData();
    }
    return this.instance;
}
