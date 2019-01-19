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

    getBuildingName : function(){
        this.name = "Gold Storage";
        return this.name;
    },

    getOptions:function() {
        data = this._super();
        data.constructionName = " Gold Storage level " + this.currentLevel;
        return data;
    },

    setImage: function(){

        this._super("res/gui/Art/Buildings/gold storage/STO_1_"+ this.currentLevel + "/idle/image0001.png",
            null, null, null,                                           //no idle anim
            "gui/Art/Map/map_obj_bg/BG_0/3.png",
            "gui/Art/Map/map_obj_bg/BG/arrowmove3.png",
            "gui/Art/Map/map_obj_bg/GRASS_5_Shadow.png"

        );

    }
})