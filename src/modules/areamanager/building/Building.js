/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */

/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */

//gv.BUILDING.ARMY_CAMP = 1; // ok
//gv.BUILDING.BUILDER_HUT  = 3;  // ok
//gv.BUILDING.CLAN_CASTLE  = 4; // ok
//gv.BUILDING.TOWN_HALL  = 10;  // ok

var Building = Area.extend({
    currentLevel : null,
    upgradingLevel: null,
    upgradedMoment: null,

    //-------- additional attribute
    maxLevel:1,
    currentBuildTime:0,
    levelTownHallRequireToUpgrade:1,

    ctor: function (_id, _type1, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
        this._super(_id,_type1,_posX,_posY);
        this.currentLevel = _currentLevel;
        this.upgradingLevel = _upgradingLevel;
        this.upgradedMoment = _upgradedMoment;
    },
    startUpgrade:function(){
        //this.updateStatus();
        if(this.upgradingLevel != 0){
            // upgrading
            return false;
        }
        if(this.currentLevel <=0 || this.currentLevel >= this.getMaxLevel()){
            // can't upgrade because currentLevel is maxLevel
            return false;
        }
        this.upgradingLevel = this.currentLevel+1;
        this.upgradedMoment = TimeManager.getTime();
        return true;
    },
    finishUpgrade:function(){
        // return true if success
        return this.actionUpgrade(1);
    },
    stopUpgrade:function(){
        // return true if success
        return this.actionUpgrade(0);
    },
    actionUpgrade:function(type){
        // type = 1 : finishUpgradeNow , type = 0 : stopUpgradeNow
        //this.updateStatus();
        if(this.upgradingLevel ==0){
            //not upgrading
            return false;
        }
        if(type == 1) {
            this.currentLevel = this.upgradingLevel;
        }
        this.upgradingLevel = 0;
        this.upgradedMoment = 0;
        return true;
    },
    showInfo : function(){
        return this._super() + " currentLevel :" + this.currentLevel + " upgradingLevel : " + this.upgradingLevel + " upgradedMoment :" + this.upgradedMoment;
    },
    update : function(){
        // return true if a builder is working on
        if(this.upgradingLevel >0) {
            // upgrading/constructing
            if(this.upgradingLevel > this.getMaxLevel()){

            }   else if(TimeManager.getInstance().getServerTime()-this.upgradedMoment >= this.getCurrentBuildTime()){
                this.currentLevel = this.upgradingLevel;
                this.upgradedMoment = 0;
                this.upgradingLevel = 0;
                // a builder is released
                return false;
            }   else    {
                // a builder is working on
                return true;
            }
        }
        return false;
    },
    getMaxLevel : function(){
        this.maxLevel = _.size(TL.CONFIG[this.typeStrCode]) || 1;
        return this.maxLevel;
    },
    getCurrentBuildTime:function(){
        this.currentBuildTime = TL.CONFIG[this.typeStrCode][this.upgradingLevel]["buildTime"] || 0;
        return this.currentBuildTime;
    },
    getSize:function(){
        this.size = {width:TL.CONFIG[this.typeStrCode][this.currentLevel]["width"], height:TL.CONFIG[this.typeStrCode][this.currentLevel]["height"]};
        return this.size;
    },
    getDescription : function(){
        this.description = " Description : Building type " ;
        return this.description;
    },
    getLevelTownHallRequiredToUpgrade:function(){
        this.levelTownHallRequireToUpgrade = TL.CONFIG[this.typeStrCode][this.currentLevel+1]["townHallLevelRequired"] || 1000;
        return this.levelTownHallRequireToUpgrade;
    },
    getUpgradeResourceRequire: function () {
        return {
            gold:TL.CONFIG[this.typeStrCode][this.currentLevel+1]["gold"]||0,
            elixir:TL.CONFIG[this.typeStrCode][this.currentLevel+1]["elixir"]||0,
            darkElixir:TL.CONFIG[this.typeStrCode][this.currentLevel+1]["darkElixir"]||0,
            coin:TL.CONFIG[this.typeStrCode][this.currentLevel+1]["coin"]||0,
        }
    },
    getResourcePaidToUpgrade: function () {
        return {
            gold:TL.CONFIG[this.typeStrCode][this.currentLevel]["gold"]||0,
            elixir:TL.CONFIG[this.typeStrCode][this.currentLevel]["elixir"]||0,
            darkElixir:TL.CONFIG[this.typeStrCode][this.currentLevel]["darkElixir"]||0,
            coin:TL.CONFIG[this.typeStrCode][this.currentLevel]["coin"]||0,
        }
    },
    getImage : function(){

    },
    refreshInfo:function(){
        this.getDescription();
        //this.getImage();
        this.getSize();
        this.getLevelTownHallRequiredToUpgrade();
        this.getUpgradeResourceRequire();
        if(this.upgradingLevel>0){
            this.getCurrentBuildTime();
        }
    }
})
