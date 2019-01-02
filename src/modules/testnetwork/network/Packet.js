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
            this.serverTime = this.getInt();
            this.User_id = this.getInt();
            this.nAreas = this.getInt();
            TimeManager.getInstance().updateServerTime(this.serverTime);
            UserMap.getInstance().prepareGetMap();
            for (var i = 1; i <= this.nAreas; i++) {
                _posX = this.getInt();
                _posY = this.getInt();
                _id = this.getInt();
                _type1 = this.getInt();
                console.log("next obj :" + _posX + " " + _posY + " " + _id + " " + _type1);
                if(_type1 == gv.BUILDING.OBSTACLE){
                    _cleanMoment = this.getInt();
                    _obstacleType =  this.getInt();
                    obs = new Obstacle(_id, _posX, _posY, _cleanMoment, _obstacleType);
                    UserMap.getInstance().addObject(obs);
                }   else    {
                    _currentLevel = this.getInt();
                    _upgradingLevel = this.getInt();
                    _upgradedMoment = this.getInt();
                    switch (_type1){
                        case gv.BUILDING.ARMY_CAMP:
                            armyCamp = new ArmyCamp(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
                            UserMap.getInstance().addObject(armyCamp);
                            break;
                        case gv.BUILDING.BUILDER_HUT:
                            builderHut = new BuilderHut(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
                            UserMap.getInstance().addObject(builderHut);
                            break;
                        case gv.BUILDING.TOWN_HALL:
                            townHall = new TownHall(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
                            UserMap.getInstance().addObject(townHall);
                            break;
                        case gv.BUILDING.LABORATORY:
                            laboratory = new Laboratory(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
                            UserMap.getInstance().addObject(laboratory);
                            break;
                        case gv.BUILDING.DEFENSE:
                            _type2 = this.getInt();
                            switch(_type2){
                                case 1:
                                    cannon = new Cannon(_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
                                    UserMap.getInstance().addObject(cannon);
                                    break;
                                case 2:
                                    archerTower = new ArcherTower(_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
                                    UserMap.getInstance().addObject(archerTower);
                                    break;
                                case 3:
                                    mortar = new Mortar(_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
                                    UserMap.getInstance().addObject(mortar);
                                    break;
                                case 4:
                                    wall = new Wall(_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
                                    UserMap.getInstance().addObject(wall);
                                    break;
                            }
                            break;
                        case gv.BUILDING.STORAGE:
                            _type2 = this.getInt();
                            switch (_type2){
                                case gv.RESOURCE_TYPE.GOLD:
                                    goldStorage = new GoldStorage(_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
                                    UserMap.getInstance().addObject(goldStorage);
                                    break;
                                case gv.RESOURCE_TYPE.ELIXIR:
                                    elixirStorage = new ElixirStorage(_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
                                    UserMap.getInstance().addObject(elixirStorage);
                                    break;
                                case gv.RESOURCE_TYPE.DARK_ELIXIR:
                                    darkElixirStorage = new DarkElixirStorage(_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
                                    UserMap.getInstance().addObject(darkElixirStorage);
                                    break;
                            }
                            break;
                        case gv.BUILDING.BARRACK:
                            _type2 = this.getInt();
                            switch (_type2){
                                case 1:
                                    barrackNormal = new BarrackNormal(_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
                                    UserMap.getInstance().addObject(barrackNormal);
                                    break;
                                case 2:
                                    barrackXmen = new BarrackXmen(_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
                                    UserMap.getInstance().addObject(barrackXmen);
                                    break;
                            }
                            break;
                            // resource building
                        case gv.BUILDING.RESOURCE:
                            _type2 = this.getInt();
                            _harvestMoment = this.getInt();
                            switch (_type2){
                                case gv.RESOURCE_TYPE.GOLD:
                                    goldMine = new GoldMine(_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, _harvestMoment);
                                    UserMap.getInstance().addObject(goldMine);
                                    break;
                                case gv.RESOURCE_TYPE.ELIXIR:
                                    elixirMine = new ElixirMine(_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
                                    UserMap.getInstance().addObject(elixirMine);
                                    break;
                                case gv.RESOURCE_TYPE.DARK_ELIXIR:
                                    darkElixirMine = new DarkElixirMine(_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
                                    UserMap.getInstance().addObject(darkElixirMine);
                                    break;
                            }
                            break;
                    }
                }
            }
            UserMap.getInstance().finishLoadMap();
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



