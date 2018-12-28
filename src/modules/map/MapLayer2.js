/**
 * Created by CPU11630_LOCAL on 12/28/2018.
 */

var MapLayer2 = cc.Layer.extend({
    areaNodes : null,
    ctor:function() {
        this._super();
        this.areaNodes = new cc.Node();
        this.loadBase();
        this.loadBoundary();
        this.addBuilding();
        if(this.areaNodes == null){
            cc.log("null");
        }   else    {
            cc.log("not null")
        }
        this.addChild(this.areaNodes)
    },
    loadBase:function()
    {

        var isometricMap = new cc.TMXTiledMap.create("res/gui/Art/Map/42x42map.tmx");

        isometricMap.attr({
            anchorX: 0,
            anchorY: 0,
            x: 110,
            y: 95,
            scale: 0.2
        });
        //  isometricMap.setPosition(cc.p(size.width * 0.1, size.height * 0.1));
        this.addChild(isometricMap);
    },

    loadBoundary: function()
    {
        var boundary = [];

        boundary[0] = new cc.Sprite("res/gui/Art/Map/1_0000_Layer-3.png");
        boundary[1] = new cc.Sprite("res/gui/Art/Map/1_0001_Layer-1.png");
        boundary[2] = new cc.Sprite("res/gui/Art/Map/1_0002_Layer-4.png");
        boundary[3] = new cc.Sprite("res/gui/Art/Map/1_0003_Layer-2.png");

        boundary[1].attr({
            anchorX: 0,
            anchorY: 0,
            x: 0,
            y: 0,
            scale: 0.4
        });

        boundary[0].attr({
            anchorX: 0,
            anchorY: 0,
            x: 0,
            y: (boundary[1].height - 1)*0.4,
            scale: 0.4
        });

        boundary[3].attr({
            anchorX: 0,
            anchorY: 0,
            x: (boundary[1].width - 1)*0.4,
            y: 0,
            scale: 0.4
        });

        boundary[2].attr({
            anchorX: 0,
            anchorY: 0,
            x: (boundary[1].width - 1)*0.4,
            y: (boundary[1].height - 4)*0.4,
            scale: 0.4
        });

        this.addChild(boundary[1]);
        this.addChild(boundary[0]);
        this.addChild(boundary[3]);
        this.addChild(boundary[2]);

    },

    update:function(dt){
        UserMap.getInstance().update();
    },
    addBuilding: function() {
        var building1 = new cc.Sprite("res/gui/Art/Buildings/barrack/BAR_1_12/idle/image0000.png");

        building1.attr({
            anchorX: 0,
            anchorY: 0,
            x: 200,
            y: 200,
            scale: 0.4
        });
        this.areaNodes.addChild(building1);
    }

});

MapLayer2.getInstance = function() {
    if(this.instance == null) {
        this.instance = new MapLayer2();
    }
    return this.instance;
}
