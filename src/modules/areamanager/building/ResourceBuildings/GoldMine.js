/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */


var GoldMine = Resource.extend({
    ctor: function (_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, _harvestMoment) {
        this._super(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, gv.RESOURCE_TYPE.GOLD, _harvestMoment);
        this.typeStrCode = "RES_1";
    },
    showInfo : function(){
        return "Gold Mine" +  this._super();
    },
    getDescription : function(){
        this.description = " Description : GoldMine level " + this.currentLevel;
        return this.description;
    },
    getOptions:function() {
        data = this._super();
        data.constructionName = " Gold Mine level " + this.currentLevel;
        var option = {typeOption:ACTION_BUTTON.TYPE.HARVEST_GOLD};
        data.options.push(option);
        return data;
    },

    setImage: function(){

        this._super("gui/Art/Buildings/gold mine/RES_1_"+ this.currentLevel + "/idle/image0000.png",
                    "gui/Art/Effects/RES_1_"+ this.currentLevel + "_effect/0", 10, 5,
                    "gui/Art/Map/map_obj_bg/BG_0/3.png",
                    "gui/Art/Map/map_obj_bg/BG/arrowmove3.png",
                    "gui/Art/Map/map_obj_bg/GRASS_3_Shadow.png"

        );

    }


})