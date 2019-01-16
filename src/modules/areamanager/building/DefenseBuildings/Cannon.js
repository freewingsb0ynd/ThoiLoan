/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */


var Cannon = Defense.extend({
    ctor: function (_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
        this._super(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, 1);
        this.typeStrCode = "DEF_1";
    },
    showInfo : function(){
        return "Cannon " +  this._super();
    },
    getDescription : function(){
        this.description = " Description : Cannon level " + this.currentLevel;
        return this.description;
    },
    setImage : function(){
        this.image.setTexture("res/gui/Art/Buildings/cannon/canon_1/idle/image0000.png");
    },
    getOptions:function() {
        data = this._super();
        data.constructionName = " Cannon level " + this.currentLevel;
        return data;
    },

    setImage: function(){

        this._super("res/gui/Art/Buildings/defense_base/DEF_1_"+ this.currentLevel + "_Shadow.png",
            "res/gui/Art/Buildings/cannon/canon_"+ this.currentLevel + "/idle/image000", 5, 300,
            "gui/Art/Map/map_obj_bg/BG_0/3.png",
            "gui/Art/Map/map_obj_bg/BG/arrowmove3.png",
            null

        );

        this._jsonRes.anim_spr.setPosition({x: 6, y: -5})
    }
})