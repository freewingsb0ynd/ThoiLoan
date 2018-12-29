/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */


var GoldMine = Resource.extend({
    ctor: function (_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, _harvestMoment) {
        this._super(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, gv.RESOURCE_TYPE.GOLD, _harvestMoment);
    },
    showInfo : function(){
        return "Gold Mine" +  this._super();
    },
    update : function(){

    }
})