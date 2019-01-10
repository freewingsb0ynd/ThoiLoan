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
        this.shopTabScrView = this._node.getChildByName('shop_scrview').getChildByName("shopTab_scrView");

        this.tabBackBtn.addClickEventListener(this.onSelectTabBack.bind(this));

    },

    onSelectTabBack: function(sender){
        this.shopGui.shopTab._node.setVisible(false);
        this.shopGui.shopMain._node.setVisible(true);
        this.shopGui.titleShop.setString(res.shop.DEFAULT_TITLE);

    },

    viewTabByName: function(tabName){
        this.shopTabScrView.removeAllChildren();
        var itemsNum = SHOP_ITEMS[tabName].ITEMS.length;
        //var itemsNum = 10;
        this.shopTabScrView.setInnerContainerSize({width: gv.SHOP_TAB.ITEM_BUTTON.NATIVE_WIDTH * (1.1 * itemsNum), height: 350})
        this.shopTabScrView.setBounceEnabled(true);
        this.shopTabScrView.jumpToLeft();

        for(var i = 0; i < itemsNum; i++){

            var newShopItem = {
                TOPUP_RESOURCE_SPR_VISIBLE: SHOP_ITEMS[tabName].TOPUP_RESOURCE_SPR_VISIBLE,
                TOPUP_RESOURCE: SHOP_ITEMS[tabName].ITEMS[i].TOPUP_RESOURCE,

                AMOUNT_LBL_VISIBLE: SHOP_ITEMS[tabName].AMOUNT_LBL_VISIBLE,
                AMOUNT_TOPUP: SHOP_ITEMS[tabName].ITEMS[i].AMOUNT,

                INFO_BTN_VISIBLE: SHOP_ITEMS[tabName].INFO_BTN_VISIBLE,

                MAX_BUILT_NUM_VISIBLE: SHOP_ITEMS[tabName].MAX_BUILT_NUM_VISIBLE || SHOP_ITEMS[tabName].ITEMS[i].MAX_BUILT_NUM_VISIBLE,
                MAX_BUILT_NUM_LBL: SHOP_ITEMS[tabName].ITEMS[i].MAX_BUILT_NUM_LBL,

                TIME_VISIBLE: SHOP_ITEMS[tabName].TIME_VISIBLE || SHOP_ITEMS[tabName].ITEMS[i].TIME_VISIBLE,
                TIME_BUILD_LBL: SHOP_ITEMS[tabName].ITEMS[i].TIME_BUILD_LBL,

                ITEM_SPR_RESLINK_BASE: SHOP_ITEMS[tabName].ITEM_SPR_RESLINK_BASE,
                BUILDING_TYPE_CODE: SHOP_ITEMS[tabName].ITEMS[i].BUILDING_TYPE_CODE,

                WARNING_COLOR: SHOP_ITEMS[tabName].WARNING_COLOR,

                TOWNHALL_REQUEST_LBL_VISIBLE: SHOP_ITEMS[tabName].ITEMS[i].TOWNHALL_REQUEST_LBL_VISIBLE,
                TOWNHALL_REQUEST_LBL: SHOP_ITEMS[tabName].TOWNHALL_REQUEST_LBL,
                TOWNHALL_REQUEST: SHOP_ITEMS[tabName].ITEMS[i].TOWNHALL_REQUEST,

                BUTTON_ENABLED: SHOP_ITEMS[tabName].ITEMS[i].BUTTON_ENABLED || SHOP_ITEMS[tabName].BUTTON_ENABLED,

                ITEM_NAME: SHOP_ITEMS[tabName].ITEMS[i].ITEM_NAME,

                ITEM_PRICE: SHOP_ITEMS[tabName].ITEMS[i].ITEM_PRICE,
                ITEM_PRICE_TYPE: SHOP_ITEMS[tabName].ITEMS[i].ITEM_PRICE_TYPE
            };

            var shopItemNode = new ShopItem(newShopItem);
            shopItemNode.attr({
                x: gv.SHOP_TAB.ITEM_BUTTON.NATIVE_WIDTH * (0.5 + 1.1 * i),
                y: gv.SHOP_TAB.ITEM_BUTTON.NATIVE_HEIGHT * 0.55
            });
            this.shopTabScrView.addChild(shopItemNode);
        }

        this.shopGui.titleShop.setString(SHOP_ITEMS[tabName].TAB_NAME);
    },



    initShopTab: function(tabName){
        this.loadConfigByTownHallLevel(1);

        this.viewTabByName(tabName);

        this.shopGui.shopMain._node.setVisible(false);
        this.shopGui.shopTab._node.setVisible(true);
    },

    loadConfigByTownHallLevel: function(townHallLevel, shopTab) {

        var tabs = [SHOP.TABS.RESOURCE,SHOP.TABS.ARMY,SHOP.TABS.DEFENSE];


        //for(var j = 0; j < tabs.length; j++) {
        //    //var shopTabs = SHOP_ITEMS[tabs[i]];
        //    for (var i = 0; i < SHOP_ITEMS[tabs[j]].ITEMS.length; i++) {
        //
        //        tempBuilding = Building.newBuildingByType(SHOP_ITEMS[tabs[j]].ITEMS[i].BUILDING_TYPE_CODE, 0, 0, 0, 1, 1, 0);
        //
        //
        //        var maxBuild = UserMap.getInstance().getMaxNumberByType(SHOP_ITEMS[tabs[j]].ITEMS[i].BUILDING_TYPE_CODE);
        //        var builtNum = UserMap.getInstance().getCurrentNumberByType(SHOP_ITEMS[tabs[j]].ITEMS[i].BUILDING_TYPE_CODE);
        //        if (SHOP_ITEMS[tabs[j]].ITEMS[i].BUILDING_TYPE_CODE == 'BDH_1') maxBuild = 5;
        //
        //        SHOP_ITEMS[tabs[j]].ITEMS[i].MAX_BUILT_NUM_LBL = builtNum + '/' + maxBuild;
        //
        //
        //        var resPrice = tempBuilding.getResourcePaidToUpgrade();
        //        if (resPrice.gold != 0) {
        //            SHOP_ITEMS[tabs[j]].ITEMS[i].ITEM_PRICE = resPrice.gold;
        //            SHOP_ITEMS[tabs[j]].ITEMS[i].ITEM_PRICE_TYPE = gv.RESOURCE_TYPE.GOLD;
        //        }
        //        else if (resPrice.elixir != 0) {
        //            SHOP_ITEMS[tabs[j]].ITEMS[i].ITEM_PRICE = resPrice.elixir;
        //            SHOP_ITEMS[tabs[j]].ITEMS[i].ITEM_PRICE_TYPE = gv.RESOURCE_TYPE.ELIXIR;
        //        }
        //        else if (resPrice.darkElixir != 0) {
        //            SHOP_ITEMS[tabs[j]].ITEMS[i].ITEM_PRICE = resPrice.darkElixir;
        //            SHOP_ITEMS[tabs[j]].ITEMS[i].ITEM_PRICE_TYPE = gv.RESOURCE_TYPE.DARK_ELIXIR;
        //        }
        //        else if (resPrice.coin != 0) {
        //            SHOP_ITEMS[tabs[j]].ITEMS[i].ITEM_PRICE = resPrice.coin;
        //            SHOP_ITEMS[tabs[j]].ITEMS[i].ITEM_PRICE_TYPE = gv.RESOURCE_TYPE.COIN;
        //        }
        //        else{
        //            SHOP_ITEMS[tabs[j]].ITEMS[i].ITEM_PRICE = "Miễn phí";
        //            SHOP_ITEMS[tabs[j]].ITEMS[i].ITEM_PRICE_TYPE = null;
        //        }
        //
        //        SHOP_ITEMS[tabs[j]].ITEMS[i].TOWNHALL_REQUEST = tempBuilding.getLevelTownHallRequiredToBuild();
        //
        //        SHOP_ITEMS[tabs[j]].ITEMS[i].TOWNHALL_REQUEST_LBL_VISIBLE = townHallLevel < SHOP_ITEMS[tabs[j]].ITEMS[i].TOWNHALL_REQUEST;
        //
        //        cc.log("townhall lower = " + SHOP_ITEMS[tabs[j]].ITEMS[i].TOWNHALL_REQUEST_LBL_VISIBLE);
        //        SHOP_ITEMS[tabs[j]].ITEMS[i].BUTTON_ENABLED = townHallLevel >= SHOP_ITEMS[tabs[j]].ITEMS[i].TOWNHALL_REQUEST;
        //        cc.log("button enabled = " + SHOP_ITEMS[tabs[j]].ITEMS[i].BUTTON_ENABLED);
        //
        //        SHOP_ITEMS[tabs[j]].ITEMS[i].MAX_BUILT_NUM_VISIBLE = !SHOP_ITEMS[tabs[j]].ITEMS[i].TOWNHALL_REQUEST_LBL_VISIBLE;
        //        SHOP_ITEMS[tabs[j]].ITEMS[i].TIME_VISIBLE = !SHOP_ITEMS[tabs[j]].ITEMS[i].TOWNHALL_REQUEST_LBL_VISIBLE;
        //
        //
        //        SHOP_ITEMS[tabs[j]].ITEMS[i].TIME_BUILD_LBL = tempBuilding.getCurrentBuildTime() + '';
        //
        //    }
        //}

        for (var i = 0; i < SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS.length; i++) {
            tempBuilding = Building.newBuildingByType(SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].BUILDING_TYPE_CODE, 0, 0, 0, 1, 1, 0);


            var maxBuild = UserMap.getInstance().getMaxNumberByType(SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].BUILDING_TYPE_CODE);
            var builtNum = UserMap.getInstance().getCurrentNumberByType(SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].BUILDING_TYPE_CODE);
            SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].MAX_BUILT_NUM_LBL = builtNum + '/' + maxBuild;


            var resPrice = tempBuilding.getResourcePaidToUpgrade();
            if (resPrice.gold != 0) {
                SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].ITEM_PRICE = resPrice.gold;
                SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].ITEM_PRICE_TYPE = gv.RESOURCE_TYPE.GOLD;
            }
            else if (resPrice.elixir != 0) {
                SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].ITEM_PRICE = resPrice.elixir;
                SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].ITEM_PRICE_TYPE = gv.RESOURCE_TYPE.ELIXIR;
            }
            else if (resPrice.darkElixir != 0) {
                SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].ITEM_PRICE = resPrice.darkElixir;
                SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].ITEM_PRICE_TYPE = gv.RESOURCE_TYPE.DARK_ELIXIR;
            }
            else if (resPrice.coin != 0) {
                SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].ITEM_PRICE = resPrice.coin;
                SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].ITEM_PRICE_TYPE = gv.RESOURCE_TYPE.COIN;
            }
            else{
                SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].ITEM_PRICE = "Miễn phí";
                SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].ITEM_PRICE_TYPE = null;
            }

            SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].TOWNHALL_REQUEST = tempBuilding.getLevelTownHallRequiredToBuild();

            SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].TOWNHALL_REQUEST_LBL_VISIBLE = townHallLevel < SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].TOWNHALL_REQUEST;

            cc.log("townhall lower = " + SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].TOWNHALL_REQUEST_LBL_VISIBLE);
            SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].BUTTON_ENABLED = townHallLevel >= SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].TOWNHALL_REQUEST;
            cc.log("button enabled = " + SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].BUTTON_ENABLED);

            SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].MAX_BUILT_NUM_VISIBLE = !SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].TOWNHALL_REQUEST_LBL_VISIBLE;
            SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].TIME_VISIBLE = !SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].TOWNHALL_REQUEST_LBL_VISIBLE;


            SHOP_ITEMS[SHOP.TABS.RESOURCE].ITEMS[i].TIME_BUILD_LBL = tempBuilding.getCurrentBuildTime() + '';

        }


    }
});

var gv = gv || {};

gv.SHOP_TAB = {};
gv.SHOP_TAB.ITEM_BUTTON = {};
gv.SHOP_TAB.ITEM_BUTTON.NATIVE_WIDTH = 226;
gv.SHOP_TAB.ITEM_BUTTON.NATIVE_HEIGHT = 325;