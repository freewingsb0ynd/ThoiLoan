/**
 * Created by Admin on 12/29/2018.
 */

var BuilderHut = Building.extend({
    // need a class for Laboratory because we need to add level of army and sorcery
    ctor: function (_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
        this._super(_id, gv.BUILDING.BUILDER_HUT, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
        this.typeStrCode = "BDH_1";
    },
    showInfo : function(){
        return "Builder Hut " + this._super();
    },
    getDescription : function(){
        this.description = " Description : BuilderHut level " + this.currentLevel;
        return this.description;
    },
    getOptions:function() {
        data = this._super();
        data.constructionName = " Builder Hut ";
        return data;
    },

    getLevelTownHallRequiredToBuild: function(){
        return 1;
    },



    getResourcePaidToUpgrade: function(){
        builtNum = UserMap.getInstance().getCurrentNumberByType('BDH_1');
        stringQuery = (builtNum+1) + ''

        if (builtNum < 5) {
            return {
                coin: TL.CONFIG['BDH_1'][stringQuery].coin
            }
        }
        else return {};
    },

    setImage: function(){

        this._super("res/gui/Art/Buildings/builder hut/idle/image0000.png",
            null, null, null,
            "gui/Art/Map/map_obj_bg/BG_0/2.png",
            "gui/Art/Map/map_obj_bg/BG/arrowmove2.png",
            "gui/Art/Map/map_obj_bg/GRASS_2_Shadow.png"

        );

    }
})