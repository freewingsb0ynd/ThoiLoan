/**
 * Created by CPU11635_LOCAL on 12/14/2018.
 */
var ScreenGame = cc.Layer.extend({
    _itemMenu:null,
    _beginPos:0,
    isMouseDown:false,

    layerMap: null,
    layerLobby: null,

    ctor:function() {
        this._super();
        this.loadGui();
        gv.gameClient.connect();
        this.initGame();
        this.addTouchListener();
        this.addKeyboardListener();
        this.scheduleUpdate();
    },


    loadGui:function()
    {
        //this.removeAllChildren();
        var size = cc.winSize;

    },

    onEnter:function(){
        this._super();
    },

    initGame:function(){
        //this.addChild(LobbyLayer);
        //fr.view(MapLayer);
        var node = new cc.Node();
        this.addChild(node);
        //scene = new cc.Scene();
        this.layerMap = new MapLayer2();
        this.layerMap.attr({
            anchorX: 0,
            anchorY: 0,
            x: this.layerMap.width/2,
            y: this.layerMap.height/2,
            scale:1
        })
        //this.layerMap.setPosition(cc.p(0,0));
        //this.layerMap.scale = 1;
        //scene.addChild(layerMap, 1);
        this.layerLobby = new LobbyLayer();
        //scene.addChild(layerLobby, 2);
        //return scene;
        //this.layerLobby.reloadGui();

        this.layerCheat = new CheatLayer();

        node.addChild(this.layerMap);

        node.addChild(this.layerCheat);
        node.addChild(this.layerLobby);



    },

    onConnectFail:function()
    {
        this.layerCheat.logConnectionFail();
    },
    addTouchListener:function(){
        //Add code here
        var self = this;
        cc.eventManager.addListener({
            prevTouchId : -1,
            event: cc.EventListener.TOUCH_ALL_AT_ONCE,
            onTouchesMoved : function(touches, event){
                var touch = touches[0];
                if(self.prevTouchId != touch.getID()){
                    self.prevTouchId = touch.getID()
                }   else{
                    var delta = touch.getDelta();
                    var curPos = cc.p(self.layerMap.x, self.layerMap.y);
                    curPos = cc.pAdd(curPos,delta);
                    self.layerMap.setPosition(curPos);
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
            scale =  self.layerMap.getScale();
            scale = scale*1.01;
            this.layerMap.setScale(scale);
            return;
        }
        if (MW.KEYS[cc.KEY.s]) {
            scale =  self.layerMap.getScale();
            scale = scale*0.99;
            this.layerMap.setScale(scale);
        }
    },
});
//
//ScreenGame.scene = function () {
//    var scene = new cc.Scene();
//    var layerMap = new MapLayer();
//    scene.addChild(layerMap, 1);
//    var layerLobby = new LobbyLayer();
//    scene.addChild(layerLobby, 2);
//    return scene;
//};