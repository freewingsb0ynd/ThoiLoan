/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */


var DarkElixirMine = Resource.extend({
    ctor: function (_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, _harvestMoment) {
        this._super(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, gv.RESOURCE_TYPE.DARK_ELIXIR, _harvestMoment);
        this.typeStrCode = "RES_3";
    },
    showInfo : function(){
        return "Dark Elixir  Mine" +  this._super();
    },
    getDescription : function(){
        this.description = " Description : Dark Elixir Mine level " + this.currentLevel;
        return this.description;
    },
    getOptions:function() {
        data = this._super();
        data.constructionName = " Dark Elixir Mine";
        var option = {typeOption:ACTION_BUTTON.TYPE.HARVEST_DARK_ELIXIR};
        data.options.push(option);
        return data;
    },

    setImage: function(){
        this._super("res/gui/Art/Buildings/dark elixir collector/RES_3_"+ this.currentLevel + "/idle/image0000.png",
            "res/gui/Art/Buildings/dark elixir collector/RES_3_"+ this.currentLevel + "/attack01/image000", 4, 5,
            "gui/Art/Map/map_obj_bg/BG_0/3.png",
            "gui/Art/Map/map_obj_bg/BG/arrowmove3.png",
            "gui/Art/Map/map_obj_bg/GRASS_3_Shadow.png"

        );
    }
})