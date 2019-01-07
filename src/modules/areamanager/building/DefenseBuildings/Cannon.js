/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */


var Cannon = Defense.extend({
    ctor: function (_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
        this._super(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, 1);
        this.typeStrCode = "DEF_1";
    },
    showInfo : function(){
        return "Cannon " +  this._super();
    },
    getDescription : function(){
        this.description = " Description : Cannon level " + this.currentLevel;
        return this.description;
    },
    setImage : function(){
        this.image.setTexture("res/gui/Art/Buildings/cannon/canon_1/idle/image0000.png");
    }
})