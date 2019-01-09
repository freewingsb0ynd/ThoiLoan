/**
 * Created by hoangelato on 1/8/2019.
 */

SHOP_ITEM = {
    "1": {
        "CHEST_TAB": {
            "TOPUP_RESOURCE_SPR_VISIBLE": true,
            "AMOUNT_LBL_VISIBLE": true,
            "INFO_BTN_VISIBLE": false,
            "TIME_VISIBLE": false,
            "TOWNHALL_REQUEST_LBL_VISIBLE": false,
            "MAX_BUILT_NUM_VISIBLE": false,
            "ITEMS": {
                "1": {
                    "AMOUNT": "10% KHO",
                    "NAME": "2000",
                    "TOPUP_RESOURCE": gv.RESOURCE_TYPE.GOLD,
                    "PRICE": 20,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.COIN,
                    "ITEM_SPR_RESLINK": "gui/Art/GUIs/icons/shop_res/gold_10.png"
                },
                "2": {
                    "AMOUNT": "50% KHO",
                    "NAME": "10000",
                    "TOPUP_RESOURCE": gv.RESOURCE_TYPE.GOLD,
                    "PRICE": 100,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.COIN,
                    "ITEM_SPR_RESLINK": "gui/Art/GUIs/icons/shop_res/gold_50.png"
                },
                "3": {
                    "AMOUNT": "ĐẦY KHO",
                    "NAME": "20000",
                    "TOPUP_RESOURCE": gv.RESOURCE_TYPE.GOLD,
                    "PRICE": 200,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.COIN,
                    "ITEM_SPR_RESLINK": "gui/Art/GUIs/icons/shop_res/gold_100.png"
                },
                "4": {
                    "AMOUNT": "10% KHO",
                    "NAME": "3000",
                    "TOPUP_RESOURCE": gv.RESOURCE_TYPE.ELIXIR,
                    "PRICE": 30,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.COIN,
                    "ITEM_SPR_RESLINK": "gui/Art/GUIs/icons/shop_res/elixir_10.png"
                },
                "5": {
                    "AMOUNT": "50% KHO",
                    "NAME": "15000",
                    "TOPUP_RESOURCE": gv.RESOURCE_TYPE.ELIXIR,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.COIN,
                    "ITEM_SPR_RESLINK": "gui/Art/GUIs/icons/shop_res/elixir_50.png"
                },
                "6": {
                    "AMOUNT": "ĐẦY KHO",
                    "NAME": "30000",
                    "TOPUP_RESOURCE": gv.RESOURCE_TYPE.ELIXIR,
                    "PRICE": 300,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.COIN,
                    "ITEM_SPR_RESLINK": "gui/Art/GUIs/icons/shop_res/elixir_100.png"
                },
                "7": {
                    "AMOUNT": "10% KHO",
                    "NAME": "50",
                    "TOPUP_RESOURCE": gv.RESOURCE_TYPE.DARK_ELIXIR,
                    "PRICE": 20,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.COIN,
                    "ITEM_SPR_RESLINK": "gui/Art/GUIs/icons/shop_res/darkElixir_10.png"
                },
                "8": {
                    "AMOUNT": "50% KHO",
                    "NAME": "250",
                    "TOPUP_RESOURCE": gv.RESOURCE_TYPE.DARK_ELIXIR,
                    "PRICE": 100,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.COIN,
                    "ITEM_SPR_RESLINK": "gui/Art/GUIs/icons/shop_res/darkElixir_50.png"
                },
                "9": {
                    "AMOUNT": "ĐẦY KHO",
                    "NAME": "500",
                    "TOPUP_RESOURCE": gv.RESOURCE_TYPE.DARK_ELIXIR,
                    "PRICE": 200,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.COIN,
                    "ITEM_SPR_RESLINK": "gui/Art/GUIs/icons/shop_res/darkElixir_100.png"
                },
            }
        },
        "RESOURCE_TAB": {
            "TOPUP_RESOURCE_SPR_VISIBLE": false,
            "AMOUNT_LBL_VISIBLE": false,
            "INFO_BTN_VISIBLE": true,
            "TIME_VISIBLE": true,
            "MAX_BUILT_NUM_VISIBLE": true,
            "ITEM_SPR_RESLINK_BASE": "gui/Art/GUIs/icons/shop_gui/icon/",
            "TOWNHALL_REQUEST_LBL": "Yêu cầu nhà chính cấp ",
            "WARNING_COLOR": "FF0000",
            "ITEMS":{
                "1": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "RES_1",
                    "NAME": "Mỏ vàng",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/0",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
                "2": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "RES_2",
                    "NAME": "Mỏ dầu",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/0",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0,
                },
                "3": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "STO_1",
                    "NAME": "Kho vàng",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/0",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
                "4": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "STO_2",
                    "NAME": "Kho dầu",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/0",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
                "5": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "RES_3",
                    "NAME": "Mỏ dầu đen",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/0",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
                "6": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "STO_3",
                    "NAME": "Kho dầu đen",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/0",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },

                "7": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "BDH_1",
                    "NAME": "Nhà thợ xây",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/5",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
            }
        },
    }
}