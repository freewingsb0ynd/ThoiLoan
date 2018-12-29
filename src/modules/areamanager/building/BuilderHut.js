/**
 * Created by Admin on 12/29/2018.
 */

var BuilderHut = Building.extend({
    // need a class for Laboratory because we need to add level of army and sorcery
    ctor: function (_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
        this._super(_id, gv.BUILDING.BUILDER_HUT, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
    },
    showInfo : function(){
        return "Builder Hut " + this._super();
    },
    update : function(){

    }
})