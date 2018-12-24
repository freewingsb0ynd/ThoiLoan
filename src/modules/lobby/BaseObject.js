/**
 * Created by CPU11643_LOCAL on 12/24/2018.
 */

gv.BUILDING = {}

gv.BUILDING.ARMY_CAMP = 1;
gv.BUILDING.BARRACK  = 2;
gv.BUILDING.BUILDER_HUT  = 3;
gv.BUILDING.CLAN_CASTLE  = 4;
gv.BUILDING.DEFENSE  = 5;
gv.BUILDING.LABORATORY  = 6;
gv.BUILDING.OBSTACLE  = 7;
gv.BUILDING.RESOURCE  = 8;
gv.BUILDING.STORAGE  = 9;
gv.BUILDING.TOWN_HALL  = 10;

var BaseObject = cc.Class.extend({
    id: 0,
    type: null,
    level: 0,
    level2: 0,
    PosX: null,
    PosY: null,
    Imagelink: "",
    _gradPos: cc.p(0, 0),

    ctor: function (_id, _type) {
        this.id = _id;
        this.type = _type;
    },

    getGridPosition: function () {
        return this._gridPos;
    },

    setPosition: function (_x, _y) {
        this.PosX = _x;
        this.PosY = _y;
    },

    setImage: function () {

    }

})