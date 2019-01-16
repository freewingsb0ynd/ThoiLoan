/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */


var BarrackNormal = Barrack.extend({
    ctor: function (_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
        this._super(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, 1);
        this.typeStrCode = "BAR_1";
    },
    showInfo : function(){
        return "Barrack Normal " +  this._super();
    },
    getDescription : function(){
        this.description = " Description : BarrackNormal level " + this.currentLevel;
        return this.description;
    },
    getOptions:function() {
        data = this._super();
        data.constructionName = " Barrack Normal level " + this.currentLevel;
        var option = {typeOption:ACTION_BUTTON.TYPE.TRAIN_TROOP};
        data.options.push(option);
        return data;
    },

    getBuildingName : function(){
        this.name = "Barrack";
        return this.name;
    },

    setImage: function(){
        //this._super("res/"+this.currentLevel+"/idle/image0000.png");
        this._super("res/gui/Art/Buildings/barrack/BAR_1_"+ this.currentLevel + "/idle/image0000.png",
            null, null, null,
            "gui/Art/Map/map_obj_bg/BG_0/3.png",
            "gui/Art/Map/map_obj_bg/BG/arrowmove3.png",
            "gui/Art/Map/map_obj_bg/GRASS_3_Shadow.png"

        );
    }
})