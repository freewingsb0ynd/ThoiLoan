/**
 * Created by CPU11635_LOCAL on 12/12/2018.
 */
var LobbyLayer = cc.Layer.extend({
    _itemMenu:null,
    _beginPos:0,
    isMouseDown:false,

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



        //var lobbyLayer = ccs.load('gui/LobbyLayer.json');
        //this.addChild(lobbyLayer.node);

    },

    onEnter:function(){
        this._super();
    },



});