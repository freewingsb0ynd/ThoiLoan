/**
 * Created by CPU11635_LOCAL on 12/18/2018.
 */

var ResourceComponent = Component.extend({

    ctor:function() {
        this._super(res.lobby.comp_resource, new Anchor(1,1));

        this.initGui();
    },

    initGui:function(){
        this._text_max_gold = this._jsonRes.getChildByName('text_max_gold');
        this._text_gold = this._jsonRes.getChildByName('text_gold');

        this._text_elixir = this._jsonRes.getChildByName('text_elixir');

        this._text_darkE = this._jsonRes.getChildByName('text_darkElixir');

        this._text_gCoin = this._jsonRes.getChildByName('text_gCoin');

        
    },

    updateGui:function(){
        this._text_max_gold.setString('ahihi');
        this._text_gold.setString(UserData.getInstance().gold.toString());
        this._text_elixir.setString(UserData.getInstance().elixir.toString());
        this._text_darkE.setString(UserData.getInstance().darkElixir.toString());
        this._text_gCoin.setString(UserData.getInstance().gCoin.toString());
    }

});