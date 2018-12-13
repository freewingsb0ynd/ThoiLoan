/**
 * Created by KienVN on 5/27/2015.
 */

fr.clientConfig = {
        _selectResource:null,
        _isFirstSetSearchPath:true,
        init:function()
        {
            var self = this;
            var fileName = "config.json";
            this._configData = cc.loader.getRes(fileName);
            if (this._configData == null) {
                cc.log("Load client config error");
            }
        },
        detectResourceFromScreenSize:function()
        {

            var frameSize = cc.view.getFrameSize();

            var wScale = frameSize.width / this._configData.widthDesign;
            var hScale = frameSize.height / this._configData.heightDesign;
            var frameScale = wScale < hScale ? wScale : hScale;
            var m_ImageScale;
            var list = this._configData.resources;
            //tinh imageScale, chon resource anh
            for (var i = 0; i< list.length;i++){

                var s = list[i];
                var  scale = frameScale/s.scale;
                if ((1 / scale >= 1) || (i == list.length - 1 && 1 / scale <= 1)){
                    m_ImageScale = scale;
                    this._selectResource = list[i];
                    break;
                }
                cc.log("sds: %d, %d", i, list.length);
                if (i < list.length - 1){
                    var nextSize = list[i + 1];
                    var nextScale = frameScale / nextSize.scale;
                    if (1 / nextScale>1){
                        var avgScale = 1 / scale + (1 / nextScale - 1 / scale)*this._configData.selectScale;
                        if (avgScale>1){
                            m_ImageScale = scale;
                            this._selectResource = list[i];
                        }
                        else{
                            m_ImageScale = nextScale;
                            this._selectResource = list[i + 1];
                        }
                        break;
                    }
                }
            }

        },
        updateResourceSearchPath:function()
        {
            if(!cc.sys.isNative)
            {
                return;
            }
            var listSearch = [];
            //original
            if (this._isFirstSetSearchPath)
            {
                this._originPath = jsb.fileUtils.getSearchPaths();
                this._isFirstSetSearchPath = false;
            }
            for (var i in this._originPath)
            {
                listSearch.push(this._originPath[i]);
            }
            //multiscreen
            listSearch.push("res");
            listSearch.push("res/common");
            //only use to dev
            listSearch.push("res/high/zcsd");
            listSearch.push(this._selectResource.folder);
            //localization
            var listSearchOfLang = fr.Localization.getInstance().getFolderSearchPath();
            for (var i in listSearchOfLang)
            {
                listSearch.push(listSearchOfLang[i]);
            }

            jsb.fileUtils.setSearchPaths(listSearch);
        },
        getPathFromResource:function(path)
        {
            var newPath = this._selectResource.folder + "/" + path;
            return newPath;
        },
        getResourceScale:function()
        {
            return this._selectResource.scale;
        },
        getDesignResolutionSize:function()
        {
            return cc.size(this._configData.widthDesign, this._configData.heightDesign);
        }
    };