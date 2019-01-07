/**
 * Created by Admin on 12/29/2018.
 */

var ClanCastle = Building.extend({
    // need a class for Laboratory because we need to add level of army and sorcery
    ctor: function (_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
        this._super(_id, gv.BUILDING.CLAN_CASTLE, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
        this.typeStrCode = "CLC_1";
    },
    showInfo : function(){
        return "ClanCastle " + this._super();
    },
    getDescription : function(){
        this.description = " Description : ClanCastle level " + this.currentLevel;
        return this.description;
    },
    //getImage : function(){
    //    this.image.setTexture("res/gui/Art/Map/map_obj_bg/BG/RED_4.png");
    //}
})