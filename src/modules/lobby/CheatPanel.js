/**
 * Created by hoangelato on 12/24/2018.
 */

var CheatLayer = cc.Layer.extend({

    btnCheats:{},

    ctor: function(){
        this._super();

        var size = cc.winSize;

        this.tfAmountCheat = ccui.TextField();
        this.tfAmountCheat.setPosition(size.width * 0.7, size.height * 0.95);
        this.tfAmountCheat.setPlaceHolder("Input amount cheat...");
        this.addChild(this.tfAmountCheat);
        this.tfAmountCheat.setString('1000');

        //btnNetwork.addClickEventListener(this.onSelectNetwork.bind(this));

        var btnCheatGold = gv.commonButton(80, 32, size.width * 0.8, size.height * 0.95 ,"Gold");
        this.addChild(btnCheatGold);
        var btnCheatElixir = gv.commonButton(80, 32, size.width * 0.8, size.height * 0.86 ,"Elixir");
        this.addChild(btnCheatElixir);
        var btnCheatDarkElixir = gv.commonButton(80, 32, size.width * 0.8, size.height * 0.77 ,"Dark");
        this.addChild(btnCheatDarkElixir);
        var btnCheatGCoin = gv.commonButton(80, 32, size.width * 0.8, size.height * 0.68 ,"Coin");
        this.addChild(btnCheatGCoin);

        //this.btnCheats.add(btnCheatGold);
        //this.btnCheats.add(btnCheatElixir);
        //this.btnCheats.add(btnCheatDarkElixir);
        //this.btnCheats.add(btnCheatGCoin);

        //for ()

        btnCheatGold.addClickEventListener(this.onSelectCheatGold.bind(this));
        btnCheatElixir.addClickEventListener(this.onSelectCheatElixir.bind(this));
        btnCheatDarkElixir.addClickEventListener(this.onSelectCheatDarkE.bind(this));
        btnCheatGCoin.addClickEventListener(this.onSelectCheatGCoin.bind(this));

    },

    onSelectCheatGold: function(sender){
        testnetwork.connector.sendCheatRq(res.cheat.gold, Number(this.tfAmountCheat.getString()));
    },
    onSelectCheatElixir: function(sender){
        testnetwork.connector.sendCheatRq(res.cheat.elixir, Number(this.tfAmountCheat.getString()));
    },
    onSelectCheatDarkE: function(sender){
        testnetwork.connector.sendCheatRq(res.cheat.darkElixir, Number(this.tfAmountCheat.getString()));
    },
    onSelectCheatGCoin: function(sender){
        testnetwork.connector.sendCheatRq(res.cheat.gCoin, Number(this.tfAmountCheat.getString()));
    },






})

