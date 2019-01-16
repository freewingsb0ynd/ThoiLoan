/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */


var DarkElixirStorage = Storage.extend({
    ctor: function (_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
        this._super(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, gv.RESOURCE_TYPE.DARK_ELIXIR);
        this.typeStrCode = "STO_3";
    },
    showInfo : function(){
        return "Dark Elixir Storage " +  this._super();
    },
    getDescription : function(){
        this.description = " Description : Dark Elixir Storage level " + this.currentLevel;
        return this.description;
    },
    getOptions:function() {
        data = this._super();
        data.constructionName = " Dark Elixir Storage level " + this.currentLevel;
        return data;
    },

    setImage: function(){

        this._super("res/gui/Art/Buildings/dark elixir storage/STO_3_"+ this.currentLevel + "/idle/image0001.png",
            null, null, null,
            "gui/Art/Map/map_obj_bg/BG_0/3.png",
            "gui/Art/Map/map_obj_bg/BG/arrowmove3.png",
            "gui/Art/Map/map_obj_bg/GRASS_5_Shadow.png"

        );

    }
})