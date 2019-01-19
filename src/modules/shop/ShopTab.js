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

        this.gold_lbl = this._node.getChildByName('gold_lbl');
        this.elixir_lbl = this._node.getChildByName('elixir_lbl');
        this.darkElixir_lbl = this._node.getChildByName('darkElixir_lbl');
        this.gCoin_lbl = this._node.getChildByName('gCoin_lbl');

        this.tabBackBtn.addClickEventListener(this.onSelectTabBack.bind(this));

        this.gold_lbl.setString(UserData.getInstance().gold+'');
        this.elixir_lbl.setString(UserData.getInstance().elixir+'');
        this.darkElixir_lbl.setString(UserData.getInstance().darkElixir+'');
        this.gCoin_lbl.setString(UserData.getInstance().gCoin+'');


    },

    onSelectTabBack: function(sender){
        this.shopGui.shopTab._node.setVisible(false);
        this.shopGui.shopMain._node.setVisible(true);
        this.shopGui.titleShop.setString(res.shop.DEFAULT_TITLE);

    },

    viewTabByName: function(tabName){
        this.shopTabScrView.removeAllChildren();
        var itemsNum = SHOP_ITEMS[tabName].ITEMS.length;
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
            //cc.log("SHOP_ITEMS[tabName].ITEMS[i].BUILDING_TYPE_CODE" + SHOP_ITEMS[tabName].ITEMS[i].BUILDING_TYPE_CODE)
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
        this.loadConfigByTownHallLevel(UserMap.getInstance().townHall.currentLevel,tabName);

        this.viewTabByName(tabName);

        this.shopGui.shopMain._node.setVisible(false);
        this.shopGui.shopTab._node.setVisible(true);
    },

    loadConfigByTownHallLevel: function(townHallLevel, shopTab) {

        //var tabs = [SHOP.TABS.RESOURCE,SHOP.TABS.ARMY,SHOP.TABS.DEFENSE];
        switch (shopTab){                                           //updates certain tabs
            case SHOP.TABS.RESOURCE:
            case SHOP.TABS.ARMY:
            case SHOP.TABS.DEFENSE:
                for (i = 0; i < SHOP_ITEMS[shopTab].ITEMS.length; i++) {
                    if (i >= this.loadLimitElementsByTab(shopTab)) {            // if item out of limit range for ARMY or DEFENSE tab

                        SHOP_ITEMS[shopTab].ITEMS[i].BUTTON_ENABLED = false;
                        SHOP_ITEMS[shopTab].ITEMS[i].ITEM_PRICE = "Miễn phí";
                        SHOP_ITEMS[shopTab].ITEMS[i].ITEM_PRICE_TYPE = null;
                        SHOP_ITEMS[shopTab].ITEMS[i].MAX_BUILT_NUM_VISIBLE = false;
                        SHOP_ITEMS[shopTab].ITEMS[i].TIME_VISIBLE = false;

                    }
                    else{                                                       // update items in limit range for ARMY or DEFENSE tab
                        tempBuilding = Building.newBuildingByType(SHOP_ITEMS[shopTab].ITEMS[i].BUILDING_TYPE_CODE, 0, 0, 0, 1, 1, 0);


                        maxBuild = UserMap.getInstance().getMaxNumberByType(SHOP_ITEMS[shopTab].ITEMS[i].BUILDING_TYPE_CODE);
                        builtNum = UserMap.getInstance().getCurrentNumberByType(SHOP_ITEMS[shopTab].ITEMS[i].BUILDING_TYPE_CODE);
                        SHOP_ITEMS[shopTab].ITEMS[i].MAX_BUILT_NUM_LBL = builtNum + '/' + maxBuild;


                        resPrice = tempBuilding.getResourcePaidToUpgrade();
                        if (resPrice.coin != 0) {
                            SHOP_ITEMS[shopTab].ITEMS[i].ITEM_PRICE = resPrice.coin;
                            SHOP_ITEMS[shopTab].ITEMS[i].ITEM_PRICE_TYPE = gv.RESOURCE_TYPE.COIN;
                        }
                        else if (resPrice.gold != 0) {
                            SHOP_ITEMS[shopTab].ITEMS[i].ITEM_PRICE = resPrice.gold;
                            SHOP_ITEMS[shopTab].ITEMS[i].ITEM_PRICE_TYPE = gv.RESOURCE_TYPE.GOLD;
                        }
                        else if (resPrice.elixir != 0) {
                            SHOP_ITEMS[shopTab].ITEMS[i].ITEM_PRICE = resPrice.elixir;
                            SHOP_ITEMS[shopTab].ITEMS[i].ITEM_PRICE_TYPE = gv.RESOURCE_TYPE.ELIXIR;
                        }
                        else if (resPrice.darkElixir != 0) {
                            SHOP_ITEMS[shopTab].ITEMS[i].ITEM_PRICE = resPrice.darkElixir;
                            SHOP_ITEMS[shopTab].ITEMS[i].ITEM_PRICE_TYPE = gv.RESOURCE_TYPE.DARK_ELIXIR;
                        }
                        else{
                            SHOP_ITEMS[shopTab].ITEMS[i].ITEM_PRICE = "Miễn phí";
                            SHOP_ITEMS[shopTab].ITEMS[i].ITEM_PRICE_TYPE = null;
                        }

                        SHOP_ITEMS[shopTab].ITEMS[i].TOWNHALL_REQUEST = tempBuilding.getLevelTownHallRequiredToBuild();

                        SHOP_ITEMS[shopTab].ITEMS[i].TOWNHALL_REQUEST_LBL_VISIBLE = townHallLevel < SHOP_ITEMS[shopTab].ITEMS[i].TOWNHALL_REQUEST;

                        SHOP_ITEMS[shopTab].ITEMS[i].MAX_BUILT_NUM_VISIBLE = !SHOP_ITEMS[shopTab].ITEMS[i].TOWNHALL_REQUEST_LBL_VISIBLE;
                        SHOP_ITEMS[shopTab].ITEMS[i].TIME_VISIBLE = !SHOP_ITEMS[shopTab].ITEMS[i].TOWNHALL_REQUEST_LBL_VISIBLE;

                        SHOP_ITEMS[shopTab].ITEMS[i].TIME_BUILD_LBL = convertToTimeString(tempBuilding.getCurrentBuildTime());

                        maxBuiltCond = builtNum < maxBuild;
                        townHallCond = townHallLevel >= SHOP_ITEMS[shopTab].ITEMS[i].TOWNHALL_REQUEST;
                        SHOP_ITEMS[shopTab].ITEMS[i].BUTTON_ENABLED = maxBuiltCond && townHallCond;
                    }
                }
                break;

        }
    },

    loadLimitElementsByTab: function(shopTab) {
        switch (shopTab){

            case SHOP.TABS.ARMY:
            case SHOP.TABS.DEFENSE:
                return gv.SHOP_TAB.ELEMENT_LIMIT[shopTab];
            //case SHOP.TABS.CHEST:
            //case SHOP.TABS.DECOR:
            //case SHOP.TABS.SHIELD:
            case SHOP.TABS.RESOURCE:
                return SHOP_ITEMS[shopTab].ITEMS.length;
        }
    }

});

