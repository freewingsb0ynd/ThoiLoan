/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */

//gv.BUILDING.DEFENSE  = 5;   // load only cai base truoc
//gv.BUILDING.STORAGE  = 9;  // da thay

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
            if(this.upgradingLevel == 1){
                return 0;
            }
            return TL.STORAGE["STO_"+this.type2][this.currentLevel]["capacity"];
        }
    },
    update : function(){

    }
})