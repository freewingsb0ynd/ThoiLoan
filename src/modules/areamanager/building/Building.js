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
    upgradingLevel: null,// (0: not building, not upgrading), (1:constructing), (>1:upgrading)
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
        this.upgradedMoment = TimeManager.getInstance().getServerTime();
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
        if(this.typeStrCode=="TOW_1"){
            return 1;
        }
        this.levelTownHallRequireToUpgrade = TL.CONFIG[this.typeStrCode][this.currentLevel+1]["townHallLevelRequired"] || 1000;
        return this.levelTownHallRequireToUpgrade;
    },
    getLevelTownHallRequiredToBuild:function(){
        this.levelTownHallRequireToUpgrade = TL.CONFIG[this.typeStrCode][1]["townHallLevelRequired"] || 1000;
        return this.levelTownHallRequireToUpgrade;
    },
    getUpgradeResourceRequire: function () {
        // amount of resources require to upgrade to next level
        return {
            gold:TL.CONFIG[this.typeStrCode][this.currentLevel+1]["gold"]||0,
            elixir:TL.CONFIG[this.typeStrCode][this.currentLevel+1]["elixir"]||0,
            darkElixir:TL.CONFIG[this.typeStrCode][this.currentLevel+1]["darkElixir"]||0,
            coin:TL.CONFIG[this.typeStrCode][this.currentLevel+1]["coin"]||0,
        }
    },
    getResourcePaidToUpgrade: function () {
        // amount of resources paid to upgrade to current level
        return {
            gold:TL.CONFIG[this.typeStrCode][this.currentLevel]["gold"]||0,
            elixir:TL.CONFIG[this.typeStrCode][this.currentLevel]["elixir"]||0,
            darkElixir:TL.CONFIG[this.typeStrCode][this.currentLevel]["darkElixir"]||0,
            coin:TL.CONFIG[this.typeStrCode][this.currentLevel]["coin"]||0,
        }
    },
    //getImage : function(){
    //
    //},
    refreshInfo:function(){
        this._super();
        this.getLevelTownHallRequiredToUpgrade();
        this.getUpgradeResourceRequire();
        if(this.upgradingLevel>0){
            this.getCurrentBuildTime();
        }
    },
    getOptions:function() {
        data = this._super();
        data.constructionName = " Building ";
        var option = {typeOption:ACTION_BUTTON.TYPE.SHOW_INFO};
        data.options.push(option);
        if(this.typeStrCode == "BDH_1") return data;
        if(this.upgradingLevel >0) {
            // upgrading/constructing
            option = {typeOption:ACTION_BUTTON.TYPE.CANCEL_BUILDING};
            data.options.push(option);
            quickFinishCost = 0;
            option = {typeOption:ACTION_BUTTON.TYPE.FINISH_NOW,resources:[{type: gv.RESOURCE_TYPE.COIN,amount: quickFinishCost}]};
            data.options.push(option);
        }   else    if(this.upgradingLevel ==0 ){
            // not upgrading, add upgrade option
            option = {typeOption:ACTION_BUTTON.TYPE.UPGRADE_BUILDING,resources:[]};

            resourceRequire = this.getUpgradeResourceRequire();
            if(resourceRequire.gold!=0){
                option.resources.push({type: gv.RESOURCE_TYPE.GOLD,amount: resourceRequire.gold})
            }
            if(resourceRequire.elixir!=0){
                option.resources.push({type: gv.RESOURCE_TYPE.ELIXIR,amount: resourceRequire.elixir})
            }
            if(resourceRequire.darkElixir!=0){
                option.resources.push({type: gv.RESOURCE_TYPE.DARK_ELIXIR,amount: resourceRequire.darkElixir})
            }
            data.options.push(option);
        }
        return data;
    }
});
Building.newBuildingByType = function(strTypeCode, _id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
    var building = null;
    switch(strTypeCode){
        case "AMC_1":
            building = new ArmyCamp(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
            break;
        case "BDH_1":
            building = new BuilderHut(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
            break;
        case "LAB_1":
            building = new Laboratory(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
            break;
        case "TOW_1":
            building = new TownHall(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
            break;
        case "CLC_1":
            building = new ClanCastle(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
            break;
        case "DEF_1":
            building = new Cannon(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
            break;
        case "DEF_2":
            building = new ArcherTower(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
            break;
        case "DEF_3":
            building = new Mortar(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
            break;
        case "WAL_1":
            building = new Wall(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
            break;
        case "STO_1":
            building = new GoldStorage(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
            break;
        case "STO_2":
            building = new ElixirStorage(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
            break;
        case "STO_3":
            building = new DarkElixirStorage(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
            break;
        case "RES_1":
            building = new GoldMine(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, _upgradedMoment);
            break;
        case "RES_2":
            building = new ElixirMine(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, _upgradedMoment);
            break;
        case "RES_3":
            building = new DarkElixirMine(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, _upgradedMoment);
            break;
        case "BAR_1":
            building = new BarrackNormal(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
            break;
        case "BAR_2":
            building = new BarrackXmen(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
    }
    return building;
}


