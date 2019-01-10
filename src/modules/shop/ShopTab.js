/**
 * Created by hoangelato on 12/27/2018.
 */

var ShopTab = cc.Node.extend({
    //shopTabBtns :[],
    shopGui: null,
    _node: null,

    ctor: function(parent, node){
        //this._super();
        this.shopGui = parent;
        this._node = node;

        this.tabBackBtn = this._node.getChildByName('tabBack_btn');
        this.shopTabView = this._node.getChildByName('shop_scrview');

        this.shopTabScrView = this.shopTabView.getChildByName('shopTab_scrView');
        this.tabBackBtn.addClickEventListener(this.onSelectTabBack.bind(this));

        this.shopTabScrView.removeAllChildren(true);

        var newShopItem = {
            TOPUP_RESOURCE_SPR_VISIBLE: SHOP_ITEMS["1"]["DEFENSE_TAB"]["TOPUP_RESOURCE_SPR_VISIBLE"],
            AMOUNT_LBL_VISIBLE: SHOP_ITEMS["1"]["DEFENSE_TAB"]["AMOUNT_LBL_VISIBLE"],

            INFO_BTN_VISIBLE: SHOP_ITEMS["1"]["DEFENSE_TAB"]["INFO_BTN_VISIBLE"],

            MAX_BUILT_NUM_VISIBLE: SHOP_ITEMS["1"]["DEFENSE_TAB"]["MAX_BUILT_NUM_VISIBLE"],
            MAX_BUILT_NUM_LBL: SHOP_ITEMS["1"]["DEFENSE_TAB"]["ITEMS"]["MAX_BUILT_NUM_LBL"],

            TIME_VISIBLE: SHOP_ITEMS["1"]["DEFENSE_TAB"]["TIME_VISIBLE"],
            TIME_BUILD_LBL: SHOP_ITEMS["1"]["DEFENSE_TAB"]["ITEMS"]["TIME_BUILD_LBL"],

            ITEM_SPR_RESLINK_BASE: SHOP_ITEMS["1"]["DEFENSE_TAB"]["ITEM_SPR_RESLINK_BASE"],
            BUILDING_TYPE_CODE: SHOP_ITEMS["1"]["DEFENSE_TAB"]["ITEMS"]["BUILDING_TYPE_CODE"],

            WARNING_COLOR: SHOP_ITEMS["1"]["DEFENSE_TAB"]["WARNING_COLOR"],

            TOWNHALL_REQUEST_LBL_VISIBLE: SHOP_ITEMS["1"]["DEFENSE_TAB"]["ITEMS"]["TOWNHALL_REQUEST_LBL_VISIBLE"],
            TOWNHALL_REQUEST_LBL: SHOP_ITEMS["1"]["DEFENSE_TAB"]["TOWNHALL_REQUEST_LBL"],
            TOWNHALL_REQUEST: SHOP_ITEMS["1"]["DEFENSE_TAB"]["ITEMS"]["TOWNHALL_REQUEST"],

            BUTTON_ENABLED: SHOP_ITEMS["1"]["DEFENSE_TAB"]["ITEMS"]["BUTTON_ENABLED"],

            NAME: SHOP_ITEMS["1"]["DEFENSE_TAB"]["ITEMS"]["NAME"],

            PRICE: SHOP_ITEMS["1"]["DEFENSE_TAB"]["ITEMS"]["PRICE"],
            PRICE_TYPE: SHOP_ITEMS["1"]["DEFENSE_TAB"]["ITEMS"]["PRICE_TYPE"]
        }

        var shopItemNode = new ShopItem(newShopItem);

        this.shopTabScrView.addChild(shopItemNode);

    },

    onSelectTabBack: function(sender){
        this.shopGui.shopTab._node.setVisible(false);
        this.shopGui.shopMain._node.setVisible(true);

    },


    initShopTab: function(){
        this.shopGui.shopMain._node.setVisible(false);
        this.shopGui.shopTab._node.setVisible(true);

        this.initScrView()
    },

    initScrView: function(){


    },

});