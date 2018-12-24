/**
 * Created by hoangelato on 12/21/2018.
 */

var ShopGui = cc.Node.extend({

    ctor: function () {
        this._super();
        this.loadGui();
        //this.initGame();
    },


    loadGui: function(){

        this.mainShop = ccs.load(res.shop.main_shop).node;
        //var scaleShop = cc.winSize.x/ this.mainShop.x;

        this.bgShop = this.mainShop.getChildByName(res.shop.bg_shop);

        //cc.log(cc.winSize.x);

        this.mainShop.attr({
            scaleX: cc.winSize.width/this.bgShop.getBoundingBox().width,
            scaleY: cc.winSize.height/this.bgShop.getBoundingBox().height,

        });
        this.addChild(this.mainShop);

        this.exitBtn = this.mainShop.getChildByName(res.shop.btn_exit);

        this.exitBtn.addClickEventListener(this.onSelectExit.bind(this))
    },


    onSelectExit: function(sender){
        fr.getCurrentScreen().layerLobby.onSelectShopBack();
    }
});
