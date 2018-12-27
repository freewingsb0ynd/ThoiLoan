/**
 * Created by CPU11643_LOCAL on 12/24/2018.
 */


gv.BUILDING = {}

gv.BUILDING.ARMY_CAMP = 1; // ok
gv.BUILDING.BARRACK  = 2;  // ok
gv.BUILDING.BUILDER_HUT  = 3;  // ok
gv.BUILDING.CLAN_CASTLE  = 4; // ok
gv.BUILDING.DEFENSE  = 5;   // load only cai base truoc
gv.BUILDING.LABORATORY  = 6;  // ok
gv.BUILDING.OBSTACLE  = 7;
gv.BUILDING.RESOURCE  = 8;
gv.BUILDING.STORAGE  = 9;  // da thay
gv.BUILDING.TOWN_HALL  = 10;  // ok

gv.RESOURCE_TYPE = {
    GOLD : 1,
    ELIXIR : 2,
    DARK_ELIXIR : 3,
    COIN : 4
}


var TL = TL || {};

var  building = "res/gui/Art/Buildings/";

TL.PATH = {
    army_camp: building + "army_camp/AMC_1_",
    barrack: building + "barrack/BAR_1_",
    builder_hut: building + "builder_hut",
    clan_castle: building + "clan_castle/CLC_1_",
    town_hall: building + "townhall/TOW_1_",
    defense_base: building + "defense_base/DEF_",
    laboratory: building + "labratory/LAB_1_",
    obstacle: building + "obstacle/OBS_",

    gold_storgae: building + "gold_storage/STO_1_",
    elixir_storage: building + "elixir_storage/STO_2_",
    dark_elixir_storage: building + "dark_elixir_storage/STO_3_",

    gold_mine: building + "gold_mine/RES_1_",
    elixir_collector: building + "elixir_collector/RES_2_",
    dark_elixir_collector: building + "dark_elixir_collector/RES_3_",



}
TL.TOWNHALL = {}
cc.loader.loadJson("res/Config json/TownHall.json",function(error, data){
    TL.TOWNHALL = data;
});

TL.STORAGE = {}
cc.loader.loadJson("res/Config json/Storage.json",function(error, data){
    TL.STORAGE = data;
});