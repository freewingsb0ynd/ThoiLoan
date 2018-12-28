/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */
var UserMap = cc.Class.extend({
    id:null,
    mapIdToArea:null,
    mapTypeToIds:null,
    setBuilderWorkingArea : null,
    isFinishLoadMap:false,
    ctor:function() {

    },


    prepareGetMap: function(){
        this.mapIdToArea = new Map();
        this.mapTypeToIds = new Map();
        this.setBuilderWorkingArea = new Set();
    },
    addObject: function(area){
        id = area.id;
        type1 = area.type1;
        type2 = area.type2 || 0;
        this.mapIdToArea.set(id,area);
        typeConvert = this.hashType(type1, type2);
        if(this.mapTypeToIds.get(typeConvert)==null){
            this.mapTypeToIds.set(typeConvert,[])
        }
        this.mapTypeToIds.get(typeConvert).push(id);
        if(area.type1 == gv.BUILDING.OBSTACLE){
            if(area.cleanMoment>0){
                this.setBuilderWorkingArea.add(area);
            }
        }   else    {
            if(area.upgradingLevel>0){
                this.setBuilderWorkingArea.add(area);
            }
        }
        cc.log("new Area : " + area.showInfo());
    },

    hashType: function(type1, type2){
        return type1*100 + type2;
    },

    getWorkingBuilder : function(){
        return this.setBuilderWorkingArea.size;
    },
    getTotalBuilder : function(){
        typeConvert = this.hashType(gv.BUILDING.BUILDER_HUT,0);
        listIds = this.mapTypeToIds.get(typeConvert);
        if(listIds==null){
            return 0;
        }
        return listIds.length;
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
        typeTownHall = this.hashType(gv.BUILDING.TOWN_HALL,0);
        townHallIds = this.mapTypeToIds.get(typeTownHall);
        if(townHallIds == null || townHallIds.length!=1){
            return capacity;
        }
        townHallId = townHallIds[0];
        townHall = this.mapIdToArea.get(townHallId);
        if(townHall == null){
            return capacity;
        }
        switch(type2){
            case gv.RESOURCE_TYPE.GOLD:
                capacity += TL.TOWNHALL["TOW_1"][type2]["capacityGold"];
                break;
            case gv.RESOURCE_TYPE.ELIXIR:
                capacity += TL.TOWNHALL["TOW_1"][type2]["capacityElixir"];
                break;
            case gv.RESOURCE_TYPE.GOLD:
                capacity += TL.TOWNHALL["TOW_1"][type2]["capacityDarkElixir"];
                break;
        }
        return capacity;
    },
    update:function(dt){

    }
});

UserMap.getInstance = function() {
    if(this.instance == null) {
        this.instance = new UserMap();
    }
    return this.instance;
}
