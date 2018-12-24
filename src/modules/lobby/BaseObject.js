/**
 * Created by CPU11643_LOCAL on 12/24/2018.
 */






var BaseObject = cc.Class.extend({
    id: 0,
    type: null,
    currentLevel: 0,
    nextLevel: 0,
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
        if (this.type == gv.BUILDING.ARMY_CAMP)   this.Imagelink =  TL.PATH.army_camp + this.currentLevel + "/idle/image0000.png";

        if (this.type == gv.BUILDING.BARRACK)     this.Imagelink =  TL.PATH.barrack + this.currentLevel + "/idle/image0000.png";

        if (this.type == gv.BUILDING.BUILDER_HUT)     this.Imagelink =  TL.PATH.builder_hut + "/idle/image0000.png";

        if (this.type == gv.BUILDING.CLAN_CASTLE)     this.Imagelink =  TL.PATH.clan_castle + this.currentLevel + "/idle/image0000.png";

        if (this.type == gv.BUILDING.DEFENSE)     this.Imagelink =  TL.PATH.defense_base + this.type2 + "_" + this.currentLevel + "_Shadow.png";

        if (this.type == gv.BUILDING.TOWN_HALL)     this.Imagelink =  TL.PATH.town_hall + this.currentLevel + "/idle/image0000.png";

        if (this.type == gv.BUILDING.LABORATORY)     this.Imagelink =  TL.PATH.laboratory + this.currentLevel + "/idle/image0000.png";

        if (this.type == gv.BUILDING.OBSTACLE)     this.Imagelink =  TL.PATH.obstacle + this.type2 + "/idle/image0000.png";

        if (this.type == gv.BUILDING.STORAGE)     {
            if(type2 == 1) this.Imagelink =  TL.PATH.gold_storgae + this.currentLevel + "/idle/image0000.png";

            if(type2 == 2) this.Imagelink =  TL.PATH.elixir_storage + this.currentLevel + "/idle/image0000.png";

            if(type2 == 3) this.Imagelink =  TL.PATH.dark_elixir_storage + this.currentLevel + "/idle/image0000.png";
        }

        if (this.type == gv.BUILDING.RESOURCE)     {
            if(type2 == 1) this.Imagelink =  TL.PATH.gold_mine + this.currentLevel + "/idle/image0000.png";

            if(type2 == 2) this.Imagelink =  TL.PATH.elixir_collector + this.currentLevel + "/idle/image0000.png";

            if(type2 == 3) this.Imagelink =  TL.PATH.dark_elixir_collector + this.currentLevel + "/idle/image0000.png";
        }
    }
})
