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
        cc.log(this.bgSize.width + " &&& " +  this.bgSize.height);
        //this.showBackground();
        this.addChild(this.areaNodes);
        this.addTouchListener();
        this.addKeyboardListener();
        this.scheduleUpdate();
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
    },
    addTouchListener:function(){
        //Add code here
        var self = this;
        cc.eventManager.addListener({
            prevTouchId : -1,
            event: cc.EventListener.TOUCH_ALL_AT_ONCE,
            onTouchesBegan : function(touches, event){
                var touch = touches[0];
                if(self.prevTouchId != touch.getID()){
                    self.prevTouchId = touch.getID()
                }   else{
                    cc.log("touch at " + touch.getLocation().x + "," + touch.getLocation().y)
                    var delta = touch.getDelta();
                    //var curPos = cc.p(self.layerMap.x, self.layerMap.y);
                    //curPos = cc.pAdd(curPos,delta);
                    //self.layerMap.setPosition(curPos);
                }
            },
            onTouchesMoved : function(touches, event){
                var touch = touches[0];
                if(self.prevTouchId != touch.getID()){
                    self.prevTouchId = touch.getID()
                }   else{
                    var delta = touch.getDelta();
                    var curPos = cc.p(self.x, self.y);
                    curPos = cc.pAdd(curPos,delta);
                    self.setPosition(curPos);
                    //cc.log(self.x + " , " + self.y);
                    // TODO : set not let map move out
                }
            }
        },this);
    },
    addKeyboardListener:function(){
        //Add code here
        if(cc.sys.capabilities.hasOwnProperty('keyboard'))
            cc.eventManager.addListener({
                event: cc.EventListener.KEYBOARD,
                onKeyPressed: function(key,event){
                    MW.KEYS[key] = true;
                },
                onKeyReleased: function(key,event){
                    MW.KEYS[key] = false;
                }
            },this);
    },
    update:function (dt) {
        self = this;
        if (MW.KEYS[cc.KEY.a]) {
            scale =  self.getScale();
            scale = scale*1.01;
            scale = Math.min(scale,2);
            this.setScale(scale);
            return;
        }
        if (MW.KEYS[cc.KEY.s]) {
            scale =  self.getScale();
            scale = scale*0.99;
            scale = Math.max(scale,0.9);
            this.setScale(scale);
        }
    },
});

MapLayer2.getInstance = function() {
    if(this.instance == null) {
        this.instance = new MapLayer2();
    }
    return this.instance;
}
