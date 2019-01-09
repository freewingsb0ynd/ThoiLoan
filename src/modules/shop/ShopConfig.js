/**
 * Created by hoangelato on 1/8/2019.
 */

SHOP_ITEMS = {
    "1": {
        "CHEST_TAB": {
            "TAB_NAME": "NGÂN KHỐ",
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
                }
            }
        },
        "RESOURCE_TAB": {
            "TAB_NAME": "TÀI NGUYÊN",
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
                    "TOWNHALL_REQUEST": 0
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
                }
            }
        },
        "DECOR_TAB": {
            "TAB_NAME": "TRANG TRÍ",
            "TOPUP_RESOURCE_SPR_VISIBLE": false,
            "AMOUNT_LBL_VISIBLE": false,
            "INFO_BTN_VISIBLE": true,
            "TIME_VISIBLE": false,
            "MAX_BUILT_NUM_VISIBLE": true,
            "TOWNHALL_REQUEST_LBL_VISIBLE": false,
            "ITEM_SPR_RESLINK_BASE": "gui/Art/GUIs/icons/shop_gui/icon/",
            "ITEMS":{
                "1": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "DEC_1",
                    "NAME": "Tượng cung thủ",
                    "MAX_BUILT_NUM_LBL": "0/0",
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR
                },
                "2": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "DEC_2",
                    "NAME": "Tượng chiến binh",
                    "MAX_BUILT_NUM_LBL": "0/0",
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR
                },
                "3": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "DEC_3",
                    "NAME": "Cờ hiệu 1",
                    "MAX_BUILT_NUM_LBL": "0/0",
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR
                },
                "4": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "DEC_4",
                    "NAME": "Cờ hiệu 2",
                    "MAX_BUILT_NUM_LBL": "0/0",
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR
                },
                "5": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "DEC_5",
                    "NAME": "Hoa đỏ",
                    "MAX_BUILT_NUM_LBL": "0/0",
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR
                },
                "6": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "DEC_6",
                    "NAME": "Hoa cúc",
                    "MAX_BUILT_NUM_LBL": "0/0",
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR
                }
            }
        },
        "ARMY_TAB": {
            "TAB_NAME": "QUÂN ĐỘI",
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
                    "BUILDING_TYPE_CODE": "AMC_1",
                    "NAME": "Trại lính",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/0",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
                "2": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "BAR_1",
                    "NAME": "Nhà lính",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/0",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
                "3": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "LAB_1",
                    "NAME": "Nhà nghiên cứu",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/0",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
                "4": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "SPF_2",
                    "NAME": "Nhà phép thuật",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/0",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
                "5": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "KQB_1",
                    "NAME": "Hoàng đế",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/0",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
                "6": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "KQB_2",
                    "NAME": "Nữ hoàng",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/0",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },

                "7": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "KQB_3",
                    "NAME": "Đền thờ",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/5",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
                "8": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "BAR_2",
                    "NAME": "Nhà X-Men",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/5",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
                "9": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "KQB_4",
                    "NAME": "Đại Pháp Sư",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/5",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                }
            }
        },
        "DEFENSE_TAB": {
            "TAB_NAME": "PHÒNG THỦ",
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
                    "BUILDING_TYPE_CODE": "WAL_1",
                    "NAME": "Tường",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/0",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
                "2": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "DEF_1",
                    "NAME": "Pháo",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/0",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
                "3": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "DEF_2",
                    "NAME": "Chòi cung",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/0",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
                "4": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "DEF_3",
                    "NAME": "Máy bắn đá",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/0",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
                "5": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "DEF_5",
                    "NAME": "Pháo cao xạ",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/0",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
                "6": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "DEF_4",
                    "NAME": "Chòi phép",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/0",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },

                "7": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "TRA_1",
                    "NAME": "Bom",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/5",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
                "8": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "TRA_2",
                    "NAME": "Nắm đấm",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/5",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
                "9": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "TRA_3",
                    "NAME": "Kho thuốc súng",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/5",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
                "10": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "TRA_4",
                    "NAME": "Mìn tầm nhiệt",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/5",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
                "11": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "DEF_8",
                    "NAME": "Tháp sấm sét",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/5",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
                "12": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "DEF_7",
                    "NAME": "Thần tiễn",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/5",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
                "13": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "DEF_9",
                    "NAME": "Tháp ánh sáng",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/5",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
                "14": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "TRA_4",
                    "NAME": "Mìn phòng không",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/5",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
                "15": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "TRA_6",
                    "NAME": "Bẫy xương",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/5",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                },
                "16": {
                    "BUTTON_ENABLED": true,
                    "BUILDING_TYPE_CODE": "TRA_12",
                    "NAME": "Pháo rồng",
                    "TIME_BUILD_LBL": "0m0s",
                    "MAX_BUILT_NUM_LBL": "0/5",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR,
                    "TOWNHALL_REQUEST": 0
                }
            }
        },
        "SHIELD_TAB": {
            "TAB_NAME": "BẢO VỆ",
            "TOPUP_RESOURCE_SPR_VISIBLE": false,
            "AMOUNT_LBL_VISIBLE": false,
            "INFO_BTN_VISIBLE": true,
            "TIME_VISIBLE": false,
            "MAX_BUILT_NUM_VISIBLE": false,
            "ITEM_SPR_RESLINK_BASE": "gui/Art/GUIs/icons/shop_gui/icon/",
            "TOWNHALL_REQUEST_LBL_VISIBLE": false,
            "BUTTON_ENABLED": true,
            "ITEMS":{
                "1": {
                    "BUILDING_TYPE_CODE": "SHIELD_1",
                    "NAME": "Bảo vệ 1 ngày",
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR
                },
                "2": {
                    "BUILDING_TYPE_CODE": "SHIELD_2",
                    "NAME": "Bảo vệ 2 ngày",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR
                },
                "3": {
                    "BUILDING_TYPE_CODE": "SHIELD_3",
                    "NAME": "Bảo vệ 7 ngày",
                    "TOWNHALL_REQUEST_LBL_VISIBLE": false,
                    "PRICE": 150,
                    "PRICE_TYPE": gv.RESOURCE_TYPE.ELIXIR
                }
            }
        }
    }
};