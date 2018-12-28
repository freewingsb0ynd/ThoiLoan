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

gv.CMD.CHEAT = 5001;
gv.CMD.ADD_BUILDING = 4001;
gv.CMD.STOP_UPGRADING = 4003;
gv.CMD.UPGRADE = 4004;
gv.CMD.UPGRADE_NOW = 4005;
gv.CMD.MOVE_BUILDING = 4002;



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

CmdSendCheat = fr.OutPacket.extend(
    {
        ctor:function()
        {
            this._super();
            this.initData(100);
            this.setCmdId(gv.CMD.CHEAT);
        },
        pack:function(typeCheat, amountCheat){
            this.packHeader();
            this.putInt(typeCheat);
            this.putInt(amountCheat);
            this.updateSize();
        }
    }
)

CmdSendBuild = fr.OutPacket.extend(
    {
        ctor:function()
        {
            this._super();
            this.initData(100);
            this.setCmdId(gv.CMD.ADD_BUILDING);
        },
        pack:function(posX, posY, type1, type2){
            this.packHeader();
            this.putInt(posX);
            this.putInt(posY);
            this.putInt(type1);
            this.putInt(type2);
            this.updateSize();
        }
    }
)

CmdSendUpgrade = fr.OutPacket.extend(
    {
        ctor:function()
        {
            this._super();
            this.initData(100);
            this.setCmdId(gv.CMD.UPGRADE);
        },
        pack:function(idBuilding){
            this.packHeader();
            this.putInt(idBuilding);
            this.updateSize();
        }
    }
)

CmdSendCancelBuild = fr.OutPacket.extend(
    {
        ctor:function()
        {
            this._super();
            this.initData(100);
            this.setCmdId(gv.CMD.STOP_UPGRADING);
        },
        pack:function(idBuilding){
            this.packHeader();
            this.putInt(idBuilding);
            this.updateSize();
        }
    }
)

CmdSendFinishBuild = fr.OutPacket.extend(
    {
        ctor:function()
        {
            this._super();
            this.initData(100);
            this.setCmdId(gv.CMD.UPGRADE_NOW);
        },
        pack:function(idBuilding){
            this.packHeader();
            this.putInt(idBuilding);

            this.updateSize();
        }
    }
)

