/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */


//gv.BUILDING.OBSTACLE  = 7;

var Obstacle  = Area.extend({
    cleanMoment : null,
    obstacleType : null,
    sprite : null,
    ctor: function (_id, _posX, _posY, _cleanMoment, _obstacleType) {
        this._super(_id,gv.BUILDING.OBSTACLE,_posX,_posY);
        this.cleanMoment = _cleanMoment;
        this.obstacleType = _obstacleType;
        this.typeStrCode = "OBS_" + _obstacleType;

    },
    showInfo: function(){
        return "Obstacle " + this._super() + "cleanMoment : " + this.cleanMoment + " obstacleType :" + this.obstacleType;
    },
    update : function(){
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
    setImage : function(){
        this.image.setTexture(TL.PATH.obstacle + this.obstacleType + "/idle/image0000.png");
    },

})
