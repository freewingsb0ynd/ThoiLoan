/**
 * Created by hoangelato on 12/27/2018.
 */

var ShopTab = cc.Node.extend({
    //shopTabBtns :[],
    shopGui: null,
    _node: null,

    ctor: function(parent, node){
        //this._super();
        this.shopGui = parent;
        this._node = node;

        this.tabBackBtn = this._node.getChildByName('tabBack_btn');
        this.shopTabScrView = this._node.getChildByName('shop_scrview');
        this.tabBackBtn.addClickEventListener(this.onSelectTabBack.bind(this));

    },

    onSelectTabBack: function(sender){
        this.shopGui.shopTab._node.setVisible(false);
        this.shopGui.shopMain._node.setVisible(true);

    },


    initShopTab: function(){
        this.shopGui.shopMain._node.setVisible(false);
        this.shopGui.shopTab._node.setVisible(true);

        this.initScrView()
    },

    initScrView: function(){


    },

});