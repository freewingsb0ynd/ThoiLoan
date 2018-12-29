/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */

//gv.BUILDING.RESOURCE  = 8;

var Resource = Building.extend({
    type2:0,
    harvestMoment: null,
    ctor: function (_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, _type2, _harvestMoment) {
        this._super(_id, gv.BUILDING.RESOURCE, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
        this.type2 = _type2;
        this.harvestMoment = _harvestMoment;
    },
    showInfo : function(){
        return this._super() + " harvestMoment " + this.harvestMoment;
    },
    update : function(){

    },
    getImage : function(){
        
    }
})