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


        //this.button1 = new ActionButton();
        //cc.log("da them nut");
        //this.button1.attr({
        //    x: 200,
        //    y: 500,
        //});
        //this.addChild(this.button1);
    },

    updateGui:function(building){
        this.actionButtonsList = {};

        this._textConstructionName.setString(building.constructionName);

        //
        //
        var optionsNum = building.options.length;                       // lay do dai actions list

        //cc.log("optionsssssss: " + optionsNum);
        //cc.log("optionsssssss: " + building.options[0]);
        //cc.log("optionsssssss: " + building.options[1]);
        //cc.log("optionsssssss: " + building.options[2]);



        if (optionsNum %2 == 0){                                        // neu actions list co so phan tu chan
            for(var i = 0; i < optionsNum; i++){
                //cc.log("aaaaaaaaa "+ building.options[i].typeOption);

                var actionBtn = new ActionButton(building.options[i]);

                //var actionBtn = new ActionButton();

                //actionBtn.;
                actionBtn.attr({
                    x: this._actionBtnWidth * gv.CONSTRUCTION_COMP.SCALE_WIDTH_GAP * ((i - optionsNum / 2) + 0.5),
                    y: this._actionBtnHeight * gv.CONSTRUCTION_COMP.SCALE_HEIGHT_GAP,

                });

                this.addChild(actionBtn);

                //this.actionButtonsList.push(actionBtn);
            }

        }
        else{                                                           // neu actions list co so phan tu le

            for(var i = 0; i < optionsNum; i++){
                //cc.log("aaaaaaaaa "+ building.options[i].typeOption);

                var actionBtn = new ActionButton(building.options[i]);

                //var actionBtn = new ActionButton();

                //actionBtn.;

                actionBtn.attr({
                    x: this._actionBtnWidth * gv.CONSTRUCTION_COMP.SCALE_WIDTH_GAP *(i - (optionsNum - 1)/2),
                    y: this._actionBtnHeight * gv.CONSTRUCTION_COMP.SCALE_HEIGHT_GAP,

                });


                this.addChild(actionBtn);
                //this.actionButtonsList.push(actionBtn);
            }
        }

        this._demoBtn.attr({
            x: - this._actionBtnWidth * gv.CONSTRUCTION_COMP.SCALE_WIDTH_GAP,
            y: this._actionBtnHeight * gv.CONSTRUCTION_COMP.SCALE_HEIGHT_GAP,
            visible: false,
        });

        this._demoBtn1.attr({
            x: this._actionBtnWidth * gv.CONSTRUCTION_COMP.SCALE_WIDTH_GAP,
            y: this._actionBtnHeight * gv.CONSTRUCTION_COMP.SCALE_HEIGHT_GAP,
            visible: false,
        });


        //this._textBuilder.setString(UserData.getInstance().userName);
        //this._textShieldTime.setString(UserData.getInstance().usrExp+"");
        //this._textArmy.setString(UserData.getInstance().level+"");


    }


});

var gv = gv || {};

gv.CONSTRUCTION_COMP = {}
gv.CONSTRUCTION_COMP.SCALE_WIDTH_GAP = 1.1;
gv.CONSTRUCTION_COMP.SCALE_HEIGHT_GAP = 0.6;



