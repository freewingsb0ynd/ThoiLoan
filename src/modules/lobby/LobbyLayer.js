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

        this.initGame();
    },


    loadGui:function()
    {
        this.removeAllChildren();
        var size = cc.winSize;

        var btnBack = gv.commonButton(100, 64, size.width * 0.5, size.height * 0.5,"Back");
        this.addChild(btnBack);
        btnBack.addClickEventListener(this.onSelectBack.bind(this));

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

    initGame:function(){
        var size = cc.winSize;

        //var background = cc.Sprite("res/gui/HelloWorld.png");
        //background.setPosition(cc.p(size.width * 0.5, size.height * 0.5));
        //this.addChild(background);

        //var lobbyLayer = ccs.load('gui/LobbyLayer.json');
        //this.addChild(lobbyLayer.lay);

        //var sceneRes = ccs.load("gui/MainScene.json");
        //this.addChild(sceneRes.node);
        //sceneRes.node.runAction(sceneRes.action);
        //sceneRes.action.gotoFrameAndPlay(0, true);
    },




    onSelectBack:function(sender)
    {
        fr.view(ScreenMenu);
    },
    onSelectVietnamese:function(sender)
    {
        fr.Localization.getInstance().setCurrentLanguage('vi');
        this.loadGui();
    },
    onSelectEnglish:function(sender)
    {
        fr.Localization.getInstance().setCurrentLanguage('en');
        this.loadGui();
    }
});