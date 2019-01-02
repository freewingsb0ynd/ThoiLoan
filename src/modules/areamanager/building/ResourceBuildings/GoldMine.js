/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */


var GoldMine = Resource.extend({
    ctor: function (_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, _harvestMoment) {
        this._super(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, gv.RESOURCE_TYPE.GOLD, _harvestMoment);
        this.typeStrCode = "RES_1";
    },
    showInfo : function(){
        return "Gold Mine" +  this._super();
    },
    getDescription : function(){
        this.description = " Description : GoldMine level " + this.currentLevel;
        return this.description;
    },
    getImage : function(){
        this.image = new cc.Sprite("res/gui/Art/Map/map_obj_bg/BG/RED_3.png");
        return this.image;
    }
})