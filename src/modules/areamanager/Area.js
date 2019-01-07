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
    _jsonRes:null,

    ctor: function (_id, _type1, _posX, _posY) {
        this._super("");
        this.id = _id;
        this.type1 = _type1;
        this.position = {x:_posX, y:_posY};

        //var node = new cc.Node();
        //var sp = new cc.Sprite("res/gui/Art/Map/map_obj_bg/BG/RED_3.png");
        //node.addChild(sp);
        //
        //this._jsonRes = node;
        this.image = new cc.Sprite();
        this.addChild(this.image);
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
    setImage : function(){
        // set texture or animation for this.image
        this.image.setTexture("res/gui/Art/Map/map_obj_bg/BG/RED_" + this.size.width + ".png");
    },
    refreshInfo:function(){
        this.getSize();
        this.getDescription();
        this.setImage();
    },
    getOptions:function(){
        options = [];
        example  = {typeOption:1,resources:[{type:1,amount:100}]};
        options.push(example);
        return options;
    }
})
