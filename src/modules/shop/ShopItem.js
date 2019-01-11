/**
 * Created by Hoangelato on 08/01/2019.
 */
var ShopItem = cc.Node.extend({
    //TOPUP_RESOURCE_SPR_VISIBLE: false,
    //TOPUP_RESOURCE: gv.RESOURCE_TYPE.GOLD,
    //
    //AMOUNT_LBL_VISIBLE: false,
    //AMOUNT: "10% KHO",
    //
    //INFO_BTN_VISIBLE: true,
    //
    //TIME_VISIBLE: true,
    //TIME_BUILD_LBL: "0m0s",
    //
    //MAX_BUILT_NUM_VISIBLE: true,
    //MAX_BUILT_NUM_LBL: "0/0",
    //
    //ITEM_SPR_RESLINK_BASE: "gui/Art/GUIs/icons/shop_gui/icon/",
    //BUILDING_TYPE_CODE: "WAL_1",
    //
    //TOWNHALL_REQUEST_LBL_VISIBLE: false,
    //TOWNHALL_REQUEST_LBL: "Yêu cầu nhà chính cấp ",
    //TOWNHALL_REQUEST: 0,
    //WARNING_COLOR: "FF0000",
    //
    //BUTTON_ENABLED: true,
    //
    //ITEM_NAME: "Tường",
    //
    //ITEM_PRICE: 150,
    //ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,

    _jsonRes: null,
    ctor: function(shopItemArgs){
        this._super();

        this._jsonRes = ccs.load('gui/ShopItem.json').node;
        this.item_btn = this._jsonRes.getChildByName('item_btn');
        this.shopItem_spr = this._jsonRes.getChildByName('shopItem_spr');
        this.itemPrice_lbl = this._jsonRes.getChildByName('itemPrice_lbl');
        this.itemPrice_spr = this._jsonRes.getChildByName('itemPrice_spr');
        this.townHallRequest_lbl = this._jsonRes.getChildByName('townHallRequest_lbl');
        this.builtTime_spr = this._jsonRes.getChildByName('builtTime_spr');
        this.builtTime_lbl = this._jsonRes.getChildByName('builtTime_lbl');
        this.builtNum_lbl = this._jsonRes.getChildByName('builtNum_lbl');
        this.amountTopUp_lbl = this._jsonRes.getChildByName('amountTopUp_lbl');
        this.itemName_lbl = this._jsonRes.getChildByName('itemName_lbl');
        this.amountTopup_spr = this._jsonRes.getChildByName('amountTopup_spr');
        this.itemInfo_btn = this._jsonRes.getChildByName('itemInfo_btn');


        this.TOPUP_RESOURCE_SPR_VISIBLE = shopItemArgs.TOPUP_RESOURCE_SPR_VISIBLE;
        if(this.TOPUP_RESOURCE_SPR_VISIBLE) this.TOPUP_RESOURCE = shopItemArgs.TOPUP_RESOURCE;

        this.AMOUNT_LBL_VISIBLE = shopItemArgs.AMOUNT_LBL_VISIBLE;
        if(this.AMOUNT_LBL_VISIBLE) this.AMOUNT = shopItemArgs.AMOUNT_TOPUP;

        this.INFO_BTN_VISIBLE = shopItemArgs.INFO_BTN_VISIBLE;

        this.TIME_VISIBLE = shopItemArgs.TIME_VISIBLE;
        if(this.TIME_VISIBLE) this.TIME_BUILD_LBL = shopItemArgs.TIME_BUILD_LBL;

        this.MAX_BUILT_NUM_VISIBLE = shopItemArgs.MAX_BUILT_NUM_VISIBLE;
        if(this.MAX_BUILT_NUM_VISIBLE) this.MAX_BUILT_NUM_LBL = shopItemArgs.MAX_BUILT_NUM_LBL;

        this.ITEM_SPR_RESLINK_BASE = shopItemArgs.ITEM_SPR_RESLINK_BASE;
        this.BUILDING_TYPE_CODE = shopItemArgs.BUILDING_TYPE_CODE;

        this.TOWNHALL_REQUEST_LBL_VISIBLE = shopItemArgs.TOWNHALL_REQUEST_LBL_VISIBLE;
        if(this.TOWNHALL_REQUEST_LBL_VISIBLE) {
            this.TOWNHALL_REQUEST_LBL = shopItemArgs.TOWNHALL_REQUEST_LBL;
            this.TOWNHALL_REQUEST = shopItemArgs.TOWNHALL_REQUEST;
            this.WARNING_COLOR = shopItemArgs.WARNING_COLOR;
        }

        this.BUTTON_ENABLED = shopItemArgs.BUTTON_ENABLED;

        this.ITEM_NAME = shopItemArgs.ITEM_NAME;
        this.ITEM_PRICE = shopItemArgs.ITEM_PRICE;
        this.ITEM_PRICE_TYPE = shopItemArgs.ITEM_PRICE_TYPE;

        //cc.log (JSON.stringify(shopItemArgs));

        this.reloadChildNode();
        this.addChild(this._jsonRes);
    },

    reloadChildNode: function(){

        this.amountTopup_spr.setVisible(this.TOPUP_RESOURCE_SPR_VISIBLE);

        if(this.TOPUP_RESOURCE_SPR_VISIBLE) this.amountTopup_spr.setTexture(ACTION_BUTTON.RES_LINK.RESOURCE_TYPE[this.TOPUP_RESOURCE]);

        this.amountTopUp_lbl.setVisible(this.AMOUNT_LBL_VISIBLE);
        if(this.AMOUNT_LBL_VISIBLE) this.amountTopUp_lbl.setString(this.AMOUNT);

        this.itemInfo_btn.setVisible(this.INFO_BTN_VISIBLE);

        this.builtTime_spr.setVisible(this.TIME_VISIBLE);
        this.builtTime_lbl.setVisible(this.TIME_VISIBLE);
        if(this.TIME_VISIBLE){
            this.builtTime_lbl.setString(this.TIME_BUILD_LBL);
        }

        this.builtNum_lbl.setVisible(this.MAX_BUILT_NUM_VISIBLE);
        if(this.MAX_BUILT_NUM_VISIBLE) this.builtNum_lbl.setString(this.MAX_BUILT_NUM_LBL);

        this.shopItem_spr.setTexture(this.ITEM_SPR_RESLINK_BASE + this.BUILDING_TYPE_CODE + ".png");

        this.townHallRequest_lbl.setVisible(this.TOWNHALL_REQUEST_LBL_VISIBLE);
        if(this.TOWNHALL_REQUEST_LBL_VISIBLE) {
            this.townHallRequest_lbl.setString(this.TOWNHALL_REQUEST_LBL + this.TOWNHALL_REQUEST);
            //this.WARNING_COLOR = shopItemArgs.WARNING_COLOR;
        }

        this.item_btn.setEnabled(this.BUTTON_ENABLED);

        this.itemName_lbl.setString(this.ITEM_NAME);

        this.itemPrice_lbl.setString(this.ITEM_PRICE);
        if (ACTION_BUTTON.RES_LINK.RESOURCE_TYPE[this.ITEM_PRICE_TYPE] != null) this.itemPrice_spr.setTexture(ACTION_BUTTON.RES_LINK.RESOURCE_TYPE[this.ITEM_PRICE_TYPE]);
        else this.itemPrice_spr.setVisible(false);

    }

});
