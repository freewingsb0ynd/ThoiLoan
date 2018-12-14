/**
 * Created by CPU11635_LOCAL on 12/12/2018.
 */
var LobbyLayer = cc.Layer.extend({
    _itemMenu:null,
    _beginPos:0,
    isMouseDown:false,

    text_max_gold: null,
    text_gold: null,
    text_eli: null,
    text_darkE: null,
    text_gCoin: null,

    gold:10,
    eli:20,
    darkE:30,
    gCoin:40,

    ctor:function() {
        this._super();
        this.loadGui();
        //this.initGame();
    },


    loadGui:function()
    {
        this.removeAllChildren();
        var size = cc.winSize;
        //
        var profileComp = ccs.load('gui/ProfileComp.json').node;
        profileComp.setPosition(cc.p(size.width * 0, size.height * 1));
        this.addChild(profileComp);

        var infoComp = ccs.load('gui/InfoComp.json').node;
        infoComp.setPosition(cc.p(size.width * 0.5, size.height * 1));
        this.addChild(infoComp);

        var resourceComp = ccs.load('gui/ResourceComp.json').node;
        resourceComp.setPosition(cc.p(size.width * 1, size.height * 1));

        text_max_gold = resourceComp.getChildByName('text_max_gold');
        text_max_gold.setString('ahihi');
        text_gold = resourceComp.getChildByName('text_gold');
        text_gold.setString(this.gold.toString());
        text_elixir = resourceComp.getChildByName('text_elixir');
        text_elixir.setString(this.eli.toString());
        text_darkE = resourceComp.getChildByName('text_darkElixir');
        text_darkE.setString(this.darkE.toString());
        text_gCoin = resourceComp.getChildByName('text_gcoin');
        text_gCoin.setString(this.gCoin.toString());

        this.addChild(resourceComp);

        var chatComp = ccs.load('gui/ChatComp.json').node;
        chatComp.setPosition(cc.p(size.width * 0, size.height * 0.5));
        this.addChild(chatComp);

        var battleComp = ccs.load('gui/BattleComp.json').node;
        battleComp.setPosition(cc.p(size.width * 0, size.height * 0));
        this.addChild(battleComp);

        var shopComp = ccs.load('gui/ShopComp.json').node;
        shopComp.setPosition(cc.p(size.width * 1, size.height * 0));
        this.addChild(shopComp);


        var btnLoad = gv.commonButton(100, 64, size.width * 0.7, size.height * 0.7, "Load");
        this.addChild(btnLoad);
        btnLoad.addClickEventListener(this.onSelectLoad.bind(this));

        var btnHLoad = gv.commonButton(100, 64, size.width * 0.8, size.height * 0.8, "HLoad");
        this.addChild(btnHLoad);
        btnHLoad.addClickEventListener(this.reloadGui(this.gold, this.eli, this.darkE, this.gCoin));

        //var lobbyLayer = ccs.load('gui/LobbyLayer.json');
        //this.addChild(lobbyLayer.node);

    },



    reloadGui:function(gold, eli, darkE, gCoin)
    {
        text_gold.setString(gold.toString());
        text_elixir.setString(eli.toString());
        text_darkE.setString(darkE.toString());
        text_gCoin.setString(gCoin.toString());

    },

    onEnter:function(){
        this._super();
    },

    onSelectLoad:function(sender)
    {
        testnetwork.connector.sendGetUserResRq();
    },


});