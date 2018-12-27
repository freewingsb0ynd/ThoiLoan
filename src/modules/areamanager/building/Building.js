/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */

/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */

var Building = Area.extend({
    currentLevel : null,
    upgradingLevel: null,
    upgradedMoment: null,

    ctor: function (_id, _type1, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
        this._super(_id,_type1,_posX,_posY);
        this.currentLevel = _currentLevel;
        this.upgradingLevel = _upgradingLevel;
        this.upgradedMoment = _upgradedMoment;
    },
    showInfo : function(){
        return this._super() + "currentLevel :" + this.currentLevel + " upgradingLevel : " + this.upgradingLevel + " upgradedMoment :" + this.upgradedMoment;
    }
})
