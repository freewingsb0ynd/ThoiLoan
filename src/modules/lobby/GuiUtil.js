/**
 * Created by CPU11635_LOCAL on 12/12/2018.
 */
var GuiUtil = cc.Class.extend({

    ctor:function() {
        //this.loadInitData();
        //this.initGame();
    },


});

GuiUtil.getInstance = function() {
    if(this.instance == null) {
        this.instance = new GuiUtil();
    }
    return this.instance;
}