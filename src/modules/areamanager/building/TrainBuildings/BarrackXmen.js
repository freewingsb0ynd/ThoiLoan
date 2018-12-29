/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */


var BarrackXmen = Barrack.extend({
    ctor: function (_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
        this._super(_id,_posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, 2);
    },
    showInfo : function(){
        return "Barrack Xmen " +  this._super();
    },
    update : function(){

    }
})