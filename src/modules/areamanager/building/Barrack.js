/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */

//gv.BUILDING.BARRACK  = 2;  // ok

var Barrack = Building2Type.extend({
    // need a class for barrack because we need to add tranining queue to barracktype
    ctor: function (_id, _type1, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, _type2) {
        this._super(_id, _type1, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment,_type2);
    },
    showInfo : function(){
        return this._super();
    },
    update : function(){

    }
})