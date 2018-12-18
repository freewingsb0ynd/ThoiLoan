/**
 * Created by CPU11635_LOCAL on 12/17/2018.
 */
var Component = cc.Node.extend({

    _res: null,
    _perspectivePosition: null,
    _jsonRes:null,
    

    ctor:function(res, perspectivePos) {
        this._super();
        this._res = res;
        this._perspectivePosition = perspectivePos;
        this._initPos();
        this._jsonRes = ccs.load(res).node;
        this.addChild(this._jsonRes);
    },

    _initPos:function(){
        this.setPosition(cc.p(cc.winSize.width * this._perspectivePosition._x, cc.winSize.height * this._perspectivePosition._y));
    }

});
