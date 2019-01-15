/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */


var ArcherTower = Defense.extend({
    ctor: function (_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
        this._super(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, 2);
        this.typeStrCode = "DEF_2";
    },
    showInfo : function(){
        return "ArcherTower " +  this._super();
    },
    getDescription : function(){
        this.description = " Description : ArcherTower level " + this.currentLevel;
        return this.description;
    },
    getOptions:function() {
        data = this._super();
        data.constructionName = " Archer Tower ";
        return data;
    },

    setImage: function(){

        this._super("res/gui/Art/Buildings/defense_base/DEF_2_"+ gv.LOAD_IMAGE_INDEX.ARCHER_TOWER[this.currentLevel] + "_Shadow.png",
            "res/gui/Art/Buildings/AcherTower/DEF_2_"+ this.currentLevel + "/DEF_2_"+ this.currentLevel + "/idle/image000", 5, 30,
            "gui/Art/Map/map_obj_bg/BG_0/3.png",
            "gui/Art/Map/map_obj_bg/BG/arrowmove3.png",
            null

        );
        this._jsonRes.idle_spr.setPosition({x: 0, y: 30});
        this._jsonRes.anim_spr.setPosition({x: 5, y: -5});

    }
});

gv.LOAD_IMAGE_INDEX = {};
gv.LOAD_IMAGE_INDEX.ARCHER_TOWER = [1,1,1,1,2,2,2,3,3,3,4,4,4];
