/**
 * Created by Admin on 12/29/2018.
 */

var ArmyCamp = Building.extend({
    // need a class for Laboratory because we need to add level of army and sorcery
    ctor: function (_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
        this._super(_id, gv.BUILDING.ARMY_CAMP, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
        this.typeStrCode = "AMC_1";
    },
    showInfo : function(){
        return "Army Camp " + this._super();
    },
    getDescription : function(){
        this.description = " Description : ArmyCamp level " + this.currentLevel;
        return this.description;
    },
    getOptions:function() {
        data = this._super();
        data.constructionName = " Army Camp ";
        return data;
    },
    setImage: function(){
        //this._super("res/gui/Art/Buildings/elixir collector/RES_2_"+this.currentLevel+"/idle/image0000.png",
        //    "gui/Art/Effects/RES_2_"+ this.currentLevel+"_effect/0", 10);

        this._super("gui/Art/Buildings/army camp/AMC_1_"+ this.currentLevel + "/idle/image0000.png",
            "res/gui/Art/Effects/armycam_1/0", 5, 10,
            "gui/Art/Map/map_obj_bg/BG_0/5.png",
            "gui/Art/Map/map_obj_bg/BG/arrowmove5.png",
            null

        );
    }
})