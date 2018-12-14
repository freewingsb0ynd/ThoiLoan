/**
 * Created by CPU11635_LOCAL on 12/14/2018.
 */
var MapLayer = cc.Layer.extend({
    _itemMenu:null,
    _beginPos:0,
    isMouseDown:false,

    ctor:function() {
        this._super();
        this.loadGui();

    },


    loadGui:function()
    {
        //this.removeAllChildren();
        var size = cc.winSize;

        var background = cc.Sprite("res/gui/HelloWorld.png");
        background.setPosition(cc.p(size.width * 0.5, size.height * 0.5));
        this.addChild(background);
    },


});