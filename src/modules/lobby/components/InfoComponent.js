/**
 * Created by hoangelato on 12/18/2018.
 */

var InfoComponent = Component.extend({
    _textBuilder: null,
    _textShieldTime: null,
    _textArmy: null,


    ctor:function() {
        this._super(res.lobby.comp_info, new Anchor(0.5,1));

        this.initGui();
    },

    initGui:function(){
        this._textBuilder = this._jsonRes.getChildByName('text_builder_status');
        this._textShieldTime = this._jsonRes.getChildByName('text_shield_time');
        this._textArmy = this._jsonRes.getChildByName('text_army_status');


    },

    updateGui:function(){
        var totalBuilders = UserMap.getInstance().totalNumberBuilder;
        var workingBuilders = UserMap.getInstance().numberWorkingBuilder;
        var freeBuilders = totalBuilders - workingBuilders;


        this._textBuilder.setString(freeBuilders+'/'+totalBuilders);


        //this._textBuilder.setString(UserData.getInstance().userName);
        //this._textShieldTime.setString(UserData.getInstance().usrExp+"");
        //this._textArmy.setString(UserData.getInstance().level+"");


    }

});