var gv = gv || {};

gv.SHOP_TAB = {};
gv.SHOP_TAB.ITEM_BUTTON = {};
gv.SHOP_TAB.ITEM_BUTTON.NATIVE_WIDTH = 226;
gv.SHOP_TAB.ITEM_BUTTON.NATIVE_HEIGHT = 325;
gv.SHOP_TAB.ELEMENT_LIMIT = {
    "ARMY_TAB": 3,
    "DEFENSE_TAB": 4
};

var convertToTimeString = function(timeInSeconds){                  //TimeString prototype: ...d...h...m...s (truncate at two significant units)
    var secs;
    var mins;
    var hours;
    var days;

    if(timeInSeconds < 3600){               //time < 1h
        mins = Math.floor(timeInSeconds/60);
        secs = Math.floor(timeInSeconds - mins *60);

        if (mins == 0) return secs+"s";     //time < 1m
        else return mins+"m"+secs+"s";
    }
    else if(timeInSeconds < 86400) {        //time < 1d
        hours = Math.floor(timeInSeconds /3600);
        mins = Math.floor((timeInSeconds - hours * 3600)/60);
        secs = Math.floor(timeInSeconds - hours * 3600 - mins *60);

        if(mins == 0) return hours+"h";
        else return hours+"h"+mins+"m";
    }
    else{                                   //time > 1d
        days = Math.floor(timeInSeconds/86400);
        hours = Math.floor((timeInSeconds - days * 86400)/3600);
        mins = Math.floor((timeInSeconds - days * 86400- hours * 3600)/60);
        secs = Math.floor(timeInSeconds - days * 86400- hours * 3600 - mins *60);

        if(hours == 0) return days+"d";
        else return days+"d"+hours+"h";
    }
};
