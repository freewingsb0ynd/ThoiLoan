/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */

var Laboratory = Building.extend({
    // need a class for Laboratory because we need to add level of army and sorcery
    ctor: function (_id, _type1, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
        this._super(_id, _type1, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
    },
    showInfo : function(){
        return this._super();
    }
})