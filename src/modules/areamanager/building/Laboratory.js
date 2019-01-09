/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */

//gv.BUILDING.LABORATORY  = 6;  // ok

var Laboratory = Building.extend({
    // need a class for Laboratory because we need to add level of army and sorcery
    ctor: function (_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
        this._super(_id, gv.BUILDING.LABORATORY, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
        this.typeStrCode = "LAB_1";
    },
    showInfo : function(){
        return "Laboratory " + this._super();
    },
    getDescription : function(){
        this.description = " Description : Laboratory level " + this.currentLevel;
        return this.description;
    },
    getOptions:function() {
        data = this._super();
        data.constructionName = " Laboratory ";
        return data;
    }
})