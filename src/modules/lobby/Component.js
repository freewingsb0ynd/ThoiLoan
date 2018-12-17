/**
 * Created by CPU11635_LOCAL on 12/17/2018.
 */
var Component = cc.Node.extend({

    resDir: null,
    perspectivePosition: null,

    ctor:function(resDir, perspectivePos) {
        this._super();
        this.resDir = resDir;
        this.perspectivePosition = perspectivePos;

        this.addChild(ccs.load(resDir).node);
    },

});
