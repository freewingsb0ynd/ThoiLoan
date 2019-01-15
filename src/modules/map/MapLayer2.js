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
    elixirMine: null,
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

        //this.elixirMine = ccs.load("res/gui/BuildingPrototype.json").node;
        ////this.elixirMine.attr({
        ////    x: 500,
        ////    y: 500
        ////});
        //this.areaNodes.addChild(this.elixirMine);




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
            scale:this.scArea,
        });
        area._jsonRes.attr({
            x: pixelPos.x,
            y: pixelPos.y,
            
        });
        this.areaNodes.addChild(area);
        area.setZOrder(-(area.position.x + area.position.y))
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
            prevDistance : -1,
            event: cc.EventListener.TOUCH_ALL_AT_ONCE,
            onTouchesBegan : function(touches, event){
                this.prevDistance = -1;
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
                            cc.log("touch began : AREA_CLICKED")

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
                var touch2 = touches[1];
                if(touch2 != null){
                    dif = cc.pSub(touch.getLocation(),touch2.getLocation());
                    curDistance = dif.x * dif.x + dif.y * dif.y;
                    if(this.prevDistance > -1){
                        zoomIncrease = curDistance - this.prevDistance;
                        scale =  self.getScale();
                        scale = scale*(1+zoomIncrease/1000000);
                        scale = Math.min(scale,3);
                        scale = Math.max(scale,0.9);
                        curPos = {
                            x: self.x,
                            y: self.y
                        }
                        if(self.checkOutSide(curPos,scale,{x:-1,y:1}) && self.checkOutSide(curPos,scale,{x:1,y:1}) && self.checkOutSide(curPos,scale,{x:-1,y:-1}) && self.checkOutSide(curPos,scale,{x:1,y:-1}))
                        self.setScale(scale);
                    }
                    this.prevDistance = curDistance;
                }
                if (self.prevTouchId != touch.getID()) {
                    self.prevTouchId = touch.getID()
                } else {
                    if(touch)
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
                            scale = self.getScale()
                            if(self.checkOutSide(curPos,scale,{x:-1,y:1}) && self.checkOutSide(curPos,scale,{x:1,y:1}) && self.checkOutSide(curPos,scale,{x:-1,y:-1}) && self.checkOutSide(curPos,scale,{x:1,y:-1}))
                            self.setPosition(curPos);
                            break;
                        case TOUCH_STATUSES.MOVING_OBJECT:
                            if(self.data_touched.area.type1 == gv.BUILDING.OBSTACLE){
                                self.touch_status = TOUCH_STATUSES.MOVING_MAP;
                                break;
                            }
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
                            tArea = self.data_touched.area
                            tArea._jsonRes.x = pixelpos.x
                            tArea._jsonRes.y = pixelpos.y
                            tArea.setZOrder(0)
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
                                UserMap.getInstance().showAreaInGrid(self.data_touched.area);
                                UserMap.getInstance().hideAreaFromGrid(self.data_touched.area);
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
            curPos = {
                x: this.x,
                y: this.y
            }
            if(this.checkOutSide(curPos,scale,{x:-1,y:1}) && this.checkOutSide(curPos,scale,{x:1,y:1}) && this.checkOutSide(curPos,scale,{x:-1,y:-1}) && this.checkOutSide(curPos,scale,{x:1,y:-1}))
            this.setScale(scale);
        }
    },
    checkOutSide:function(curPos, scale, ind){
        //cc.log(curPos.x + "," + curPos.y)
        dt = self.SZ/2 + 4;
        pixelInGrid = self.convertLogicToPixel({x:ind.x*dt + dt,y:ind.y*dt + dt})
        pos = cc.pAdd(cc.pMult(pixelInGrid,scale),curPos);
        //cc.log(ind.x + "," + ind.y + ":" + pos.x + ", " + pos.y + "winsize " + cc.winSize.width + ", " + cc.winSize.height)
        //cc.log("return true")
        if(ind.x>0 && ind.y > 0 && pos.y > cc.winSize.height) return true
        if(ind.x>0 && ind.y < 0 && pos.x > cc.winSize.width) return true
        if(ind.x<0 && ind.y > 0 && pos.x < 0 ) return true
        if(ind.x<0 && ind.y < 0 && pos.y < 0) return true
        //cc.log("return false")
        return false;
    },
    showAreaInLayerMap:function(area){
        displayPos =    {
            x : area.position.x + area.size.width * 0.5,
            y : area.position.y + area.size.height * 0.5
        }
        pixelpos = this.convertLogicToPixel(displayPos)
        area._jsonRes.x = pixelpos.x
        area._jsonRes.y = pixelpos.y
        area.setZOrder(-(area.position.x+area.position.y))
    },
    convertTouchPointToLogic:function(touchPoint){
        scale = this.getScale();
        centerPos = {
            x:this.x,
            y:this.y
        };
        var pixelPosInMap = cc.pMult(cc.pSub(touchPoint,centerPos),1/scale);
        return this.convertPixelToLogic(pixelPosInMap);
    },
    convertPixelToLogic:function(pixelPoint){
        var curPos  ={
            x: pixelPoint.x * this.SZ,
            y: pixelPoint.y * this.SZ
        };
        curPos.x /=  this.bgSize.width * this.areaVsBg.x ;
        curPos.y /= this.bgSize.height * this.areaVsBg.y  ;
        twoxy = 2 * (this.vt.x * this.vt.y)
        var logicPoint = {
            x: Math.floor((curPos.y*this.vt.x + curPos.x*this.vt.y)/twoxy + this.SZ/2),
            y: Math.floor((curPos.y*this.vt.x - curPos.x*this.vt.y)/twoxy + this.SZ/2)
        };
        return logicPoint;
    },
    convertLogicToPixel:function(logicPoint_){
        var logicPoint= {
            x : logicPoint_.x - this.SZ/2,
            y :  logicPoint_.y - this.SZ/2
            };
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
