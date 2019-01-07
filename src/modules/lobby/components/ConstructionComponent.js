/**
 * Created by hoangelato on 12/21/2018.
 */
var ConstructionComponent = Component.extend({

    _textConstructionName: null,
    _textShieldTime: null,
    _textArmy: null,

    actionButtonsList: null,

    ctor:function() {
        this._super(res.lobby.comp_construction, new Anchor(0.5,0));
        this.initGui();
    },



    initGui:function(){
        this._textConstructionName = this._jsonRes.getChildByName('cosntruction_lbl');

        this._demoBtn = this._jsonRes.getChildByName('demo0_node');
        this._demoBtn1 = this._jsonRes.getChildByName('demo1_node');

        cc.log("demoBTN: x " + this._demoBtn.x +"; y "+ this._demoBtn.y);
        cc.log("demoBtn BBox: w " + this._demoBtn.getChildByName('action_btn').getBoundingBox().width +"; h "+ this._demoBtn.getChildByName('action_btn').getBoundingBox().height);


        this._actionBtnX = this._demoBtn.x;
        this._actionBtnY = this._demoBtn.y;
        this._actionBtnWidth = this._demoBtn.getChildByName('action_btn').getBoundingBox().width /0.93;
        this._actionBtnHeight = this._demoBtn.getChildByName('action_btn').getBoundingBox().height /0.95;


        this.button1 = new ActionButton();
        //cc.log("da them nut");
        //this.button1.attr({
        //    x: 200,
        //    y: 500,
        //});
        this.addChild(this.button1);
    },

    updateGui:function(building){
        //this.actionButtonsList = null;
        //
        //
        //var optionsNum = building.options.length();                     // lay do dai actions list
        //
        //if (optionsNum %2 == 0){                                        // neu actions list co so phan tu chan
        //    for(var i = 0; i < optionsNum; i++){
        //        var actionBtn = new ActionButton();
        //
        //        switch (building.options.typeOption){
        //            case ACTION_BUTTON.TYPE.FINISH_NOW:                 // neu phan tu option co resources:[]
        //            case ACTION_BUTTON.TYPE.UPGRADE_BUILDING:
        //
        //
        //                break;
        //
        //            default:                                            // neu phan tu option khong co resources:[]
        //                break;
        //
        //        }
        //
        //        this.actionButtonsList.push(actionBtn);
        //    }
        //
        //}
        //else{                                                           // neu actions list co so phan tu le
        //
        //}

        this._demoBtn.attr({
            x: - this._actionBtnWidth * 1.1,
            y: this._actionBtnHeight * 0.6,

        });

        this.button1.attr({
            x: this._actionBtnWidth * 1.1,
            y: this._actionBtnHeight * 0.6,

        });


        //this._textBuilder.setString(UserData.getInstance().userName);
        //this._textShieldTime.setString(UserData.getInstance().usrExp+"");
        //this._textArmy.setString(UserData.getInstance().level+"");


    }


});

