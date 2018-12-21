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

        //

        this.profileComp = new ProfileComponent();
        this.addChild(this.profileComp);

        this.resourceComp = new ResourceComponent();
        this.addChild(this.resourceComp);

        this.infoComp = new InfoComponent();
        this.addChild(this.infoComp);

        this.chatComp = new ChatComponent();
        this.addChild(this.chatComp);

        this.battleComp = new BattleComponent();
        this.addChild(this.battleComp);

        this.shopComp = new ShopComponent();
        this.addChild(this.shopComp);


        var btnLoad = gv.commonButton(100, 64, cc.winSize.width * 0.9, cc.winSize.height * 0.6, "Load");
        this.addChild(btnLoad);
        btnLoad.addClickEventListener(this.onSelectLoad.bind(this));

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

    onSelectShop:function(sender)
    {

        this.shop = new ShopGui();

        //scaleSX = cc.winSize.x / this.shop.getContentSize();
        //scaleSY = cc.winSize.y / this.shop._getHeight();

        //cc.log(scaleSX);
        this.shop.attr({
            x: cc.winSize.width * 0.5,
            y: cc.winSize.height * 0.5,
            //scaleX: scaleSX,
            //scaleY: scaleSY,
        })
        this.addChild(this.shop);
    },

    onSelectShopBack:function(sender)
    {
        this.shop.setVisible(false);
    },


});