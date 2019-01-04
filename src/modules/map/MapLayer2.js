/**
 * Created by CPU11630_LOCAL on 12/28/2018.
 */

var MapLayer2 = cc.Layer.extend({
    areaNodes : null,
    bgSize : null,
    vt : {
        x:0.795433172,
        y:0.6060432
    },
    scArea : 0.58,
    areaVsBg:{
        x : 0.45,
        y: 0.57
    },
    ctor:function() {
        this._super();
        this.areaNodes = new cc.Node();
        this.backgroundMap = ccs.load(res.backgroundmap).node;
        this.addChild(this.backgroundMap);
        this.bgSize = this.backgroundMap.getBoundingBoxToWorld();
        //this.backgroundMap.scale = 0.5;
        cc.log(this.bgSize.width + " &&& " +  this.bgSize.height);
        //this.bgSize = {
        //    width :  this.bgSize.width,
        //    height: this.bgSize.width * 1600 / 2100
        //};
        //this.showBackground();
        this.addChild(this.areaNodes);
        this.scheduleUpdate();
        //this.scArea = this.bgSize.width /2100 * this.areaVsBg;
    },
    loadBase:function()
    {


    },

    update: function(){
        //UserMap.getInstance().update();
    },
    addArea: function (area) {
        aSize = area.size;

        aP = {
            //x:42  - 21,
            //y:42 - 21
            x:area.position.x + aSize.width * 0.5  - 21,
            y:area.position.y + aSize.height * 0.5 -21
        }
        area.image.attr({
            anchorX: 0.5,
            anchorY: 0.5,
            x: this.bgSize.width * ( + this.areaVsBg.x*(aP.y*this.vt.x - aP.x*this.vt.x)/42),
            y: this.bgSize.height * ( + this.areaVsBg.y* (aP.y*this.vt.y + aP.x*this.vt.y)/42),
            scale:this.scArea
        });
        this.areaNodes.addChild(area);
    }
});

MapLayer2.getInstance = function() {
    if(this.instance == null) {
        this.instance = new MapLayer2();
    }
    return this.instance;
}
