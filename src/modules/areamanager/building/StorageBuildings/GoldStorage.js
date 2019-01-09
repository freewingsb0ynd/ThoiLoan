/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */


var GoldStorage = Storage.extend({
    ctor: function (_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
        this._super(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, gv.RESOURCE_TYPE.GOLD);
        this.typeStrCode = "STO_1";
    },
    showInfo : function(){
        return "Gold Storage " +  this._super();
    },
    getDescription : function(){
        this.description = " Description : Gold Storage level " + this.currentLevel;
        return this.description;
    },
        setImage : function(){
            this.image.setTexture(TL.PATH.gold_storgae + this.currentLevel + "/idle/image0000.png");
        },

})