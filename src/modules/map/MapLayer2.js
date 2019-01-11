/**
 * Created by CPU11630_LOCAL on 12/28/2018.
 */

TOUCH_STATUSES = {
    NONE :0,
    AREA_CLICKED : 1,
    TRY_NEW_BUILDING : 2,
    START_MOVING_MAP : 3,
    MOVING_MAP : 4,
    MOVING_OBJECT : 5,
    CHOOSING_NEW_OR_MOVING_MAP: 6,

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
            area : null,
            prevState : TOUCH_STATUSES.NONE,
            latestValidPostion : null
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
        logicP = this.convertTouchPointToLogic(touchPos);
        cc.log(logicP.x + " - " +logicP.y)
        if((logicP.x >0 && logicP.x < this.SZ) || (logicP.y >0 && logicP.y < this.SZ)){
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
                cc.log("begin touches began")
                cc.log("touches began status " + self.touch_status)
                var touch = touches[0];
                if(self.prevTouchId != touch.getID()){
                    self.prevTouchId = touch.getID()
                }   else{
                    if(self.touch_status == TOUCH_STATUSES.MOVING_MAP){
                        self.touch_status = TOUCH_STATUSES.NONE
                        return
                    }
                    cc.log("touch began at " + touch.getLocation().x + "," + touch.getLocation().y + " touch_status : " + self.touch_status)
                    if(self.touch_status == TOUCH_STATUSES.AREA_CLICKED || self.touch_status == TOUCH_STATUSES.TRY_NEW_BUILDING){
                        touchPos = {
                            x:touch.getLocation().x,
                            y:touch.getLocation().y
                        }
                        if(self.touch_status == TOUCH_STATUSES.AREA_CLICKED){
                            cc.log("touch began : AREA_CLICKED" )

                            logicPos = self.convertTouchPointToLogic(touchPos)
                            cc.log("touch to pos : (" + logicPos.x + "," + logicPos.y + ")")
                            cc.log("data_touched.area.position (" +  self.data_touched.area.position.x +"," +self.data_touched.area.position.y + ")")
                            if(logicPos.x < self.data_touched.area.position.x || logicPos.x >= self.data_touched.area.position.x + self.data_touched.area.size.width|| logicPos.y < self.data_touched.area.position.y || logicPos.y >= self.data_touched.area.position.y + self.data_touched.area.size.height ){
                                cc.log("not touch to current area")
                                area = self.getAreaClicked(touchPos)
                                if(area != null) {
                                    cc.log("touch to another area");
                                    // put previous area to grid
                                    isValidPos = UserMap.getInstance().checkValidPosition(self.data_touched.area.position,self.data_touched.area.size)
                                    if(!isValidPos){
                                        self.data_touched.area.position = self.data_touched.latestValidPostion;
                                    }
                                    self.showAreaInLayerMap(self.data_touched.area);
                                    UserMap.getInstance().showAreaInGrid(self.data_touched.area);
                                    // take the new area

                                    //UserMap.getInstance().hideAreaFromGrid(area);
                                    //self.data_touched.area = area;
                                    //self.data_touched.latestValidPostion = area.position;
                                    //example = area.getOptions();
                                    //fr.getCurrentScreen().layerLobby.constructionComp.onConstructionClick(example);
                                    //
                                    self.data_touched.prevState = self.touch_status;
                                    self.touch_status = TOUCH_STATUSES.CHOOSING_NEW_OR_MOVING_MAP;
                                }   else    {
                                    self.touch_status = TOUCH_STATUSES.START_MOVING_MAP;
                                }
                            }   else    {
                                cc.log("re touch area")
                                //self.touch_status = TOUCH_STATUSES.MOVING_OBJECT;
                                self.data_touched.prevState = self.touch_status;
                                self.touch_status = TOUCH_STATUSES.MOVING_OBJECT;
                            }
                        }   else if(self.touch_status == TOUCH_STATUSES.TRY_NEW_BUILDING){
                            cc.log("touch began : TRY_NEW_BUILDING" )
                            logicPos = self.convertTouchPointToLogic(touchPos)
                            logicPos.x -= self.data_touched.area.size.width * 0.5
                            logicPos.y -= self.data_touched.area.size.height * 0.5

                            if(logicPos.x < self.data_touched.area.position.x || logicPos.x >= self.data_touched.area.position.x + self.data_touched.area.size ) return;
                            if(logicPos.y < self.data_touched.area.position.y || logicPos.y >= self.data_touched.area.position.y + self.data_touched.area.size ) return;
                            self.data_touched.prevState = self.touch_status;
                            self.touch_status = TOUCH_STATUSES.MOVING_OBJECT;
                        }
                    }
                }
                cc.log("end touches began")
            },
            onTouchesMoved : function(touches, event) {
                var touch = touches[0];
                if (self.prevTouchId != touch.getID()) {
                    self.prevTouchId = touch.getID()
                } else {
                    switch (self.touch_status) {
                        case TOUCH_STATUSES.NONE:
                            self.data_touched.prevState = self.touch_status;
                            self.touch_status = TOUCH_STATUSES.MOVING_MAP;
                        case TOUCH_STATUSES.AREA_CLICKED:
                            self.data_touched.prevState = self.touch_status;
                            self.touch_status = TOUCH_STATUSES.MOVING_MAP;
                            break;
                        case TOUCH_STATUSES.TRY_NEW_BUILDING:
                            self.data_touched.prevState = self.touch_status;
                            self.touch_status = TOUCH_STATUSES.MOVING_MAP;
                            break;
                        case TOUCH_STATUSES.START_MOVING_MAP:
                            self.touch_status = TOUCH_STATUSES.MOVING_MAP;
                            break;
                        case TOUCH_STATUSES.CHOOSING_NEW_OR_MOVING_MAP:
                            self.touch_status = TOUCH_STATUSES.MOVING_MAP;
                            break;
                        case TOUCH_STATUSES.MOVING_MAP:
                            var delta = touch.getDelta();
                            var curPos = cc.p(self.x, self.y);
                            curPos = cc.pAdd(curPos, delta);
                            self.setPosition(curPos);
                            break;
                        case TOUCH_STATUSES.MOVING_OBJECT:
                            touchPos = {
                                x: touch.getLocation().x,
                                y: touch.getLocation().y
                            }
                            logicPos = self.convertTouchPointToLogic(touchPos)
                            logicPos.x -= Math.floor(self.data_touched.area.size.width * 0.5)
                            logicPos.y -= Math.floor(self.data_touched.area.size.height * 0.5)
                            logicPos.x += self.data_touched.area.size.width * 0.5
                            logicPos.y += self.data_touched.area.size.height * 0.5
                            pixelpos = self.convertLogicToPixel(logicPos)
                            self.data_touched.area.image.x = pixelpos.x
                            self.data_touched.area.image.y = pixelpos.y
                            break;
                    }
                }
            },
            onTouchesEnded:  function(touches, event){
                var touch = touches[0];
                if(self.prevTouchId != touch.getID()){
                    self.prevTouchId = touch.getID()
                }   else{
                    cc.log("before touches end :");
                    touchPos = {
                        x: touch.getLocation().x,
                        y: touch.getLocation().y
                    }
                    switch (self.touch_status) {
                        case TOUCH_STATUSES.CHOOSING_NEW_OR_MOVING_MAP:
                        case TOUCH_STATUSES.NONE:
                            cc.log("touch end : NONE or CHOOSING_NEW_OR_MOVING_MAP")
                            area = self.getAreaClicked(touchPos)
                            if(area != null) {
                                UserMap.getInstance().hideAreaFromGrid(area);
                                self.data_touched.area = area;
                                self.data_touched.latestValidPostion = area.position;
                                self.touch_status = TOUCH_STATUSES.AREA_CLICKED;
                                options = area.getOptions();
                                fr.getCurrentScreen().layerLobby.constructionComp.onConstructionClick(options);
                            }
                            break;
                        case TOUCH_STATUSES.AREA_CLICKED:
                            cc.log("touch end : AREA_CLICKED" )
                            logicPos = self.convertTouchPointToLogic(touchPos)
                            if(logicPos.x < self.data_touched.area.position.x || logicPos.x >= self.data_touched.area.position.x + self.data_touched.area.size.width || logicPos.y < self.data_touched.area.position.y || logicPos.y >= self.data_touched.area.position.y + self.data_touched.area.size.height ){
                                // not touch to current moving object
                                isValidPos = UserMap.getInstance().checkValidPosition(self.data_touched.area.position,self.data_touched.area.size)
                                if(!isValidPos){
                                    self.data_touched.area.position = self.data_touched.latestValidPostion;
                                }
                                self.showAreaInLayerMap(self.data_touched.area)
                                UserMap.getInstance().showAreaInGrid(self.data_touched.area);
                                area = self.getAreaClicked(touchPos)
                                if(area != null) {
                                    // touch to another object
                                    cc.log("HERE")
                                    UserMap.getInstance().hideAreaFromGrid(area);
                                    self.data_touched.area = area;
                                    self.data_touched.latestValidPostion = area.position;
                                    options = area.getOptions();
                                    fr.getCurrentScreen().layerLobby.constructionComp.onConstructionClick(options);
                                }   else    {
                                    // not touch any object
                                    self.touch_status = TOUCH_STATUSES.NONE;
                                }
                            }
                            break;
                        case TOUCH_STATUSES.TRY_NEW_BUILDING:
                            cc.log("touch end : TRY_NEW_BUILDING" )
                            break;
                        case TOUCH_STATUSES.START_MOVING_MAP:
                            cc.log("touch end : START_MOVING_MAP" )
                            isValidPos = UserMap.getInstance().checkValidPosition(self.data_touched.area.position,self.data_touched.area.size)
                            if(!isValidPos){
                                self.data_touched.area.position = self.data_touched.latestValidPostion;
                            }
                            self.showAreaInLayerMap(self.data_touched.area)
                            UserMap.getInstance().showAreaInGrid(self.data_touched.area);
                            self.touch_status = TOUCH_STATUSES.NONE;
                            break;
                        case TOUCH_STATUSES.MOVING_MAP:
                            cc.log("touch end : MOVING_MAP" )
                            self.touch_status = self.data_touched.prevState;
                            break;
                        case TOUCH_STATUSES.MOVING_OBJECT:
                            cc.log("touch end : MOVING_OBJECT" )
                            newPos = self.convertTouchPointToLogic(touchPos);
                            newPos.x -= Math.floor(self.data_touched.area.size.width*0.5)
                            newPos.y -= Math.floor(self.data_touched.area.size.height*0.5)
                            isValidPos = UserMap.getInstance().checkValidPosition(newPos,self.data_touched.area.size)
                            cc.log("end moving object at (" + newPos.x + "," + newPos.y + ")")
                            self.data_touched.area.position = newPos
                            if(isValidPos){
                                self.data_touched.latestValidPostion = newPos
                            }
                            self.touch_status = self.data_touched.prevState;
                            cc.log("return back to state " + self.data_touched.prevState)
                            break;
                    }
                    cc.log("end touches end");
                }
                cc.log("touches ended status " + self.touch_status)
                //UserMap.getInstance().showMapGrid()
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
    showAreaInLayerMap:function(area){
        displayPos =    {
            x : this.data_touched.area.position.x + this.data_touched.area.size.width * 0.5,
            y : this.data_touched.area.position.y + this.data_touched.area.size.height * 0.5
        }
        pixelpos = this.convertLogicToPixel(displayPos)
        this.data_touched.area.image.x = pixelpos.x
        self.data_touched.area.image.y = pixelpos.y
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
