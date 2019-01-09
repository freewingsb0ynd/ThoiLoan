/**
 * Created by Admin on 12/29/2018.
 */

var TownHall = Building.extend({
    // need a class for Laboratory because we need to add level of army and sorcery
    ctor: function (_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
        this._super(_id, gv.BUILDING.TOWN_HALL, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
        this.typeStrCode = "TOW_1";
    },
    showInfo : function(){
        return "TownHall " + this._super();
    },
    getDescription : function(){
        this.description = " Description : TownHall level " + this.currentLevel;
        return this.description;
    },
    setImage : function(){
        this.image.setTexture("res/gui/Art/Map/map_obj_bg/BG/GREEN_4.png");
    },
    getCapacity:function(type){
        switch (type){
            case gv.RESOURCE_TYPE.GOLD:
                return TL.CONFIG["TOW_1"][this.currentLevel]["capacityGold"];
            case gv.RESOURCE_TYPE.ELIXIR:
                return TL.CONFIG["TOW_1"][this.currentLevel]["capacityElixir"];
            case gv.RESOURCE_TYPE.DARK_ELIXIR:
                return TL.CONFIG["TOW_1"][this.currentLevel]["capacityDarkElixir"];
        }
    },
    getOptions:function() {
        data = this._super();
        data.constructionName = " Town Hall ";
        return data;
    }
})