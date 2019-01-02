/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */

var Area = cc.Node.extend({
    id: 0,
    type1: null,
    position: null,

    //-----------addition information store for improving speed (maybe)
    typeStrCode:null,
    size : null,
    description:null,
    image:null,

    ctor: function (_id, _type1, _posX, _posY) {
        this._super("");
        this.id = _id;
        this.type1 = _type1;
        this.position = {x:_posX, y:_posY};
        this.addChild(this.getImage());
    },
    showInfo : function(){
        return " id " + this.id + " type1 :" + this.type1 + " position : (" + this.position.x + "," + this.position.y + ")";
    },
    update : function(){
        // return true if a builder is working on
    },
    getSize : function(){
    },
    getDescription : function(){
    },
    getImage : function(){
        this.image = new cc.Sprite("res/gui/Art/Map/map_obj_bg/BG_1.png");
        return this.image;
    },
    refreshInfo:function(){
        this.getDescription();
        //this.getImage();
        this.getSize();
    }
})
