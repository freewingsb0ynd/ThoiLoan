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
        this.update();
        data = {
            constructionName : "An Area",
            options :[]
            };
        // 1 check cancel option
        // 2 check clan option
        // 3 check spell option
        // 4 check harvest_dark_elixir option
        // 5 check harvest_elixir option
        // 6 check harvest_gold option
        // 7 check info option
        // 8 check quick_finish option
        // 10 check request_troop option
        // 11 check research option
        // 12 check rorate option
        // 13 check select_line option
        // 14 check shop option
        // 15 check train option
        // 16 check upgrade option

        return data;
    }
})