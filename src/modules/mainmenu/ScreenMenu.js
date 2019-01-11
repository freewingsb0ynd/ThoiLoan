/**
 * Created by GSN on 7/6/2015.
 */
res = res || {};
res.LOGIN_SCREEN = './res/gui/Art/LoginGui/loading.png';
gv = gv || {};
gv.RESOLUTION = {
    SCALE_X : cc.winSize.width / 1280,
    SCALE_Y : cc.winSize.height / 720
};


var ScreenMenu = cc.Layer.extend({
    _itemMenu:null,
    _beginPos:0,
    isMouseDown:false,


    ctor:function() {
        //cc.log("heloo");
        this._super();
        var size = cc.director.getVisibleSize();

        var yBtn = 7*size.height/12;
        //
        //var btnNetwork = gv.commonButton(200, 64, cc.winSize.width/4, yBtn,"Network");
        //this.addChild(btnNetwork);
        //btnNetwork.addClickEventListener(this.onSelectNetwork.bind(this));
        //
        //var btnLocalization = gv.commonButton(200, 64, cc.winSize.width/2, yBtn,"Localize");
        //this.addChild(btnLocalization);
        //btnLocalization.addClickEventListener(this.onSelectLocalization.bind(this));
        //
        //var btnDragonbones = gv.commonButton(200, 64, 3*cc.winSize.width/4, yBtn,"Dragonbone");
        //this.addChild(btnDragonbones);
        //btnDragonbones.addClickEventListener(this.onSelectDragonbones.bind(this));
        //


        var lobbyBg = new cc.Sprite('res/gui/Art/LoginGui/loading.jpg');
        lobbyBg.attr({
            anchorX: 0,
            anchorY: 0,
            scaleX: size.width/lobbyBg.getBoundingBox().width * gv.RESOLUTION.SCALE_X,
            scaleY: size.height/lobbyBg.getBoundingBox().height * gv.RESOLUTION.SCALE_Y
        });
        this.addChild(lobbyBg);

        this.tfCustom = ccs.load('gui/TextField.json').node;

        this.tfCustom.setPosition(size.width /4, size.height/3);
        var tfCustomBg = this.tfCustom.getChildByName('text_bg');
        //var nativeScaleX = tfCustomBg.getBoundingBox().width / 1280;

        tfCustomBg.attr({
            scaleX: (size.width/1280) * 0.5 * gv.RESOLUTION.SCALE_X
        });

        this.tfID = this.tfCustom.getChildByName('textField');

        this.tfID.setPlaceHolder("Your ID...");
        //this.tfID.setCursorEnabled(true);

        this.addChild(this.tfCustom);


        var btnLobby = gv.commonButton(200, 64, size.width/2, size.height/3 ,"Login");
        this.addChild(btnLobby);
        btnLobby.addClickEventListener(this.onSelectLobby.bind(this));

    },
    onEnter:function(){
        this._super();
    },
    onSelectNetwork:function(sender)
    {
        fr.view(ScreenNetwork);
    },
    onSelectLocalization:function(sender)
    {
        fr.view(ScreenLocalization);
    },
    onSelectDragonbones:function(sender)
    {
        fr.view(ScreenDragonbones);
    },
    onSelectLobby:function(sender)
    {
        testnetwork.connector._id = Number(this.tfID.getString());
        testnetwork.connector._userName = "Fresher " + this.tfID.getString();

        fr.view(ScreenGame);
    },

});