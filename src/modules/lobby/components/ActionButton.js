/**
 * Created by hoangelato on 1/7/2019.
 */

var ActionButton = cc.Node.extend({
    _jsonRes: null,
    button_bg: null,
    ctor:function(typeActionButton) {
        this._super();

        //this._jsonRes = ccs.load('gui/ButtonAction.json').node;
        this._jsonRes = ccs.load('gui/ButtonAction.json').node;
        //cc.log(this._jsonRes);


        this.addChild(this._jsonRes);


        this.button_bg = this._jsonRes.getChildByName('action_btn');


        //cc.log(new ccui.Button(ACTION_BUTTON.RES_LINK[typeActionButton]));
        //
        //var texType = ccui.Widget.PLIST_TEXTURE;
        //
        //this.button_bg.loadTextureNormal(ACTION_BUTTON.RES_LINK[typeActionButton], texType);

        //cc.log("aaaaaaaaa" + this.button_bg['NormalFileData']);
        //this.button_bg.get('NormalFileData').get('Path').setString("Art/GUIs/Action_Building_Icon/upgrade_icon.png");

    },

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
ACTION_BUTTON.RES_LINK[ACTION_BUTTON.TYPE.CANCEL_BUILDING] = 'gui/Art/GUIs/Action_Building_Icon/cancel_icon.png';
ACTION_BUTTON.RES_LINK[ACTION_BUTTON.TYPE.SHOW_CLAN]= 'gui/Art/GUIs/Action_Building_Icon/clan_button.png';
ACTION_BUTTON.RES_LINK[ACTION_BUTTON.TYPE.CREATE_SPELL] = 'gui/Art/GUIs/Action_Building_Icon/create_spell.png';
ACTION_BUTTON.RES_LINK[ACTION_BUTTON.TYPE.HARVEST_GOLD] = 'gui/Art/GUIs/Action_Building_Icon/harvest_gold.png';
ACTION_BUTTON.RES_LINK[ACTION_BUTTON.TYPE.HARVEST_ELIXIR] = 'gui/Art/GUIs/Action_Building_Icon/harvest_elixir.png';
ACTION_BUTTON.RES_LINK[ACTION_BUTTON.TYPE.HARVEST_DARK_ELIXIR] = 'gui/Art/GUIs/Action_Building_Icon/harvest_dark_elixir.png';
ACTION_BUTTON.RES_LINK[ACTION_BUTTON.TYPE.SHOW_INFO] = 'gui/Art/GUIs/Action_Building_Icon/info_icon.png';
ACTION_BUTTON.RES_LINK[ACTION_BUTTON.TYPE.FINISH_NOW] = 'gui/Art/GUIs/Action_Building_Icon/quick_finish.png';
ACTION_BUTTON.RES_LINK[ACTION_BUTTON.TYPE.REMOVE_OBSTACLE] = 'gui/Art/GUIs/Action_Building_Icon/remove_icon.png';
ACTION_BUTTON.RES_LINK[ACTION_BUTTON.TYPE.REQUEST_CLAN_TROOP] = 'gui/Art/GUIs/Action_Building_Icon/request_troop_button.png';
ACTION_BUTTON.RES_LINK[ACTION_BUTTON.TYPE.RESEARCH_LAB] = 'gui/Art/GUIs/Action_Building_Icon/research_icon.png';
ACTION_BUTTON.RES_LINK[ACTION_BUTTON.TYPE.ROTATE_WALL] = 'gui/Art/GUIs/Action_Building_Icon/rotate_icon.png';
ACTION_BUTTON.RES_LINK[ACTION_BUTTON.TYPE.SELECT_LINE_WALL] = 'gui/Art/GUIs/Action_Building_Icon/select_line.png';
ACTION_BUTTON.RES_LINK[ACTION_BUTTON.TYPE.VIEW_SHOP] = 'gui/Art/GUIs/Action_Building_Icon/shop.png';
ACTION_BUTTON.RES_LINK[ACTION_BUTTON.TYPE.TRAIN_TROOP] = 'gui/Art/GUIs/Action_Building_Icon/train_icon.png';
ACTION_BUTTON.RES_LINK[ACTION_BUTTON.TYPE.UPGRADE_BUILDING] = 'gui/Art/GUIs/Action_Building_Icon/upgrade_icon.png';

ACTION_BUTTON.RES_LINK.GOLD_ICON_PRICE = 'gui/Art/GUIs/Main_Gui/gold_icon.png';
ACTION_BUTTON.RES_LINK.ELIXIR_ICON_PRICE = 'gui/Art/GUIs/Main_Gui/elixir_icon.png';
ACTION_BUTTON.RES_LINK.DARK_ELIXIR_ICON_PRICE = 'gui/Art/GUIs/Main_Gui/darkElixir_icon.png';
ACTION_BUTTON.RES_LINK.GCOIN_ICON_PRICE = 'gui/Art/GUIs/Main_Gui/g_icon.png';
