/**
 * Created by hoangelato on 1/7/2019.
 */

var ActionButton = cc.Node.extend({
    _jsonRes: null,
    button_bg: null,
    ctor:function(actionBtn,idArea) {
        this._super();

        //this._jsonRes = ccs.load('gui/ButtonAction.json').node;
        this._jsonRes = ccs.load('gui/ButtonAction.json').node;
        //cc.log(this._jsonRes);


        this.addChild(this._jsonRes);
        this.idArea = idArea;
        this.actionType = actionBtn.typeOption;

        this.button_bg = this._jsonRes.getChildByName('action_btn');
        this.price_lbl = this._jsonRes.getChildByName('price_lbl');
        this.priceType_spr =  this._jsonRes.getChildByName('priceType_spr');

        this.price_lbl_0 = this._jsonRes.getChildByName('price_lbl_0');
        this.priceType_spr_0 =  this._jsonRes.getChildByName('priceType_spr_0');
        this.actionName_lbl = this._jsonRes.getChildByName('actionName_lbl');

        this.bg = this._jsonRes.getChildByName('bgButton_spr');
        //
        //tempTexture = cc.TextureCache.getInstance().addImage("res/gui/Art/GUIs/Action_Building_Icon/cancel_icon.png");
        //this.bg.setTexture(tempTexture);

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true
        }, this.bg);
        //cc.log(this.button_bg);
        this.button_bg.setSwallowTouches(true);
        this.button_bg.setPropagateTouchEvents(false);
        //this.button_bg.setPosition({x: 0, y: 100});

        this.button_bg.addClickEventListener(this.onSelect.bind(this));
        //cc.log(new ccui.Button(ACTION_BUTTON.RES_LINK[typeActionButton]));
        //
        //var texType = ccui.Widget.PLIST_TEXTURE;
        //
        //this.button_bg.loadTextureNormal('gui/Art/GUIs/Action_Building_Icon/upgrade_icon.png', ccui.Widget.LOCAL_TEXTURE);

        //cc.log("typeeeee  " + typeAction);

        //type = typeAction.toString();

        this.button_bg.loadTextureNormal(ACTION_BUTTON.RES_LINK[actionBtn.typeOption], ccui.Widget.LOCAL_TEXTURE);

        this.actionName_lbl.setString(ACTION_BUTTON.ACTION_NAME[actionBtn.typeOption]);


        //cc.log("aaaaaaaaa" + this.button_bg['NormalFileData']);
        //this.button_bg.get('NormalFileData').get('Path').setString("Art/GUIs/Action_Building_Icon/upgrade_icon.png");
        switch (actionBtn.typeOption){
            case ACTION_BUTTON.TYPE.FINISH_NOW:                 // neu phan tu option co resources:[]
                this.price_lbl.setString(actionBtn.resources[0].amount);
                this.priceType_spr.setVisible(false);
                break;
            case ACTION_BUTTON.TYPE.UPGRADE_BUILDING:

                this.price_lbl.setString(actionBtn.resources[0].amount);
                this.priceType_spr.setTexture(ACTION_BUTTON.RES_LINK.RESOURCE_TYPE[actionBtn.resources[0].type]);

                if(actionBtn.resources[1] != null){
                    this.price_lbl_0.setString(actionBtn.resources[1].amount);
                    this.priceType_spr_0.setTexture(ACTION_BUTTON.RES_LINK.RESOURCE_TYPE[actionBtn.resources[1].type]);

                    this.price_lbl_0.setVisible(true);
                    this.priceType_spr_0.setVisible(true);
                }

                break;

            default:                                            // neu phan tu option khong co resources:[]

                this.price_lbl.setVisible(false);
                this.priceType_spr.setVisible(false);

                break;


        }

    },
    onSelect:function(){
        ALLOW_TOUCH = false
        cc.log("select button ")
        switch(this.actionType){
            case ACTION_BUTTON.TYPE.UPGRADE_BUILDING:
                cc.log("upgrade " + this.idArea);
                UserMap.getInstance().upgradeBuilding(this.idArea);
                break;
            case ACTION_BUTTON.TYPE.CANCEL_BUILDING:
                cc.log("cancel building  " + this.idArea);
                UserMap.getInstance().stopBuilding(this.idArea);
                break;
            case ACTION_BUTTON.TYPE.FINISH_NOW:
                cc.log("finish now " + this.idArea);
                UserMap.getInstance().upgradeBuildingNow(this.idArea);
                break;
        }
        cc.log("get area")
        area = UserMap.getInstance().mapIdToArea.get(this.idArea)
        if(area!=null){
            cc.log("area != null")
            options = area.getOptions();
            fr.getCurrentScreen().layerLobby.constructionComp.onConstructionClick(options);
            fr.getCurrentScreen().layerMap.touch_status = TOUCH_STATUSES.AREA_CLICKED
        }
        ALLOW_TOUCH = true
    }
});

