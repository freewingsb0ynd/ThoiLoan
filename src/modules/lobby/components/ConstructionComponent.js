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

        this._buttons = this._jsonRes.getChildByName('buttons_parent');

        this._actionBtnWidth = gv.CONSTRUCTION_COMP.ACTION_BUTTON.NATIVE_WIDTH * gv.RESOLUTION.SCALE_X;
        this._actionBtnHeight = gv.CONSTRUCTION_COMP.ACTION_BUTTON.NATIVE_HEIGHT * gv.RESOLUTION.SCALE_Y;

        this.setVisible(false);

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

        this._buttons.removeAllChildren();
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

                var actionBtn = new ActionButton(building.options[i],building.id);
                //var actionBtn = new ActionButton();

                //actionBtn.;
                actionBtn.attr({
                    x: this._actionBtnWidth * gv.CONSTRUCTION_COMP.SCALE_WIDTH_GAP * ((i - optionsNum / 2) + 0.5),
                    y: this._actionBtnHeight * gv.CONSTRUCTION_COMP.SCALE_HEIGHT_GAP,

                });

                this._buttons.addChild(actionBtn);

                //this.actionButtonsList.push(actionBtn);
            }

        }
        else{                                                           // neu actions list co so phan tu le

            for(var j = 0; j < optionsNum; j++){
                //cc.log("aaaaaaaaa "+ building.options[i].typeOption);

                var actionBtn1 = new ActionButton(building.options[j],building.id);

                //var actionBtn = new ActionButton();

                //actionBtn.;

                actionBtn1.attr({
                    x: this._actionBtnWidth * gv.CONSTRUCTION_COMP.SCALE_WIDTH_GAP *(j - (optionsNum - 1)/2),
                    y: this._actionBtnHeight * gv.CONSTRUCTION_COMP.SCALE_HEIGHT_GAP,

                });


                this._buttons.addChild(actionBtn1);
                //this.actionButtonsList.push(actionBtn);
            }
        }




    },

    onConstructionClick: function(building){
        this.updateGui(building);
        this.setVisible(true);
    }


});





var gv = gv || {};

gv.CONSTRUCTION_COMP = {};
gv.CONSTRUCTION_COMP.SCALE_WIDTH_GAP = 1.1;
gv.CONSTRUCTION_COMP.SCALE_HEIGHT_GAP = 0.6;
gv.CONSTRUCTION_COMP.ACTION_BUTTON = {};
gv.CONSTRUCTION_COMP.ACTION_BUTTON.NATIVE_WIDTH = 100;
gv.CONSTRUCTION_COMP.ACTION_BUTTON.NATIVE_HEIGHT = 100;


