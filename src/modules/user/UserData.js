/**
 * Created by CPU11635_LOCAL on 12/17/2018.
 */
var UserData = cc.Class.extend({

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





});

UserData.getInstance = function() {
    if(this.instance == null) {
        this.instance = new UserData();
    }
    return this.instance;
}
