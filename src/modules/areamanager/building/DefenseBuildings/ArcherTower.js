/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */


var ArcherTower = Defense.extend({
    ctor: function (_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
        this._super(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, 2);
        this.typeStrCode = "DEF_2";
    },
    showInfo : function(){
        return "ArcherTower " +  this._super();
    },
    getDescription : function(){
        this.description = " Description : ArcherTower level " + this.currentLevel;
        return this.description;
    },
    //getImage : function(){
    //    this.image = new cc.Sprite("res/gui/Art/Map/map_obj_bg/BG/RED_3.png");
    //    return this.image;
    //}
})