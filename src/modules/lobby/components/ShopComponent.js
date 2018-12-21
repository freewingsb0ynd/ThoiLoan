/**
 * Created by hoangelato on 12/18/2018.
 */

var ShopComponent = Component.extend({

    ctor:function() {
        this._super(res.lobby.comp_shop, new Anchor(1,0));
        //this.initGui();
        this.shopBtn = this._jsonRes.getChildByName("button_shop");
        this.shopBtn.addClickEventListener(this.onSelectShop.bind(this))

    },

    onSelectShop: function(sender){
        fr.getCurrentScreen().layerLobby.onSelectShop();
    }


});