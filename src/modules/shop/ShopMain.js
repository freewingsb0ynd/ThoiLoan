/**
 * Created by hoangelato on 12/27/2018.
 */

var ShopMain = cc.Class.extend({
    //shopTabBtns :[],

    _node: null,
    shopGui: null,

    ctor: function(parent, node){
        //this._super();
        this.shopGui = parent;
        this._node = node;

        this.chestTabBtn = this._node.getChildByName('chestTab_node').getChildByName('chestTab_btn');
        this.resourceTabBtn = this._node.getChildByName('resourceTab_node').getChildByName('resourceTab_btn');
        this.decorTabBtn = this._node.getChildByName('decorTab_node').getChildByName('decorTab_btn');
        this.armyTabBtn = this._node.getChildByName('armyTab_node').getChildByName('armyTab_btn');
        this.defenseTabBtn = this._node.getChildByName('defenseTab_node').getChildByName('defenseTab_btn');
        this.shieldTabBtn = this._node.getChildByName('shieldTab_node').getChildByName('shieldTab_btn');

        this.chestTabBtn.addClickEventListener(this.onSelectChestTab.bind(this));
        this.resourceTabBtn.addClickEventListener(this.onSelectResourceTab.bind(this));
        this.decorTabBtn.addClickEventListener(this.onSelectDecorTab.bind(this));
        this.armyTabBtn.addClickEventListener(this.onSelectArmyTab.bind(this));
        this.defenseTabBtn.addClickEventListener(this.onSelectDefenseTab.bind(this));
        this.shieldTabBtn.addClickEventListener(this.onSelectShieldTab.bind(this));
    },

    onSelectChestTab: function(sender){
        this.shopGui.shopTab.initShopTab(SHOP.TABS.CHEST);
    },

    onSelectResourceTab: function(sender){
        this.shopGui.shopTab.initShopTab(SHOP.TABS.RESOURCE);
    },

    onSelectDecorTab: function(sender){
        this.shopGui.shopTab.initShopTab(SHOP.TABS.DECOR);
    },

    onSelectArmyTab: function(sender){
        this.shopGui.shopTab.initShopTab(SHOP.TABS.ARMY);
    },

    onSelectDefenseTab: function(sender){
        this.shopGui.shopTab.initShopTab(SHOP.TABS.DEFENSE);
    },

    onSelectShieldTab: function(sender){
        this.shopGui.shopTab.initShopTab(SHOP.TABS.SHIELD);
    },


});