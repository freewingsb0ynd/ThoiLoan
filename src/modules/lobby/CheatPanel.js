/**
 * Created by hoangelato on 12/24/2018.
 */

var CheatLayer = cc.Layer.extend({

    btnCheats:{},

    ctor: function(){
        this._super();

        var size = cc.winSize;

        this.tfAmountCheat = ccui.TextField();
        this.tfAmountCheat.setPosition(size.width * 0.7, size.height * 0.95);
        this.tfAmountCheat.setPlaceHolder("Input amount cheat...");
        this.addChild(this.tfAmountCheat);
        this.tfAmountCheat.setString('1000');

        //btnNetwork.addClickEventListener(this.onSelectNetwork.bind(this));

        var btnCheatGold = gv.commonButton(80, 32, size.width * 0.8, size.height * 0.95 ,"Gold");
        this.addChild(btnCheatGold);
        var btnCheatElixir = gv.commonButton(80, 32, size.width * 0.8, size.height * 0.86 ,"Elixir");
        this.addChild(btnCheatElixir);
        var btnCheatDarkElixir = gv.commonButton(80, 32, size.width * 0.8, size.height * 0.77 ,"Dark");
        this.addChild(btnCheatDarkElixir);
        var btnCheatGCoin = gv.commonButton(80, 32, size.width * 0.8, size.height * 0.68 ,"Coin");
        this.addChild(btnCheatGCoin);

        //this.btnCheats.add(btnCheatGold);
        //this.btnCheats.add(btnCheatElixir);
        //this.btnCheats.add(btnCheatDarkElixir);
        //this.btnCheats.add(btnCheatGCoin);

        //for ()

        btnCheatGold.addClickEventListener(this.onSelectCheatGold.bind(this));
        btnCheatElixir.addClickEventListener(this.onSelectCheatElixir.bind(this));
        btnCheatDarkElixir.addClickEventListener(this.onSelectCheatDarkE.bind(this));
        btnCheatGCoin.addClickEventListener(this.onSelectCheatGCoin.bind(this));



        this.lblLog = gv.commonText(fr.Localization.text("..."), size.width*0.4, size.height*0.05);
        this.addChild(this.lblLog);




        this.tfArgBuild = ccui.TextField();

        this.tfArgBuild.setPosition(size.width * 0.3, size.height * 0.3);
        this.tfArgBuild.setPlaceHolder("Input args build...");
        this.addChild(this.tfArgBuild);

        //this.tfArgBuild.setTextAreaSize(new cc.size(100,64));
        //this.tfArgBuild.setString('1000');
        var btnBuild = gv.commonButton(80, 32, size.width * 0.4, size.height * 0.3 ,"Build");
        this.addChild(btnBuild);

        btnBuild.addClickEventListener(this.onSelectBuild.bind(this));


        this.tfArgIDBuild = ccui.TextField();

        this.tfArgIDBuild.setPosition(size.width * 0.3, size.height * 0.25);
        this.tfArgIDBuild.setPlaceHolder("Input id building...");
        this.addChild(this.tfArgIDBuild);

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








    },

    onSelectCheatGold: function(sender){
        testnetwork.connector.sendCheatRq(game.cheat.gold, Number(this.tfAmountCheat.getString()));
    },
    onSelectCheatElixir: function(sender){
        testnetwork.connector.sendCheatRq(game.cheat.elixir, Number(this.tfAmountCheat.getString()));
    },
    onSelectCheatDarkE: function(sender){
        testnetwork.connector.sendCheatRq(game.cheat.darkElixir, Number(this.tfAmountCheat.getString()));
    },
    onSelectCheatGCoin: function(sender){
        testnetwork.connector.sendCheatRq(game.cheat.gCoin, Number(this.tfAmountCheat.getString()));
    },

    onSelectBuild: function(sender){


        var args = this.tfArgBuild.getString().split(',');
        cc.log(args[0] + ", " + args[1] + ", " + args[2] + ", " + args[3]);

        testnetwork.connector.sendBuildRq(args[0],args[1],args[2],args[3]);

    },

    onSelectUpgrade: function(sender){
        testnetwork.connector.sendUpgradeRq(Number(this.tfArgIDBuild.getString()));

    },

    onSelectCancel: function(sender){
        testnetwork.connector.sendCancelBuildRq(Number(this.tfArgIDBuild.getString()));

    },

    onSelectFinish: function(sender){
        cc.log();
        testnetwork.connector.sendFinishBuildRq(Number(this.tfArgIDBuild.getString()));

    },

    addBuildingResponse: function(status, idBuilding){
        //cc.log("ddddd")
        switch (status){
            case 0:
                this.lblLog.setString("Xay thanh cong, id: " + idBuilding);
                break;
            case 1:
                this.lblLog.setString("Khong du tai nguyen");
                break;
            case 2:
                this.lblLog.setString("Khong con tho xay ranh");
                break;
            case 3:
                this.lblLog.setString("Vi tri khong thoa man");
                break;
            case 4:
                this.lblLog.setString("Vi pham gioi han nha chinh");
                break;
            case 5:
                this.lblLog.setString("Sai loai cong trinh ");
                break;
            case 6:
                this.lblLog.setString("Unknown");
                break;
        }
    },

    finishNowResponse: function(status){
        if(status == 0) this.lblLog.setString("Xay nhanh thanh cong");
    },


    cancelBuildResponse: function(status){
        if(status == 0) this.lblLog.setString("Huy xay/ nang cap thanh cong");
    },

    upgradeResponse: function(status){
        if(status == 0) this.lblLog.setString("Nang cap thanh cong");
    },




})

