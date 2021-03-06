/**
 * Created by KienVN on 10/2/2017.
 */

var gv = gv||{};
var testnetwork = testnetwork||{};

testnetwork.Connector = cc.Class.extend({
    ctor:function(gameClient)
    {
        this.gameClient = gameClient;
        gameClient.packetFactory.addPacketMap(testnetwork.packetMap);
        gameClient.receivePacketSignal.add(this.onReceivedPacket, this);
        this._userName = "trungnq";
        this._id = 192;

    },
    onReceivedPacket:function(cmd, packet)
    {
        cc.log("onReceivedPacket:", cmd);
        switch (cmd)
        {
            case gv.CMD.HAND_SHAKE:
                this.sendLoginRequest();
                break;
            case gv.CMD.USER_LOGIN:
                //this.sendGetUserInfo();
                this.sendGetUserMap();
                //fr.getCurrentScreen().onFinishLogin();
                break;
            case gv.CMD.USER_INFO:
                fr.getCurrentScreen().onUserInfo(packet.name, packet.x, packet.y);
                break;
            case gv.CMD.MOVE:
                cc.log("MOVE:", packet.x, packet.y);
                fr.getCurrentScreen().updateMove(packet.x, packet.y);
                break;

            case gv.CMD.USER_RESOURCE:
                /*cc.log("id: " + packet._id.toString());
                cc.log("levelPoint: " + packet.levelPoint.toString());
                cc.log("exp: " + packet.usrExp.toString());
                cc.log("trophy: " + packet.trophy.toString());
                cc.log("gold: " + packet.gold.toString());
                cc.log("elix: " + packet.elixir.toString());
                cc.log("darkE: " + packet.darkElixir.toString());
                cc.log("shield: " + packet.shieldTime.toString());
                cc.log("gCoin: " + packet.coin.toString());*/
                UserData.getInstance().updateData(packet);
                //fr.getCurrentScreen().layerLobby.reloadGui();
                //fr.getCurrentScreen().updateMove(packet.x, packet.y);
                break;

            // process User_Map data
            case gv.CMD.USER_MAP:
                cc.log("User id: " + packet.User_id.toString());
                cc.log("Objects Number: " + packet.nAreas.toString());

                //for (var i = 1; i <= packet.nAreas; i++) {
                //    cc.log("Object id: " + packet.object[i].id.toString());
                //    cc.log("Type: " + packet.object[i].type1.toString());
                //    cc.log("Image Link: " + packet.object[i].Imagelink.toString());
                //
                //}
                // get server time from server and update
                // TimeManager.getInstance.updateServerTime(serverTime);
                cc.log("working builder / total builder :" +UserMap.getInstance().getWorkingBuilder() + " / " +UserMap.getInstance().getTotalBuilder());
                cc.log(UserMap.getInstance().numberWorkingBuilder)
                cc.log("capacity Gold :" + UserMap.getInstance().getCapacity(1));
                // fr.getCurrentScreen().layerMap().reloadGui();
                this.sendGetUserResRq();
                break;


            case gv.CMD.CHEAT:

                cc.log("typeCheat: " + packet.typeCheat);
                cc.log("amountAfterCheated: " + packet.amountAfterCheated);

                UserData.getInstance().updateCheat(packet);



                fr.getCurrentScreen().layerLobby.reloadGui();
                //fr.getCurrentScreen().updateMove(packet.x, packet.y);
                break;

            case gv.CMD.ADD_BUILDING:

                cc.log("status: " + packet.status);
                cc.log("id building: " + packet.idBuilding);


                fr.getCurrentScreen().layerCheat.addBuildingResponse(packet.status, packet.idBuilding);
                //fr.getCurrentScreen().updateMove(packet.x, packet.y);
                break;

            case gv.CMD.UPGRADE:
                fr.getCurrentScreen().layerCheat.upgradeResponse(packet.status);
                break;

            case gv.CMD.STOP_UPGRADING:
                fr.getCurrentScreen().layerCheat.cancelBuildResponse(packet.status);
                break;

            case gv.CMD.UPGRADE_NOW:
                fr.getCurrentScreen().layerCheat.finishNowResponse(packet.status);
                break;

            case gv.CMD.MOVE_BUILDING:
                fr.getCurrentScreen().layerCheat.moveConstructionResponse(packet.status);
                break;

        }
    },
    sendGetUserInfo:function()
    {
        cc.log("sendGetUserInfo");
        var pk = this.gameClient.getOutPacket(CmdSendUserInfo);
        pk.pack();
        this.gameClient.sendPacket(pk);
    },
    sendLoginRequest: function () {
        cc.log("sendLoginRequest");
        var pk = this.gameClient.getOutPacket(CmdSendLogin);
        pk.pack(this._id, this._userName);
        this.gameClient.sendPacket(pk);
    },
    sendMove:function(direction){
        cc.log("SendMove:" + direction);
        var pk = this.gameClient.getOutPacket(CmdSendMove);
        pk.pack(direction);
        this.gameClient.sendPacket(pk);
    },

    sendGetUserResRq:function(){
        cc.log("Get Usr Res" + 3002);
        var pk = this.gameClient.getOutPacket(CmdSendUserResource);
        pk.pack();
        this.gameClient.sendPacket(pk);
    },

    sendGetUserMap:function(){
        cc.log("Get Usr Map: " + 3001);
        var pk = this.gameClient.getOutPacket(CmdSendUserMap);
        pk.pack();
        this.gameClient.sendPacket(pk);
    },


    sendCheatRq:function(typeCheat, amountCheat){
        cc.log("Sent Cheat Rq: " + typeCheat + " " + amountCheat);
        var pk = this.gameClient.getOutPacket(CmdSendCheat);
        pk.pack(typeCheat, amountCheat);
        this.gameClient.sendPacket(pk);
    },

    sendBuildRq:function(posX, posY, type1, type2){
        //cc.log("Sent Build Rq: " + typeCheat + " " + amountCheat);
        var pk = this.gameClient.getOutPacket(CmdSendBuild);
        pk.pack(posX, posY, type1, type2);
        this.gameClient.sendPacket(pk);
    },

    sendUpgradeRq:function(idBuilding){

        var pk = this.gameClient.getOutPacket(CmdSendUpgrade);
        pk.pack(idBuilding);
        this.gameClient.sendPacket(pk);
    },

    sendCancelBuildRq:function(idBuilding){

        var pk = this.gameClient.getOutPacket(CmdSendCancelBuild);
        pk.pack(idBuilding);
        this.gameClient.sendPacket(pk);
    },

    sendFinishBuildRq:function(idBuilding){

        var pk = this.gameClient.getOutPacket(CmdSendFinishBuild);
        pk.pack(idBuilding);
        this.gameClient.sendPacket(pk);
    },

    sendMoveConsRq:function(idBuilding, posX, posY){

        var pk = this.gameClient.getOutPacket(CmdSendMoveCons);
        pk.pack(idBuilding, posX, posY);
        this.gameClient.sendPacket(pk);
    },


});



