/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */

var Area = cc.Node.extend({
    id: 0,
    type1: null,
    position: null,

    //-----------addition information store for improving speed (maybe)
    typeStrCode:null,
    size : null,
    description:null,
    image:null,
    _jsonRes:null,




    ctor: function (_id, _type1, _posX, _posY) {
        this._super("");
        this.id = _id;
        this.type1 = _type1;
        this.position = {x:_posX, y:_posY};

        //var node = new cc.Node();
        //var sp = new cc.Sprite("res/gui/Art/Map/map_obj_bg/BG/RED_3.png");
        //node.addChild(sp);
        //
        //this._jsonRes = node;
        this.image = new cc.Sprite();
        this.addChild(this.image);

        this._jsonRes = ccs.load("gui/BuildingPrototype.json").node;
        this._jsonRes.idle_spr = this._jsonRes.getChildByName("buildingIdle_spr");
        this._jsonRes.anim_spr = this._jsonRes.getChildByName("buildingAnim_spr");

        this._jsonRes.grass_spr = this._jsonRes.getChildByName("grass_spr");
        this._jsonRes.arrow_spr = this._jsonRes.getChildByName("arrow_spr");
        this._jsonRes.shadow_spr = this._jsonRes.getChildByName("shadow_spr");
        this._jsonRes.upgrading_spr = this._jsonRes.getChildByName("upgrading_spr");
        this._jsonRes.upgradeDone_spr = this._jsonRes.getChildByName("upgradeDone_spr");
        this._jsonRes.timeUpgrade_lbl = this._jsonRes.getChildByName("buildingAnim_spr");
        this._jsonRes.upgradeProcessBg_spr = this._jsonRes.getChildByName("upgradeProcessBg_spr");
        this._jsonRes.upgradeProcess_spr = this._jsonRes.getChildByName("upgradeProcess_spr");
        this._jsonRes.buildingName_lbl = this._jsonRes.getChildByName("buildingName_lbl");
        this._jsonRes.buildingLevel_lbl = this._jsonRes.getChildByName("buildingLevel_lbl");
        this._jsonRes.cancelBuild_btn = this._jsonRes.getChildByName("cancelBuild_btn");
        this._jsonRes.okBuild_btn = this._jsonRes.getChildByName("okBuild_btn");

        this._jsonRes.idleAnimArray = [];
        this._jsonRes.animSprNum = this._jsonRes.idleAnimArray.length;
        this._jsonRes.currentSprNum = 0;
        this._jsonRes.currentUpdateSpr = 0;
        this._jsonRes.updatesPerSprRate = 5;

        this.addChild(this._jsonRes);

        this.scheduleUpdate();
    },
    showInfo : function(){
        return " id " + this.id + " type1 :" + this.type1 + " position : (" + this.position.x + "," + this.position.y + ")";
    },
    updateData : function(){

        // return true if a builder is working on
    },

    update: function(){
        if (this._jsonRes.animSprNum != 0){
            if (this._jsonRes.currentUpdateSpr == (this._jsonRes.updatesPerSprRate - 1)) {
                //cc.log("bbbbbbb:   " + JSON.stringify(this._jsonRes.idleAnimArray[this._jsonRes.currentSprNum]));
                //this._jsonRes.anim_spr.setTexture(this._jsonRes.idleAnimArray[this._jsonRes.currentSprNum]);
                this._jsonRes.anim_spr.setTexture(this._jsonRes.idleAnimArray[this._jsonRes.currentSprNum]);
                this._jsonRes.currentSprNum = (this._jsonRes.currentSprNum + 1) % this._jsonRes.animSprNum;
            }
            this._jsonRes.currentUpdateSpr = (this._jsonRes.currentUpdateSpr + 1) % this._jsonRes.updatesPerSprRate;
        }
        //else this._jsonRes.anim_spr.setTexture(
    },

    getSize : function(){
    },
    getDescription : function(){
    },
    setImage : function(resLinkIdle, resLinkAnimBase, animSprNum){
        // set texture or animation for this.image
        this.image.setTexture("res/gui/Art/Map/map_obj_bg/BG/RED_" + this.size.width + ".png");

        if(resLinkIdle != null) {
            this._jsonRes.idle_spr.setTexture(resLinkIdle);
        }
        if (resLinkAnimBase != null){
            this._jsonRes.animSprNum = animSprNum;
            if(animSprNum<10){
                for(var i=0; i< animSprNum; i++){
                    //sprFrame = cc.Sprite(resLinkAnimBase+i+".png");
                    //cc.log("aaaaaa: " + resLinkAnimBase+i+".png");
                    //this._jsonRes.idleAnimArray.push(sprFrame);
                    this._jsonRes.idleAnimArray.push(resLinkAnimBase + i +".png");
                    //this._jsonRes.idleAnimArray[i] = sprFrame;
                }
            }
            else {
                for(var i=0; i< animSprNum; i++){
                    if(animSprNum < 10){
                        this._jsonRes.idleAnimArray.push(resLinkAnimBase + "0" + i +".png");
                    //this._jsonRes.idleAnimArray[i] = sprFrame;
                    }
                    else this._jsonRes.idleAnimArray.push(resLinkAnimBase + i +".png");
                }
            }
        }
        else this._jsonRes.anim_spr.setVisible(false);


    },
    refreshInfo:function(){
        this.getSize();
        this.getDescription();
        this.setImage();
    },
    getOptions:function(){
        this.update();
        data = {
            constructionName : "An Area",
            options :[]
            };
        // 1 check cancel option
        // 2 check clan option
        // 3 check spell option
        // 4 check harvest_dark_elixir option
        // 5 check harvest_elixir option
        // 6 check harvest_gold option
        // 7 check info option
        // 8 check quick_finish option
        // 10 check request_troop option
        // 11 check research option
        // 12 check rorate option
        // 13 check select_line option
        // 14 check shop option
        // 15 check train option
        // 16 check upgrade option

        return data;
    }
})