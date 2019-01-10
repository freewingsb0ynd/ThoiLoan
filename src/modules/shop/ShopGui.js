/**
 * Created by hoangelato on 12/21/2018.
 */

var ShopGui = cc.Node.extend({

    //shopTabBtns :[],

    ctor: function () {
        this._super();
        this.loadGui();
        //this.initGame();
    },



    loadGui: function(){

        this.guiShop = ccs.load(res.shop.gui_shop).node;
        //var scaleShop = cc.winSize.x/ this.guiShop.x;
        this.titleShop = this.guiShop.getChildByName(res.shop.title_shop);
        this.bgShop = this.guiShop.getChildByName(res.shop.bg_shop);

    //    cc.log("den day roi");
        this.titleShop.setString(res.shop.DEFAULT_TITLE);
        this.guiShop.attr({
            scaleX: cc.winSize.width/this.bgShop.getBoundingBox().width,
            scaleY: cc.winSize.height/this.bgShop.getBoundingBox().height,

        });

        //this.guiShop.setSwallowTouch()
        this.addChild(this.guiShop);

        this.exitBtn = this.guiShop.getChildByName(res.shop.btn_exit);
        this.exitBtn.addClickEventListener(this.onSelectExit.bind(this));

        this.shopMain = new ShopMain(this, this.guiShop.getChildByName(res.shop.shop_main));
        this.shopTab = new ShopTab(this, this.guiShop.getChildByName(res.shop.shop_tab));

    },



    onSelectExit: function(sender){
        fr.getCurrentScreen().layerLobby.onSelectShopBack();
    },



});
