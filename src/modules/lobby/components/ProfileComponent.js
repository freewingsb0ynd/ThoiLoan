/**
 * Created by CPU11635_LOCAL on 12/18/2018.
 */

var ProfileComponent = Component.extend({

    ctor:function() {
        this._super(res.lobby.comp_profile, new Anchor(0,1));

        this.initGui();
    },

    initGui:function(){
        this._userName = this._jsonRes.getChildByName('text_username');
        this._exp = this._jsonRes.getChildByName('text_expProgress');
        this._level = this._jsonRes.getChildByName('text_level');
        this._trophy = this._jsonRes.getChildByName('text_trophy');

    },

    updateGui:function(){
        this._userName.setString(UserData.getInstance().userName);
        this._exp.setString(UserData.getInstance().usrExp+"");
        this._level.setString(UserData.getInstance().level+"");
        this._trophy.setString(UserData.getInstance().trophy+"");

    }

});