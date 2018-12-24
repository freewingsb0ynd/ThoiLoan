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
        this.initGame();
    },


    loadGui:function()
    {
        //this.removeAllChildren();
        var size = cc.winSize;

        var btnBack = gv.commonButton(100, 64, size.width * 0.9, size.height * 0.4,"Back");
        this.addChild(btnBack);
        btnBack.addClickEventListener(this.onSelectBack.bind(this));

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
        this.layerMap = new MapLayer();
        //scene.addChild(layerMap, 1);
        this.layerLobby = new LobbyLayer();
        //scene.addChild(layerLobby, 2);
        //return scene;

        this.layerCheat = new CheatLayer();

        node.addChild(this.layerMap);

        node.addChild(this.layerCheat);
        node.addChild(this.layerLobby);



    },


    onSelectBack:function(sender)
    {
        fr.view(ScreenMenu);
    }

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