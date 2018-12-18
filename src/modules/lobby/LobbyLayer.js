/**
 * Created by CPU11635_LOCAL on 12/12/2018.
 */
var LobbyLayer = cc.Layer.extend({
    _itemMenu:null,
    _beginPos:0,
    isMouseDown:false,



    profileComp:null,

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

        //var profileComp = new Component(res.lobby.comp_profile, new Anchor(0,1));

        //var profileComp = new Component(res.lobby.comp_profile);
        //var profileComp = ccs.load(res.lobby.comp_profile).node;
        //profileComp.setPosition(cc.p(size.width * profileComp.perspectivePosition._x, size.height * profileComp.perspectivePosition._y));
        //profileComp.setPosition(cc.p(size.width * 0, size.height * 1));
        this.profileComp = new ProfileComponent();
        this.addChild(this.profileComp);

        this.resourceComp = new ResourceComponent();
        this.addChild(this.resourceComp);

        //var resourceComp = ccs.load(res.lobby.comp_resource).node;
        //resourceComp.setPosition(cc.p(size.width * 1, size.height * 1));

        var infoComp = ccs.load(res.lobby.comp_info).node;
        infoComp.setPosition(cc.p(size.width * 0.5, size.height * 1));
        this.addChild(infoComp);

        var chatComp = ccs.load(res.lobby.comp_chat).node;
        chatComp.setPosition(cc.p(size.width * 0, size.height * 0.5));
        this.addChild(chatComp);

        var battleComp = ccs.load(res.lobby.comp_battle).node;
        battleComp.setPosition(cc.p(size.width * 0, size.height * 0));
        this.addChild(battleComp);

        var shopComp = ccs.load(res.lobby.comp_shop).node;
        shopComp.setPosition(cc.p(size.width * 1, size.height * 0));
        this.addChild(shopComp);


        var btnLoad = gv.commonButton(100, 64, size.width * 0.9, size.height * 0.6, "Load");
        this.addChild(btnLoad);
        btnLoad.addClickEventListener(this.onSelectLoad.bind(this));


        //var lobbyLayer = ccs.load('gui/LobbyLayer.json');
        //this.addChild(lobbyLayer.node);

    },



    reloadGui:function()
    {
        this.profileComp.updateGui();
        this.resourceComp.updateGui();

    },

    onEnter:function(){
        this._super();
    },

    onSelectLoad:function(sender)
    {
        testnetwork.connector.sendGetUserResRq();
    },


});