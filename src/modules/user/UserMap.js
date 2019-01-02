/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */
var convertNumberToStrType = function(type1,type2){
    // TODO : convert Type
    return "";
}

var convertStrToNumberType = function(strType){
    // TODO : convert Type
    return {type1:0,type2:0};
}
var UserMap = cc.Class.extend({
    id:null,
    mapIdToArea:null,
    mapTypeToIds:null,
    builderWorkingAreas : null,
    isFinishLoadMap:false,
    grid : null,
    mapSize : null,
    townHall : null,
    buildingWaiting:null,
    ctor:function() {
        mapSize = {w:42,h:42};
        this.grid = [];
        for(i=0;i<mapSize.w;i++){
            newRow = [];
            for(j=0;j<mapSize.h;j++){
                newRow.push(0);
            }
            this.grid.push(newRow);
        }
    },
    // API to  lobby & shop

    tryNewBuilding:function(strType){
        // TODO: notify to MapLayer, can be call directly to MapLayer
    },
    getCurrentNumberByType:function(strType){
        type = convertStrToNumberType(strType);
        typeConvert = this.hashType(type.type1,type.type2);
        ids = this.mapTypeToIds.get(typeConvert);
        if(ids = null){
            return 0;
        }
        return ids.size;
    },
    getMaxNumberByType:function(strType){
        return TL.CONFIG["TOW_1"][townHall.currentLevel][strType];
    },
    getCostToBuyNew:function(strType){
        level = 1;
        if(type1 == gv.BUILDING.BUILDER_HUT) level = this.getTotalBuilder() + 1;
        return {
            gold:TL.CONFIG[this.strType][level]["gold"]||0,
            elixir:TL.CONFIG[this.strType][level]["elixir"]||0,
            darkElixir:TL.CONFIG[this.strType][level]["darkElixir"]||0,
            coin:TL.CONFIG[this.strType][level]["coin"]||0,
        }
    },
    getWorkingBuilder : function(){
        return this.builderWorkingAreas.size;
    },
    getTotalBuilder : function(){
        typeConvert = this.hashType(gv.BUILDING.BUILDER_HUT,0);
        listIds = this.mapTypeToIds.get(typeConvert);
        if(listIds==null){
            return 0;
        }
        return listIds.size;
    },
    getCapacity : function(type2){
        capacity  = 0 ;
        typeConvert = this.hashType(gv.BUILDING.STORAGE,type2);
        listIds = this.mapTypeToIds.get(typeConvert);
        if(listIds!=null){
            for (var i = 0; i < listIds.length; i++) {
                resource = this.mapIdToArea.get(listIds[i]);
                capacity += resource.getCapacity();
                //Do something
            }
        }
        if(this.townHall == null){
            return capacity;
        }
        capacity += this.townHall.getCapacity(type2);
        return capacity;
    },


    // end API to lobby and shop

    // API to MapLayer (MapLayer request to UserMap)

    // need a Userdata.getInstance().checkIfEnough(resourceRequired)
    addNewBuilding:function(strType, newPos){
        //newPos{x,y}
        // check resources
            resourceRequired = this.getCostToBuyNew(strType);
            //TODO: checkIfEnough resources
        // check worker available
            if(this.getTotalBuilder()-this.getWorkingBuilder()<=0){
                return;
            }
        // check valid position, let LayerMap do it
        //    size = {width:TL.CONFIG[this.typeStrCode][this.currentLevel]["width"], height:TL.CONFIG[this.typeStrCode][this.currentLevel]["height"]};
        // check enough level townhall
            if(this.getMaxNumberByType(strType)>=this.getCurrentNumberByType()){
                return;
            }
        // update Resources
            //TODO: decrease resources
        // save building in building Waiting
        if(buildingWaiting != null) return;
        buildingWaiting = {
            strType : strType,
            position : newPos,
            momentBuilt : TimeManager.getInstance().getServerTime(),
        }
        // send request
        testnetwork.connector.sendBuildRq(newPos.x, newPos.y, type.type1, type.type2);

    },
    buildOK : function(id){
        // will be called from onReceivedPacket build OK with id = id
        // create new building with data from buildingWaiting and id
        switch (buildingWaiting.strType){
            //TODO : switch case
            case "":
                building = new Buidling();
        }
        this.addObject(building);
        buildingWaiting = null;
    },
    moveBuilding:function(id, newPos){
        // check valid position, let LayerMap do this
        // send request move building to server
        building = this.mapIdToArea.get(id);
        if(building == null) {
            return false;
        }
        building.position = {
            x:newPos.x,
            y:newPos.y
        };
        testnetwork.connector.sendMoveConsRq(id, newPos.x, newPos.y);
        return true;
    },

    upgradeBuilding:function(id){
        building = this.mapIdToArea.get(id);
        if(building == null) {
            return false;
        }
        // check upgrading already
        if(building.update()){
            return false;
        }
        // check maxlevel
        if(building.getMaxLevel() <= building.currentLevel){
            return false;
        }
        // check resources
        //TODO checkIfEnough resources
        // check worker available
        if(this.getTotalBuilder()-this.getWorkingBuilder()<=0){
            return;
        }
        // check level townhall
        if(building.getLevelTownHallRequiredToUpgrade() > townHall.currentLevel){
            return;
        }
        // TODO : decrease resources
        testnetwork.connector.sendUpgradeRq(id);

        building.startUpgrade();
        if(building.update()){
            this.builderWorkingAreas.add(building);
        }
    },

    upgradeBuildingNow:function(id){
        building = this.mapIdToArea.get(id);
        if(building == null) {
            return false;
        }
        // check not upgrade yet
        if(!building.update()){
            return false;
        }
        // TODO: current allow upgrade without check coin
        building.finishUpgrade()
        testnetwork.connector.sendFinishBuildRq(id);
        return true;
    },

    stopBuilding:function(id){
        building = this.mapIdToArea.get(id);
        if(building == null) {
            return false;
        }
        // check not upgrade yet
        if(!building.update()){
            return false;
        }
        resourcePaid = building.getResourcePaidToUpgrade();
        //TODO : check UserData - checkOverFlow(resourcePaid)

        building.stopUpgrade();
        this.builderWorkingAreas.delete(building);
        if(building.currentLevel == 1){
            // stop constructing
            type = convertStrToNumberType(building.typeStrCode);
            typeConvert = this.hashType(type.type1,type.type2);
            ids = this.mapTypeToIds.get(typeConvert);
            ids.delete(building.id);
            this.mapIdToArea.delete(building.id);
        }
        testnetwork.connector.sendCancelBuildRq(id);
        return true;
    },
    harvest:function(id){
        //TODO : harvest later
    },
    // end API to MapLayer

    prepareGetMap: function(){
        this.mapIdToArea = new Map();
        this.mapTypeToIds = new Map();
        this.builderWorkingAreas = new Set();
    },
    addObject: function(area){
        id = area.id;
        type1 = area.type1;
        type2 = area.type2 || 0;
        this.mapIdToArea.set(id,area);
        typeConvert = this.hashType(type1, type2);
        if(this.mapTypeToIds.get(typeConvert)==null){
            this.mapTypeToIds.set(typeConvert,new Set())
        }
        this.mapTypeToIds.get(typeConvert).add(id);
        if(area.type1 == gv.BUILDING.OBSTACLE){
            if(area.cleanMoment>0){
                this.builderWorkingAreas.add(area);
            }
        }   else    {
            if(area.upgradingLevel>0){
                this.builderWorkingAreas.add(area);
            }
        }
        cc.log("+Area : " + area.showInfo());
        area.refreshInfo();
        MapLayer2.getInstance().addArea(area);
        for(i=0;i<area.size.width;i++){
            for(j=0;j<area.size.height;j++){
                this.grid[area.position.x+i][area.position.y+j] = area.id;
            }
        }

        if(area.type1 == gv.BUILDING.TOWN_HALL){
            townHall = area;
        }
        //cc.log(area.getSize());
        //if(area.type1 != gv.BUILDING.OBSTACLE){
        //    cc.log(area.getUpgradeResourceRequire().gold + " " + area.getUpgradeResourceRequire().elixir + " " + area.getUpgradeResourceRequire().darkElixir + " " + area.getUpgradeResourceRequire().coin);
        //    cc.log(area.getMaxLevel());
        //    cc.log(area.getCurrentBuildTime());
        //    cc.log(area.getLevelTownHallRequiredToUpgrade());
        //}
    },
    finishLoadMap:function(){
        this.isFinishLoadMap = true;
        this.showMapGrid();
    },
    hashType: function(type1, type2){
        return type1*100 + type2;
    },

    update:function(){
        self = this;
        function logMapElements(area, area2, set) {
            isBuilderWorkingOn = area.update();
            if(isBuilderWorkingOn == false){
                cc.log("a builder is released");
                self.builderWorkingAreas.delete(area);
                if(area.type1 == gv.BUILDING.OBSTACLE){
                    this.mapIdToArea.delete(area);
                }
            }
        }
        if(this.builderWorkingAreas!=null){
            this.builderWorkingAreas.forEach(logMapElements);
        }
    },
    showMapGrid: function(){
        for(i=0;i<mapSize.w;i++){
            s = "|";
            for(j=0;j<mapSize.h;j++){
                if(this.grid[i][j]<9)
                    s += " ";
                s += this.grid[i][j];
            }
            cc.log(s);
        }
    }
});

UserMap.getInstance = function() {
    if(this.instance == null) {
        this.instance = new UserMap();
    }
    return this.instance;
}

