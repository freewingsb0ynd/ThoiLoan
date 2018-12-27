/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */

var Resource = Building2Type.extend({
    harvestMoment: null,
    ctor: function (_id, _type1, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, _type2, _harvestMoment) {
        this._super(_id, _type1, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment,_type2);
        this.harvestMoment = _harvestMoment;
    },
    showInfo : function(){
        return this._super() + "harvestMoment " + this.harvestMoment;
    }
})