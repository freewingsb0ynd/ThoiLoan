/**
 * Created by CPU11635_LOCAL on 12/14/2018.
 */
var MapLayer = cc.Layer.extend({
    _itemMenu:null,
    _beginPos:0,
    isMouseDown:false,

    ctor:function() {
        this._super();
        this.loadBase();
        this.loadBoundary();
        this.addBuilding();
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

        //boundary[1].attr({"anchorX": 0...});
        //boundary[2].attr({"anchorX": 0...});
        //boundary[3].attr({"anchorX": 0...});
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

        this.addChild(building1);
    }

});