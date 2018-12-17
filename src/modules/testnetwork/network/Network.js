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
        this._userName = "hoangnh9";
        this._id = 877;

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
                cc.log("id: " + packet._id.toString());
                cc.log("levelPoint: " + packet.levelPoint.toString());
                cc.log("exp: " + packet.usrExp.toString());
                cc.log("trophy: " + packet.trophy.toString());
                cc.log("gold: " + packet.gold.toString());
                cc.log("elix: " + packet.elixir.toString());
                cc.log("darkE: " + packet.darkElixir.toString());
                cc.log("shield: " + packet.shieldTime.toString());
                cc.log("gCoin: " + packet.coin.toString());

                fr.getCurrentScreen().layerLobby.reloadGui(packet.gold, packet.elixir, packet.darkElixir, packet.coin);
                //fr.getCurrentScreen().updateMove(packet.x, packet.y);
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
    }
});



