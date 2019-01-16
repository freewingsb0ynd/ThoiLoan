/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */
var convertNumberToStrType = function(type1,type2){
    // TODO : convert Type

    //
    //return null;
    switch (type1){
        case gv.BUILDING.OBSTACLE:
            return "OBS_"+type2;
        case gv.BUILDING.ARMY_CAMP:
            return "AMC_1";
        case gv.BUILDING.BUILDER_HUT:
            return "BDH_1";
        case gv.BUILDING.TOWN_HALL:
            return "TOW_1";
        case gv.BUILDING.CLAN_CASTLE:
            return "CLC_1";
        case gv.BUILDING.LABORATORY:
            return "LAB_1";
        case gv.BUILDING.DEFENSE:
            switch(type2){
                case 1:
                case 2:
                case 3:
                    return "DEF_"+type2;
                case 4:
                    return "WAL_1";
            }
        case gv.BUILDING.STORAGE:
            return "STO_"+type2;
        case gv.BUILDING.BARRACK:
            return "BAR_"+type2;
        case gv.BUILDING.RESOURCE:
            return "RES_"+type2;
    }


}

var convertStrToNumberType = function(strType){
    // TODO : convert Type
    switch(strType){
        case "AMC_1":
            return {type1:gv.BUILDING.ARMY_CAMP,type2:0};
        case "BDH_1":
            return {type1:gv.BUILDING.BUILDER_HUT,type2:0};
        case "LAB_1":
            return {type1:gv.BUILDING.LABORATORY,type2:0};
        case "TOW_1":
            return {type1:gv.BUILDING.TOWN_HALL,type2:0};
        case "CLC_1":
            return {type1:gv.BUILDING.CLAN_CASTLE,type2:0};
        case "DEF_1":
            return {type1:gv.BUILDING.DEFENSE,type2:1};
        case "DEF_2":
            return {type1:gv.BUILDING.DEFENSE,type2:2};
        case "DEF_3":
            return {type1:gv.BUILDING.DEFENSE,type2:3};
        case "WAL_1":
            return {type1:gv.BUILDING.DEFENSE,type2:4};
        case "STO_1":
            return {type1:gv.BUILDING.STORAGE,type2:1};
        case "STO_2":
            return {type1:gv.BUILDING.STORAGE,type2:2};
        case "STO_3":
            return {type1:gv.BUILDING.STORAGE,type2:3};
        case "RES_1":
            return {type1:gv.BUILDING.RESOURCE,type2:1};
        case "RES_2":
            return {type1:gv.BUILDING.RESOURCE,type2:2};
        case "RES_3":
            return {type1:gv.BUILDING.RESOURCE,type2:3};
        case "BAR_1":
            return {type1:gv.BUILDING.BARRACK,type2:1};
        case "BAR_2":
            return {type1:gv.BUILDING.BARRACK,type2:2};
    }
    if(strType.substring(0,4) == "OBS_"){
        return {type1:gv.BUILDING.OBSTACLE,type2:strType.charAt(4)};
        // TODO : check if ok or not < type2:strType.charAt(4)} >
    }
    return null;
}
var UserMap = cc.Class.extend({
    id:null,
    mapIdToArea:null,
    mapTypeToIds:null,
    mapIdToServerPos : null,
    builderWorkingAreas : null,
    isFinishLoadMap:false,
    grid : null,
    mapSize : null,
    townHall : null,
    buildingWaiting:null,
    // --- for hoang
    numberWorkingBuilder : 0,
    totalNumberBuilder:0,
    goldCapacity : 0,
    elixirCapacity : 0,
    darkElixirCapacity : 0,

    ctor:function() {
        this.mapSize = {w:SIZE_AREA+1,h:SIZE_AREA+1};
        this.grid = [];
        for(i=0;i<this.mapSize.w;i++){
            newRow = [];
            for(j=0;j<this.mapSize.h;j++){
                newRow.push(0);
            }
            this.grid.push(newRow);
        }
    },
    // API to  lobby & shop

    tryNewBuilding:function(strType){
        fr.getCurrentScreen().layerLobby.onSelectShopBack()
        // TODO: notify to MapLayer, can be call directly to MapLayer
        building = Building.newBuildingByType(strType,0,0,0,1,1,0);
        building.refreshInfo()
        for(ii=1;ii<41;ii++){
            for(jj=1;jj<41;jj++){
                bol = this.checkValidPosition({x:ii,y:jj},building.size)
                if(bol){
                    building.position = {x:ii,y:jj};
                    fr.getCurrentScreen().layerMap.tryNewBuilding(building);
                    return;
                }
            }
        }
    },
    getCurrentNumberByType:function(strType){
        type = convertStrToNumberType(strType);
        typeConvert = this.hashType(type.type1,type.type2);
        ids = this.mapTypeToIds.get(typeConvert);
        if(ids == null){
            return 0;
        }
        return ids.size;
    },
    getMaxNumberByType:function(strType){
        if(strType == 'BDH_1')
            return _.keys(TL.CONFIG[strType]).length;
        return TL.CONFIG["TOW_1"][townHall.currentLevel][strType];
    },
    getCostToBuyNew:function(strType){
        level = 1;
        if(strType == "BDH_1") level = Math.min(this.getTotalBuilder() + 1,5);
        return {
            gold:TL.CONFIG[strType][level]["gold"]||0,
            elixir:TL.CONFIG[strType][level]["elixir"]||0,
            darkElixir:TL.CONFIG[strType][level]["darkElixir"]||0,
            coin:TL.CONFIG[strType][level]["coin"]||0,
        }
    },
    getWorkingBuilder : function(){
        cc.log("workingbuilder :" + this.builderWorkingAreas.size);
        return this.numberWorkingBuilder = this.builderWorkingAreas.size;
    },
    getTotalBuilder : function(){
        typeConvert = this.hashType(gv.BUILDING.BUILDER_HUT,0);
        listIds = this.mapTypeToIds.get(typeConvert);
        if(listIds==null){
            return 0;
        }
        return this.totalNumberBuilder = listIds.size;
    },
    getCapacity : function(type2){
        capacity  = 0 ;
        typeConvert = this.hashType(gv.BUILDING.STORAGE,type2);
        listIds = this.mapTypeToIds.get(typeConvert);
        if(listIds!=null){
            self=this;
            function getCapacityStorage(id, value2, set) {
                resource = self.mapIdToArea.get(id);
                capacity += resource.getCapacity();
            }
            listIds.forEach(getCapacityStorage);

        }
        if(this.townHall == null){
            return capacity;
        }
        capacity += this.townHall.getCapacity(type2);
        switch (type2){
            case gv.RESOURCE_TYPE.GOLD:
                return this.goldCapacity = capacity;
            case gv.RESOURCE_TYPE.ELIXIR:
                return this.elixirCapacity = capacity;
            case gv.RESOURCE_TYPE.DARK_ELIXIR:
                return this.darkElixirCapacity= capacity;
        }
    },


    // end API to lobby and shop

    // API to MapLayer (MapLayer request to UserMap)

    // need a Userdata.getInstance().checkIfEnough(resourceRequired)
    addNewBuilding:function(strType, newPos){
        //newPos{x,y}
        // check resources
        resourceRequired = this.getCostToBuyNew(strType);
        cc.log("coin" + resourceRequired.coin)
            //TODO: checkIfEnough resources
        if(!UserData.getInstance().checkIfEnough(resourceRequired)){
            fr.getCurrentScreen().layerCheat.lblLog.setString(" Không đủ tài nguyên ")
            return;
        }
        // check worker available
        if(this.getTotalBuilder()<=this.getWorkingBuilder()){
            fr.getCurrentScreen().layerCheat.lblLog.setString(" Không còn thợ rảnh")
            return;
        }
        // check valid position, let LayerMap do it
        //    size = {width:TL.CONFIG[this.typeStrCode][this.currentLevel]["width"], height:TL.CONFIG[this.typeStrCode][this.currentLevel]["height"]};
        // check enough level townhall
        //    if(this.getMaxNumberByType(strType)>=this.getCurrentNumberByType()){
        //        return;
        //    }
        // update Resources
            //TODO: decrease resources
        // save building in building Waiting
        UserData.getInstance().changeResources(resourceRequired,1)
        if(this.buildingWaiting != null) return;
        this.buildingWaiting = {
            strType : strType,
            position : newPos,
            momentBuilt : TimeManager.getInstance().getServerTime(),
        };
        // send request
        var type = convertStrToNumberType(strType);
        testnetwork.connector.sendBuildRq(newPos.x, newPos.y, type.type1, type.type2);

    },
    buildOK : function(id){
        // will be called from onReceivedPacket build OK with id = id
        // create new building with data from buildingWaiting and id
        _posX = this.buildingWaiting.position.x;
        _posY = this.buildingWaiting.position.y;
        _currentLevel = 1;
        _upgradingLevel = 1;
        _upgradedMoment = this.buildingWaiting.momentBuilt;
        building = Building.newBuildingByType(this.buildingWaiting.strType, Number(id), _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
        building.isUpgrading = true;
        this.addObject(building);
        this.checkUpdateAttribute(building)
        this.buildingWaiting = null;

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
        if(building.updateData()){
            fr.getCurrentScreen().layerCheat.lblLog.setString(" không đang nâng cấp ")
            return false;
        }
        // check maxlevel
        if(building.getMaxLevel() <= building.currentLevel){
            fr.getCurrentScreen().layerCheat.lblLog.setString(" nhà max level")
            return false;
        }
        // check resources
        //TODO checkIfEnough resources
        resourceRequired = building.getUpgradeResourceRequire();
        if(!UserData.getInstance().checkIfEnough(resourceRequired)){
            fr.getCurrentScreen().layerCheat.lblLog.setString(" không đủ tài nguyên ")
            return false;
        }

        // check worker available
        if(this.getTotalBuilder()-this.getWorkingBuilder()<=0){
            fr.getCurrentScreen().layerCheat.lblLog.setString(" không còn thợ rảnh")
            return;
        }
        // check level townhall
        if(building.getLevelTownHallRequiredToUpgrade() > townHall.currentLevel){
            fr.getCurrentScreen().layerCheat.lblLog.setString(" không đủ cấp độ nhà chính")
            return;
        }
        // TODO : decrease resources
        UserData.getInstance().changeResources(resourceRequire,1);
        testnetwork.connector.sendUpgradeRq(id);

        building.startUpgrade();
        if(building.updateData()){
            this.builderWorkingAreas.add(building);
        }   else    {
            // finish upgrade immediately
        }
        this.checkUpdateAttribute(building);
    },

    upgradeBuildingNow:function(id){
        cc.log("finish now building id " + id);
        building = this.mapIdToArea.get(id);
        if(building == null) {
            return false;
        }
        // check not upgrade yet
        if(!building.updateData()){
            fr.getCurrentScreen().layerCheat.lblLog.setString(" chưa đang nâng cấp")
            return false;
        }
        // TODO: current allow upgrade without check coin
        building.finishUpgrade()
        this.builderWorkingAreas.delete(building);
        testnetwork.connector.sendFinishBuildRq(id);
        this.checkUpdateAttribute(building);
        return true;
    },

    stopBuilding:function(id){
        cc.log("stop building id " + id);
        building = this.mapIdToArea.get(id);
        if(building == null) {
            return false;
        }
        // check not upgrade yet
        if(!building.updateData()){
            fr.getCurrentScreen().layerCheat.lblLog.setString(" đang không nâng cấp")
            return false;
        }
        resourcePaid = building.getResourcePaidToUpgrade();
        capacity = {
            gold : this.goldCapacity,
            elixir : this.elixirCapacity,
            darkElixir : this.darkElixirCapacity
        }
        if(!UserData.getInstance().checkFullIfAddResource(resourcePaid, capacity, 0.5)){
            fr.getCurrentScreen().layerCheat.lblLog.setString(" không đủ sức chứa tài nguyên")
        }
        //TODO : check UserData - checkOverFlow(resourcePaid)

        if(building.upgradingLevel == 1){
            // stop constructing
            building.stopUpgrade();
            this.builderWorkingAreas.delete(building);
            type = convertStrToNumberType(building.typeStrCode);
            typeConvert = this.hashType(type.type1,type.type2);
            ids = this.mapTypeToIds.get(typeConvert);
            ids.delete(building.id);
            this.mapIdToArea.delete(building.id);
            building.removeFromParent()
            fr.getCurrentScreen().layerMap.touch_status = TOUCH_STATUSES.NONE
            fr.getCurrentScreen().layerLobby.constructionComp.setVisible(false)
            UserData.getInstance().changeResources(resourcePaid, -0.5)
            testnetwork.connector.sendCancelBuildRq(id);
            return true;
        }
        building.stopUpgrade();
        this.builderWorkingAreas.delete(building);
        UserData.getInstance().changeResources(resourcePaid, -0.5)
        testnetwork.connector.sendCancelBuildRq(id);
        this.checkUpdateAttribute(building);
        return true;
    },
    harvest:function(id){
        //TODO : harvest later
    },
    // end API to MapLayer

    prepareGetMap: function(){
        this.mapIdToArea = new Map();
        this.mapTypeToIds = new Map();
        this.mapIdToServerPos = new Map();
        this.builderWorkingAreas = new Set();
    },
    addObject: function(area){
        area.updateData()
        id = area.id;
        this.mapIdToServerPos.set(id,area.position)
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
        //cc.log("+Area : " + area.showInfo());
        area.refreshInfo();
        fr.getCurrentScreen().layerMap.addArea(area);
        //cc.log(area.size.width + "," +area.size.height  + "pos " + area.position.x + "," + area.position.y)
        for(i=0;i<area.size.width;i++){
            for(j=0;j<area.size.height;j++){
                //cc.log((area.position.x) + " " + i + " " + (area.position.x+i))
                this.grid[area.position.x+i][area.position.y+j] = area.id;
            }
        }

        if(area.type1 == gv.BUILDING.TOWN_HALL){
            this.townHall = area;
        }
        this.getWorkingBuilder();
    },
    finishLoadMap:function(){
        this.isFinishLoadMap = true;
        this.showMapGrid();
        this.checkUpdateAttribute(this.townHall);
    },
    hashType: function(type1, type2){
        return type1*100 + type2;
    },

    update:function(){
        self = this;
        function logMapElements(area, area2, set) {
            isBuilderWorkingOn = area.updateData();
            if(isBuilderWorkingOn == false){
                cc.log("a builder is released");
                self.builderWorkingAreas.delete(area);
                if(area.type1 == gv.BUILDING.OBSTACLE){
                    self.mapIdToArea.delete(area);
                    self.getWorkingBuilder();
                }   else{
                    self.checkUpdateAttribute(area);
                }
                area.isUpgrading = false
            }
        }
        if(this.builderWorkingAreas!=null){
            this.builderWorkingAreas.forEach(logMapElements);
        }
    },
    checkUpdateAttribute:function(area){
        area.refreshInfo()
        this.getWorkingBuilder();
        if(area.typeStrCode=="BDH_1"){
            this.getTotalBuilder();
        }   else if(area.typeStrCode=="STO_1"){
            this.getCapacity(gv.RESOURCE_TYPE.GOLD)
        }   else if(area.typeStrCode=="STO_2"){
            this.getCapacity(gv.RESOURCE_TYPE.ELIXIR)
        }   else if(area.typeStrCode=="STO_3"){
            this.getCapacity(gv.RESOURCE_TYPE.DARK_ELIXIR)
        }   else if(area.typeStrCode=="TOW_1"){
            this.getCapacity(gv.RESOURCE_TYPE.GOLD)
            this.getCapacity(gv.RESOURCE_TYPE.ELIXIR)
            this.getCapacity(gv.RESOURCE_TYPE.DARK_ELIXIR)
        }
    },
    showMapGrid: function(){
        for(i=0;i<this.mapSize.w;i++){
            s = "|";
            for(j=0;j<this.mapSize.h;j++){
                if(this.grid[i][j]<9)
                    s += " ";
                if(this.grid[i][j]>0){
                    s += this.grid[i][j];
                }
                else    {
                    s += " ";
                }

            }
            cc.log(s);
        }
    },
    hideAreaFromGrid:function(area){
        if(area==null) return;
        for(i=0;i<area.size.width;i++){
            for(j=0;j<area.size.height;j++){
                this.grid[area.position.x+i][area.position.y+j] = 0;
            }
        }
    },
    showAreaInGrid:function(area){
        posInServer = this.mapIdToServerPos.get(area.id);
        for(i=0;i<area.size.width;i++){
            for(j=0;j<area.size.height;j++){
                this.grid[area.position.x+i][area.position.y+j] = area.id;
            }
        }
        if(area.position.x != posInServer.x || area.position.y != posInServer.y){
            testnetwork.connector.sendMoveConsRq(area.id, area.position.x, area.position.y);
            this.mapIdToServerPos.set(area.id,area.position)
        }
    },
    checkValidPosition:function(newPos,size){
        if(newPos.x<0 || newPos.x + size.width > SIZE_AREA) return false;
        if(newPos.y<0 || newPos.y + size.height> SIZE_AREA) return false;
        for(i=0;i<size.width;i++){
            for(j=0;j<size.height;j++){
                if(this.grid[newPos.x+i][newPos.y+j]!=0) {
                    return false;
                }
            }
        }
        return true;
    }
});

UserMap.getInstance = function() {
    if(this.instance == null) {
        this.instance = new UserMap();
    }
    return this.instance;
}

