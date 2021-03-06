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
        this.layerMap.setName('map');
        this.layerMap.attr({
            anchorX: 0,
            anchorY: 0,
            x: this.layerMap.width/2,
            y: this.layerMap.height/2,
            scale:2
        });
        //this.layerMap.setPosition(cc.p(0,0));
        //this.layerMap.scale = 1;
        //scene.addChild(layerMap, 1);
        this.layerLobby = new LobbyLayer();
        this.layerLobby.setName('lobby');

        //scene.addChild(layerLobby, 2);
        //return scene;
        //this.layerLobby.reloadGui();

        this.layerCheat = new CheatLayer();
        this.layerCheat.setName('cheat');


        node.addChild(this.layerMap);

        node.addChild(this.layerCheat);
        node.addChild(this.layerLobby);



    },

    //swallowTouch: function(layerName){
    //    cc.eventManager.pauseTarget(this.getChildByName(layerName), true);
    //},

    onConnectFail:function()
    {
        this.layerCheat.logConnectionFail();
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