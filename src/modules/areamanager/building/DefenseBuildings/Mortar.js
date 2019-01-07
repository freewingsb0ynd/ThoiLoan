/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */


var Mortar = Defense.extend({
    ctor: function (_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
        this._super(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, 3);
        this.typeStrCode = "DEF_3";
    },
    showInfo : function(){
        return "Mortar " +  this._super();
    },
    getDescription : function(){
        this.description = " Description : Mortar  level " + this.currentLevel;
        return this.description;
    },
    //getImage : function(){
    //    this.image = new cc.Sprite("res/gui/Art/Map/map_obj_bg/BG/RED_3.png");
    //    return this.image;
    //}
})