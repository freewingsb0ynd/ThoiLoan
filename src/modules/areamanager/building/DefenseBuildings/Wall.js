/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */


var Wall = Defense.extend({
    ctor: function (_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
        this._super(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, 4);
        this.typeStrCode = "WAL";
    },
    showInfo : function(){
        return "Wall " +  this._super();
    },
    getDescription : function(){
        this.description = " Description : Wall level " + this.currentLevel;
        return this.description;
    },
    //getImage : function(){
    //    this.image = new cc.Sprite("res/gui/Art/Buildings/wall/WAL_1_7/WAL_1_7/idle/image0000.png");
    //    return this.image;
    //}
})