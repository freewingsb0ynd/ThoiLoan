/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */


var BarrackXmen = Barrack.extend({
    ctor: function (_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
        this._super(_id,_posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, 2);
        this.typeStrCode = "BAR_2";
    },
    showInfo : function(){
        return "Barrack Xmen " +  this._super();
    },
    getDescription : function(){
        this.description = " Description : BarrackXmen level " + this.currentLevel;
        return this.description;
    },
    //getImage : function(){
    //    this.image = new cc.Sprite("res/gui/Art/Map/map_obj_bg/BG/RED_2.png");
    //    return this.image;
    //}
})