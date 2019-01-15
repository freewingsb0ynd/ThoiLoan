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
        this._text_max_elixir = this._jsonRes.getChildByName('text_max_elixir');
        this._text_max_darkElixir = this._jsonRes.getChildByName('text_max_darkElixir');

        this.bar_gold = this._jsonRes.getChildByName('bar_gold')
        this.bar_elixir = this._jsonRes.getChildByName('bar_elixir')
        this.bar_darkElixir = this._jsonRes.getChildByName('darkElixir_bar_3')


        this._text_gold = this._jsonRes.getChildByName('text_gold');

        this._text_elixir = this._jsonRes.getChildByName('text_elixir');

        this._text_darkE = this._jsonRes.getChildByName('text_darkElixir');

        this._text_gCoin = this._jsonRes.getChildByName('text_gCoin');


        this.darkElixirIcon = this._jsonRes.getChildByName('icon_darkElixir');
        this.darkElixirBg = this._jsonRes.getChildByName('bg_darkElixir_bar');

        
    },

    updateGui:function(){
        userData = UserData.getInstance();
        userMap = UserMap.getInstance();

        this._text_gold.setString(userData.gold.toString());
        this._text_elixir.setString(userData.elixir.toString());
        this._text_darkE.setString(userData.darkElixir.toString());
        this._text_gCoin.setString(userData.gCoin.toString());

        this.bar_gold.setScaleX(Math.min(userData.gold/userMap.goldCapacity,1))
        this.bar_elixir.setScaleX(Math.min(userData.elixir/userMap.elixirCapacity,1))
        this.bar_darkElixir.setScaleX(Math.min(userData.darkElixir /userMap.darkElixirCapacity,1))

        this._text_max_gold.setString('Tối đa: ' + userMap.goldCapacity);
        this._text_max_elixir.setString('Tối đa: ' + userMap.elixirCapacity);
        this._text_max_darkElixir.setString('Tối đa: ' + userMap.darkElixirCapacity);

        if(userMap.darkElixirCapacity == 0){
            this.darkElixirBg.setVisible(false)
            this.darkElixirIcon.setVisible(false)
            this._text_darkE.setVisible(false)
            this.bar_darkElixir.setVisible(false)
            this._text_max_darkElixir.setVisible(false)
        }
    }

});