var ACTION_BUTTON = {};

ACTION_BUTTON.TYPE = {};
ACTION_BUTTON.TYPE.CANCEL_BUILDING = 1;
ACTION_BUTTON.TYPE.SHOW_CLAN = 2;
ACTION_BUTTON.TYPE.CREATE_SPELL = 3;
ACTION_BUTTON.TYPE.HARVEST_GOLD = 4;
ACTION_BUTTON.TYPE.HARVEST_ELIXIR = 5;
ACTION_BUTTON.TYPE.HARVEST_DARK_ELIXIR = 6;
ACTION_BUTTON.TYPE.SHOW_INFO = 7;
ACTION_BUTTON.TYPE.FINISH_NOW = 8;
ACTION_BUTTON.TYPE.REMOVE_OBSTACLE = 9;
ACTION_BUTTON.TYPE.REQUEST_CLAN_TROOP = 10;
ACTION_BUTTON.TYPE.RESEARCH_LAB = 11;
ACTION_BUTTON.TYPE.ROTATE_WALL = 12;
ACTION_BUTTON.TYPE.SELECT_LINE_WALL = 13;
ACTION_BUTTON.TYPE.VIEW_SHOP = 14;
ACTION_BUTTON.TYPE.TRAIN_TROOP = 15;
ACTION_BUTTON.TYPE.UPGRADE_BUILDING = 16;


ACTION_BUTTON.ACTION_NAME = {};
ACTION_BUTTON.ACTION_NAME[0] = 'aaaaaaaaaa';
ACTION_BUTTON.ACTION_NAME[1] = 'HỦY';
ACTION_BUTTON.ACTION_NAME[2]= 'BANG HỘI';
ACTION_BUTTON.ACTION_NAME[3] = 'TẠO PHÉP';
ACTION_BUTTON.ACTION_NAME[4] = 'THU HOẠCH';
ACTION_BUTTON.ACTION_NAME[5] = 'THU HOẠCH';
ACTION_BUTTON.ACTION_NAME[6] = 'THU HOẠCH';
ACTION_BUTTON.ACTION_NAME[7] = 'THÔNG TIN';
ACTION_BUTTON.ACTION_NAME[8] = 'XONG NGAY';
ACTION_BUTTON.ACTION_NAME[9] = 'DỌN DẸP';
ACTION_BUTTON.ACTION_NAME[10] = 'XIN QUÂN';
ACTION_BUTTON.ACTION_NAME[11] = 'NGHIÊN CỨU';
ACTION_BUTTON.ACTION_NAME[12] = 'XOAY';
ACTION_BUTTON.ACTION_NAME[13] = 'CHỌN HÀNG';
ACTION_BUTTON.ACTION_NAME[14] = 'CỬA HÀNG';
ACTION_BUTTON.ACTION_NAME[15] = 'HUẤN LUYỆN';
ACTION_BUTTON.ACTION_NAME[16] = 'NÂNG CẤP';


