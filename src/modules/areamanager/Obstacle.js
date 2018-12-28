/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */


//gv.BUILDING.OBSTACLE  = 7;

var Obstacle  = Area.extend({
    cleanMoment : null,
    obstacleType : null,

    ctor: function (_id, _type1, _posX, _posY, _cleanMoment, _obstacleType) {
        this._super(_id,_type1,_posX,_posY);
        this.cleanMoment = _cleanMoment;
        this.obstacleType = _obstacleType;
    },
    showInfo: function(){
        return this._super() + "cleanMoment : " + this.cleanMoment + " obstacleType :" + this.obstacleType;
    },
    update : function(){
        if(this.cleanMoment>0){
            // cleaning
            if(TimeManager.getServerTime() >this.cleanMoment){
                this.cleanMoment = -1;
            }
        }
    }
})
