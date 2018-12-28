/**
 * Created by CPU11630_LOCAL on 12/28/2018.
 */

var TimeManager = cc.Class.extend({
    deltaTime:0, // clientTime-serverTime in second
    ctor:function() {

    },
    updateServerTime : function(serverTime){
        this.deltaTime = new Date() / 1000 - serverTime;
    },
    getServerTime: function(){
        return new Date() / 1000 - this.deltaTime;
    },

});

TimeManager.getInstance = function() {
    if(this.instance == null) {
        this.instance = new TimeManager();
    }
    return this.instance;
}
