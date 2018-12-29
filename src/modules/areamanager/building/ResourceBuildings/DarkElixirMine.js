/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */


var DarkElixirMine = Resource.extend({
    ctor: function (_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, _harvestMoment) {
        this._super(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, gv.RESOURCE_TYPE.DARK_ELIXIR, _harvestMoment);
    },
    showInfo : function(){
        return "Dark Elixir  Mine" +  this._super();
    },
    update : function(){

    }
})