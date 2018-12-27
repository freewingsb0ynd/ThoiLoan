/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */

var Building2Type = Building.extend({
    type2 : null,
    ctor: function (_id, _type1, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, _type2) {
        this._super(_id, _type1, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
        this.type2 = _type2;
    },
    showInfo : function(){
        return this._super() + "type2 :" + this.type2;
    },
    getCapacity : function(){
        if(this.type1!=gv.BUILDING.STORAGE){
            return 0;
        }   else    {
            return 1;
        }
    }
})