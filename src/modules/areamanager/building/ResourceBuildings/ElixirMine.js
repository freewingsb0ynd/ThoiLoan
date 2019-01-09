/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */


var ElixirMine = Resource.extend({
    ctor: function (_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, _harvestMoment) {
        this._super(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, gv.RESOURCE_TYPE.ELIXIR, _harvestMoment);
        this.typeStrCode = "RES_2";


    },
    showInfo : function(){
        return "Elixir  Mine" +  this._super();
    },
    getDescription : function(){
        this.description = " Description : Elixir Mine level " + this.currentLevel;
        return this.description;
    },
    //setImage : function(){
    //    this.image.setTexture(TL.PATH.elixir_collector + this.currentLevel + "/idle/image0000.png");
    //},
})