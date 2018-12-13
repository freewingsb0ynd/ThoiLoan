/**
 * Created by CPU11635_LOCAL on 12/12/2018.
 */
var GuiUtil = {

    getInstance: function() {
    if(this.instance == null) {
        this.instance = new UserData();
    }
    return this.instance;
    }


}