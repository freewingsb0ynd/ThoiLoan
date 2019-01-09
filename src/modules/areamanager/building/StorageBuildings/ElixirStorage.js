/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */


var ElixirStorage = Storage.extend({
    ctor: function (_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
        this._super(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, gv.RESOURCE_TYPE.ELIXIR);
        this.typeStrCode = "STO_2";
    },
    showInfo : function(){
        return "Elixir Storage " +  this._super();
    },
    getDescription : function(){
        this.description = " Description : Elixir Storage level " + this.currentLevel;
        return this.description;
    },
    getOptions:function() {
        data = this._super();
        data.constructionName = " Elixir Storage ";
        return data;
    }
})