CmdSendMoveCons = fr.OutPacket.extend(
    {
        ctor:function()
        {
            this._super();
            this.initData(100);
            this.setCmdId(gv.CMD.MOVE_BUILDING);
        },
        pack:function(idBuilding, posX, posY){
            this.packHeader();
            this.putInt(idBuilding);
            this.putInt(posX);
            this.putInt(posY);
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
            UserMap.getInstance().prepareGetMap();
            for (i = 1; i <= this.Objects_Number; i++) {
                this.object[i] = new BaseObject();
                this.object[i].id = this.getInt();
                this.object[i].type1 = this.getInt();

                // khong thu hoach, khong type1 7: ARMY_CAMP, BUILDER_HUT, CLAN_CASTLE, LABORATORY, TOWN_HALL
                if (this.object[i].type1 == gv.BUILDING.ARMY_CAMP || this.object[i].type1 == gv.BUILDING.BUILDER_HUT  || this.object[i].type1 == gv.BUILDING.CLAN_CASTLE || this.object[i].type1 == gv.BUILDING.LABORATORY || this.object[i].type1 == gv.BUILDING.TOWN_HALL) {
                    this.object[i].currentLevel = this.getInt();
                    this.object[i].nextLevel = this.getInt();
                    this.object[i].upgradeTime = this.getInt();
                    this.object[i].PosX = this.getInt();
                    this.object[i].PosY = this.getInt();

                };

                // khong thu hoach, co type1 8
                if (this.object[i].type1 == gv.BUILDING.BARRACK || this.object[i].type1 == gv.BUILDING.DEFENSE || this.object[i].type1 == gv.BUILDING.STORAGE) {
                    this.object[i].currentLevel = this.getInt();
                    this.object[i].nextLevel = this.getInt();
                    this.object[i].upgradeTime = this.getInt();
                    this.object[i].type2 = this.getInt();
                    this.object[i].PosX = this.getInt();
                    this.object[i].PosY = this.getInt();
                };

                // co thu hoach, co type1: 9
                if (this.object[i].type1 == gv.BUILDING.RESOURCE) {
                    this.object[i].currentLevel = this.getInt();
                    this.object[i].nextLevel = this.getInt();
                    this.object[i].upgradeTime = this.getInt();
                    this.object[i].type2 = this.getInt();
                    this.object[i].harvestTime = this.getInt();
                    this.object[i].PosX = this.getInt();
                    this.object[i].PosY = this.getInt();
                };

                // vat can
                if (this.object[i].type1 == gv.BUILDING.OBSTACLE) {
                    this.object[i].removeTime = this.getInt();
                    this.object[i].type2 = this.getInt();
                    this.object[i].PosX = this.getInt();
                    this.object[i].PosY = this.getInt();
                };

                this.object[i].setImage();

                // trungnq
                if(this.object[i].type1 == gv.BUILDING.OBSTACLE){
                    area = new Obstacle(this.object[i].id, this.object[i].type1, this.object[i].PosX, this.object[i].PosY, this.object[i].removeTime, this.object[i].type2);
                    UserMap.getInstance().addObject(area);
                }
                if(this.object[i].type1 == gv.BUILDING.BARRACK){
                    area = new Barrack(this.object[i].id, this.object[i].type1, this.object[i].PosX, this.object[i].PosY, this.object[i].currentLevel, this.object[i].nextLevel, this.object[i].upgradeTime, this.object[i].type2);
                    UserMap.getInstance().addObject(area);
                }
                if(this.object[i].type1 == gv.BUILDING.RESOURCE){
                    area = new Resource(this.object[i].id, this.object[i].type1, this.object[i].PosX, this.object[i].PosY, this.object[i].currentLevel, this.object[i].nextLevel, this.object[i].upgradeTime, this.object[i].type2, this.object[i].harvestTime);
                    UserMap.getInstance().addObject(area);
                }
                if(this.object[i].type1 == gv.BUILDING.DEFENSE || this.object[i].type1 == gv.BUILDING.STORAGE){
                    area = new Building2Type(this.object[i].id, this.object[i].type1, this.object[i].PosX, this.object[i].PosY, this.object[i].currentLevel, this.object[i].nextLevel, this.object[i].upgradeTime, this.object[i].type2);
                    UserMap.getInstance().addObject(area);
                }
                if(this.object[i].type1 == gv.BUILDING.LABORATORY){
                    area = new Laboratory(this.object[i].id, this.object[i].type1, this.object[i].PosX, this.object[i].PosY, this.object[i].currentLevel, this.object[i].nextLevel, this.object[i].upgradeTime);
                    UserMap.getInstance().addObject(area);
                }
                if(this.object[i].type1 == gv.BUILDING.ARMY_CAMP || this.object[i].type1 == gv.BUILDING.BUILDER_HUT  || this.object[i].type1 == gv.BUILDING.CLAN_CASTLE || this.object[i].type1 == gv.BUILDING.TOWN_HALL){
                    area = new Building(this.object[i].id, this.object[i].type1, this.object[i].PosX, this.object[i].PosY, this.object[i].currentLevel, this.object[i].nextLevel, this.object[i].upgradeTime);
                    UserMap.getInstance().addObject(area);
                }
            }
            UserMap.getInstance().isFinishLoadMap  = true;
        }
    }
);

testnetwork.packetMap[gv.CMD.CHEAT] = fr.InPacket.extend(
    {
        ctor:function()
        {
            this._super();
        },
        readData:function(){
            this.typeCheat = this.getInt();
            this.amountAfterCheated = this.getInt();

        }
    }
);

testnetwork.packetMap[gv.CMD.ADD_BUILDING] = fr.InPacket.extend(
    {
        ctor:function()
        {
            this._super();
        },
        readData:function(){
            this.status = this.getInt();
            if (this.status == 0) this.idBuilding = this.getInt();

        }
    }
);

testnetwork.packetMap[gv.CMD.UPGRADE] = fr.InPacket.extend(
    {
        ctor:function()
        {
            this._super();
        },
        readData:function(){
            this.status = this.getInt();
        }
    }
);

testnetwork.packetMap[gv.CMD.STOP_UPGRADING] = fr.InPacket.extend(
    {
        ctor:function()
        {
            this._super();
        },
        readData:function(){
            this.status = this.getInt();
        }
    }
);

testnetwork.packetMap[gv.CMD.UPGRADE_NOW] = fr.InPacket.extend(
    {
        ctor:function()
        {
            this._super();
        },
        readData:function(){
            this.status = this.getInt();
        }
    }
);

testnetwork.packetMap[gv.CMD.MOVE_BUILDING] = fr.InPacket.extend(
    {
        ctor:function()
        {
            this._super();
        },
        readData:function(){
            this.status = this.getInt();
        }
    }
);



