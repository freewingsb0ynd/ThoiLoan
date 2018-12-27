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

        this.bgShop = this.guiShop.getChildByName(res.shop.bg_shop);

        //cc.log(cc.winSize.x);

        this.guiShop.attr({
            scaleX: cc.winSize.width/this.bgShop.getBoundingBox().width,
            scaleY: cc.winSize.height/this.bgShop.getBoundingBox().height,

        });
        this.addChild(this.guiShop);

        this.exitBtn = this.guiShop.getChildByName(res.shop.btn_exit);
        this.exitBtn.addClickEventListener(this.onSelectExit.bind(this));

        this.shopMain = this.guiShop.getChildByName(res.shop.shop_main);
        this.shopTab = this.guiShop.getChildByName(res.shop.shop_tab);

        this.tabBackBtn = this.shopTab.getChildByName('tabBack_btn');
        this.shopTabScrView = this.shopTab.getChildByName('shop_scrview');
        this.tabBackBtn.addClickEventListener(this.onSelectTabBack.bind(this));


        this.chestTabBtn = this.shopMain.getChildByName('chestTab_node').getChildByName('chestTab_btn');
        this.resourceTabBtn = this.shopMain.getChildByName('resourceTab_node').getChildByName('resourceTab_btn');
        this.decorTabBtn = this.shopMain.getChildByName('decorTab_node').getChildByName('decorTab_btn');
        this.armyTabBtn = this.shopMain.getChildByName('armyTab_node').getChildByName('armyTab_btn');
        this.defenseTabBtn = this.shopMain.getChildByName('defenseTab_node').getChildByName('defenseTab_btn');
        this.shieldTabBtn = this.shopMain.getChildByName('shieldTab_node').getChildByName('shieldTab_btn');

        this.chestTabBtn.addClickEventListener(this.onSelectChestTab.bind(this));
        this.resourceTabBtn.addClickEventListener(this.onSelectResourceTab.bind(this));
        this.decorTabBtn.addClickEventListener(this.onSelectDecorTab.bind(this));
        this.armyTabBtn.addClickEventListener(this.onSelectArmyTab.bind(this));
        this.defenseTabBtn.addClickEventListener(this.onSelectDefenseTab.bind(this));
        this.shieldTabBtn.addClickEventListener(this.onSelectShieldTab.bind(this));


    },

    onSelectChestTab: function(sender){
        this.initShopTab();

    },

    onSelectResourceTab: function(sender){

    },

    onSelectDecorTab: function(sender){

    },

    onSelectArmyTab: function(sender){

    },

    onSelectDefenseTab: function(sender){

    },

    onSelectShieldTab: function(sender){

    },

    onSelectExit: function(sender){
        fr.getCurrentScreen().layerLobby.onSelectShopBack();
    },

    onSelectTabBack: function(sender){
        this.shopTab.setVisible(false);
        this.shopMain.setVisible(true);

    },


    initShopTab: function(){
        this.shopMain.setVisible(false);
        this.shopTab.setVisible(true);

        this.initScrView()
    },

    initScrView: function(){


    },

});
