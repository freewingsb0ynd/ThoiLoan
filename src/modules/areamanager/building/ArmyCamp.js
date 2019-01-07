/**
 * Created by Admin on 12/29/2018.
 */

var ArmyCamp = Building.extend({
    // need a class for Laboratory because we need to add level of army and sorcery
    ctor: function (_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
        this._super(_id, gv.BUILDING.ARMY_CAMP, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
        this.typeStrCode = "AMC_1";
    },
    showInfo : function(){
        return "Army Camp " + this._super();
    },
    getDescription : function(){
        this.description = " Description : ArmyCamp level " + this.currentLevel;
        return this.description;
    },
    //getImage : function(){
    //    this.image = new cc.Sprite("res/gui/Art/Map/map_obj_bg/BG/RED_5.png");
    //    return this.image;
    //}
})