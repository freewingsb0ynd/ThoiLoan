/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */


var Mortar = Defense.extend({
    ctor: function (_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
        this._super(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, 3);
        this.typeStrCode = "DEF_3";
    },
    showInfo : function(){
        return "Mortar " +  this._super();
    },
    getDescription : function(){
        this.description = " Description : Mortar  level " + this.currentLevel;
        return this.description;
    },
    getOptions:function() {
        data = this._super();
        data.constructionName = " Mortar level " + this.currentLevel;
        return data;
    },

    getBuildingName : function(){
        this.name = "Mortar";
        return this.name;
    },

    setImage: function(){

        this._super("res/gui/Art/Buildings/defense_base/DEF_1_"+ this.currentLevel + "_Shadow.png",
            "res/gui/Art/Buildings/cannon/canon_"+ this.currentLevel + "/idle/image000", 5, 300,        //spr num = 5, spr rate = 300fr/ updates
            "gui/Art/Map/map_obj_bg/BG_0/3.png",
            "gui/Art/Map/map_obj_bg/BG/arrowmove3.png",
            null

        );

        this._jsonRes.anim_spr.setPosition({x: 6, y: -5})               //defense anim skin width
    },

})