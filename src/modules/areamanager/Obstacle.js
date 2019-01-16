/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */


//gv.BUILDING.OBSTACLE  = 7;

var Obstacle  = Area.extend({
    cleanMoment : null,
    obstacleType : null,

    isUpgrading: null,
    isOnChossing: null,

    ctor: function (_id, _posX, _posY, _cleanMoment, _obstacleType) {
        this._super(_id,gv.BUILDING.OBSTACLE,_posX,_posY);
        this.cleanMoment = _cleanMoment;
        this.obstacleType = _obstacleType;
        this.typeStrCode = "OBS_" + _obstacleType;
        this.scheduleUpdate();
    },
    showInfo: function(){
        return "Obstacle " + this._super() + "cleanMoment : " + this.cleanMoment + " obstacleType :" + this.obstacleType;
    },
    updateData : function(){
        // return true if a builder is working on
        if(this.cleanMoment <= 0) return false;
        if(TimeManager.getServerTime()-this.cleanMoment > TL.CONFIG["OBS_1"][this.obstacleType]["buildTime"]){
            this.cleanMoment = -1;
            // finish clean
            return false;
        }   else    {
            return false;
        }
    },
    getSize:function(){
        this.size = {width:TL.CONFIG[this.typeStrCode]["1"]["width"], height:TL.CONFIG[this.typeStrCode]["1"]["height"]};
        return this.size;
    },
    getDescription : function(){
        this.description = " Description : Obstacle type " + this.obstacleType;
        return this.description;
    },
    getOptions:function() {
        data = this._super();
        data.constructionName = " Obstacle type " + this.obstacleType;
        if(this.cleanMoment ==0 ){
            // 9 remove option
            var option = {typeOption:ACTION_BUTTON.TYPE.REMOVE_OBSTACLE,resources:[]}
            goldAmount = TL.CONFIG[this.typeStrCode]["1"]["gold"];
            if(goldAmount!=0){
                option.resources.push({type: gv.RESOURCE_TYPE.GOLD,amount: goldAmount})
            }
            elixirAmount = TL.CONFIG[this.typeStrCode]["1"]["elixir"];
            if(elixirAmount!=0){
                option.resources.push({type: gv.RESOURCE_TYPE.ELIXIR,amount: elixirAmount})
            }
            data.options.push(option);
        }   else    if(this.cleanMoment>0){
            // 8 check quick_finish option
            var option = {typeOption:ACTION_BUTTON.TYPE.FINISH_NOW,resources:[]}
            quickFinishCost = 2;
            option.resources.push({type: gv.RESOURCE_TYPE.COIN,amount: quickFinishCost});
            data.options.push(option);
        }
        return data;
    },


    update: function(){
        if(this.isOnChossing){
            //this._jsonRes.arrow_spr.setVisible(true);
            this._jsonRes.buildingName_lbl.setVisible(true);
        }
    },


    setImage: function(){

        this._super("res/gui/Art/Buildings/obstacle/OBS_"+ this.obstacleType + "/idle/image0000.png",
            null, null, null,
            "res/gui/Art/Map/map_obj_bg/GRASS_0_"+ this.size.width +"_OBS.png",
            null,
            null

        );
        this._jsonRes.buildingName_lbl.setString("Obstacle type " + this.obstacleType);

    },

    getBuildingName : function(){
        this.name = "Obstacle type " + this.obstacleType;
        return this.name;
    },

    getRemainingTime: function(){
        if(this.cleanMoment <= 0) return 0;
        this.remainingTime = Math.max(this.currentBuildTime - (TimeManager.getInstance().getServerTime() - this.cleanMoment),0);
        return this.remainingTime;
    },


})
