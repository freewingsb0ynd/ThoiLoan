/**
 * Created by hoangelato on 1/8/2019.
 */

SHOP_ITEMS = {
    "CHEST_TAB": {
        TAB_NAME: "NGÂN KHỐ",
        TOPUP_RESOURCE_SPR_VISIBLE: true,
        AMOUNT_LBL_VISIBLE: true,
        INFO_BTN_VISIBLE: false,
        TIME_VISIBLE: false,
        TOWNHALL_REQUEST_LBL_VISIBLE: false,
        ITEM_SPR_RESLINK_BASE: "gui/Art/GUIs/icons/shop_res/",
        MAX_BUILT_NUM_VISIBLE: false,
        BUTTON_ENABLED: true,
        ITEMS: [
            {
                AMOUNT: "10% KHO",
                ITEM_NAME: "2000",
                TOPUP_RESOURCE: gv.RESOURCE_TYPE.GOLD,
                ITEM_PRICE: 20,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.COIN,
                BUILDING_TYPE_CODE: "gold_10"
            },
            {
                AMOUNT: "50% KHO",
                ITEM_NAME: "10000",
                TOPUP_RESOURCE: gv.RESOURCE_TYPE.GOLD,
                ITEM_PRICE: 100,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.COIN,
                BUILDING_TYPE_CODE: "gold_50"
            },
            {
                AMOUNT: "ĐẦY KHO",
                ITEM_NAME: "20000",
                TOPUP_RESOURCE: gv.RESOURCE_TYPE.GOLD,
                ITEM_PRICE: 200,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.COIN,
                BUILDING_TYPE_CODE: "gold_100"
            },
            {
                AMOUNT: "10% KHO",
                ITEM_NAME: "3000",
                TOPUP_RESOURCE: gv.RESOURCE_TYPE.ELIXIR,
                ITEM_PRICE: 30,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.COIN,
                BUILDING_TYPE_CODE: "elixir_10"
            },
            {
                AMOUNT: "50% KHO",
                ITEM_NAME: "15000",
                TOPUP_RESOURCE: gv.RESOURCE_TYPE.ELIXIR,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.COIN,
                BUILDING_TYPE_CODE: "elixir_50"
            },
            {
                AMOUNT: "ĐẦY KHO",
                ITEM_NAME: "30000",
                TOPUP_RESOURCE: gv.RESOURCE_TYPE.ELIXIR,
                ITEM_PRICE: 300,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.COIN,
                BUILDING_TYPE_CODE: "elixir_100"
            },
            {
                AMOUNT: "10% KHO",
                ITEM_NAME: "50",
                TOPUP_RESOURCE: gv.RESOURCE_TYPE.DARK_ELIXIR,
                ITEM_PRICE: 20,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.COIN,
                BUILDING_TYPE_CODE: "darkElixir_10"
            },
            {
                AMOUNT: "50% KHO",
                ITEM_NAME: "250",
                TOPUP_RESOURCE: gv.RESOURCE_TYPE.DARK_ELIXIR,
                ITEM_PRICE: 100,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.COIN,
                BUILDING_TYPE_CODE: "darkElixir_50"
            },
            {
                AMOUNT: "ĐẦY KHO",
                ITEM_NAME: "500",
                TOPUP_RESOURCE: gv.RESOURCE_TYPE.DARK_ELIXIR,
                ITEM_PRICE: 200,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.COIN,
                BUILDING_TYPE_CODE: "darkElixir_100"
            }
        ]
    },
    "RESOURCE_TAB": {
        TAB_NAME: "TÀI NGUYÊN",
        TOPUP_RESOURCE_SPR_VISIBLE: false,
        AMOUNT_LBL_VISIBLE: false,
        INFO_BTN_VISIBLE: true,

        ITEM_SPR_RESLINK_BASE: "gui/Art/GUIs/icons/shop_gui/icon/",
        TOWNHALL_REQUEST_LBL: "Yêu cầu nhà chính cấp ",
        WARNING_COLOR: "FF0000",
        ITEMS: [
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "RES_1",
                ITEM_NAME: "Mỏ vàng",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/0",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "RES_2",
                ITEM_NAME: "Mỏ dầu",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/0",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "STO_1",
                ITEM_NAME: "Kho vàng",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/0",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "STO_2",
                ITEM_NAME: "Kho dầu",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/0",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "RES_3",
                ITEM_NAME: "Mỏ dầu đen",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/0",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "STO_3",
                ITEM_NAME: "Kho dầu đen",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/0",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },

            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "BDH_1",
                ITEM_NAME: "Nhà thợ xây",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/5",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            }
        ]
    },
    "DECOR_TAB": {
        TAB_NAME: "TRANG TRÍ",
        TOPUP_RESOURCE_SPR_VISIBLE: false,
        AMOUNT_LBL_VISIBLE: false,
        INFO_BTN_VISIBLE: true,
        TIME_VISIBLE: false,
        MAX_BUILT_NUM_VISIBLE: true,
        TOWNHALL_REQUEST_LBL_VISIBLE: false,
        ITEM_SPR_RESLINK_BASE: "gui/Art/GUIs/icons/shop_gui/icon/",
        ITEMS: [
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "DEC_1",
                ITEM_NAME: "Tượng cung thủ",
                MAX_BUILT_NUM_LBL: "0/0",
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "DEC_2",
                ITEM_NAME: "Tượng chiến binh",
                MAX_BUILT_NUM_LBL: "0/0",
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "DEC_3",
                ITEM_NAME: "Cờ hiệu 1",
                MAX_BUILT_NUM_LBL: "0/0",
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "DEC_4",
                ITEM_NAME: "Cờ hiệu 2",
                MAX_BUILT_NUM_LBL: "0/0",
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "DEC_5",
                ITEM_NAME: "Hoa đỏ",
                MAX_BUILT_NUM_LBL: "0/0",
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "DEC_6",
                ITEM_NAME: "Hoa cúc",
                MAX_BUILT_NUM_LBL: "0/0",
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR
            }
        ]
    },
    "ARMY_TAB": {
        TAB_NAME: "QUÂN ĐỘI",
        TOPUP_RESOURCE_SPR_VISIBLE: false,
        AMOUNT_LBL_VISIBLE: false,
        INFO_BTN_VISIBLE: true,

        ITEM_SPR_RESLINK_BASE: "gui/Art/GUIs/icons/shop_gui/icon/",
        TOWNHALL_REQUEST_LBL: "Yêu cầu nhà chính cấp ",
        WARNING_COLOR: "FF0000",
        ITEMS:[
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "AMC_1",
                ITEM_NAME: "Trại lính",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/0",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "BAR_1",
                ITEM_NAME: "Nhà lính",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/0",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "LAB_1",
                ITEM_NAME: "Nhà nghiên cứu",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/0",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "SPF_1",
                ITEM_NAME: "Nhà phép thuật",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/0",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "KQB_1",
                ITEM_NAME: "Hoàng đế",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/0",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "KQB_2",
                ITEM_NAME: "Nữ hoàng",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/0",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },

            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "KQB_3",
                ITEM_NAME: "Đền thờ",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/5",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "BAR_2",
                ITEM_NAME: "Nhà X-Men",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/5",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "KQB_4",
                ITEM_NAME: "Đại Pháp Sư",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/5",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            }
        ]
    },
    "DEFENSE_TAB": {
        TAB_NAME: "PHÒNG THỦ",
        TOPUP_RESOURCE_SPR_VISIBLE: false,
        AMOUNT_LBL_VISIBLE: false,
        INFO_BTN_VISIBLE: true,

        ITEM_SPR_RESLINK_BASE: "gui/Art/GUIs/icons/shop_gui/icon/",
        TOWNHALL_REQUEST_LBL: "Yêu cầu nhà chính cấp ",
        WARNING_COLOR: "FF0000",
        ITEMS:[
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "WAL_1",
                ITEM_NAME: "Tường",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/0",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "DEF_1",
                ITEM_NAME: "Pháo",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/0",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "DEF_2",
                ITEM_NAME: "Chòi cung",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/0",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "DEF_3",
                ITEM_NAME: "Máy bắn đá",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/0",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "DEF_5",
                ITEM_NAME: "Pháo cao xạ",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/0",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "DEF_4",
                ITEM_NAME: "Chòi phép",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/0",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },

            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "TRA_1",
                ITEM_NAME: "Bom",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/5",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "TRA_2",
                ITEM_NAME: "Nắm đấm",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/5",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "TRA_3",
                ITEM_NAME: "Kho thuốc súng",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/5",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "TRA_4",
                ITEM_NAME: "Mìn tầm nhiệt",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/5",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "DEF_8",
                ITEM_NAME: "Tháp sấm sét",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/5",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "DEF_7",
                ITEM_NAME: "Thần tiễn",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/5",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "DEF_9",
                ITEM_NAME: "Tháp ánh sáng",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/5",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "TRA_4",
                ITEM_NAME: "Mìn phòng không",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/5",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "TRA_6",
                ITEM_NAME: "Bẫy xương",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/5",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            },
            {
                BUTTON_ENABLED: true,
                BUILDING_TYPE_CODE: "DEF_12",
                ITEM_NAME: "Pháo rồng",
                TIME_BUILD_LBL: "0m0s",
                MAX_BUILT_NUM_LBL: "0/5",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR,
                TIME_VISIBLE: true,
                MAX_BUILT_NUM_VISIBLE: true,
                TOWNHALL_REQUEST: 0
            }
        ]
    },
    "SHIELD_TAB": {
        TAB_NAME: "BẢO VỆ",
        TOPUP_RESOURCE_SPR_VISIBLE: false,
        AMOUNT_LBL_VISIBLE: false,
        INFO_BTN_VISIBLE: true,
        TIME_VISIBLE: false,
        MAX_BUILT_NUM_VISIBLE: false,
        ITEM_SPR_RESLINK_BASE: "gui/Art/GUIs/icons/shop_gui/icon/",
        TOWNHALL_REQUEST_LBL_VISIBLE: false,
        BUTTON_ENABLED: true,
        ITEMS:[
            {
                BUILDING_TYPE_CODE: "SHEILD_1",
                ITEM_NAME: "Bảo vệ 1 ngày",
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR
            },
            {
                BUILDING_TYPE_CODE: "SHEILD_2",
                ITEM_NAME: "Bảo vệ 2 ngày",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR
            },
            {
                BUILDING_TYPE_CODE: "SHEILD_3",
                ITEM_NAME: "Bảo vệ 7 ngày",
                TOWNHALL_REQUEST_LBL_VISIBLE: false,
                ITEM_PRICE: 150,
                ITEM_PRICE_TYPE: gv.RESOURCE_TYPE.ELIXIR
            }
        ]
    }
    
};