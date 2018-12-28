/**
 * Created by GSN on 7/6/2015.
 */

var ScreenMenu = cc.Layer.extend({
    _itemMenu:null,
    _beginPos:0,
    isMouseDown:false,


    ctor:function() {
        cc.log("heloo");
        this._super();
        var size = cc.director.getVisibleSize();

        var yBtn = 7*size.height/12;

        var btnNetwork = gv.commonButton(200, 64, cc.winSize.width/4, yBtn,"Network");
        this.addChild(btnNetwork);
        btnNetwork.addClickEventListener(this.onSelectNetwork.bind(this));

        var btnLocalization = gv.commonButton(200, 64, cc.winSize.width/2, yBtn,"Localize");
        this.addChild(btnLocalization);
        btnLocalization.addClickEventListener(this.onSelectLocalization.bind(this));

        var btnDragonbones = gv.commonButton(200, 64, 3*cc.winSize.width/4, yBtn,"Dragonbone");
        this.addChild(btnDragonbones);
        btnDragonbones.addClickEventListener(this.onSelectDragonbones.bind(this));

        this.tfID = ccui.TextField();
        this.tfID.setPosition(size.width/4, size.height/3);
        this.tfID.setPlaceHolder("Your ID...")
        this.addChild(this.tfID);
        //btnNetwork.addClickEventListener(this.onSelectNetwork.bind(this));

        var btnLobby = gv.commonButton(200, 64, size.width/2, size.height/3 ,"Lobby");
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
        //testnetwork.connector._id = 1111;
    },

});