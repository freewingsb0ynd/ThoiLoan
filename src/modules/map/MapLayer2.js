/**
 * Created by CPU11630_LOCAL on 12/28/2018.
 */

var MapLayer2 = cc.Layer.extend({
    SZ : SIZE_AREA+1,
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
        //this.showBackground();
        this.addChild(this.areaNodes);
        this.addTouchListener();
        this.addKeyboardListener();
        this.scheduleUpdate();
    },
    update: function(){
        //UserMap.getInstance().update();
    },
    addArea: function (area) {
        aSize = area.size;
        aP = {
            x:area.position.x + aSize.width * 0.5,
            y:area.position.y + aSize.height * 0.5
        }
        pixelPos = this.convertLogicToPixel(aP);
        area.image.attr({
            anchorX: 0.5,
            anchorY: 0.5,
            x: pixelPos.x,
            y: pixelPos.y,
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
                    touchPos = {
                        x:touch.getLocation().x,
                        y:touch.getLocation().y
                    }
                    logicP = self.convertTouchPointToLogic(touchPos);
                    cc.log(logicP.x + " - " +logicP.y)
                    if((logicP.x >0 && logicP.x < self.SZ) || (logicP.y >0 && logicP.y < self.SZ)){
                        id = UserMap.getInstance().grid[logicP.x][logicP.y];
                        cc.log("id   = " + id);
                        if(id>0){
                            area = UserMap.getInstance().mapIdToArea.get(id);
                            if(area != null){
                                example = area.getOptions();
                                fr.getCurrentScreen().layerLobby.constructionComp.setVisible(false);
                                fr.getCurrentScreen().layerLobby.constructionComp.updateGui(example);
                                fr.getCurrentScreen().layerLobby.constructionComp.setVisible(true);
                                cc.log("hello")
                            }
                        }
                    }
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
            scale = Math.min(scale,3);
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
    convertTouchPointToLogic:function(touchPoint){
        scale = this.getScale();
        centerPos = {
            x:this.x,
            y:this.y
        }
        var pixelPosInMap = cc.pMult(cc.pSub(touchPoint,centerPos),1/scale);
        return this.convertPixelToLogic(pixelPosInMap);
    },
    convertPixelToLogic:function(pixelPoint){
        var curPos  ={
            x: pixelPoint.x * this.SZ,
            y: pixelPoint.y * this.SZ
        }
        curPos.x /=  this.bgSize.width * this.areaVsBg.x ;
        curPos.y /= this.bgSize.height * this.areaVsBg.y  ;
        twoxy = 2 * (this.vt.x * this.vt.y)
        var logicPoint = {
            x: Math.floor((curPos.y*this.vt.x + curPos.x*this.vt.y)/twoxy + this.SZ/2),
            y: Math.floor((curPos.y*this.vt.x - curPos.x*this.vt.y)/twoxy + this.SZ/2)
        }
        return logicPoint;
    },
    convertLogicToPixel:function(logicPoint_){
        var logicPoint= {
            x : logicPoint_.x - this.SZ/2,
            y :  logicPoint_.y - this.SZ/2
        }
        return {
            x: this.bgSize.width * this.areaVsBg.x * (logicPoint.x*this.vt.x - logicPoint.y*this.vt.x)/this.SZ,
            y: this.bgSize.height * this.areaVsBg.y* (logicPoint.y*this.vt.y + logicPoint.x*this.vt.y)/this.SZ,
        }
    },
});

MapLayer2.getInstance = function() {
    if(this.instance == null) {
        this.instance = new MapLayer2();
    }
    return this.instance;
}
