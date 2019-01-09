/**
 * Created by CPU11630_LOCAL on 12/28/2018.
 */

TOUCH_STATUSES = {
    NONE :0,
    AREA_CLICKED : 1,
    TRY_NEW_BUILDING : 2
}

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
    touch_status : null,
    data_touched : null,
    ctor:function() {
        this._super();
        this.areaNodes = new cc.Node();
        this.backgroundMap = ccs.load(res.backgroundmap).node;
        this.addChild(this.backgroundMap);
        this.bgSize = this.backgroundMap.getBoundingBoxToWorld();
        //this.showBackground();
        this.touch_status = TOUCH_STATUSES.NONE;

        this.data_touched = {
            area_clicked : {
                id :0,
            },
            try_new_building : {
                type :0,
                size:0
            },
            posInfo:{
                isMoving:false,
                x:0,
                y:0
            }
        }

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
    getAreaClicked  : function(touchPos){
        area = null;
        logicP = self.convertTouchPointToLogic(touchPos);
        cc.log(logicP.x + " - " +logicP.y)
        if((logicP.x >0 && logicP.x < self.SZ) || (logicP.y >0 && logicP.y < self.SZ)){
            id = UserMap.getInstance().grid[logicP.x][logicP.y];
            cc.log("id   = " + id);
            if(id>0){
                area = UserMap.getInstance().mapIdToArea.get(id);
            }
        }
        return area;
    },
    addTouchListener:function(){
        //Add code here
        var self = this;
        cc.eventManager.addListener({
            prevTouchId : -1,
            event: cc.EventListener.TOUCH_ALL_AT_ONCE,
            onTouchesBegan : function(touches, event){
                //cc.log("touches began")
                var touch = touches[0];
                if(self.prevTouchId != touch.getID()){
                    self.prevTouchId = touch.getID()
                }   else{
                    cc.log("touch at " + touch.getLocation().x + "," + touch.getLocation().y)
                    touchPos = {
                        x:touch.getLocation().x,
                        y:touch.getLocation().y
                    }
                    if(self.touch_status == TOUCH_STATUSES.AREA_CLICKED){
                        if(self.data_touched.posInfo.isMoving == false){
                            // check start moving
                            area = self.getAreaClicked(touchPos)
                            if(area == null) return;
                            if(area.id != self.data_touched.area_clicked.id && area.type != gv.BUILDING.OBSTACLE){
                                return;
                            }
                            // start moving from the valid position
                            self.data_touched.posInfo.isMoving = true;
                        }
                    }   else if(self.touch_status == TOUCH_STATUSES.TRY_NEW_BUILDING){
                        if(self.data_touched.posInfo.isMoving == false){
                            // check start moving new position
                            if(touchLogicPos.x < self.data_touched.posInfo.x || touchLogicPos.x > self.data_touched.posInfo.x + self.data_touched.try_new_building.size ) return;
                            if(touchLogicPos.y < self.data_touched.posInfo.y || touchLogicPos.y > self.data_touched.posInfo.y + self.data_touched.try_new_building.size ) return;
                            // start moving from the valid position
                            self.data_touched.posInfo.isMoving = true;
                        }
                    }
                }
            },
            onTouchesMoved : function(touches, event){
                cc.log("touches moved")
                var touch = touches[0];
                if(self.prevTouchId != touch.getID()){
                    self.prevTouchId = touch.getID()
                }   else{
                    if(self.touch_status == TOUCH_STATUSES.NONE || self.data_touched.posInfo.isMoving == false){
                        var delta = touch.getDelta();
                        var curPos = cc.p(self.x, self.y);
                        curPos = cc.pAdd(curPos,delta);
                        self.setPosition(curPos);
                        // TODO : set not let map move out
                    }
                    touchPos = {
                        x:touch.getLocation().x,
                        y:touch.getLocation().y
                    }
                    touchLogicPos = self.convertTouchPointToLogic(touchPos);
                        if(self.data_touched.posInfo.isMoving == true){
                            self.data_touched.posInfo.x = touchLogicPos.x;
                            self.data_touched.posInfo.y = touchLogicPos.y;
                            cc.log("come here, move to pos " + touchLogicPos.x + "," + touchLogicPos.y)
                        }
                    }

                },
                onTouchesEnded:  function(touches, event){
                    cc.log("touches ended")
                    var touch = touches[0];
                    if(self.prevTouchId != touch.getID()){
                        self.prevTouchId = touch.getID()
                    }   else{
                        touchPos = {
                            x:touch.getLocation().x,
                            y:touch.getLocation().y
                        }
                        self.data_touched.area_clicked.id = 0;
                        area = self.getAreaClicked(touchPos)
                        if (area != null) {
                            self.touch_status = TOUCH_STATUSES.AREA_CLICKED;
                            self.data_touched.area_clicked.id = id;
                            example = area.getOptions();
                            fr.getCurrentScreen().layerLobby.constructionComp.setVisible(false);
                            fr.getCurrentScreen().layerLobby.constructionComp.updateGui(example);
                            fr.getCurrentScreen().layerLobby.constructionComp.setVisible(true);
                        }   else    {
                            self.touch_status = TOUCH_STATUSES.NONE;
                        }

                        self.data_touched.posInfo.isMoving = false;
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
