/**
 * Created by CPU11630_LOCAL on 12/28/2018.
 */

var MapLayer2 = cc.Layer.extend({
    areaNodes : null,
    bgSize : null,
    sc : 0.55,
    rt : {
        x:0.55,
        y:0.3
    },
    vt : {
        x:0.75,
        y:0.65
    },
    isoVsBg : 0.5,
    scArea : 0.84,
    ctor:function() {
        this._super();
        this.areaNodes = new cc.Node();
        this.showBackground();
        this.addChild(this.areaNodes);
        this.scheduleUpdate();
    },
    loadBase:function()
    {


    },

    showBackground: function()
    {
        var isometricMap = new cc.TMXTiledMap.create("res/gui/Art/Map/42x42map.tmx");
        var boundary = [];
        boundary[3] = new cc.Sprite("res/gui/Art/Map/1_0000_Layer-3.png");
        boundary[1] = new cc.Sprite("res/gui/Art/Map/1_0001_Layer-1.png");
        boundary[4] = new cc.Sprite("res/gui/Art/Map/1_0002_Layer-4.png");
        boundary[2] = new cc.Sprite("res/gui/Art/Map/1_0003_Layer-2.png");
        isometricMap.attr({
            anchorX: 0.5,
            anchorY: 0.5,
            x: boundary[1].width * this.sc,
            y: boundary[1].height* this.sc,
            scale: this.sc* this.isoVsBg
        });
        //  isometricMap.setPosition(cc.p(size.width * 0.1, size.height * 0.1));
        this.addChild(isometricMap);


        boundary[1].attr({
            anchorX: 0,
            anchorY: 0,
            x: 0,
            y: 0,
            scale: this.sc
        });

        boundary[3].attr({
            anchorX: 0,
            anchorY: 0,
            x: 0,
            y: (boundary[1].height - 1)*this.sc,
            scale: this.sc
        });

        boundary[2].attr({
            anchorX: 0,
            anchorY: 0,
            x: (boundary[1].width - 1)*this.sc,
            y: 0,
            scale: this.sc
        });

        boundary[4].attr({
            anchorX: 0,
            anchorY: 0,
            x: (boundary[1].width - 1)*this.sc,
            y: (boundary[1].height - 4)*this.sc,
            scale: this.sc
        });

        this.addChild(boundary[1]);
        this.addChild(boundary[3]);
        this.addChild(boundary[2]);
        this.addChild(boundary[4]);


        this.bgSize = {
            width :  boundary[1].width+boundary[2].width,
            height: boundary[1].height + boundary[3].height
        };
        cc.log(this.bgSize.width + " & " + this.bgSize.height);
        

    },

    update: function(){
        UserMap.getInstance().update();
    },
    addArea: function (area) {
        aSize = area.size;
        aP = {
            x:area.position.x + aSize.width / 2,
            y:area.position.y + aSize.height / 2
        }
        area.image.attr({
            anchorX: 0.5,
            anchorY: 0.5,
            x: this.sc * this.isoVsBg * this.bgSize.width * (this.rt.x + 0.5 + (aP.y*this.vt.y - aP.x*this.vt.x)/42),
            y: this.sc * this.isoVsBg * this.bgSize.height * (this.rt.y + (aP.y*this.vt.y + aP.x*this.vt.x)/42),
            scale:this.sc * this.scArea
        });
        this.areaNodes.addChild(area)
    }

});

MapLayer2.getInstance = function() {
    if(this.instance == null) {
        this.instance = new MapLayer2();
    }
    return this.instance;
}
