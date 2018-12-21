/**
 * Created by KienVN on 10/2/2017.
 */

gv.CMD = gv.CMD ||{};
gv.CMD.HAND_SHAKE = 0;
gv.CMD.USER_LOGIN = 1;

gv.CMD.USER_INFO = 1001;
gv.CMD.MOVE = 2001;


gv.CMD.USER_RESOURCE = 3002;
gv.CMD.USER_MAP = 3001;

gv.CMD.ARMY_CAMP = 1;
gv.CMD.BARRACK  = 2;
gv.CMD.BUILDER_HUT  = 3;
gv.CMD.CLAN_CASTLE  = 4;
gv.CMD.DEFENSE  = 5;
gv.CMD.LABORATORY  = 6;
gv.CMD.OBSTACLE  = 7;
gv.CMD.RESOURCE  = 8;
gv.CMD.STORAGE  = 9;
gv.CMD.TOWN_HALL  = 10;

testnetwork = testnetwork||{};
testnetwork.packetMap = {};

/** Outpacket */

//Handshake
CmdSendHandshake = fr.OutPacket.extend(
    {
        ctor:function()
        {
            this._super();
            this.initData(100);
            this.setControllerId(gv.CONTROLLER_ID.SPECIAL_CONTROLLER);
            this.setCmdId(gv.CMD.HAND_SHAKE);
        },
        putData:function(){
            //pack
            this.packHeader();
            //update
            this.updateSize();
        }
    }
)
CmdSendUserInfo = fr.OutPacket.extend(
    {
        ctor:function()
        {
            this._super();
            this.initData(100);
            this.setCmdId(gv.CMD.USER_INFO);
        },
        pack:function(){
            this.packHeader();
            this.updateSize();
        }
    }
)

CmdSendLogin = fr.OutPacket.extend(
    {
        ctor:function()
        {
            this._super();
            this.initData(100);
            this.setCmdId(gv.CMD.USER_LOGIN);
        },
        pack:function(_id, user){
            this.packHeader();
            this.putInt(_id);
            this.putString(user);
            this.updateSize();
        }
    }
)

CmdSendMove = fr.OutPacket.extend(
    {
        ctor:function()
        {
            this._super();
            this.initData(100);
            this.setCmdId(gv.CMD.MOVE);
        },
        pack:function(direction){
            this.packHeader();
            this.putShort(direction);
            this.updateSize();
        }
    }
)

CmdSendUserResource = fr.OutPacket.extend(
    {
        ctor:function()
        {
            this._super();
            this.initData(100);
            this.setCmdId(gv.CMD.USER_RESOURCE);
        },
        pack:function(){
            this.packHeader();

            this.updateSize();
        }
    }
)

// Sent request for user map
CmdSendUserMap = fr.OutPacket.extend(
    {
        ctor:function()
        {
            this._super();
            this.initData(100);
            this.setCmdId(gv.CMD.USER_MAP);
        },
        pack:function(){
            this.packHeader();

            this.updateSize();
        }
    }
)

/**
 * InPacket
 */

//Handshake
testnetwork.packetMap[gv.CMD.HAND_SHAKE] = fr.InPacket.extend(
    {
        ctor:function()
        {
            this._super();
        },
        readData:function(){
            this.token = this.getString();
        }
    }
);

testnetwork.packetMap[gv.CMD.USER_LOGIN] = fr.InPacket.extend(
    {
        ctor:function()
        {
            this._super();
        },
        readData:function(){
        }
    }
);


testnetwork.packetMap[gv.CMD.USER_INFO] = fr.InPacket.extend(
    {
        ctor:function()
        {
            this._super();
        },
        readData:function(){
            //this.token = this.getInt();
            //this.name = this.getString();
            this.x = this.getInt();
            this.y = this.getInt();
        }
    }
);

testnetwork.packetMap[gv.CMD.MOVE] = fr.InPacket.extend(
    {
        ctor:function()
        {
            this._super();
        },
        readData:function(){
            this.x = this.getInt();
            this.y = this.getInt();
        }
    }
);

testnetwork.packetMap[gv.CMD.USER_RESOURCE] = fr.InPacket.extend(
    {
        ctor:function()
        {
            this._super();
        },
        readData:function(){
            //this.token = this.getInt();
            //this.name = this.getString();
            //this.x = this.getInt();
            //this.y = this.getInt();

            //currentByteBuffer.putInt(id);
            ////currentByteBuffer.put ... username;
            //currentByteBuffer.putInt(levelPoint);
            //currentByteBuffer.putInt(exp);
            //currentByteBuffer.putInt(trophy);
            //currentByteBuffer.putInt(gold);
            //currentByteBuffer.putInt(elixir);
            //currentByteBuffer.putInt(darkElixir);
            //currentByteBuffer.putInt(shieldTime);
            //currentByteBuffer.putInt(coin);

            this._id = this.getInt();
            this.levelPoint = this.getInt();
            this.usrExp = this.getInt();
            this.trophy = this.getInt();
            this.gold = this.getInt();
            this.elixir = this.getInt();
            this.darkElixir = this.getInt();
            this.shieldTime = this.getInt();
            this.coin = this.getInt();



        }
    }
);

testnetwork.packetMap[gv.CMD.USER_MAP] = fr.InPacket.extend(
    {
        ctor: function () {
            this._super();
        },
        readData: function () {
            this.User_id = this.getInt();
            this.Objects_Number = this.getInt();

           this.object = new Array(1000);

            var i;
            for (i = 1; i <= this.Objects_Number; i++) {
                this.object[i] = new Object();
                this.object[i]._id = this.getInt();
                this.object[i].type = this.getInt();

                // khong thu hoach, khong type 7: ARMY_CAMP, BUILDER_HUT, CLAN_CASTLE, LABORATORY, TOWN_HALL
                if (this.object[i].type == gv.CMD.ARMY_CAM || this.object[i].type == gv.CMD.BUILDER_HUT  || this.object[i].type == gv.CMD.CLAN_CASTLE || this.object[i].type == gv.CMD.LABORATORY || this.object[i].type == gv.CMD.TOWN_HALL) {
                    this.object[i].currentLevel = this.getInt();
                    this.object[i].nextLevel = this.getInt();
                    this.object[i].upgradeTime = this.getInt();
                    this.object[i].PosX = this.getInt();
                    this.object[i].PosY = this.getInt();
                };

                // khong thu hoach, co type 8
                if (this.object[i].type == gv.CMD.BARRACK || this.object[i].type == gv.CMD.DEFENSE || this.object[i].type == gv.CMD.STORAGE) {
                    this.object[i].currentLevel = this.getInt();
                    this.object[i].nextLevel = this.getInt();
                    this.object[i].upgradeTime = this.getInt();
                    this.object[i].type2 = this.getInt();
                    this.object[i].PosX = this.getInt();
                    this.object[i].PosY = this.getInt();
                };

                // co thu hoach, co type: 9
                if (this.object[i].type == gv.CMD.RESOURCE) {
                    this.object[i].currentLevel = this.getInt();
                    this.object[i].nextLevel = this.getInt();
                    this.object[i].upgradeTime = this.getInt();
                    this.object[i].type2 = this.getInt();
                    this.object[i].harvestTime = this.getInt();
                    this.object[i].PosX = this.getInt();
                    this.object[i].PosY = this.getInt();
                };

                // vat can
                if (this.object[i].type == gv.CMD.OBSTACLE) {
                    this.object[i].removeTime = this.getInt();
                    this.object[i].type2 = this.getInt();
                    this.object[i].PosX = this.getInt();
                    this.object[i].PosY = this.getInt();
                };



            }
        }
    }
);




