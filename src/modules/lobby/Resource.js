/**
 * Created by hoangelato on 12/17/2018.
 */

res = res||{};

//FONT
res.font
//LOBBY
res.lobby = {};
res.lobby.comp_chat =  'gui/ChatComp.json';
res.lobby.comp_profile =  'gui/ProfileComp.json';
res.lobby.comp_info =  'gui/InfoComp.json';
res.lobby.comp_resource =  'gui/ResourceComp.json';
res.lobby.comp_battle =  'gui/BattleComp.json';
res.lobby.comp_shop =  'gui/ShopComp.json';
res.lobby.comp_construction=  'gui/ConstructionComp.json';

//SHOP
res.shop = {};
res.shop.main_shop = 'gui/Shop.json';
res.shop.bg_shop = 'bg_shop';
res.shop.btn_exit = 'Button_1';


var game = game || {};
//CHEAT
game.cheat = {};
game.cheat.gold = 1;
game.cheat.elixir = 2;
game.cheat.darkElixir = 3;
game.cheat.gCoin = 4;