ACTION_BUTTON.RES_LINK = {};
//ACTION_BUTTON.RES_LINK.CANCEL_BUILDING = 'gui/Art/GUIs/Action_Building_Icon/cancel_icon.png';
//ACTION_BUTTON.RES_LINK.SHOW_CLAN = 'gui/Art/GUIs/Action_Building_Icon/clan_button.png';
//ACTION_BUTTON.RES_LINK.CREATE_SPELL = 'gui/Art/GUIs/Action_Building_Icon/create_spell.png';
//ACTION_BUTTON.RES_LINK.HARVEST_GOLD = 'gui/Art/GUIs/Action_Building_Icon/harvest_gold.png';
//ACTION_BUTTON.RES_LINK.HARVEST_ELIXIR = 'gui/Art/GUIs/Action_Building_Icon/harvest_elixir.png';
//ACTION_BUTTON.RES_LINK.HARVEST_DARK_ELIXIR = 'gui/Art/GUIs/Action_Building_Icon/harvest_dark_elixir.png';
//ACTION_BUTTON.RES_LINK.SHOW_INFO = 'gui/Art/GUIs/Action_Building_Icon/info_icon.png';
//ACTION_BUTTON.RES_LINK.FINISH_NOW = 'gui/Art/GUIs/Action_Building_Icon/quick_finish.png';
//ACTION_BUTTON.RES_LINK.REMOVE_OBSTACLE = 'gui/Art/GUIs/Action_Building_Icon/remove_icon.png';
//ACTION_BUTTON.RES_LINK.REQUEST_CLAN_TROOP = 'gui/Art/GUIs/Action_Building_Icon/request_troop_button.png';
//ACTION_BUTTON.RES_LINK.RESEARCH_LAB = 'gui/Art/GUIs/Action_Building_Icon/research_icon.png';
//ACTION_BUTTON.RES_LINK.ROTATE_WALL = 'gui/Art/GUIs/Action_Building_Icon/rotate_icon.png';
//ACTION_BUTTON.RES_LINK.SELECT_LINE_WALL = 'gui/Art/GUIs/Action_Building_Icon/select_line.png';
//ACTION_BUTTON.RES_LINK.VIEW_SHOP = 'gui/Art/GUIs/Action_Building_Icon/shop.png';
//ACTION_BUTTON.RES_LINK.TRAIN_TROOP = 'gui/Art/GUIs/Action_Building_Icon/train_icon.png';
//ACTION_BUTTON.RES_LINK.UPGRADE_BUILDING = 'gui/Art/GUIs/Action_Building_Icon/upgrade_icon.png';

ACTION_BUTTON.RES_LINK[0] = '';
ACTION_BUTTON.RES_LINK[1] = 'gui/Art/GUIs/Action_Building_Icon/cancel_icon.png';
ACTION_BUTTON.RES_LINK[2]= 'gui/Art/GUIs/Action_Building_Icon/clan_button.png';
ACTION_BUTTON.RES_LINK[3] = 'gui/Art/GUIs/Action_Building_Icon/create_spell.png';
ACTION_BUTTON.RES_LINK[4] = 'gui/Art/GUIs/Action_Building_Icon/harvest_gold.png';
ACTION_BUTTON.RES_LINK[5] = 'gui/Art/GUIs/Action_Building_Icon/harvest_elixir.png';
ACTION_BUTTON.RES_LINK[6] = 'gui/Art/GUIs/Action_Building_Icon/harvest_dark_elixir.png';
ACTION_BUTTON.RES_LINK[7] = 'gui/Art/GUIs/Action_Building_Icon/info_icon.png';
ACTION_BUTTON.RES_LINK[8] = 'gui/Art/GUIs/Action_Building_Icon/quick_finish.png';
ACTION_BUTTON.RES_LINK[9] = 'gui/Art/GUIs/Action_Building_Icon/remove_icon.png';
ACTION_BUTTON.RES_LINK[10] = 'gui/Art/GUIs/Action_Building_Icon/request_troop_button.png';
ACTION_BUTTON.RES_LINK[11] = 'gui/Art/GUIs/Action_Building_Icon/research_icon.png';
ACTION_BUTTON.RES_LINK[12] = 'gui/Art/GUIs/Action_Building_Icon/rotate_icon.png';
ACTION_BUTTON.RES_LINK[13] = 'gui/Art/GUIs/Action_Building_Icon/select_line.png';
ACTION_BUTTON.RES_LINK[14] = 'gui/Art/GUIs/Action_Building_Icon/shop.png';
ACTION_BUTTON.RES_LINK[15] = 'gui/Art/GUIs/Action_Building_Icon/train_icon.png';
ACTION_BUTTON.RES_LINK[16] = 'gui/Art/GUIs/Action_Building_Icon/upgrade_icon.png';

ACTION_BUTTON.RES_LINK.RESOURCE_TYPE = {};
ACTION_BUTTON.RES_LINK.RESOURCE_TYPE[0] = '0';
ACTION_BUTTON.RES_LINK.RESOURCE_TYPE[1] = 'gui/Art/GUIs/Main_Gui/gold_icon.png';
ACTION_BUTTON.RES_LINK.RESOURCE_TYPE[2] = 'gui/Art/GUIs/Main_Gui/elixir_icon.png';
ACTION_BUTTON.RES_LINK.RESOURCE_TYPE[3] = 'gui/Art/GUIs/Main_Gui/darkElixir_icon.png';
ACTION_BUTTON.RES_LINK.RESOURCE_TYPE[4] = 'gui/Art/GUIs/Main_Gui/g_icon.png';
