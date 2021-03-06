/**
 * Created by hoangelato on 12/24/2018.
 */

var CheatLayer = cc.Layer.extend({

    btnCheats:{},

    ctor: function(){
        this._super();

        var size = cc.winSize;

        this.tfAmountCheatNode = ccs.load('gui/TextField.json').node;
        this.tfAmountCheatNode.setPosition(size.width * 0.7, size.height * 0.95);

        var tfAmountCheatBg = this.tfAmountCheatNode.getChildByName('text_bg');
        tfAmountCheatBg.attr({
            scaleX: (size.width / 1280) * 0.5,
        });

        this.tfAmountCheat = this.tfAmountCheatNode.getChildByName('textField');

        //cc.log('12312312123');
        this.tfAmountCheat.setPlaceHolder("Input amount cheat...");
        this.tfAmountCheat.setString('1000');

        this.addChild(this.tfAmountCheatNode);

        this.btnCheatGold = gv.commonButton(32, 32, size.width * 0.84, size.height * 0.95 ,"G");
        this.addChild(this.btnCheatGold);
        this.btnCheatElixir = gv.commonButton(32, 32, size.width * 0.84, size.height * 0.86 ,"E");
        this.addChild(this.btnCheatElixir);
        this.btnCheatDarkElixir = gv.commonButton(32, 32, size.width * 0.84, size.height * 0.77 ,"D");
        this.addChild(this.btnCheatDarkElixir);
        this.btnCheatGCoin = gv.commonButton(32, 32, size.width * 0.84, size.height * 0.68 ,"C");
        this.addChild(this.btnCheatGCoin);

        this.btnCheatGold.addClickEventListener(this.onSelectCheatGold.bind(this));
        this.btnCheatElixir.addClickEventListener(this.onSelectCheatElixir.bind(this));
        this.btnCheatDarkElixir.addClickEventListener(this.onSelectCheatDarkE.bind(this));
        this.btnCheatGCoin.addClickEventListener(this.onSelectCheatGCoin.bind(this));


        this.activeCheatButtons = false;
        this.tfAmountCheatNode.setVisible(this.activeCheatButtons);
        this.btnCheatGold.setVisible(this.activeCheatButtons);
        this.btnCheatElixir.setVisible(this.activeCheatButtons);
        this.btnCheatDarkElixir.setVisible(this.activeCheatButtons);
        this.btnCheatGCoin.setVisible(this.activeCheatButtons);

        this.lblLog = gv.commonText(fr.Localization.text("..."), size.width*0.5, size.height*0.8);
        this.addChild(this.lblLog);


        this.tfArgBuildNode = ccs.load('gui/TextField.json').node;
        this.tfArgBuildNode.setPosition(size.width * 0.2, size.height * 0.35);

        var tfArgBuildBg = this.tfArgBuildNode.getChildByName('text_bg');
        tfArgBuildBg.attr({
            scaleX: (size.width / 1280) * 0.7,
            scaleY: (size.height / 720),
        });

        this.tfArgBuild = this.tfArgBuildNode.getChildByName('textField');
        this.tfArgBuild.setPlaceHolder("Input args build...");
        this.addChild(this.tfArgBuildNode);

        //this.tfArgBuild.setTextAreaSize(new cc.size(100,64));
        //this.tfArgBuild.setString('1000');
        var btnBuild = gv.commonButton(80, 32, size.width * 0.4, size.height * 0.35 ,"Build");
        this.addChild(btnBuild);

        btnBuild.addClickEventListener(this.onSelectBuild.bind(this));

        var btnMoveConstruction = gv.commonButton(80, 32, size.width * 0.5, size.height * 0.35 ,"Move");
        this.addChild(btnMoveConstruction);

        btnMoveConstruction.addClickEventListener(this.onSelectMove.bind(this));

        this.tfArgIDBuildNode = ccs.load('gui/TextField.json').node;
        this.tfArgIDBuildNode.setPosition(size.width * 0.2, size.height * 0.25);

        var tfArgIDBuildBg = this.tfArgIDBuildNode.getChildByName('text_bg');
        tfArgIDBuildBg.attr({
            scaleX: (size.width / 1280) * 0.7,
            scaleY: (size.height / 720),
        });

        this.tfArgIDBuild = this.tfArgIDBuildNode.getChildByName('textField');
        this.tfArgIDBuild.setPlaceHolder("Input id building...");
        this.addChild(this.tfArgIDBuildNode);


        //this.tfArgBuild.setTextAreaSize(new cc.size(100,64));
        //this.tfArgBuild.setString('1000');
        var btnUpgrade = gv.commonButton(80, 32, size.width * 0.4, size.height * 0.25 ,"Upgrade");
        this.addChild(btnUpgrade);
        btnUpgrade.addClickEventListener(this.onSelectUpgrade.bind(this));

        var btnCancelBuild = gv.commonButton(80, 32, size.width * 0.5, size.height * 0.25 ,"Cancel");
        this.addChild(btnCancelBuild);
        btnCancelBuild.addClickEventListener(this.onSelectCancel.bind(this));

        var btnFinishNow = gv.commonButton(80, 32, size.width * 0.6, size.height * 0.25 ,"Finish");
        this.addChild(btnFinishNow);
        btnFinishNow.addClickEventListener(this.onSelectFinish.bind(this));

        this.btnCheat = gv.commonButton(80, 32, cc.winSize.width * 0.95, cc.winSize.height * 0.6, "Cheat");
        this.addChild(this.btnCheat);
        this.btnCheat.addClickEventListener(this.onSelectCheat.bind(this));


        this.tfArgIDBuildNode.setVisible(false);
        this.tfArgBuildNode.setVisible(false);
        btnCancelBuild.setVisible(false);
        btnFinishNow.setVisible(false);
        btnUpgrade.setVisible(false);
        btnBuild.setVisible(false);
        btnMoveConstruction.setVisible(false);


    },

    onSelectCheat: function(sender){
        this.activeCheatButtons = !this.activeCheatButtons;
        this.tfAmountCheatNode.setVisible(this.activeCheatButtons);
        this.btnCheatGold.setVisible(this.activeCheatButtons);
        this.btnCheatElixir.setVisible(this.activeCheatButtons);
        this.btnCheatDarkElixir.setVisible(this.activeCheatButtons);
        this.btnCheatGCoin.setVisible(this.activeCheatButtons);
    },

    onSelectCheatGold: function(sender){
        testnetwork.connector.sendCheatRq(gv.RESOURCE_TYPE.GOLD, Number(this.tfAmountCheat.getString()));
    },
    onSelectCheatElixir: function(sender){
        testnetwork.connector.sendCheatRq(gv.RESOURCE_TYPE.ELIXIR, Number(this.tfAmountCheat.getString()));
    },
    onSelectCheatDarkE: function(sender){
        testnetwork.connector.sendCheatRq(gv.RESOURCE_TYPE.DARK_ELIXIR, Number(this.tfAmountCheat.getString()));
    },
    onSelectCheatGCoin: function(sender){
        testnetwork.connector.sendCheatRq(gv.RESOURCE_TYPE.COIN, Number(this.tfAmountCheat.getString()));
    },

    onSelectBuild: function(sender){

        var args = this.tfArgBuild.getString().split(',');
        cc.log(args[0] + ", " + args[1] + ", " + args[2] + ", " + args[3]);
        UserMap.getInstance().addNewBuilding(convertNumberToStrType(Number(args[2]),Number(args[3])),{x: Number(args[0]), y: Number(args[1])})


        testnetwork.connector.sendBuildRq(args[0],args[1],args[2],args[3]);

    },

    onSelectUpgrade: function(sender){
        testnetwork.connector.sendUpgradeRq(Number(this.tfArgIDBuild.getString()));

    },

    onSelectCancel: function(sender){
        testnetwork.connector.sendCancelBuildRq(Number(this.tfArgIDBuild.getString()));

    },

    onSelectFinish: function(sender){
        //cc.log();
        testnetwork.connector.sendFinishBuildRq(Number(this.tfArgIDBuild.getString()));
        //cc.log('town hall lvl: ' + UserMap.getInstance().townHall.currentLevel);
    },

    onSelectMove: function(sender){
        //cc.log();
        var args = this.tfArgBuild.getString().split(',');
        //cc.log(args[0] + ", " + args[1] + ", " + args[2] + ", " + args[3]);

        testnetwork.connector.sendMoveConsRq(args[0],args[1],args[2]);


    },


    addBuildingResponse: function(status, idBuilding){
        //cc.log("ddddd")
        switch (status){
            case 0:
                this.lblLog.setString("Xay thanh cong, id: " + idBuilding);

                UserMap.getInstance().buildOK(idBuilding);
                break;
            case 1:
                this.lblLog.setString("Xay khong thanh cong, loi: Khong du tai nguyen");
                break;
            case 2:
                this.lblLog.setString("Xay khong thanh cong, loi: Khong con tho xay ranh");
                break;
            case 3:
                this.lblLog.setString("Xay khong thanh cong, loi: Vi tri khong thoa man");
                break;
            case 4:
                this.lblLog.setString("Xay khong thanh cong, loi: Vi pham gioi han nha chinh");
                break;
            case 5:
                this.lblLog.setString("Xay khong thanh cong, loi: Sai loai cong trinh ");
                break;
            case 6:
                this.lblLog.setString("Xay khong thanh cong, loi: Unknown");
                break;
        }


    },

    finishNowResponse: function(status){
        switch (status) {
            case 0:
                this.lblLog.setString("Xay nhanh thanh cong");
                break;
            case 1:
                this.lblLog.setString("Xay nhanh khong thanh cong, loi: Sai ID");
                break;
            case 2:
                this.lblLog.setString("Xay nhanh khong thanh cong, loi: Dang khong xay");
                break;
            case 3:
                this.lblLog.setString("Xay nhanh khong thanh cong, loi: Unknown");
                break;

        }
    },


    cancelBuildResponse: function(status){
        switch (status) {
            case 0:
                this.lblLog.setString("Huy xay/ nang cap thanh cong");
                break;
            case 1:
                this.lblLog.setString("Huy xay khong thanh cong, loi: Sai ID");
                break;
            case 2:
                this.lblLog.setString("Huy xay khong thanh cong, loi: Dang khong xay");
                break;
            case 3:
                this.lblLog.setString("Huy xay khong thanh cong, loi: Unknown");
                break;

        }
    },

    upgradeResponse: function(status){
        if(status == 0) this.lblLog.setString("Nang cap thanh cong");
        switch (status){
            case 0:
                this.lblLog.setString("Nang cap thanh cong");
                break;
            case 1:
                this.lblLog.setString("Nang cap khong thanh cong, loi: Sai ID");
                break;
            case 2:
                this.lblLog.setString("Nang cap khong thanh cong, loi: Da dang nang cap");
                break;
            case 3:
                this.lblLog.setString("Nang cap khong thanh cong, loi: Da max cap");
                break;
            case 4:
                this.lblLog.setString("Nang cap khong thanh cong, loi: Khong du tai nguyen");
                break;
            case 5:
                this.lblLog.setString("Nang cap khong thanh cong, loi: Khong co tho xay ranh");
                break;
            case 6:
                this.lblLog.setString("Nang cap khong thanh cong, loi: Cap nha chinh khong cho phep");
                break;
            case 7:
                this.lblLog.setString("Nang cap khong thanh cong, loi: Unknown");
                break;

        }
    },

    moveConstructionResponse: function(status){
        switch (status) {
            case 0:
                this.lblLog.setString("Di chuyen nha thanh cong");
                break;
            case 1:
                this.lblLog.setString("Di chuyen khong thanh cong, loi: Sai ID");
                break;
            case 2:
                this.lblLog.setString("Di chuyen khong thanh cong, loi: Sai vi tri");
                break;
            case 3:
                this.lblLog.setString("Di chuyen khong thanh cong, loi: Unknown");
                break;

        }
    },

    logConnectionFail: function(){
        this.lblLog.setString("Connect failed");
    }


})

