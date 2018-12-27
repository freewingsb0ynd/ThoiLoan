/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */

var Area = cc.Class.extend({
    id: 0,
    type1: null,
    position: null,

    ctor: function (_id, _type1, _posX, _posY) {
        this.id = _id;
        this.type1 = _type1;
        this.position = {x:_posX, y:_posY};
    },
    showInfo : function(){
        return " id " + this.id + " type1 :" + this.type1 + " position : (" + this.position.x + "," + this.position.y + ")";
    }
})
