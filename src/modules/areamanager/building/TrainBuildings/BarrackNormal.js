/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */


var BarrackNormal = Barrack.extend({
    ctor: function (_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
        this._super(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, 1);
        this.typeStrCode = "BAR_1";
    },
    showInfo : function(){
        return "Barrack Normal " +  this._super();
    },
    getDescription : function(){
        this.description = " Description : BarrackNormal level " + this.currentLevel;
        return this.description;
    },
    getOptions:function() {
        data = this._super();
        data.constructionName = " Barrack Normal ";
        var option = {typeOption:ACTION_BUTTON.TYPE.TRAIN_TROOP};
        data.options.push(option);
        return data;
    }
})