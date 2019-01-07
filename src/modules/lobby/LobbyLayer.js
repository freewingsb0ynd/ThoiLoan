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

        this.scheduleUpdate();
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

        this.constructionComp = new ConstructionComponent();
        this.addChild(this.constructionComp);


        var example  = {constructionName: "building level 1",
                        options: [{typeOption: ACTION_BUTTON.TYPE.UPGRADE_BUILDING, resources: [{type: gv.RESOURCE_TYPE.DARK_ELIXIR, amount: 100}]},
                                  {typeOption: ACTION_BUTTON.TYPE.UPGRADE_BUILDING, resources: [{type: gv.RESOURCE_TYPE.ELIXIR,amount: 1000}]},
                                  {typeOption: ACTION_BUTTON.TYPE.UPGRADE_BUILDING, resources: [{type: gv.RESOURCE_TYPE.GOLD,amount: 1500}]},
                        ]
                        };
        this.constructionComp.updateGui(example);
    },



    reloadGui:function()
    {
        this.profileComp.updateGui();
        this.resourceComp.updateGui();
        this.infoComp.updateGui();

    },

    onEnter:function(){
        this._super();
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

    update: function(){
        if (UserMap.getInstance().isFinishLoadMap) this.reloadGui();

    }


});