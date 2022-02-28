import {mediaSmartAdapter} from './mediaSmartAdapter';

const json = {
    "common": {
        "isYandex": "0",
        "pageLang": "1",
        "stationaryConnection": "1",
        "reloadTimeout": "30",
        "isYandexPage": "1"
    },
    "rtb": {
        "format": "smart-banner-adaptive_v1",
        "flexible": "0",
        "abuseLink": "",
        "html5": "",
        "width": 300,
        "data": {
            "OFFERS_ON_Y_AXIS": "1",
            "AUCTION_DC_PARAMS": {
                "creative_params": {
                    "crypta_user_age": "3",
                    "crypta_user_gender": "1"
                },
                "data_params": {
                    "185421051725766507": {
                        "bs_data": {
                            "resource_links": {
                                "direct_data": {
                                    "targetUrl": "https://an.yandex.ru/count/Wr8ejI_zO4u3HHe0n2i7iEV8WWUWV0K0JWGnC7gzO000000uqhWxG0YKrkRYgHE00RRhGOW1jkj1a07M_VAVsjtVaWMW0TJDwU_BW8200gW1rCtfxqkm0PoYeWIu0RAYiuaXm042s07WsTSWu06GWDSVw07w0UeTc0AU_A4Oe0AW-w4OkGBEfCG2t26G9S02jkj1y0B1mzJf1816e0CMg0Cyd1Fu1CYQ2uW5o9eBa0M5gnQW1TMr0wW5tEm2i0NSx0Au1V3M1S05Wl5jo0NjznlG1Tpi0k05JlE0AI65VyCZuT0U4WvULB9Si0U0W90qk0V22z074DW72WRG29gAi852u0ZG_P0CqGd8KqYY6OOSUGAO2WB12ZYD16DjGSC_oTGxgWiGXKa2w0k5gnQqufy6c0tKbea1u0s2me51yWqaDpCsEM8tPZajE6OoOoqqD6LZBM4uCJ4jEJasC34rDsLcOp7pWQQ9ql3VuVshyQI1xzkqQu0GjjxZ6Hi9G0GHi9tlfyPBzJyPo131a1hu40O3c17iu0QXkP33_94IiZ9CF1UqqJ_f4blm9epd7Gf20gWJzTEZWycPWk0JyDO5e1JmrWMe58Mh5h0KWANX8RWKWAwc2iWK1D0Kbk64ETWKc_2KWGRW507e58m2q1MRy9I11jWLmOhsxAEFlFnZy9WMq8_0-WMW5j2_seK6i1Qb1RWM0S0MkLV95j0MghJYlW615vWNcjUAAQWN2S0NjHBG5z260zWNflizu1VybjNu1UWN2_WNZDNNXGQP6A0O4h0Oq97wXGQu60lG60Bu6CoAqxgMiktfQe0PYHbzBv0P0Q0PXX6m6RWP____0S0Pg8JbeAI2s9vsqXa5T79rRclW6Gde6UW2y1c0mWE16l__IrNqehTbc1hpf2gm6kJdYOkuzAtWRi8QzHe10000c1l9_em1i1iWk1i2A21110m38G5Yp37BQ3ilonyKmmUUjd9g3fBc5QTAf10IkOeXkB1iKT4x6V47lk1w8mztZR3PpCQT5S9h19ap6mX4d7BzThkLpO6xpmTEmLhU8In60wE67YA21V61E8EI69pyvw3Hb8f37pUcfopiAvg-WrN4dGXtnkImgbuuvM7vcowAAUP08KGy~1"
                                }
                            },
                            "bmcategoryId": "200035605",
                            "creativeId": "C4475022",
                            "bannerCategories": ["200035605"],
                            "adv_type": "16955046170479569392",
                            "geoDistanceRegular": "",
                            "domainId": "25444048",
                            "orderOptions": "9572352",
                            "count_links": {
                                "abuseUrl": "//an.yandex.ru/abuse/WA0ejI_z8Bkz100420UmvyZzfIUZ1G2x034mUhrW000003ZIk3jmbDRcugaJa07M_VAVsjtVaWMe0TJDwUzBs07WsTSWw07w0Q02eFkX6Ca6yu0f8OL_moFXq1uI3bvKibpG1mBG2820W802Y0lKEweB48L90W3W507O5S6AzkoZZxpyOu4Ny3_u680P1m0k1UCiH5B3VfGv48uTj6CY7Jjd~1",
                                "sitelinks": [{
                                    "url": "",
                                    "title": ""
                                }, {
                                    "url": "",
                                    "title": "Nissan Qashqai New 2021"
                                }, {
                                    "url": "",
                                    "title": ""
                                }, {
                                    "url": "",
                                    "title": ""
                                }],
                                "url": "https://an.yandex.ru/count/Wr8ejI_zO4u3HHe0n2i7iEV8WWUWV0K0JWGnC7gzO000000uqhWxG0YKrkRYgHE00RRhGOW1jkj1a07M_VAVsjtVaWMW0TJDwU_BW8200gW1rCtfxqkm0PoYeWIu0RAYiuaXm042s07WsTSWu06GWDSVw07w0UeTc0AU_A4Oe0AW-w4OkGBEfCG2t26G9S02jkj1y0B1mzJf1816e0CMg0Cyd1Fu1CYQ2uW5o9eBa0M5gnQW1TMr0wW5tEm2i0NSx0Au1V3M1S05Wl5jo0NjznlG1Tpi0k05JlE0AI65VyCZuT0U4WvULB9Si0U0W90qk0V22z074DW72WRG29gAi852u0ZG_P0CqGd8KqYY6OOSUGAO2WB12ZYD16DjGSC_oTGxgWiGXKa2w0k5gnQqufy6c0tKbea1u0s2me51yWqaDpCsEM8tPZajE6OoOoqqD6LZBM4uCJ4jEJasC34rDsLcOp7pWQQ9ql3VuVshyQI1xzkqQu0GjjxZ6Hi9G0GHi9tlfyPBzJyPo131a1hu40O3c17iu0QXkP33_94IiZ9CF1UqqJ_f4blm9epd7Gf20gWJzTEZWycPWk0JyDO5e1JmrWMe58Mh5h0KWANX8RWKWAwc2iWK1D0Kbk64ETWKc_2KWGRW507e58m2q1MRy9I11jWLmOhsxAEFlFnZy9WMq8_0-WMW5j2_seK6i1Qb1RWM0S0MkLV95j0MghJYlW615vWNcjUAAQWN2S0NjHBG5z260zWNflizu1VybjNu1UWN2_WNZDNNXGQP6A0O4h0Oq97wXGQu60lG60Bu6CoAqxgMiktfQe0PYHbzBv0P0Q0PXX6m6RWP____0S0Pg8JbeAI2s9vsqXa5T79rRclW6Gde6UW2y1c0mWE16l__IrNqehTbc1hpf2gm6kJdYOkuzAtWRi8QzHe10000c1l9_em1i1iWk1i2A21110m38G5Yp37BQ3ilonyKmmUUjd9g3fBc5QTAf10IkOeXkB1iKT4x6V47lk1w8mztZR3PpCQT5S9h19ap6mX4d7BzThkLpO6xpmTEmLhU8In60wE67YA21V61E8EI69pyvw3Hb8f37pUcfopiAvg-WrN4dGXtnkImgbuuvM7vcowAAUP08KGy~1",
                                "count": "https://an.yandex.ru/count/WnuejI_zO143fHW012a7iEV8nmCR6WK04GGnC7gzO000000uqhWxG0YKrkRYgHE80RRhGQ01rCtfxyk0W802g07KpUdlIx01dAAY1BW1igApYI7O0U3Pro3W0P20rn_e0Ve1Y0Bg7PW2dloX6Ba2pgJ40jmXa2Nm0i73rEa4W4Qe0poS4uW5o9eBa0M5gnQm1Tpi0hW5yDO5m0M2yMt81Utt6z05tEppW2aXXN_38-7G7X8ENbIoNB07W82GDBW7mWlG1n3O1me6q0YQYh21Gk08qFsG3D49o5D8eXc677a2c0e2mGeuZGHZRK73FydKEweB48L90kWBXQiMjEAV1fWDr9Q90U0DWiA1GV8D93SpDZbYDsOvBJXcCcCjD3HbOorXE34nBJavDZ0nDJTbPcCnyu6cYTBmt-7zg_6aWU_Rj6k04BRUunaR2K04200000004R2TxwV6I_K_6SWGmP0Q-1060vWHxE06eRcGm_oH4h8oJ3mNjD4_wH9Ry2QCvnqAGWAe4_NJeuF9cOBW4_3M1Q0KyDO5g1I5gnQm582buI6u582kfWh850JG59RXX3dO59lmb846u1G1w1IC0j0Lc_2KWGRO5S6AzkoZZxpyO_2O5j2FmFe5e1RGlzg51h0MfGMu5W705hbNoHRG5ggquhu1WHUO5vhNYYce5md05xKIq1VGXWFO5wRxFU0N_9RL-0Ne5mlu5upLruK6cHYW61Am6D2H-eK6k1WBq1W2-1ZCYjEwbhBjwMg06OaPVI-G6G6W6OOHi1cu6V___m706QY4vQ2aWjYUTj8P1NHoTMvhu1a9w1de0l0PWC83WHh__qjLzAAtPPWQywGgi1havucBkFIju6x26lKQ0G0009WRoVwC0R0R8BWR0YOWGGGC0o41OWn3IBGTByiFbW03JsyvrGsIfefJJLAeYLnb4rnOjjZaGKO88L-8U-JjJKRawsSJomxXQe9bzQTeFjxENNCGw_U14w5MSWWMhu1HGmybultWWP81EWrcd3c0YgKIpVV60EI5TmN4xy7juOe8vFppMkAXLJEKpu52w7W0~1=Wd0ejI_zOBa1DHC0D2BW-K7WkG9mbDRcugaJW06swq680RRhGP01rltodzhTtv85e07KpUdlou20W0Ae0TJDwUzBi06Seg84k06oehE98TW1uDdN8E01a83N7-W1-W6O0fxyeHYW0g3xeHZ00hRhGQ035h03d1E81SYQ2v05XQiMi0NSx0Au1V3M1S05Wl5jo0NjznlG1Tpi0k05JgW6XX6m1u20a3Iu1y8Bq0SGs0SAu0U62l47002QYh21Gk08qFsG380A0fWA0i4AE8q4Osr1mp_9-0g0jHZP2z0U4WvULB9Sw0k5gnQ83Agquhu1w0oV1fWDr9Q90J-W3i24FO0GjjxZ6PeG6mb0116mdU-dnalrFnd84C6G6fWHxE06eH6QcPcPcPcviZ9CF1UqqJ_f4blm9epd7Gf2c1C2g1FrqwE3oPc2mHNW4_3M1Q0KyDO5g1I5gnQm582buI6u582kfWh850JG59RXX3dO59lmb846w1IC0j0Lc_2KWGRO5S6AzkoZZxpyOvWMq8_0-WMW5j2_seK6i1Qb1RWM0S0MkLV95W00y3_G5ggquhu1WHUO5vhNYYd05xKIq1VGXWFO5wRxFU0N_9RL-0Ne5mlu5upLruK6cHYW61Am6D2H-eK6k1WB-1ZCYjEwbhBjwMg06OaPVI-G6G6W6OOHk1d___y1u1a9w1de0l0PWC83WHh__qjLzAAtPPWQywGgzHe10000c1l9_em1i1iWk1i2500InJXI1p5XohXKGe8DFG_2iHeIkzTSGatIxrSTEU_g1bB4AcYi10HDYA0bZ_aXpJ9YO0JsoLgibCuYyg6OnIW0~1",
                                "linkTail": "=WdKejI_zOC81NHC0H2BMikbpmW9029JMvkAf4u01jkj1Y06swq6G0TRzyf_QtT-I1Q01rCtfxyk0W802g07KpUdlIx01dAAY1BW1igApYI7O0U3Pro3W0P20rn_e0Ve1c0AU_A4Oe0AW-w4Om0Aswq6W0nQm0vmJY0N8cWkG1OMh5h05tEm2k0NmrWN01OBnRSW5xVSRq0NSx0BW1Kwe1eOHi0U0W90qk0V22z074DW72k07XWhn1m00cegmWKBW2D3za0o02WAO2WB12ZYD16DjGSC_oVWAWBKOsGlG7X8ENbIoNEWBXQiMY0ogjEA-0UWCdmQO3TIMYG4_e0x0X3s04BRUuncQ41i9G0GHi9tlfyPBzJyPo131a1gO4UpW1g4HcfcPcPcPkR8oJ3mNjD4_wH9Ry2QCvnqAGfWJ0gWJzTEZWycPWi4Lu1FmrWMW5F3M1QWKXQiMi1I0fU4Xk1I0hgOAo1G4q1IMuOGvs1IRy9I11kWKZ0BG5Plmb846s1N1YlRieu-y_6EO5j2FmFe5e1RGlzg51h0MfGMu5W705hbNoHO00F0_q1QgjEA-0O4Nc1UQruefm1Ur4j0Nq8O3s1Uc-ptW5_oMrVW5w1SB-1UCrTU51faOe1WIi1ZGaVg51hWO2_WOp8hJkfQoxUbgW1c96Nqla1a1e1c64RWP____0U0P2UWPw0Bm6O320u4Q__zBLVIYjsMO6lEaAlKQ0G0009WRoVwC0R0R8BWR0XK06yKuKWSnOSguL4A23JqFmjKQ4jlON49DqW5O7SdlwWPRn2feh0q4JT2W9RFv8KqtOc0ezicQhfJEGZcY67Dq4-9m0G00~1"
                            },
                            "algId": "3",
                            "companyName": "",
                            "metro": "",
                            "floatMarketRating": "-1",
                            "bannerFlags": "",
                            "clientId": "86158234",
                            "targetUrl": "https://ac-yugra.ru/katalog/nissan/qashqai_2019/",
                            "domainVerified": "0",
                            "eventHash": "16942085170514497983",
                            "oid": "34272880",
                            "blockFavicon": "0",
                            "region": "",
                            "adId": "185421051725766507",
                            "hitLogId": "6679493960283594448",
                            "bannerLang": "1",
                            "warning": "",
                            "orderTags": [],
                            "geoDistance": "",
                            "liked": "0",
                            "phraseId": "1078710",
                            "isTurboBanner": false
                        },
                        "direct_data": {
                            "domain": "ac-yugra.ru",
                            "facilities": "1.2 МТ (115 л.с);2021;кроссовер;Левый руль",
                            "year": "2021",
                            "priceInfo": {
                                "currency": "RUR",
                                "current": "1171000"
                            },
                            "img4": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4034615/2a000001776d848763cbd3638091c16e24d0/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4034615/2a000001776d848763cbd3638091c16e24d0/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4034615/2a000001776d848763cbd3638091c16e24d0/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4034615/2a000001776d848763cbd3638091c16e24d0/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4034615/2a000001776d848763cbd3638091c16e24d0/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4034615/2a000001776d848763cbd3638091c16e24d0/hugeX",
                                    "w": "900"
                                }
                            },
                            "body": "Кроссовер. 2021. 1.2 МТ (115 л.с). 1 171 000 ₽. Узнать подробнее!",
                            "mdsMetaInfo": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "96",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "34",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "65",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "132",
                                        "w": "282"
                                    }, {
                                        "y": "5",
                                        "h": "356",
                                        "x": "17",
                                        "w": "475"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "68",
                                        "h": "561",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "130",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "263",
                                        "w": "563"
                                    }, {
                                        "y": "9",
                                        "h": "711",
                                        "x": "33",
                                        "w": "949"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "19",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "7",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "13",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "26",
                                        "w": "56"
                                    }, {
                                        "y": "1",
                                        "h": "71",
                                        "x": "3",
                                        "w": "95"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "38",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "14",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "26",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "53",
                                        "w": "113"
                                    }, {
                                        "y": "2",
                                        "h": "142",
                                        "x": "7",
                                        "w": "190"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "68",
                                        "h": "561",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "130",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "263",
                                        "w": "563"
                                    }, {
                                        "y": "9",
                                        "h": "711",
                                        "x": "33",
                                        "w": "949"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "173",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "61",
                                        "h": "505",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "117",
                                        "w": "674"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "237",
                                        "w": "507"
                                    }, {
                                        "y": "9",
                                        "h": "640",
                                        "x": "30",
                                        "w": "854"
                                    }]
                                }
                            },
                            "mdsMetaInfo5": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "96",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "34",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "65",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "132",
                                        "w": "282"
                                    }, {
                                        "y": "5",
                                        "h": "356",
                                        "x": "18",
                                        "w": "474"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "68",
                                        "h": "561",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "130",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "263",
                                        "w": "563"
                                    }, {
                                        "y": "9",
                                        "h": "711",
                                        "x": "35",
                                        "w": "948"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "19",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "7",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "13",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "26",
                                        "w": "56"
                                    }, {
                                        "y": "1",
                                        "h": "71",
                                        "x": "4",
                                        "w": "95"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "38",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "14",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "26",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "53",
                                        "w": "113"
                                    }, {
                                        "y": "2",
                                        "h": "142",
                                        "x": "7",
                                        "w": "190"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "68",
                                        "h": "561",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "130",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "263",
                                        "w": "563"
                                    }, {
                                        "y": "9",
                                        "h": "711",
                                        "x": "35",
                                        "w": "948"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "173",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "61",
                                        "h": "505",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "117",
                                        "w": "674"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "237",
                                        "w": "507"
                                    }, {
                                        "y": "9",
                                        "h": "640",
                                        "x": "31",
                                        "w": "853"
                                    }]
                                }
                            },
                            "targetUrl": "https://ac-yugra.ru/katalog/nissan/qashqai_2019/",
                            "mdsMetaInfo2": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "96",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "37",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "76",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "125",
                                        "w": "281"
                                    }, {
                                        "y": "0",
                                        "h": "362",
                                        "x": "18",
                                        "w": "482"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "151",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "250",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "723",
                                        "x": "35",
                                        "w": "964"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "19",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "7",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "15",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "25",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "72",
                                        "x": "4",
                                        "w": "96"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "38",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "15",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "30",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "50",
                                        "w": "112"
                                    }, {
                                        "y": "0",
                                        "h": "145",
                                        "x": "7",
                                        "w": "193"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "151",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "250",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "723",
                                        "x": "35",
                                        "w": "964"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "173",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "67",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "136",
                                        "w": "674"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "225",
                                        "w": "506"
                                    }, {
                                        "y": "0",
                                        "h": "651",
                                        "x": "31",
                                        "w": "868"
                                    }]
                                }
                            },
                            "businessType": "auto",
                            "mdsMetaInfo4": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "104",
                                        "h": "156",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "37",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "76",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "132",
                                        "w": "282"
                                    }, {
                                        "y": "5",
                                        "h": "356",
                                        "x": "18",
                                        "w": "474"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "208",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "151",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "263",
                                        "w": "563"
                                    }, {
                                        "y": "9",
                                        "h": "711",
                                        "x": "35",
                                        "w": "948"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "21",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "7",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "15",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "26",
                                        "w": "56"
                                    }, {
                                        "y": "1",
                                        "h": "71",
                                        "x": "4",
                                        "w": "95"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "42",
                                        "h": "62",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "15",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "30",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "53",
                                        "w": "113"
                                    }, {
                                        "y": "2",
                                        "h": "142",
                                        "x": "7",
                                        "w": "190"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "208",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "151",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "263",
                                        "w": "563"
                                    }, {
                                        "y": "9",
                                        "h": "711",
                                        "x": "35",
                                        "w": "948"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "187",
                                        "h": "281",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "67",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "136",
                                        "w": "674"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "237",
                                        "w": "507"
                                    }, {
                                        "y": "9",
                                        "h": "640",
                                        "x": "31",
                                        "w": "853"
                                    }]
                                }
                            },
                            "model": "Qashqai New",
                            "img2": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4386168/2a000001776d84854444a4fe67e184aebaea/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4386168/2a000001776d84854444a4fe67e184aebaea/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4386168/2a000001776d84854444a4fe67e184aebaea/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4386168/2a000001776d84854444a4fe67e184aebaea/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4386168/2a000001776d84854444a4fe67e184aebaea/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4386168/2a000001776d84854444a4fe67e184aebaea/hugeX",
                                    "w": "900"
                                }
                            },
                            "vendor": "Nissan",
                            "img5": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3726035/2a000001776d8488045f49fedb2673ff02ed/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3726035/2a000001776d8488045f49fedb2673ff02ed/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3726035/2a000001776d8488045f49fedb2673ff02ed/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3726035/2a000001776d8488045f49fedb2673ff02ed/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3726035/2a000001776d8488045f49fedb2673ff02ed/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3726035/2a000001776d8488045f49fedb2673ff02ed/hugeX",
                                    "w": "900"
                                }
                            },
                            "faviconSizes": {
                                "w": "48",
                                "h": "48"
                            },
                            "title": "Nissan Qashqai New 2021",
                            "img3": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4120583/2a000001776d84864f1ca76717aed3d9d933/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4120583/2a000001776d84864f1ca76717aed3d9d933/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4120583/2a000001776d84864f1ca76717aed3d9d933/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4120583/2a000001776d84864f1ca76717aed3d9d933/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4120583/2a000001776d84864f1ca76717aed3d9d933/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4120583/2a000001776d84864f1ca76717aed3d9d933/hugeX",
                                    "w": "900"
                                }
                            },
                            "mdsMetaInfo3": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "104",
                                        "h": "156",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "37",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "65",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "125",
                                        "w": "281"
                                    }, {
                                        "y": "0",
                                        "h": "362",
                                        "x": "18",
                                        "w": "482"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "208",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "130",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "250",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "723",
                                        "x": "35",
                                        "w": "964"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "21",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "7",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "13",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "25",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "72",
                                        "x": "4",
                                        "w": "96"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "42",
                                        "h": "62",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "15",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "26",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "50",
                                        "w": "112"
                                    }, {
                                        "y": "0",
                                        "h": "145",
                                        "x": "7",
                                        "w": "193"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "208",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "130",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "250",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "723",
                                        "x": "35",
                                        "w": "964"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "187",
                                        "h": "281",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "67",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "117",
                                        "w": "674"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "225",
                                        "w": "506"
                                    }, {
                                        "y": "0",
                                        "h": "651",
                                        "x": "31",
                                        "w": "868"
                                    }]
                                }
                            },
                            "offerId": "853a3c0d044ff8e0deeee741badc1582505d9e62",
                            "name": "Nissan Qashqai New 2021",
                            "img": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4365586/2a000001776d848451b15715d4fcf6f13f52/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4365586/2a000001776d848451b15715d4fcf6f13f52/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4365586/2a000001776d848451b15715d4fcf6f13f52/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4365586/2a000001776d848451b15715d4fcf6f13f52/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4365586/2a000001776d848451b15715d4fcf6f13f52/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4365586/2a000001776d848451b15715d4fcf6f13f52/hugeX",
                                    "w": "900"
                                }
                            }
                        }
                    },
                    "181751230070814644": {
                        "bs_data": {
                            "resource_links": {
                                "direct_data": {
                                    "targetUrl": "https://an.yandex.ru/count/WrOejI_zO4u3PHe0b2m7iEV8NvfMn0K0JWGnC7gzO000000uqhWxG0YKrkRYgHE00RRhGOW1jkj1a07etkET_F7QXGMW0TJDwU_BW8200gW1rCtfxqkm0PoYeWIu0RAYiuaXm042s07WsTSWu06GWDSVw07w0VW1lBBUlW680keTc0AU_A4Oe0AW-w4OkGBEfCG2t26G9S02jkj1y0B1mzJf1816e0CAg0CyqX3u1D_O4OW5tzWHa0N4eIEW1VYo1QW5vBy4i0NalmIu1S7x2C05Wl5jo0NjznlG1UI_1E05JlE0AI65VyCZuT0U4WvULB9Si0U0W90qk0V22z074DW72WRG29gAi852u0ZG_P0CqGd8KqYY6OOSUGAO2WB12cjH4BaAPiu_oTGxgWiGXKa2w0l4eIEV1fWDr9Q90U0DWiA1GV8D93SpDZbYDsOvBJXcCcCjD3HbOorXE34nBJavDZ0nDJTbPcCnyu6cYTBmt-7zg_6aWU_Rj6k04BRUunaR2K04200000004R2TxwV6I_K_6SWGmP0Q-1060vWHxE06eRcGm_oH4es7tQiumzC_wH9Ry2QCvnqAGWAe4_NJeuF9cOBW4y7x2A0KmVi8g1J4eIEm582buI6u582kfWh850JG59RXX3dO59lmb846u1G1w1IC0j0Lc_2KWGRO5S6AzkoZZxpyO_2O5j2FmFe5e1RGlzg51h0MfGMu5W705hbNoHRG5hoothu1WHUO5vhNYYce5md05xKIq1VGXWFO5wRxFU0N_9RL-0Ne5mFu5upLruK6cHYW61Am6D2H-eK6k1W3q1W2-1ZCYjEwbhBjwMg06OaPVI-G6G6W6OOHi1cu6V___m706QY4vQ2aWjYUTj8P1NHoTMvhu1a7w1de0l0PWC83WHh__v-UZz4KW9WQywGgi1havucBkFIju6x26lKQ0G0009WRoVwC0R0R8BWR0YKWCGGCGr42nHXaKbKtBmiU5EC7dhPoAWsIfefJ9L98HAuI2IxCMrJqM4Ry8LvmVSd3_KROB6NZpenmXGI3YATSFzXk9NBWxik1Kx0MUH0tWrmF8u85oO4iWv8OdFpdeD5AnQ6_ZUa95DuLJOy7guWJ4UwCmM5LQM5T7iddG25AF000~1"
                                }
                            },
                            "bmcategoryId": "200002718",
                            "creativeId": "C4475022",
                            "bannerCategories": ["200002718"],
                            "adv_type": "16955046170479569392",
                            "geoDistanceRegular": "",
                            "domainId": "25444048",
                            "orderOptions": "9572352",
                            "count_links": {
                                "abuseUrl": "//an.yandex.ru/abuse/WA0ejI_z8Bkz100420UmvyX_QmIS1G2x034mUhrW000003ZIk3jmbDRcugaJa07etkET_F7QXGMe0TJDwUzBs07WsTSWw07w0Q02eFkX6Ca6yu0f8OL_moFXq1uI3bvKibpG1mBG2820W802Y0lKEweB48L90W3W507O5S6AzkoZZxpyOu4Ny3_u680P1m0k1UCiH5B3VfGv48uTj6CY7Jjd~1",
                                "sitelinks": [{
                                    "url": "",
                                    "title": ""
                                }, {
                                    "url": "",
                                    "title": "Changan CS75FL 2021"
                                }, {
                                    "url": "",
                                    "title": ""
                                }, {
                                    "url": "",
                                    "title": ""
                                }],
                                "url": "https://an.yandex.ru/count/WrOejI_zO4u3PHe0b2m7iEV8NvfMn0K0JWGnC7gzO000000uqhWxG0YKrkRYgHE00RRhGOW1jkj1a07etkET_F7QXGMW0TJDwU_BW8200gW1rCtfxqkm0PoYeWIu0RAYiuaXm042s07WsTSWu06GWDSVw07w0VW1lBBUlW680keTc0AU_A4Oe0AW-w4OkGBEfCG2t26G9S02jkj1y0B1mzJf1816e0CAg0CyqX3u1D_O4OW5tzWHa0N4eIEW1VYo1QW5vBy4i0NalmIu1S7x2C05Wl5jo0NjznlG1UI_1E05JlE0AI65VyCZuT0U4WvULB9Si0U0W90qk0V22z074DW72WRG29gAi852u0ZG_P0CqGd8KqYY6OOSUGAO2WB12cjH4BaAPiu_oTGxgWiGXKa2w0l4eIEV1fWDr9Q90U0DWiA1GV8D93SpDZbYDsOvBJXcCcCjD3HbOorXE34nBJavDZ0nDJTbPcCnyu6cYTBmt-7zg_6aWU_Rj6k04BRUunaR2K04200000004R2TxwV6I_K_6SWGmP0Q-1060vWHxE06eRcGm_oH4es7tQiumzC_wH9Ry2QCvnqAGWAe4_NJeuF9cOBW4y7x2A0KmVi8g1J4eIEm582buI6u582kfWh850JG59RXX3dO59lmb846u1G1w1IC0j0Lc_2KWGRO5S6AzkoZZxpyO_2O5j2FmFe5e1RGlzg51h0MfGMu5W705hbNoHRG5hoothu1WHUO5vhNYYce5md05xKIq1VGXWFO5wRxFU0N_9RL-0Ne5mFu5upLruK6cHYW61Am6D2H-eK6k1W3q1W2-1ZCYjEwbhBjwMg06OaPVI-G6G6W6OOHi1cu6V___m706QY4vQ2aWjYUTj8P1NHoTMvhu1a7w1de0l0PWC83WHh__v-UZz4KW9WQywGgi1havucBkFIju6x26lKQ0G0009WRoVwC0R0R8BWR0YKWCGGCGr42nHXaKbKtBmiU5EC7dhPoAWsIfefJ9L98HAuI2IxCMrJqM4Ry8LvmVSd3_KROB6NZpenmXGI3YATSFzXk9NBWxik1Kx0MUH0tWrmF8u85oO4iWv8OdFpdeD5AnQ6_ZUa95DuLJOy7guWJ4UwCmM5LQM5T7iddG25AF000~1",
                                "count": "https://an.yandex.ru/count/WnmejI_zO143bHW0z2W7iEV8lnHdn0K04GGnC7gzO000000uqhWxG0YKrkRYgHE80RRhGQ01rCtfxyk0W802g07KpUdlIx01dAAY1BW1igApYI7O0U3Pro3W0P20rn_e0Ve1Y0Bg7PW2dloX6Ba2pgJ40jmXa2Nm0i73rEa4W4Qe0ppI48W5tzWHa0N4eIEm1UI_1BW5mVi8m0M2yMt81Utt6z05vBy4yu0f8OL_moFXq1uI3bvKibom1u20a3Iu1y8Bq0SGs0SA1j08cegmWKBW2D3za0pH2SXJIA8PXXnv0fWA0i4AQr4GkGfcpZ_9r3kg2n25IGBe2yIX8vy6c0tKbea1u0s2me51yWqaDpCsEM8tPZajE6OoOoqqD6LZBM4uCJ4jEJasC34rDsLcOp7pWQQ9ql3VuVshyQI1xzkqQu0GjjxZ6Hi9G0G80000000Hi9tlfyPBzJyPo131a1hu40O3c17iu0QXkP33_94IZOVTgpZ3qp_f4blm9epd7Gf20gWJzTEZWycPWk0JmVi8e1J1-mYe5CIX8x0KWANX8RWKWAwc2iWK1D0Kbk64ETWKc_2KWGRW507e58m2q1MRy9I11jWLmOhsxAEFlFnZy9WMq8_0-WMW5j2_seK6i1Qb1RWM0S0MkLV95j0MlBBUlW615vWNcjUAAQWN2S0NjHBG5z260zWNflizu1VybjNu1UWN0_WNZDNNXGQP6A0O4h0Oq97wXGQu60FG60Bu6CoAqxgMiktfQe0PYHbzBv0P0Q0PXX6m6RWP____0S0Pg8JbeAI2s9vsqXa5T79rRclW6GVe6UW2y1c0mWE16l__dvwFqHI0c1hpf2gm6kJdYOkuzAtWRi8QzHe10000c1l9_em1i1iWk1i29I0n10n3KGB5b8DILJSl2nui0GQUld8g3PAcYbCbKaX4hX89BinRRF9OHWXXByIzvEqD8_AriebbHhW2mRAgKpJVRkTkE8Zr-y29KEizk9TnhWSGyNxvG9O1kWvcl780nQKIpSUD0IWLnXKGxmQtXoiHgiBZhoKsj6h6yZbGY0SF~1=WcuejI_zOBa19HC0528WbfVokG9mbDRcugaJW06swq680RRhGP01wDxZdVpnseK5e07KpUdlou20W0Ae0TJDwUzBi06Seg84k06oehE98TW1uDdN8E01a83N7-W1-W7u0Roothu1c0AU_A4Oe0AW-w4Om0Aswq6W0mgm0z8GY0NVs16G1SIX8x05vBy4k0N1-mZ01OBnRSW5xVSRq0NalmJW1Kwe1eOHi0U0W90qk0V22z074DW72k07XWhn1m00cegmWKBW2D3za0o02WAO2WB12cjH4BaAPiu_oVWAWBKOsGlG7X8ENbIoNEWBnA4ZdmQO3TIMYG4_e0x0X3s04BRUuncQ41i9G0GHi9tlfyPBzJyPo131a1gO4UpW1g4HcfcPcPcPkOs7tQiumzC_wH9Ry2QCvnqAGfWJ0gWJzTEZWycPWi4Lu1F1-mYW5C7x2AWKnA4Zi1I0fU4Xk1I0hgOAo1G4q1IMuOGvs1IRy9I11kWKZ0BG5Plmb846s1N1YlRieu-y_6EO5j2FmFe5e1RGlzg51h0MfGMu5W705hbNoHO00F0_q1Qyijw-0O4Nc1UQruefm1Ur4j0Nq8O3s1Uc-ptW5_oMrVW5w1S3-1UCrTU51faOe1WIi1ZGaVg51hWO0_WOp8hJkfQoxUbgW1c96Nqla1a1e1c64RWP____0U0P1-WPw0Bm6O320u4Q__-Vde_H582O6lEaAlKQ0G0009WRoVwC0R0R8BWR0XG04iKuKWSnOSguL4A23JqFmh4Q4hlNN49DqkzN7JdlwWPIn2feZ81GHnUPAPU8LVAO7z8i8mP6O9-itLYfJ4S1~1",
                                "linkTail": "=Wd8ejI_zOC81HHC0928MtJzXmW9029JMvkAf4u01jkj1Y06swq6G0UZUuvtyyTg51Q01rCtfxyk0W802g07KpUdlIx01dAAY1BW1igApYI7O0U3Pro3W0P20rn_e0Ve1-06yijw-0PW2dloX6A02eFkX6C02jkj1e0CAi0FI48W5tzWHa0N4eIEm1UI_1BW5mVi8m0M2yMt81Utt6z05vBy4u0LEg0Q64R07W82GDBW7mWlG1n3O1mhW1uOAyGS009gAi852u0ZG_P0CW0e2c0e2mGfhKH2v2cREFydu2e2r6DaBq1uI3bvKibpe2yIX8vy6c0tKbea1Fw0Em8GzW12stkCPcX0R2K044R2TxwV6I_K_6SWGmP0Qc17iu0QX4PgPcPcPcRcDXzshECFJF-aIM_0cZEST2aAO4mAe4_NJeuF9cOB15U0JmVi8e1J1-mYe5CIX8x0KWANX8RWKWAwc2iWK1D0Kbk64ETWKc_2KWGRe58m2q1MRy9I11jWLmOhsxAEFlFnZc1RGZy3w1Q0MqB_QXGQm5gK5k1O1m1QvLyaM003mFz0MlBBUlW615vWNcjUAAS0NjHBG5z260zWNflizu1VybjNu1UWN0_WNZDNNXGQP6A0O4h0Oq97wXGQu60Fu6CoAqxgMiktfQe0PYHbzBv0P0Q0PXX6u6V___m7W6GVe6UW2y1c0mWE16l__dvwFqHI0c1hpf2hr6W40002O6yd-Z06m6o2u6m8L01l5E587CM7Ak5H2WWqz3yBL6XBRs5n2JT81M1t9x-e6MyGgQAo1K4SWcIaNZLKocn_IT2C6XcAVh4zTAPsZcn272m00~1"
                            },
                            "algId": "3",
                            "companyName": "",
                            "metro": "",
                            "floatMarketRating": "-1",
                            "bannerFlags": "",
                            "clientId": "86158234",
                            "targetUrl": "https://ac-yugra.ru/katalog/changan/cs_75_fl/",
                            "domainVerified": "0",
                            "eventHash": "6548047539958372038",
                            "oid": "34272880",
                            "blockFavicon": "0",
                            "region": "",
                            "adId": "181751230070814644",
                            "hitLogId": "6679493960283594448",
                            "bannerLang": "1",
                            "warning": "",
                            "orderTags": [],
                            "geoDistance": "",
                            "liked": "0",
                            "phraseId": "1078710",
                            "isTurboBanner": false
                        },
                        "direct_data": {
                            "domain": "ac-yugra.ru",
                            "facilities": "1.8 АТ (150 л.с.);2021;кроссовер;Левый руль",
                            "year": "2021",
                            "priceInfo": {
                                "currency": "RUR",
                                "current": "1167900"
                            },
                            "img4": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/1641807/2a000001776d86012204c638eafa1414f31f/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/1641807/2a000001776d86012204c638eafa1414f31f/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/1641807/2a000001776d86012204c638eafa1414f31f/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/1641807/2a000001776d86012204c638eafa1414f31f/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/1641807/2a000001776d86012204c638eafa1414f31f/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/1641807/2a000001776d86012204c638eafa1414f31f/hugeX",
                                    "w": "900"
                                }
                            },
                            "body": "Кроссовер. 2021. 1.8 АТ (150 л.с.). 1 167 900 ₽. Узнать подробнее!",
                            "mdsMetaInfo": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "96",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "37",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "83",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "157",
                                        "w": "281"
                                    }, {
                                        "y": "0",
                                        "h": "368",
                                        "x": "10",
                                        "w": "490"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "166",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "314",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "735",
                                        "x": "19",
                                        "w": "980"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "19",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "7",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "17",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "31",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "74",
                                        "x": "2",
                                        "w": "98"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "38",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "15",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "33",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "63",
                                        "w": "112"
                                    }, {
                                        "y": "0",
                                        "h": "147",
                                        "x": "4",
                                        "w": "196"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "166",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "314",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "735",
                                        "x": "19",
                                        "w": "980"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "173",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "67",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "149",
                                        "w": "675"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "283",
                                        "w": "506"
                                    }, {
                                        "y": "0",
                                        "h": "661",
                                        "x": "17",
                                        "w": "882"
                                    }]
                                }
                            },
                            "mdsMetaInfo5": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "89",
                                        "h": "156",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "30",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "83",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "160",
                                        "w": "281"
                                    }, {
                                        "y": "0",
                                        "h": "368",
                                        "x": "10",
                                        "w": "490"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "177",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "59",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "166",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "319",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "735",
                                        "x": "19",
                                        "w": "980"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "18",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "6",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "17",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "32",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "74",
                                        "x": "2",
                                        "w": "98"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "35",
                                        "h": "62",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "12",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "33",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "64",
                                        "w": "112"
                                    }, {
                                        "y": "0",
                                        "h": "147",
                                        "x": "4",
                                        "w": "196"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "177",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "59",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "166",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "319",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "735",
                                        "x": "19",
                                        "w": "980"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "159",
                                        "h": "281",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "53",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "149",
                                        "w": "675"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "287",
                                        "w": "506"
                                    }, {
                                        "y": "0",
                                        "h": "661",
                                        "x": "17",
                                        "w": "882"
                                    }]
                                }
                            },
                            "targetUrl": "https://ac-yugra.ru/katalog/changan/cs_75_fl/",
                            "mdsMetaInfo2": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "96",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "37",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "83",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "157",
                                        "w": "281"
                                    }, {
                                        "y": "0",
                                        "h": "368",
                                        "x": "10",
                                        "w": "490"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "166",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "314",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "735",
                                        "x": "19",
                                        "w": "980"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "19",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "7",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "17",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "31",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "74",
                                        "x": "2",
                                        "w": "98"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "38",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "15",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "33",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "63",
                                        "w": "112"
                                    }, {
                                        "y": "0",
                                        "h": "147",
                                        "x": "4",
                                        "w": "196"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "166",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "314",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "735",
                                        "x": "19",
                                        "w": "980"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "173",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "67",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "149",
                                        "w": "675"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "283",
                                        "w": "506"
                                    }, {
                                        "y": "0",
                                        "h": "661",
                                        "x": "17",
                                        "w": "882"
                                    }]
                                }
                            },
                            "businessType": "auto",
                            "mdsMetaInfo4": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "96",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "30",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "83",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "168",
                                        "w": "281"
                                    }, {
                                        "y": "0",
                                        "h": "368",
                                        "x": "10",
                                        "w": "490"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "59",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "166",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "336",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "735",
                                        "x": "19",
                                        "w": "980"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "19",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "6",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "17",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "34",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "74",
                                        "x": "2",
                                        "w": "98"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "38",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "12",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "33",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "67",
                                        "w": "112"
                                    }, {
                                        "y": "0",
                                        "h": "147",
                                        "x": "4",
                                        "w": "196"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "59",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "166",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "336",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "735",
                                        "x": "19",
                                        "w": "980"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "173",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "53",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "149",
                                        "w": "675"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "302",
                                        "w": "506"
                                    }, {
                                        "y": "0",
                                        "h": "661",
                                        "x": "17",
                                        "w": "882"
                                    }]
                                }
                            },
                            "model": "CS75FL",
                            "img2": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4034174/2a000001776d860105b561388ba6a4cb6dee/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4034174/2a000001776d860105b561388ba6a4cb6dee/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4034174/2a000001776d860105b561388ba6a4cb6dee/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4034174/2a000001776d860105b561388ba6a4cb6dee/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4034174/2a000001776d860105b561388ba6a4cb6dee/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4034174/2a000001776d860105b561388ba6a4cb6dee/hugeX",
                                    "w": "900"
                                }
                            },
                            "vendor": "Changan",
                            "img5": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4466449/2a000001776d860242ea0b6c518fab7591bb/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4466449/2a000001776d860242ea0b6c518fab7591bb/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4466449/2a000001776d860242ea0b6c518fab7591bb/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4466449/2a000001776d860242ea0b6c518fab7591bb/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4466449/2a000001776d860242ea0b6c518fab7591bb/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4466449/2a000001776d860242ea0b6c518fab7591bb/hugeX",
                                    "w": "900"
                                }
                            },
                            "faviconSizes": {
                                "w": "48",
                                "h": "48"
                            },
                            "title": "Changan CS75FL 2021",
                            "img3": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4365586/2a000001776d860119e25f7221b90fb2a48e/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4365586/2a000001776d860119e25f7221b90fb2a48e/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4365586/2a000001776d860119e25f7221b90fb2a48e/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4365586/2a000001776d860119e25f7221b90fb2a48e/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4365586/2a000001776d860119e25f7221b90fb2a48e/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4365586/2a000001776d860119e25f7221b90fb2a48e/hugeX",
                                    "w": "900"
                                }
                            },
                            "mdsMetaInfo3": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "96",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "37",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "83",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "157",
                                        "w": "281"
                                    }, {
                                        "y": "0",
                                        "h": "368",
                                        "x": "10",
                                        "w": "490"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "166",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "314",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "735",
                                        "x": "19",
                                        "w": "980"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "19",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "7",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "17",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "31",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "74",
                                        "x": "2",
                                        "w": "98"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "38",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "15",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "33",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "63",
                                        "w": "112"
                                    }, {
                                        "y": "0",
                                        "h": "147",
                                        "x": "4",
                                        "w": "196"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "166",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "314",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "735",
                                        "x": "19",
                                        "w": "980"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "173",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "67",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "149",
                                        "w": "675"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "283",
                                        "w": "506"
                                    }, {
                                        "y": "0",
                                        "h": "661",
                                        "x": "17",
                                        "w": "882"
                                    }]
                                }
                            },
                            "offerId": "7098393b8acf6c4078844ca69bcc1d0ae3e48407",
                            "name": "Changan CS75FL 2021",
                            "img": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4402523/2a000001776d85ff909b698a5f9424f7cc84/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4402523/2a000001776d85ff909b698a5f9424f7cc84/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4402523/2a000001776d85ff909b698a5f9424f7cc84/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4402523/2a000001776d85ff909b698a5f9424f7cc84/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4402523/2a000001776d85ff909b698a5f9424f7cc84/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4402523/2a000001776d85ff909b698a5f9424f7cc84/hugeX",
                                    "w": "900"
                                }
                            }
                        }
                    },
                    "158472590891587274": {
                        "bs_data": {
                            "resource_links": {
                                "direct_data": {
                                    "targetUrl": "https://an.yandex.ru/count/WrSejI_zO4y3RHe0L2m7iEV8BVFGa0K0JmGnC7gzO000000uqhWxG0YKrkRYgHE00RRhGOW1jkj1a06KszJhwlw0imIW0TJDwU_BW8200gW1rCtfxqkm0PoYeWIu0RAYiuaXm042s07WsTSWu06GWDSVw07w0VW1ojpWlW680keTc0AU_A4Oe0AW-w4OkGBEfCG2t26G9S02jkj1y0B1mzJf1816e0CKg0Cyf13u1CRO3OW5njWDa0NVf1kW1TQM1AW5oBq3i0N8lGEu1Vxt1i05Wl5jo0NjznlG1SUz0-05cVE0AI65VyCZuT0U4WvULB9Si0U0W90qk0V22z074DW72WRG29gAi852u0ZG_P0CqGd8KqYY6OOSUGAO2WB12jNQxTTfxzC_oTGxgWiGXKa2w0lVf1lSu9y6c0tKbea1u0s2me51yWqaDpCsEM8tPZajE6OoOoqqD6LZBM4uCJ4jEJasC34rDsLcOp7pWQQ9ql3VuVshyQI1xzkqQu0GjjxZ6Hi9G0GHi9tlfyPBzJyPo131a1hu40O3c17iu0QXkP33_94Ijh5h_FpWrJ_f4blm9epd7Gf20gWJzTEZWycPWk0J_lS6e1J-zmQe5D-a6x0KWANX8RWKWAwc2iWK1D0Kbk64ETWKc_2KWGRW507e58m2q1MRy9I11jWLmOhsxAEFlFnZy9WMq8_0-WMW5j2_seK6i1Qb1RWM0S0MkLV95j0MojpWlW615vWNcjUAAQWN2S0NjHBG5z260zWNflizu1VybjNu1UWN2VWNZDNNXGQP6A0O4h0Oq97wXGQu60dG60Bu6CoAqxgMiktfQe0PYHbzBv0P0Q0PXX6m6RWP____0S0Pg8JbeAI2s9vsqXa5T79rRclW6HBe6UW2y1c0mWE16l__wmiPT3nIc1hpf2gm6kJdYOkuzAtWRi8QzHe10000c1l9_em1i1iWk1i29o1110m38G5Y33BAo3OlonySGmDFnt8g3P96YrDrfD28N0KINFYskEYnZ014lF1wafUxZRZPP_FEDk4rWiwP3IGYJi5-kntBvk3TvmCdOQtl41Q3CVhGGqIqe3uGPs0IWvNt73YwL1xwlJ4-PM5VuVHky8gu8iAvpNTWLRcmBe_dSw0G91u0~1"
                                }
                            },
                            "bmcategoryId": "200021797",
                            "creativeId": "C4475022",
                            "bannerCategories": ["200021797"],
                            "adv_type": "16955046170479569392",
                            "geoDistanceRegular": "",
                            "domainId": "25444048",
                            "orderOptions": "9572352",
                            "count_links": {
                                "abuseUrl": "//an.yandex.ru/abuse/WA0ejI_z8Bkz100420UmvyZZ4_7w1G2x034mUhrW000003ZIk3jmbDRcugaJa06KszJhwlw0imIe0TJDwUzBs07WsTSWw07w0Q02eFkX6Ca6yu0f8OL_moFXq1uI3bvKibpG1mBG2820W802Y0lKEweB48L90W3W507O5S6AzkoZZxpyOu4Ny3_u680P1m0k1UCiH5B3VfGv48uTj6CY7Jjd~1",
                                "sitelinks": [{
                                    "url": "",
                                    "title": ""
                                }, {
                                    "url": "",
                                    "title": "Lada Vesta седан 2021"
                                }, {
                                    "url": "",
                                    "title": ""
                                }, {
                                    "url": "",
                                    "title": ""
                                }],
                                "url": "https://an.yandex.ru/count/WrSejI_zO4y3RHe0L2m7iEV8BVFGa0K0JmGnC7gzO000000uqhWxG0YKrkRYgHE00RRhGOW1jkj1a06KszJhwlw0imIW0TJDwU_BW8200gW1rCtfxqkm0PoYeWIu0RAYiuaXm042s07WsTSWu06GWDSVw07w0VW1ojpWlW680keTc0AU_A4Oe0AW-w4OkGBEfCG2t26G9S02jkj1y0B1mzJf1816e0CKg0Cyf13u1CRO3OW5njWDa0NVf1kW1TQM1AW5oBq3i0N8lGEu1Vxt1i05Wl5jo0NjznlG1SUz0-05cVE0AI65VyCZuT0U4WvULB9Si0U0W90qk0V22z074DW72WRG29gAi852u0ZG_P0CqGd8KqYY6OOSUGAO2WB12jNQxTTfxzC_oTGxgWiGXKa2w0lVf1lSu9y6c0tKbea1u0s2me51yWqaDpCsEM8tPZajE6OoOoqqD6LZBM4uCJ4jEJasC34rDsLcOp7pWQQ9ql3VuVshyQI1xzkqQu0GjjxZ6Hi9G0GHi9tlfyPBzJyPo131a1hu40O3c17iu0QXkP33_94Ijh5h_FpWrJ_f4blm9epd7Gf20gWJzTEZWycPWk0J_lS6e1J-zmQe5D-a6x0KWANX8RWKWAwc2iWK1D0Kbk64ETWKc_2KWGRW507e58m2q1MRy9I11jWLmOhsxAEFlFnZy9WMq8_0-WMW5j2_seK6i1Qb1RWM0S0MkLV95j0MojpWlW615vWNcjUAAQWN2S0NjHBG5z260zWNflizu1VybjNu1UWN2VWNZDNNXGQP6A0O4h0Oq97wXGQu60dG60Bu6CoAqxgMiktfQe0PYHbzBv0P0Q0PXX6m6RWP____0S0Pg8JbeAI2s9vsqXa5T79rRclW6HBe6UW2y1c0mWE16l__wmiPT3nIc1hpf2gm6kJdYOkuzAtWRi8QzHe10000c1l9_em1i1iWk1i29o1110m38G5Y33BAo3OlonySGmDFnt8g3P96YrDrfD28N0KINFYskEYnZ014lF1wafUxZRZPP_FEDk4rWiwP3IGYJi5-kntBvk3TvmCdOQtl41Q3CVhGGqIqe3uGPs0IWvNt73YwL1xwlJ4-PM5VuVHky8gu8iAvpNTWLRcmBe_dSw0G91u0~1",
                                "count": "https://an.yandex.ru/count/Wo0ejI_zO143jHW052a7iEV8CRVhC0K04GGnC7gzO000000uqhWxG0YKrkRYgHE80RRhGQ01rCtfxyk0W802g07KpUdlIx01dAAY1BW1igApYI7O0U3Pro3W0P20rn_e0Ve1Y0Bg7PW2dloX6Ba2pgJ40jmXa2Nm0i73rEa4W4Qe0poa48W5njWDa0NVf1km1SYz0xW5_lS6m0M2yMt81Utt6z05nxq3yu0f8OL_moFXq1uI3bvKibom1u20a3Iu1y8Bq0SGs0SA1j08cegmWKBW2D3za0pH2SXJIA8PXXnv0fWA0i4ArThjrsdlqp_9r3kg2n25IGBe2z-a6zpWdmQO3TIMYG7W3OB2WK7o3IGtCpOvOZTcEIquPZ9ZBJGqPMCjOJWnCIqvEJOmCJKtPMPZCVE1fedIyD_X_Qlnf87lsxHhW12stkCP6mb010W00000016mdU-dnalrFnd84C6G6lWG1WEO4UpW1g6vaCFyaHAsiMly_E3LF-aIM_0cZEST2a82g1FrqwE3oPc2u1F-zmQW5Fxt1gWKtwGRi1I0fU4Xk1I0hgOAo1G4q1IMuOGvs1IRy9I11k0K0UWKZ0BG5Plmb846s1N1YlRieu-y_6Fmc1RGZy3w1Q0MqB_QXGQm5gK5k1O1m1QvLyaMq1RAtE2-0O4Nc1UQruefg1S9m1Ur4j0Nq8O3s1Uc-ptW5_oMrVW5w1S9-1UCrTU51faOe1WIi1ZGaVg51hWO2T0O0lWOp8hJkfQoxUbgW1c96Nqla1a1e1c64R0Pk1d___y1m1ceXEMWf8BOddRI6GLqSdLkQ-0P4kWPw0Bm6O320u4Q___h2nbqF5AO6lEaAh0QvEU9YxZqhU1kmXhr6W40002O6yd-Z06m6o2u6m8c844430CX0M98Guc86o_B3vRm0qzREJK7IVEAKoLI28bSnH1SMBROv456205VY3laxHqZyjLa4yk2S5M2PPMdQBwpdRlZ8DP70oT2hUyGB1PXfA674l5-xq2H0Re6CsuvWE9IYUPxOm3Qmhu2uidWzd0YGbKu-Mi9XrRDS3u72W7X0G00~1=WdCejI_zOBe1JHC0f2B3BtEukW9mbDRcugaJW06swq680RRhGP01bDlKw-h-WBC4e07KpUdlou20W0Ae0TJDwUzBi06Seg84k06oehE98TW1uDdN8E01a83N7-W1-W7u0ShSuBu1c0AU_A4Oe0AW-w4Om0Aswq6W0nIm0wGGY0N6s0sG1T-a6x05oBq3k0N-zmR01OBnRSW5xVSRq0N7lGFW1Pce1eOHi0U0W90qk0V22z074DW72k07XWhn1m00cegmWKBW2D3za0o02WAO2WB12jNQxTTfxzC_oVWAWBKOsGlG7X8ENbIoNEWBtwGRY0pAtE2-0UWCdmQO3TIMYG4_e0x0X3s04BRUuncQ41i9G0GHi9tlfyPBzJyPo131a1gO4UpW1g4HcfcPcPcPkRQnQ_pyuDK_wH9Ry2QCvnqAGfWJ0gWJzTEZWycPWi4Lu1F-zmQW5Fxt1gWKtwGRi1I0fU4Xk1I0hgOAo1G4q1IMuOGvs1IRy9I11kWKZ0BG5Plmb846s1N1YlRieu-y_6EO5j2FmFe5e1RGlzg51h0MfGMu5W705hbNoHO00F0_q1RAtE2-0O4Nc1UQruefm1Ur4j0Nq8O3s1Uc-ptW5_oMrVW5w1S9-1UCrTU51faOe1WIi1ZGaVg51hWO2VWOp8hJkfQoxUbgW1c96Nqla1a1e1c64RWP____0U0P4kWPw0Bm6O320u4Q___h2nbqF5AO6lEaAlKQ0G0009WRoVwC0R0R8BWR0XC04yKuKWSnOSguL4A23JqFmhKQ4jlNN49Dql5N7KdlwWPJn2feh0K4JP2W9PFv8KqpOc0W5aIxiLAPZW80~1",
                                "linkTail": "=WdSejI_zOCC1RHC0j2Ag7_hkmm9029JMvkAf4u01jkj1Y06swq6G0PJRrElg_e2p1A01rCtfxyk0W802g07KpUdlIx01dAAY1BW1igApYI7O0U3Pro3W0P20rn_e0Ve1-07AtE2-0PW2dloX6A02eFkX6C02jkj1e0CKi0Ea48W5njWDa0NVf1km1SYz0xW5_lS6m0M2yMt81Utt6z05nxq3u0MPg0Q64R07W82GDBW7mWlG1n3O1mhW1uOAyGS009gAi852u0ZG_P0CW0e2c0e2mGhLsktNQU_JFydu2e2r6DaBq1uI3bvKibpe2z-a6uWCojpWlW7e39y6c0tKbea1Fw0Em8GzW12stkCPcX0R2K044R2TxwV6I_K_6SWGmP0Qc17iu0QX4PgPcPcPcRcsiMly_E3LF-aIM_0cZEST2aAO4mAe4_NJeuF9cOB15U0J_lS6e1J-zmQe5D-a6x0KWANX8RWKWAwc2iWK1D0Kbk64ETWKc_2KWGRe58m2q1MRy9I11jWLmOhsxAEFlFnZc1RGZy3w1Q0MqB_QXGQm5gK5k1O1m1QvLyaM003mFz0MojpWlW615vWNcjUAAS0NjHBG5z260zWNflizu1VybjNu1UWN2VWNZDNNXGQP6A0O4h0Oq97wXGQu60du6CoAqxgMiktfQe0PYHbzBv0P0Q0PXX6u6V___m7W6HBe6UW2y1c0mWE16l__wmiPT3nIc1hpf2hr6W40002O6yd-Z06m6o2u6m8K01p5E587CM7Ak5H2WWqz3yBP6XBxs5n2JT83M1tPx-e6NCGgQAmE14tOe2Mt-I7DDs9WH1P4dxfIEaSt8GuN~1"
                            },
                            "algId": "3",
                            "companyName": "",
                            "metro": "",
                            "floatMarketRating": "-1",
                            "bannerFlags": "",
                            "clientId": "86158234",
                            "targetUrl": "https://ac-yugra.ru/katalog/lada/vesta/",
                            "domainVerified": "0",
                            "eventHash": "13824564526519927653",
                            "oid": "34272880",
                            "blockFavicon": "0",
                            "region": "",
                            "adId": "158472590891587274",
                            "hitLogId": "6679493960283594448",
                            "bannerLang": "1",
                            "warning": "",
                            "orderTags": [],
                            "geoDistance": "",
                            "liked": "0",
                            "phraseId": "1078710",
                            "isTurboBanner": false
                        },
                        "direct_data": {
                            "domain": "ac-yugra.ru",
                            "facilities": "1.6 MT (106 л.с.);2021;седан;Левый руль",
                            "year": "2021",
                            "priceInfo": {
                                "currency": "RUR",
                                "current": "488900"
                            },
                            "img4": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4399660/2a000001776d85cea20b0d82a54073529267/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4399660/2a000001776d85cea20b0d82a54073529267/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4399660/2a000001776d85cea20b0d82a54073529267/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4399660/2a000001776d85cea20b0d82a54073529267/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4399660/2a000001776d85cea20b0d82a54073529267/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4399660/2a000001776d85cea20b0d82a54073529267/hugeX",
                                    "w": "900"
                                }
                            },
                            "body": "Левый руль. Седан. 2021. 1.6 MT (106 л.с.). 488 900 ₽. Узнать подробнее!",
                            "mdsMetaInfo": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "104",
                                        "h": "156",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "42",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "73",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "135",
                                        "w": "282"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "0",
                                        "w": "500"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "208",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "83",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "146",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "270",
                                        "w": "563"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "21",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "8",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "15",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "27",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "0",
                                        "w": "100"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "42",
                                        "h": "62",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "17",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "29",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "54",
                                        "w": "113"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "0",
                                        "w": "200"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "208",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "83",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "146",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "270",
                                        "w": "563"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "187",
                                        "h": "281",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "75",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "131",
                                        "w": "674"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "243",
                                        "w": "507"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "0",
                                        "w": "899"
                                    }]
                                }
                            },
                            "mdsMetaInfo5": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "104",
                                        "h": "156",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "42",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "73",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "135",
                                        "w": "282"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "0",
                                        "w": "500"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "208",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "83",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "146",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "270",
                                        "w": "563"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "21",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "8",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "15",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "27",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "0",
                                        "w": "100"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "42",
                                        "h": "62",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "17",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "29",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "54",
                                        "w": "113"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "0",
                                        "w": "200"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "208",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "83",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "146",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "270",
                                        "w": "563"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "187",
                                        "h": "281",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "75",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "131",
                                        "w": "674"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "243",
                                        "w": "507"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "0",
                                        "w": "899"
                                    }]
                                }
                            },
                            "targetUrl": "https://ac-yugra.ru/katalog/lada/vesta/",
                            "mdsMetaInfo2": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "104",
                                        "h": "156",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "42",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "73",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "135",
                                        "w": "282"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "0",
                                        "w": "500"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "208",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "83",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "146",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "270",
                                        "w": "563"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "21",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "8",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "15",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "27",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "0",
                                        "w": "100"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "42",
                                        "h": "62",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "17",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "29",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "54",
                                        "w": "113"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "0",
                                        "w": "200"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "208",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "83",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "146",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "270",
                                        "w": "563"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "187",
                                        "h": "281",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "75",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "131",
                                        "w": "674"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "243",
                                        "w": "507"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "0",
                                        "w": "899"
                                    }]
                                }
                            },
                            "businessType": "auto",
                            "mdsMetaInfo4": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "104",
                                        "h": "156",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "45",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "73",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "139",
                                        "w": "282"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "0",
                                        "w": "500"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "208",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "90",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "146",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "277",
                                        "w": "563"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "21",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "9",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "15",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "28",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "0",
                                        "w": "100"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "42",
                                        "h": "62",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "18",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "29",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "55",
                                        "w": "113"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "0",
                                        "w": "200"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "208",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "90",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "146",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "277",
                                        "w": "563"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "187",
                                        "h": "281",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "81",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "131",
                                        "w": "674"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "249",
                                        "w": "507"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "0",
                                        "w": "899"
                                    }]
                                }
                            },
                            "model": "Vesta седан",
                            "img2": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4034174/2a000001776d85cc9d15e51c17b9925d1bbe/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4034174/2a000001776d85cc9d15e51c17b9925d1bbe/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4034174/2a000001776d85cc9d15e51c17b9925d1bbe/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4034174/2a000001776d85cc9d15e51c17b9925d1bbe/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4034174/2a000001776d85cc9d15e51c17b9925d1bbe/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4034174/2a000001776d85cc9d15e51c17b9925d1bbe/hugeX",
                                    "w": "900"
                                }
                            },
                            "vendor": "Lada",
                            "img5": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/931135/2a000001776d85cf3977f959f844cc377a61/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/931135/2a000001776d85cf3977f959f844cc377a61/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/931135/2a000001776d85cf3977f959f844cc377a61/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/931135/2a000001776d85cf3977f959f844cc377a61/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/931135/2a000001776d85cf3977f959f844cc377a61/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/931135/2a000001776d85cf3977f959f844cc377a61/hugeX",
                                    "w": "900"
                                }
                            },
                            "faviconSizes": {
                                "w": "48",
                                "h": "48"
                            },
                            "title": "Lada Vesta седан 2021",
                            "img3": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4034452/2a000001776d85cca3e26e264051077a34bb/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4034452/2a000001776d85cca3e26e264051077a34bb/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4034452/2a000001776d85cca3e26e264051077a34bb/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4034452/2a000001776d85cca3e26e264051077a34bb/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4034452/2a000001776d85cca3e26e264051077a34bb/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4034452/2a000001776d85cca3e26e264051077a34bb/hugeX",
                                    "w": "900"
                                }
                            },
                            "mdsMetaInfo3": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "96",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "37",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "73",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "125",
                                        "w": "281"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "0",
                                        "w": "500"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "146",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "250",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "19",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "7",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "15",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "25",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "0",
                                        "w": "100"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "38",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "15",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "29",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "50",
                                        "w": "112"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "0",
                                        "w": "200"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "146",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "250",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "173",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "67",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "131",
                                        "w": "674"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "225",
                                        "w": "506"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "0",
                                        "w": "899"
                                    }]
                                }
                            },
                            "offerId": "26c585d69d9881a024109abba797a1d91de687aa",
                            "name": "Lada Vesta седан 2021",
                            "img": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/2121500/2a000001776d85cbd64825271d2b3344d1ff/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/2121500/2a000001776d85cbd64825271d2b3344d1ff/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/2121500/2a000001776d85cbd64825271d2b3344d1ff/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/2121500/2a000001776d85cbd64825271d2b3344d1ff/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/2121500/2a000001776d85cbd64825271d2b3344d1ff/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/2121500/2a000001776d85cbd64825271d2b3344d1ff/hugeX",
                                    "w": "900"
                                }
                            }
                        }
                    },
                    "150003322124105850": {
                        "bs_data": {
                            "resource_links": {
                                "direct_data": {
                                    "targetUrl": "https://an.yandex.ru/count/WrSejI_zO4u3RHe0P2m7iEV8igT5M0K0JWGnC7gzO000000uqhWxG0YKrkRYgHE00RRhGOW1jkj1a07quQ-bmSxrb0IW0TJDwU_BW8200gW1rCtfxqkm0PoYeWIu0RAYiuaXm042s07WsTSWu06GWDSVw07w0UeTc0AU_A4Oe0AW-w4OkGBEfCG2t26G9S02jkj1y0B1mzJf1816e0CIg0CyYHFu1BAF38W5ieyCa0NmanYW1QVP0wW5jee3i0MsYWEu1OcI1i05Wl5jo0NjznlG1RMA0-05JlE0AI65VyCZuT0U4WvULB9Si0U0W90qk0V22z074DW72WRG29gAi852u0ZG_P0CqGd8KqYY6OOSUGAO2WB12kaYrClfqiG_oTGxgWiGXKa2w0lmawgquhu1w0oV1fWDr9Q90U0DWiA1GV8D93SpDZbYDsOvBJXcCcCjD3HbOorXE34nBJavDZ0nDJTbPcCnyu6cYTBmt-4Ze0x0X3tzg_6aWU_Rj6k04BRUunaR2K044R2TxwV6I_K_6SWGmP0Q-1060vWHxE06eRcGm_oH4fnkwjsCsT8_wH9Ry2QCvnqAGWAe4_NJeuF9cOBW4ucI1g0KYP86g1JmanYm582buI6u582kfWh850JG59RXX3dO59lmb846u1G1w1IC0j0Lc_2KWGRO5S6AzkoZZxpyO_2O5j2FmFe5e1RGlzg51h0MfGMu5W705hbNoHRG5ggquhu1WHUO5vhNYYce5md05xKIq1VGXWFO5wRxFU0N_9RL-0Ne5mhu5upLruK6cHYW61Am6D2H-eK6k1WAq1W2-1ZCYjEwbhBjwMg06OaPVI-G6G6W6OOHi1cu6V___m706QY4vQ2aWjYUTj8P1NHoTMvhu1aFw1de0l0PWC83WHh__sF6MoKPH9WQywGgi1havucBkFIju6x26lKQ0G0009WRoVwC0R0R8BWR0YOWCGGC0q42n9X4dD5sByiV52C3JyTowWoIHejJTQIGY5m54boORL7H4ndn1xz02yd3dKRORBDnPvpm4a7cR0S2aK-vVh4TAm-dDbYBFEpX-g031B0WF50oADd1oNyE6akfEFItCJtvmbpHz3zOHPo8S6SCXrKr2gSyDd_JHL7572W4WmS0~1"
                                }
                            },
                            "bmcategoryId": "200035605",
                            "creativeId": "C4475022",
                            "bannerCategories": ["200035605"],
                            "adv_type": "16955046170479569392",
                            "geoDistanceRegular": "",
                            "domainId": "25444048",
                            "orderOptions": "9572352",
                            "count_links": {
                                "abuseUrl": "//an.yandex.ru/abuse/WA0ejI_z8Bkz100420UmvyX5E7_S1G2x034mUhrW000003ZIk3jmbDRcugaJa07quQ-bmSxrb0Ie0TJDwUzBs07WsTSWw07w0Q02eFkX6Ca6yu0f8OL_moFXq1uI3bvKibpG1mBG2820W802Y0lKEweB48L90W3W507O5S6AzkoZZxpyOu4Ny3_u680P1m0k1UCiH5B3VfGv48uTj6CY7Jjd~1",
                                "sitelinks": [{
                                    "url": "",
                                    "title": ""
                                }, {
                                    "url": "",
                                    "title": "Hyundai Creta New 2021"
                                }, {
                                    "url": "",
                                    "title": ""
                                }, {
                                    "url": "",
                                    "title": ""
                                }],
                                "url": "https://an.yandex.ru/count/WrSejI_zO4u3RHe0P2m7iEV8igT5M0K0JWGnC7gzO000000uqhWxG0YKrkRYgHE00RRhGOW1jkj1a07quQ-bmSxrb0IW0TJDwU_BW8200gW1rCtfxqkm0PoYeWIu0RAYiuaXm042s07WsTSWu06GWDSVw07w0UeTc0AU_A4Oe0AW-w4OkGBEfCG2t26G9S02jkj1y0B1mzJf1816e0CIg0CyYHFu1BAF38W5ieyCa0NmanYW1QVP0wW5jee3i0MsYWEu1OcI1i05Wl5jo0NjznlG1RMA0-05JlE0AI65VyCZuT0U4WvULB9Si0U0W90qk0V22z074DW72WRG29gAi852u0ZG_P0CqGd8KqYY6OOSUGAO2WB12kaYrClfqiG_oTGxgWiGXKa2w0lmawgquhu1w0oV1fWDr9Q90U0DWiA1GV8D93SpDZbYDsOvBJXcCcCjD3HbOorXE34nBJavDZ0nDJTbPcCnyu6cYTBmt-4Ze0x0X3tzg_6aWU_Rj6k04BRUunaR2K044R2TxwV6I_K_6SWGmP0Q-1060vWHxE06eRcGm_oH4fnkwjsCsT8_wH9Ry2QCvnqAGWAe4_NJeuF9cOBW4ucI1g0KYP86g1JmanYm582buI6u582kfWh850JG59RXX3dO59lmb846u1G1w1IC0j0Lc_2KWGRO5S6AzkoZZxpyO_2O5j2FmFe5e1RGlzg51h0MfGMu5W705hbNoHRG5ggquhu1WHUO5vhNYYce5md05xKIq1VGXWFO5wRxFU0N_9RL-0Ne5mhu5upLruK6cHYW61Am6D2H-eK6k1WAq1W2-1ZCYjEwbhBjwMg06OaPVI-G6G6W6OOHi1cu6V___m706QY4vQ2aWjYUTj8P1NHoTMvhu1aFw1de0l0PWC83WHh__sF6MoKPH9WQywGgi1havucBkFIju6x26lKQ0G0009WRoVwC0R0R8BWR0YOWCGGC0q42n9X4dD5sByiV52C3JyTowWoIHejJTQIGY5m54boORL7H4ndn1xz02yd3dKRORBDnPvpm4a7cR0S2aK-vVh4TAm-dDbYBFEpX-g031B0WF50oADd1oNyE6akfEFItCJtvmbpHz3zOHPo8S6SCXrKr2gSyDd_JHL7572W4WmS0~1",
                                "count": "https://an.yandex.ru/count/Wo4ejI_zO143lHW0L2a7iEV8DvLC10K04GGnC7gzO000000uqhWxG0YKrkRYgHE80RRhGQ01rCtfxyk0W802g07KpUdlIx01dAAY1BW1igApYI7O0U3Pro3W0P20rn_e0Ve1Y0Bg7PW2dloX6Ba2pgJ40jmXa2Nm0i73rEa4W4Qe0po94uW5ieyCa0NmanYm1RQA0xW5YP86m0M2yMt81Utt6z05jOe3yu0f8OL_moFXq1uI3bvKibom1u20a3Iu1y8Bq0SGs0SA1j08cegmWKBW2D3za0pH2SXJIA8PXXnv0fWA0i4AwIBKo-dIn3_9r3kg2n25IGBe2_2JghJYlW7e39y6c0tKbea1u0s2me51yWqaDpCsEM8tPZajE6OoOoqqD6LZBM4uCJ4jEJasC34rDsLcOp7pWQQ9ql3VuVshyQI1xzkqQu0GjjxZ6Hi9G0G80000000Hi9tlfyPBzJyPo131a1hu40O3c17iu0QXkP33_94Id6xgtOpPqZ_f4blm9epd7Gf20gWJzTEZWycPWk0JYP86e1I9aWQe5F2J6B0KWANX8RWKWAwc2iWK1D0Kbk64ETWKc_2KWGRW507e58m2q1MRy9I11jWLmOhsxAEFlFnZy9WMq8_0-WMW5j2_seK6i1Qb1RWM0S0MkLV95j0MghJYlW615vWNcjUAAQWN2S0NjHBG5z260zWNflizu1VybjNu1UWN2lWNZDNNXGQP6A0O4h0Oq97wXGQu60hG60Bu6CoAqxgMiktfQe0PYHbzBv0P0Q0PXX6m6RWP____0S0Pg8JbeAI2s9vsqXa5T79rRclW6G_e6UW2y1c0mWE16l__OyPR9Hb4c1hpf2gm6kJdYOkuzAtWRi8QzHe10000c1l9_em1i1iWk1i29I0n10n3KGB5c6HIsJOl2nuiOGDFIpdr1qcpnQacAJGYLua45-OjDdaZ8uJ05-YFlBrhHBvcDh6C2LSbM5PqYkRZxTmr1x6-7FWIQf6709mCEeY0zni7iWpGOJ3Zom6KB9LelZS685juLq1y6TmUJaIe2XT_BUdGgXd8vq0XT3m0~1=WcqejI_zOBa17HC0z26qDWnUkG9mbDRcugaJW06swq680RRhGP01zE6lfS7EzPG4e07KpUdlou20W0Ae0TJDwUzBi06Seg84k06oehE98TW1uDdN8E01a83N7-W1-W6O0fxyeHYW0g3xeHZ00hRhGQ034h03YHE81RAF3905y9COi0MsYWEu1OcI1i05Wl5jo0NjznlG1RMA0-05JgW6XX6m1u20a3Iu1y8Bq0SGs0SAu0U62l47002QYh21Gk08qFsG380A0fWA0i4AwIBKo-dIn3_9-0g0jHZP2z0U4WvULB9Sw0lmanY83Agquhu1w0oV1fWDr9Q90J-W3i24FO0GjjxZ6PeG6mb0116mdU-dnalrFnd84C6G6fWHxE06eH6QcPcPcPcvd6xgtOpPqZ_f4blm9epd7Gf2c1C2g1FrqwE3oPc2mHNW4ucI1g0KYP86g1JmanYm582buI6u582kfWh850JG59RXX3dO59lmb846w1IC0j0Lc_2KWGRO5S6AzkoZZxpyOvWMq8_0-WMW5j2_seK6i1Qb1RWM0S0MkLV95j0MghJYlW615vWNcjUAAS0NjHBG5z260zWNflizu1VybjNu1UWN2lWNZDNNXGQP6A0O4h0Oq97wXGQu60hu6CoAqxgMiktfQe0PYHbzBv0P0Q0PXX6u6V___m7W6G_e6UW2y1c0mWE16l__OyPR9Hb4c1hpf2hr6W40002O6yd-Z06m6o2u6m8K01B5E587CM7Ak5I4q139Fn-9buA4lUOIQf9-l-h8ULSta29MGMCb86X212rvp0zfbX438x1FrcAbT1QH3yKiHW40~1",
                                "linkTail": "=Wd4ejI_zOC81FHC012A2VQJDmW9029JMvkAf4u01jkj1Y06swq6G0VJXhwN1plMK1A01rCtfxyk0W802g07KpUdlIx01dAAY1BW1igApYI7O0U3Pro3W0P20rn_e0Ve1c0AU_A4Oe0AW-w4Om0Aswq6W0nAm0uaJY0MoZmoG1V2J6B05jee3k0M9aWR01OBnRSW5xVSRq0MrYWFW1Kwe1eOHi0U0W90qk0V22z074DW72k07XWhn1m00cegmWKBW2D3za0o02WAO2WB12kaYrClfqiG_oVWAWBKOsGlG7X8ENbIoNEWBy9COY0ogjEA-0UWCdmQO3TIMYG4_e0x0X3s04BRUuncQ41i9G0GHi9tlfyPBzJyPo131a1gO4UpW1g4HcfcPcPcPkPnkwjsCsT8_wH9Ry2QCvnqAGfWJ0gWJzTEZWycPWi4Lu1E9aWQW58cI1gWKy9COi1I0fU4Xk1I0hgOAo1G4q1IMuOGvs1IRy9I11kWKZ0BG5Plmb846s1N1YlRieu-y_6EO5j2FmFe5e1RGlzg51h0MfGMu5W705hbNoHRG5ggquhu1WHUO5vhNYYd05xKIq1VGXWFO5wRxFU0N_9RL-0Ne5mhu5upLruK6cHYW61Am6D2H-eK6k1WA-1ZCYjEwbhBjwMg06OaPVI-G6G6W6OOHk1d___y1u1aFw1de0l0PWC83WHh__sF6MoKPH9WQywGgzHe10000c1l9_em1i1iWk1i25G0RnJXI1p5XohXKXD0GoJyV2Po2XCRc4cgI3i3gI7vNDzWYLa5ZRI1eWWOjcSqFQReH0qEnJzPqfNGMoX75cAER48SB~1"
                            },
                            "algId": "3",
                            "companyName": "",
                            "metro": "",
                            "floatMarketRating": "-1",
                            "bannerFlags": "",
                            "clientId": "86158234",
                            "targetUrl": "https://ac-yugra.ru/katalog/hyundai/creta_bi_2/",
                            "domainVerified": "0",
                            "eventHash": "14761613584656057787",
                            "oid": "34272880",
                            "blockFavicon": "0",
                            "region": "",
                            "adId": "150003322124105850",
                            "hitLogId": "6679493960283594448",
                            "bannerLang": "1",
                            "warning": "",
                            "orderTags": [],
                            "geoDistance": "",
                            "liked": "0",
                            "phraseId": "1078710",
                            "isTurboBanner": false
                        },
                        "direct_data": {
                            "domain": "ac-yugra.ru",
                            "facilities": "1.6 MT (123 л.с.);2021;кроссовер;Левый руль",
                            "year": "2021",
                            "priceInfo": {
                                "currency": "RUR",
                                "current": "824000"
                            },
                            "img4": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4489610/2a000001776d85fb2719f2738daaedfb4056/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4489610/2a000001776d85fb2719f2738daaedfb4056/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4489610/2a000001776d85fb2719f2738daaedfb4056/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4489610/2a000001776d85fb2719f2738daaedfb4056/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4489610/2a000001776d85fb2719f2738daaedfb4056/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4489610/2a000001776d85fb2719f2738daaedfb4056/hugeX",
                                    "w": "900"
                                }
                            },
                            "body": "Кроссовер. 2021. 1.6 MT (123 л.с.). 824 000 ₽. Узнать подробнее!",
                            "mdsMetaInfo": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "89",
                                        "h": "156",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "31",
                                        "h": "280",
                                        "x": "3",
                                        "w": "498"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "75",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "133",
                                        "w": "281"
                                    }, {
                                        "y": "7",
                                        "h": "335",
                                        "x": "31",
                                        "w": "447"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "177",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "61",
                                        "h": "560",
                                        "x": "3",
                                        "w": "996"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "149",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "265",
                                        "w": "562"
                                    }, {
                                        "y": "14",
                                        "h": "669",
                                        "x": "61",
                                        "w": "893"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "18",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "6",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "15",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "27",
                                        "w": "56"
                                    }, {
                                        "y": "1",
                                        "h": "67",
                                        "x": "6",
                                        "w": "89"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "35",
                                        "h": "62",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "12",
                                        "h": "112",
                                        "x": "1",
                                        "w": "199"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "30",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "53",
                                        "w": "112"
                                    }, {
                                        "y": "3",
                                        "h": "134",
                                        "x": "12",
                                        "w": "179"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "177",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "61",
                                        "h": "560",
                                        "x": "3",
                                        "w": "996"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "149",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "265",
                                        "w": "562"
                                    }, {
                                        "y": "14",
                                        "h": "669",
                                        "x": "61",
                                        "w": "893"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "159",
                                        "h": "281",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "55",
                                        "h": "504",
                                        "x": "3",
                                        "w": "896"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "134",
                                        "w": "674"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "238",
                                        "w": "506"
                                    }, {
                                        "y": "14",
                                        "h": "602",
                                        "x": "55",
                                        "w": "804"
                                    }]
                                }
                            },
                            "mdsMetaInfo5": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "89",
                                        "h": "156",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "33",
                                        "h": "274",
                                        "x": "12",
                                        "w": "488"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "75",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "133",
                                        "w": "281"
                                    }, {
                                        "y": "7",
                                        "h": "335",
                                        "x": "31",
                                        "w": "447"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "177",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "66",
                                        "h": "548",
                                        "x": "24",
                                        "w": "975"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "149",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "265",
                                        "w": "562"
                                    }, {
                                        "y": "14",
                                        "h": "669",
                                        "x": "61",
                                        "w": "893"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "18",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "7",
                                        "h": "55",
                                        "x": "2",
                                        "w": "98"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "15",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "27",
                                        "w": "56"
                                    }, {
                                        "y": "1",
                                        "h": "67",
                                        "x": "6",
                                        "w": "89"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "35",
                                        "h": "62",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "13",
                                        "h": "110",
                                        "x": "5",
                                        "w": "195"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "30",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "53",
                                        "w": "112"
                                    }, {
                                        "y": "3",
                                        "h": "134",
                                        "x": "12",
                                        "w": "179"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "177",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "66",
                                        "h": "548",
                                        "x": "24",
                                        "w": "975"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "149",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "265",
                                        "w": "562"
                                    }, {
                                        "y": "14",
                                        "h": "669",
                                        "x": "61",
                                        "w": "893"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "159",
                                        "h": "281",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "59",
                                        "h": "493",
                                        "x": "22",
                                        "w": "877"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "134",
                                        "w": "674"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "238",
                                        "w": "506"
                                    }, {
                                        "y": "14",
                                        "h": "602",
                                        "x": "55",
                                        "w": "804"
                                    }]
                                }
                            },
                            "targetUrl": "https://ac-yugra.ru/katalog/hyundai/creta_bi_2/",
                            "mdsMetaInfo2": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "96",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "31",
                                        "h": "280",
                                        "x": "3",
                                        "w": "498"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "64",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "135",
                                        "w": "281"
                                    }, {
                                        "y": "7",
                                        "h": "335",
                                        "x": "31",
                                        "w": "447"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "61",
                                        "h": "560",
                                        "x": "3",
                                        "w": "996"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "128",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "269",
                                        "w": "562"
                                    }, {
                                        "y": "14",
                                        "h": "669",
                                        "x": "61",
                                        "w": "893"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "19",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "6",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "13",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "27",
                                        "w": "56"
                                    }, {
                                        "y": "1",
                                        "h": "67",
                                        "x": "6",
                                        "w": "89"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "38",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "12",
                                        "h": "112",
                                        "x": "1",
                                        "w": "199"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "26",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "54",
                                        "w": "112"
                                    }, {
                                        "y": "3",
                                        "h": "134",
                                        "x": "12",
                                        "w": "179"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "61",
                                        "h": "560",
                                        "x": "3",
                                        "w": "996"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "128",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "269",
                                        "w": "562"
                                    }, {
                                        "y": "14",
                                        "h": "669",
                                        "x": "61",
                                        "w": "893"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "173",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "55",
                                        "h": "504",
                                        "x": "3",
                                        "w": "896"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "115",
                                        "w": "675"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "242",
                                        "w": "506"
                                    }, {
                                        "y": "14",
                                        "h": "602",
                                        "x": "55",
                                        "w": "804"
                                    }]
                                }
                            },
                            "businessType": "auto",
                            "mdsMetaInfo4": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "96",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "31",
                                        "h": "280",
                                        "x": "3",
                                        "w": "498"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "64",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "135",
                                        "w": "281"
                                    }, {
                                        "y": "7",
                                        "h": "335",
                                        "x": "31",
                                        "w": "447"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "61",
                                        "h": "560",
                                        "x": "3",
                                        "w": "996"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "128",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "269",
                                        "w": "562"
                                    }, {
                                        "y": "14",
                                        "h": "669",
                                        "x": "61",
                                        "w": "893"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "19",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "6",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "13",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "27",
                                        "w": "56"
                                    }, {
                                        "y": "1",
                                        "h": "67",
                                        "x": "6",
                                        "w": "89"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "38",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "12",
                                        "h": "112",
                                        "x": "1",
                                        "w": "199"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "26",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "54",
                                        "w": "112"
                                    }, {
                                        "y": "3",
                                        "h": "134",
                                        "x": "12",
                                        "w": "179"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "61",
                                        "h": "560",
                                        "x": "3",
                                        "w": "996"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "128",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "269",
                                        "w": "562"
                                    }, {
                                        "y": "14",
                                        "h": "669",
                                        "x": "61",
                                        "w": "893"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "173",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "55",
                                        "h": "504",
                                        "x": "3",
                                        "w": "896"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "115",
                                        "w": "675"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "242",
                                        "w": "506"
                                    }, {
                                        "y": "14",
                                        "h": "602",
                                        "x": "55",
                                        "w": "804"
                                    }]
                                }
                            },
                            "model": "Creta New",
                            "img2": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4120583/2a000001776d85fa552c6ad0ac999b362d0c/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4120583/2a000001776d85fa552c6ad0ac999b362d0c/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4120583/2a000001776d85fa552c6ad0ac999b362d0c/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4120583/2a000001776d85fa552c6ad0ac999b362d0c/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4120583/2a000001776d85fa552c6ad0ac999b362d0c/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4120583/2a000001776d85fa552c6ad0ac999b362d0c/hugeX",
                                    "w": "900"
                                }
                            },
                            "vendor": "Hyundai",
                            "img5": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4079992/2a000001776d85fcd9e36757bf9ff5b89794/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4079992/2a000001776d85fcd9e36757bf9ff5b89794/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4079992/2a000001776d85fcd9e36757bf9ff5b89794/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4079992/2a000001776d85fcd9e36757bf9ff5b89794/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4079992/2a000001776d85fcd9e36757bf9ff5b89794/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4079992/2a000001776d85fcd9e36757bf9ff5b89794/hugeX",
                                    "w": "900"
                                }
                            },
                            "faviconSizes": {
                                "w": "48",
                                "h": "48"
                            },
                            "title": "Hyundai Creta New 2021",
                            "img3": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4080947/2a000001776d85fb0e58b48afc4d27d1ee50/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4080947/2a000001776d85fb0e58b48afc4d27d1ee50/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4080947/2a000001776d85fb0e58b48afc4d27d1ee50/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4080947/2a000001776d85fb0e58b48afc4d27d1ee50/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4080947/2a000001776d85fb0e58b48afc4d27d1ee50/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4080947/2a000001776d85fb0e58b48afc4d27d1ee50/hugeX",
                                    "w": "900"
                                }
                            },
                            "mdsMetaInfo3": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "96",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "31",
                                        "h": "280",
                                        "x": "3",
                                        "w": "498"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "64",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "124",
                                        "w": "281"
                                    }, {
                                        "y": "7",
                                        "h": "335",
                                        "x": "31",
                                        "w": "447"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "61",
                                        "h": "560",
                                        "x": "3",
                                        "w": "996"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "128",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "248",
                                        "w": "562"
                                    }, {
                                        "y": "14",
                                        "h": "669",
                                        "x": "61",
                                        "w": "893"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "19",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "6",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "13",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "25",
                                        "w": "56"
                                    }, {
                                        "y": "1",
                                        "h": "67",
                                        "x": "6",
                                        "w": "89"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "38",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "12",
                                        "h": "112",
                                        "x": "1",
                                        "w": "199"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "26",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "50",
                                        "w": "112"
                                    }, {
                                        "y": "3",
                                        "h": "134",
                                        "x": "12",
                                        "w": "179"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "61",
                                        "h": "560",
                                        "x": "3",
                                        "w": "996"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "128",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "248",
                                        "w": "562"
                                    }, {
                                        "y": "14",
                                        "h": "669",
                                        "x": "61",
                                        "w": "893"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "173",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "55",
                                        "h": "504",
                                        "x": "3",
                                        "w": "896"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "115",
                                        "w": "675"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "223",
                                        "w": "506"
                                    }, {
                                        "y": "14",
                                        "h": "602",
                                        "x": "55",
                                        "w": "804"
                                    }]
                                }
                            },
                            "offerId": "34ecd2c9525356ed33cf639cf2bc6b4f2f821c0d",
                            "name": "Hyundai Creta New 2021",
                            "img": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4402523/2a000001776d85f98163f2d40aff061b6139/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4402523/2a000001776d85f98163f2d40aff061b6139/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4402523/2a000001776d85f98163f2d40aff061b6139/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4402523/2a000001776d85f98163f2d40aff061b6139/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4402523/2a000001776d85f98163f2d40aff061b6139/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4402523/2a000001776d85f98163f2d40aff061b6139/hugeX",
                                    "w": "900"
                                }
                            }
                        }
                    },
                    "161041636043749084": {
                        "bs_data": {
                            "resource_links": {
                                "direct_data": {
                                    "targetUrl": "https://an.yandex.ru/count/WqSejI_zO3e3xHa0f2i7iEV8TsCwG0K0EWGnC7gzO000000uqhWxG0YKrkRYgHE00RRhGOW1jkj1a06us_lc-A2Hl0IW0TJDwU_BW8200gW1rCtfxqkm0PoYeWIu0RAYiuaXm042s07WsTSWu06GWDSVw07w0OW2wXsO0fxyeHYW0g3xeHYv0iwan0BS8P0bm0Aswq7m0i73rEa4W4QW0mwe0pou3_W4x_yGY0Nl_n2G1RJm8Q05wfS5g0MOgGIm1PYf1BW5lSu8m0M2yMt81Utt6z05bwa4u0MPyu0f8OL_moFXq1uI3bvKibom1u20a3Iu1y8Bq0SGs0SA1j08cegmWKBW2D3za0pH2SXJIA8PXXnv0fWA0i4AtHJ63XI_q3_9r3kg2n25IGBe2xJm8V0B0-WCdmQO3TIMYG7W3OB2WK7o3IGtCpOvOZTcEIquPZ9ZBJGqPMCjOJWnCIqvEJOmCJKtPMPZCVE1fedIyD_X_Qlnf87lsxHhW12stkCP6mb0116mdU-dnalrFnd84C6G6lWG1WEO4UpW1g6vaCFyaH942dKSU2ZGF-aIM_0cZEST2a82g1FrqwE3oPc2u1EzpWYW5BtE2AWKjF0Xi1I0fU4Xk1I0hgOAo1G4q1IMuOGvs1IRy9I11k0K0UWKZ0BG5Plmb846s1N1YlRieu-y_6Fmc1RGZy3w1Q0MqB_QXGQm5gK5k1O1m1QvLyaMWHUO5vhNYYce5md05xKIq1VGXWFO5wRxFU0N_9RL-0Ne5mRu5upLruK6cHYW61Am6D2H-eK6k1W6q1W2-1ZCYjEwbhBjwMg06OaPVI-G6G6W6OOHi1cu6V___m706QY4vQ2aWjYUTj8P1NHoTMvhu1aCw1de0l0PWC83WHh__qjalX1K9fWQywGgi1havucBkFIju6x26lKQ0G0009WRoVwC0R0R8BWR0YKWCGGCnIY1OWmooAeRJmeUTE87PhPoAWtIf8fJ9L8gqbO9WWlt5liybX5oY1T2N_9Mln4fYzc4iq9u8K7P30Oo4ASelztEOtCGxf-1EwtMUpW04IRe3fGCFdhmy9I3GouLX3usvYPRU5SSlHvC8aw9S6Vp7EXKMdXUH_8vK8WS3m00~1"
                                }
                            },
                            "bmcategoryId": "0",
                            "creativeId": "C4475022",
                            "bannerCategories": [],
                            "adv_type": "16955046170479569392",
                            "geoDistanceRegular": "",
                            "domainId": "25444048",
                            "orderOptions": "9572352",
                            "count_links": {
                                "abuseUrl": "//an.yandex.ru/abuse/WA0ejI_z8Bkz100420UmvyY5o5yG1G2x034mUhrW000003ZIk3jmbDRcugaJa06us_lc-A2Hl0Ie0TJDwUzBs07WsTSWw07w0Q02eFkX6Ca6yu0f8OL_moFXq1uI3bvKibpG1mBG2820W802Y0lKEweB48L90W3W507O5S6AzkoZZxpyOu4Ny3_u680P1m0k1UCiH5B3VfGv48uTj6CY7Jjd~1",
                                "sitelinks": [{
                                    "url": "",
                                    "title": ""
                                }, {
                                    "url": "",
                                    "title": "JAC J7 2021"
                                }, {
                                    "url": "",
                                    "title": ""
                                }, {
                                    "url": "",
                                    "title": ""
                                }],
                                "url": "https://an.yandex.ru/count/WqSejI_zO3e3xHa0f2i7iEV8TsCwG0K0EWGnC7gzO000000uqhWxG0YKrkRYgHE00RRhGOW1jkj1a06us_lc-A2Hl0IW0TJDwU_BW8200gW1rCtfxqkm0PoYeWIu0RAYiuaXm042s07WsTSWu06GWDSVw07w0OW2wXsO0fxyeHYW0g3xeHYv0iwan0BS8P0bm0Aswq7m0i73rEa4W4QW0mwe0pou3_W4x_yGY0Nl_n2G1RJm8Q05wfS5g0MOgGIm1PYf1BW5lSu8m0M2yMt81Utt6z05bwa4u0MPyu0f8OL_moFXq1uI3bvKibom1u20a3Iu1y8Bq0SGs0SA1j08cegmWKBW2D3za0pH2SXJIA8PXXnv0fWA0i4AtHJ63XI_q3_9r3kg2n25IGBe2xJm8V0B0-WCdmQO3TIMYG7W3OB2WK7o3IGtCpOvOZTcEIquPZ9ZBJGqPMCjOJWnCIqvEJOmCJKtPMPZCVE1fedIyD_X_Qlnf87lsxHhW12stkCP6mb0116mdU-dnalrFnd84C6G6lWG1WEO4UpW1g6vaCFyaH942dKSU2ZGF-aIM_0cZEST2a82g1FrqwE3oPc2u1EzpWYW5BtE2AWKjF0Xi1I0fU4Xk1I0hgOAo1G4q1IMuOGvs1IRy9I11k0K0UWKZ0BG5Plmb846s1N1YlRieu-y_6Fmc1RGZy3w1Q0MqB_QXGQm5gK5k1O1m1QvLyaMWHUO5vhNYYce5md05xKIq1VGXWFO5wRxFU0N_9RL-0Ne5mRu5upLruK6cHYW61Am6D2H-eK6k1W6q1W2-1ZCYjEwbhBjwMg06OaPVI-G6G6W6OOHi1cu6V___m706QY4vQ2aWjYUTj8P1NHoTMvhu1aCw1de0l0PWC83WHh__qjalX1K9fWQywGgi1havucBkFIju6x26lKQ0G0009WRoVwC0R0R8BWR0YKWCGGCnIY1OWmooAeRJmeUTE87PhPoAWtIf8fJ9L8gqbO9WWlt5liybX5oY1T2N_9Mln4fYzc4iq9u8K7P30Oo4ASelztEOtCGxf-1EwtMUpW04IRe3fGCFdhmy9I3GouLX3usvYPRU5SSlHvC8aw9S6Vp7EXKMdXUH_8vK8WS3m00~1",
                                "count": "https://an.yandex.ru/count/WnCejI_zO0C3JHW0T2W7iEV8iZvR6WK00mGnC7gzO000000uqhWxG0YKrkRYgHE80RRhGQ01rCtfxyk0W802g07KpUdlIx01dAAY1BW1igApYI7O0U3Pro3W0P20rn_e0Ve1Y0Bg7PW2dloX6Ba2pgJ40jmXa2Nm0i73rEa4W4Qe0pou3uW5x_yGa0Mqy26m1PYf1BW5lSu8m0M2yMt81Utt6z05bwa4yu0f8OL_moFXq1uI3bvKibom1u20a3Iu1y8Bq0SGs0SA1j08cegmWKBW2D3za0pH2SXJIA8PXXnv0fWA0i4AtHJ63XI_q3_9r3kg2n25IGBe2xJm8V0B0-WCdmQO3TIMYG7W3OB2WK7o3IGtCpOvOZTcEIquPZ9ZBJGqPMCjOJWnCIqvEJOmCJKtPMPZCVE1fedIyD_X_Qlnf87lsxHhW12stkCP6mb0116mdU-dnalrFnd84C6G6lWG1WEO4UpW1g6vaCFyaH942dKSU2ZGF-aIM_0cZEST2a82g1FrqwE3oPc2u1EzpWYW5BtE2AWKjF0Xi1I0fU4Xk1I0hgOAo1G4q1IMuOGvs1IRy9I11k0K0UWKZ0BG5Plmb846s1N1YlRieu-y_6Fmc1RGZy3w1Q0MqB_QXGQm5gK5k1O1m1QvLyaMWHUO5vhNYYce5md05xKIq1VGXWFO5wRxFU0N_9RL-0Ne5mRu5upLruK6cHYW61Am6D2H-eK6k1W6q1W2-1ZCYjEwbhBjwMg06OaPVI-G6G6W6OOHi1cu6V___m706QY4vQ2aWjYUTj8P1NHoTMvhu1aCw1de0l0PWC83WHh__qjalX1K9fWQywGgi1havucBkFIju6x26lKQ0G0009WRoVwC0R0R8BWR0YKWCGGCnIY1OWf2oMeRJmeUl603CqivzGTfiiMf9YazqbOnWWlB5eqyoOWTw0Mr7tbqnmXvVJQgZ1DUI90eoq2a-bCcNsnthZbGzUV0lK-BF1n4nFkD0ra6w3gOSSW1r2cLQ7us1g1QU5T0V1dS7av4g0gNlvRSqAePpET08Huy~1=Wc0ejI_zOAK1jH80j248jtR6fG9mbDRcugaJW06swq680RRhGP01kDlxvlYWaRm4e07KpUdlou20W0Ae0TJDwUzBi06Seg84k06oehE98TW1uDdN8E01a83N7-W1-W6O0fxyeHYW0g3xeHZ00hRhGQ033h03k0-81U__4905jF0Xi0MOgGIu1RtE2C05Wl5jo0NjznlG1PUf1E05cQW6XX6m1u20a3Iu1y8Bq0SGs0SAu0U62l47002QYh21Gk08qFsG380A0fWA0i4AtHJ63XI_q3_9-0g0jHZP2z0U4WvULB9Sw0kqy27e39y6c0tKbea1Fw0Em8GzW12stkCPcX0R2K04200000004R2TxwV6I_K_6SWGmP0Qc17iu0QX4PgPcPcPcRb42dKSU2ZGF-aIM_0cZEST2aAO4mAe4_NJeuF9cOB15U0JlSu8e1IzpWYe5BJm8R0KWANX8RWKWAwc2iWK1D0Kbk64ETWKc_2KWGRe58m2q1MRy9I11jWLmOhsxAEFlFnZc1RGZy3w1Q0MqB_QXGQm5gK5k1O1m1QvLyaM003mFu4Nc1UQruefm1Ur4j0Nq8O3s1Uc-ptW5_oMrVW5w1S6-1UCrTU51faOe1WIi1ZGaVg51hWO1lWOp8hJkfQoxUbgW1c96Nqla1a1e1c64RWP____0U0P3EWPw0Bm6O320u4Q__zBPBuGL2QO6lEaAlKQ0G0009WRoVwC0R0R8BWR0X80_iGuKWTHOCguL4AoXY0FGdmQaX3MN08rIPgxkbSHiGyquVr0EnPeSNfn2FQB60E11T6dgbIcem00~1",
                                "linkTail": "=WcKejI_zOAu1tH80n26QiskrhW9029JMvkAf4u01jkj1Y06swq6G0RZR--Rue96y1A01rCtfxyk0W802g07KpUdlIx01dAAY1BW1igApYI7O0U3Pro3W0P20rn_e0Ve1c0AU_A4Oe0AW-w4Om0Aswq6W0mwm0xWFY0Nl_n2G1RJm8R05cAa4k0MzpWZ01OBnRSW5xVSRq0MNgGJW1Pce1eOHi0U0W90qk0V22z074DW72k07XWhn1m00cegmWKBW2D3za0o02WAO2WB12jqKnWuKlz0_oVWAWBKOsGlG7X8ENbIoNEWBjF0Xw0oV1fWDr9Q90J-W3i24FO0GjjxZ6PeG6mb010W00000016mdU-dnalrFnd84C6G6fWHxE06eH6QcPcPcPcvH0fr77Weq3_f4blm9epd7Gf2c1C2g1FrqwE3oPc2mHNW4xtE2A0KlSu8g1Iqy26m582buI6u582kfWh850JG59RXX3dO59lmb846w1IC0j0Lc_2KWGRO5S6AzkoZZxpyOvWMq8_0-WMW5j2_seK6i1Qb1RWM0S0MkLV95W00y3-15vWNcjUAAS0NjHBG5z260zWNflizu1VybjNu1UWN1lWNZDNNXGQP6A0O4h0Oq97wXGQu60Ru6CoAqxgMiktfQe0PYHbzBv0P0Q0PXX6u6V___m7W6Gpe6UW2y1c0mWE16l__IsI-45Gcc1hpf2hr6W40002O6yd-Z06m6o2u6m8J00V5E587KM3Ak5H2ieOW3qAW6f8mrrm2DKc-kxgN4x4FD240GJieQ763SGWMZHW3YWNHuAoKpj5DYCC5~1"
                            },
                            "algId": "3",
                            "companyName": "",
                            "metro": "",
                            "floatMarketRating": "-1",
                            "bannerFlags": "",
                            "clientId": "86158234",
                            "targetUrl": "https://ac-yugra.ru/katalog/jac/j7/",
                            "domainVerified": "0",
                            "eventHash": "14607862887524253067",
                            "oid": "34272880",
                            "blockFavicon": "0",
                            "region": "",
                            "adId": "161041636043749084",
                            "hitLogId": "6679493960283594448",
                            "bannerLang": "1",
                            "warning": "",
                            "orderTags": [],
                            "geoDistance": "",
                            "liked": "0",
                            "phraseId": "1078710",
                            "isTurboBanner": false
                        },
                        "direct_data": {
                            "domain": "ac-yugra.ru",
                            "targetUrl": "https://ac-yugra.ru/katalog/jac/j7/",
                            "businessType": "auto",
                            "faviconSizes": {
                                "w": "48",
                                "h": "48"
                            },
                            "year": "2021",
                            "priceInfo": {
                                "currency": "RUR",
                                "current": "748000"
                            },
                            "mdsMetaInfo": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "112",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "57",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "46",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "132",
                                        "w": "282"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "0",
                                        "w": "500"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "223",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "114",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "92",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "263",
                                        "w": "563"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "22",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "11",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "9",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "26",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "0",
                                        "w": "100"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "45",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "23",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "18",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "53",
                                        "w": "113"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "0",
                                        "w": "200"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "223",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "114",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "92",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "263",
                                        "w": "563"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "201",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "103",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "83",
                                        "w": "674"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "237",
                                        "w": "507"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "0",
                                        "w": "899"
                                    }]
                                }
                            },
                            "model": "J7",
                            "offerId": "1336850d7252d6ccd52fb20d95d7870262f1aa2f",
                            "title": "JAC J7 2021",
                            "img": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/49185/2a00000179a3695a330d46ce2bee4286ed40/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/49185/2a00000179a3695a330d46ce2bee4286ed40/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/49185/2a00000179a3695a330d46ce2bee4286ed40/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/49185/2a00000179a3695a330d46ce2bee4286ed40/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/49185/2a00000179a3695a330d46ce2bee4286ed40/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/49185/2a00000179a3695a330d46ce2bee4286ed40/hugeX",
                                    "w": "900"
                                }
                            },
                            "facilities": "1.5 MT (136 л.с.);2021;лифтбек;Левый руль",
                            "body": "Левый руль. Лифтбек. 2021. 1.5 MT (136 л.с.). 748 000 ₽. Узнать подробнее!",
                            "name": "JAC J7 2021",
                            "vendor": "JAC"
                        }
                    },
                    "177938655261815406": {
                        "bs_data": {
                            "resource_links": {
                                "direct_data": {
                                    "targetUrl": "https://an.yandex.ru/count/WrGejI_zO4y3LHe092m7iEV8O6zTyGK0JmGnC7gzO000000uqhWxG0YKrkRYgHE00RRhGOW1jkj1a07SoOUhz92L-0IW0TJDwU_BW8200gW1rCtfxqkm0PoYeWIu0RAYiuaXm042s07WsTSWu06GWDSVw07w0VW1ojpWlW680keTc0AU_A4Oe0AW-w4OkGBEfCG2t26G9S02jkj1y0B1mzJf1816e0C6g0CyYn7u187a4eW5WUGIa0MAjoMW1RRT1QW5cEC4i0MOumIu1Od22S05Wl5jo0NjznlG1PZZ1E05cVE0AI65VyCZuT0U4WvULB9Si0U0W90qk0V22z074DW72fgAi852u0ZG_P0CqGd8KqYY6OOSUGAO2WB12eQwXcasxT4_oTGxgWiGXKa2w0kAjoNSu9y6c0tKbea1u0s2me51yWqaDpCsEM8tPZajE6OoOoqqD6LZBM4uCJ4jEJasC34rDsLcOp7pWQQ9ql3VuVshyQI1xzkqQu0GjjxZ6Hi9G0GHi9tlfyPBzJyPo131a1hu40O3c17iu0QXkP33_94I5VLn5PoZqZ_f4blm9epd7Gf20gWJzTEZWycPWk0JYS89e1I9mWce58gt9R0KWANX8RWKWAwc2iWK1D0Kbk64ETWKc_2KWGRW507e58m2q1MRy9I11jWLmOhsxAEFlFnZy9WMq8_0-WMW5j2_seK6i1Qb1RWM0S0MkLV95j0MojpWlW615vWNcjUAAQWN2S0NjHBG5z260zWNflizu1VybjNu1UWN0lWNZDNNXGQP6A0O4h0Oq97wXGQu60BG60Bu6CoAqxgMiktfQe0PYHbzBv0P0Q0PXX6m6RWP____0S0Pg8JbeAI2s9vsqXa5T79rRclW6HJe6UW2y1c0mWE16l__vzNplNLac1hpf2gm6kJdYOkuzAtWRi8QzHe10000c1l9_em1i1iWk1i29o1110m38G5YZ37Co3OlonySumUUjd9g3fBc5QTAf10IkOeXkB1iST4x6G48UE7rG5xk6d6pbyqxAuJN23fdDf28E0NxxNOicuDtdm-SXBM-GrWCnkX33n7HWkH0d85935QUSk38fNxelrsSFJEc2QSVc5V4AH7EROu3gyg5TNaudmE5UF00~1"
                                }
                            },
                            "bmcategoryId": "200021797",
                            "creativeId": "C4475022",
                            "bannerCategories": ["200021797"],
                            "adv_type": "16955046170479569392",
                            "geoDistanceRegular": "",
                            "domainId": "25444048",
                            "orderOptions": "9572352",
                            "count_links": {
                                "abuseUrl": "//an.yandex.ru/abuse/WA0ejI_z8Bkz100420UmvyZM52Np1G2x034mUhrW000003ZIk3jmbDRcugaJa07SoOUhz92L-0Ie0TJDwUzBs07WsTSWw07w0Q02eFkX6Ca6yu0f8OL_moFXq1uI3bvKibpG1mBG2820W802Y0lKEweB48L90W3W507O5S6AzkoZZxpyOu4Ny3_u680P1m0k1UCiH5B3VfGv48uTj6CY7Jjd~1",
                                "sitelinks": [{
                                    "url": "",
                                    "title": ""
                                }, {
                                    "url": "",
                                    "title": "Lada Largus универсал 5 мест 2021"
                                }, {
                                    "url": "",
                                    "title": ""
                                }, {
                                    "url": "",
                                    "title": ""
                                }],
                                "url": "https://an.yandex.ru/count/WrGejI_zO4y3LHe092m7iEV8O6zTyGK0JmGnC7gzO000000uqhWxG0YKrkRYgHE00RRhGOW1jkj1a07SoOUhz92L-0IW0TJDwU_BW8200gW1rCtfxqkm0PoYeWIu0RAYiuaXm042s07WsTSWu06GWDSVw07w0VW1ojpWlW680keTc0AU_A4Oe0AW-w4OkGBEfCG2t26G9S02jkj1y0B1mzJf1816e0C6g0CyYn7u187a4eW5WUGIa0MAjoMW1RRT1QW5cEC4i0MOumIu1Od22S05Wl5jo0NjznlG1PZZ1E05cVE0AI65VyCZuT0U4WvULB9Si0U0W90qk0V22z074DW72fgAi852u0ZG_P0CqGd8KqYY6OOSUGAO2WB12eQwXcasxT4_oTGxgWiGXKa2w0kAjoNSu9y6c0tKbea1u0s2me51yWqaDpCsEM8tPZajE6OoOoqqD6LZBM4uCJ4jEJasC34rDsLcOp7pWQQ9ql3VuVshyQI1xzkqQu0GjjxZ6Hi9G0GHi9tlfyPBzJyPo131a1hu40O3c17iu0QXkP33_94I5VLn5PoZqZ_f4blm9epd7Gf20gWJzTEZWycPWk0JYS89e1I9mWce58gt9R0KWANX8RWKWAwc2iWK1D0Kbk64ETWKc_2KWGRW507e58m2q1MRy9I11jWLmOhsxAEFlFnZy9WMq8_0-WMW5j2_seK6i1Qb1RWM0S0MkLV95j0MojpWlW615vWNcjUAAQWN2S0NjHBG5z260zWNflizu1VybjNu1UWN0lWNZDNNXGQP6A0O4h0Oq97wXGQu60BG60Bu6CoAqxgMiktfQe0PYHbzBv0P0Q0PXX6m6RWP____0S0Pg8JbeAI2s9vsqXa5T79rRclW6HJe6UW2y1c0mWE16l__vzNplNLac1hpf2gm6kJdYOkuzAtWRi8QzHe10000c1l9_em1i1iWk1i29o1110m38G5YZ37Co3OlonySumUUjd9g3fBc5QTAf10IkOeXkB1iST4x6G48UE7rG5xk6d6pbyqxAuJN23fdDf28E0NxxNOicuDtdm-SXBM-GrWCnkX33n7HWkH0d85935QUSk38fNxelrsSFJEc2QSVc5V4AH7EROu3gyg5TNaudmE5UF00~1",
                                "count": "https://an.yandex.ru/count/Wo0ejI_zO143jHW052a7iEV8unuQy0K04GGnC7gzO000000uqhWxG0YKrkRYgHE80RRhGQ01rCtfxyk0W802g07KpUdlIx01dAAY1BW1igApYI7O0U3Pro3W0P20rn_e0Ve1Y0Bg7PW2dloX6Ba2pgJ40jmXa2Nm0i73rEa4W4Qe0poB4OW5WUGIa0MAjoMm1PZZ1BW5YS89m0M2yMt81Utt6z05cEC4yu0f8OL_moFXq1uI3bvKibom1u20a3Iu1y8Bq0SGs0SA1j08cegmWKBW2D3za0pH2SXJIA8PXXnv0fWA0i4AXhg6QJRjqJ_9r3kg2n25IGBe2ugt9TpWdmQO3TIMYG7W3OB2WK7o3IGtCpOvOZTcEIquPZ9ZBJGqPMCjOJWnCIqvEJOmCJKtPMPZCVE1fedIyD_X_Qlnf87lsxHhW12stkCP6mb010W00000016mdU-dnalrFnd84C6G6lWG1WEO4UpW1g6vaCFyaH8LzN4LdAFIF-aIM_0cZEST2a82g1FrqwE3oPc2u1E9mWcW58d22QWKYhSbi1I0fU4Xk1I0hgOAo1G4q1IMuOGvs1IRy9I11k0K0UWKZ0BG5Plmb846s1N1YlRieu-y_6Fmc1RGZy3w1Q0MqB_QXGQm5gK5k1O1m1QvLyaMq1RAtE2-0O4Nc1UQruefg1S9m1Ur4j0Nq8O3s1Uc-ptW5_oMrVW5w1S2-1UCrTU51faOe1WIi1ZGaVg51hWO0j0O0lWOp8hJkfQoxUbgW1c96Nqla1a1e1c64R0Pk1d___y1m1ceXEMWf8BOddRI6GLqSdLkQ-0P5EWPw0Bm6O320u4Q___drVEzTMIO6lEaAh0QvEU9YxZqhU1kmXhr6W40002O6yd-Z06m6o2u6m8c844430CX0M98Guc86o_B3vRm0qzREJK7IVEAKoLI28bSnH1SMBROv456205VY3laxHqZyjLa4yk2S5M2PPMdQBwpdRlZ8DP70oT2hUyGB1PXfA674l5-xq2H0Re6CsuvWE9IYUPxOm3Qmhu2uidWzd0YGbKu-Mi9XrRDS3u72W7X0G00~1=WdCejI_zOBe1JHC0f2AXxLsrkW9mbDRcugaJW06swq680RRhGP01tCc7g_IGbVW4e07KpUdlou20W0Ae0TJDwUzBi06Seg84k06oehE98TW1uDdN8E01a83N7-W1-W7u0ShSuBu1c0AU_A4Oe0AW-w4Om0Aswq6W0mQm0uiHY0M1v1AG1Ogt9R05cEC4k0M9mWd01OBnRSW5xVSRq0MOumJW1Pce1eOHi0U0W90qk0V22z074DW72k07XWhn1m00cegmWKBW2D3za0o02WAO2WB12eQwXcasxT4_oVWAWBKOsGlG7X8ENbIoNEWBYhSbY0pAtE2-0UWCdmQO3TIMYG4_e0x0X3s04BRUuncQ41i9G0GHi9tlfyPBzJyPo131a1gO4UpW1g4HcfcPcPcPkHNrSHMSez8_wH9Ry2QCvnqAGfWJ0gWJzTEZWycPWi4Lu1E9mWcW58d22QWKYhSbi1I0fU4Xk1I0hgOAo1G4q1IMuOGvs1IRy9I11kWKZ0BG5Plmb846s1N1YlRieu-y_6EO5j2FmFe5e1RGlzg51h0MfGMu5W705hbNoHO00F0_q1RAtE2-0O4Nc1UQruefm1Ur4j0Nq8O3s1Uc-ptW5_oMrVW5w1S2-1UCrTU51faOe1WIi1ZGaVg51hWO0lWOp8hJkfQoxUbgW1c96Nqla1a1e1c64RWP____0U0P5EWPw0Bm6O320u4Q___drVEzTMIO6lEaAlKQ0G0009WRoVwC0R0R8BWR0XC04yKuKWSnOSguL4A23JqFmhKQ4jlNN49Dql5N7KdlwWPJn2feh0K4JP2W9PFv8KqpOc0W5aIxiLAPZW80~1",
                                "linkTail": "=WdSejI_zOCC1RHC0j2B8tTJZmm9029JMvkAf4u01jkj1Y06swq6G0Tp9Xwlqa9Nu1A01rCtfxyk0W802g07KpUdlIx01dAAY1BW1igApYI7O0U3Pro3W0P20rn_e0Ve1-07AtE2-0PW2dloX6A02eFkX6C02jkj1e0C6i0EB4OW5WUGIa0MAjoMm1PZZ1BW5YS89m0M2yMt81Utt6z05cEC4u0MPg0Q64R07W82GDBW7mWlG1n3O1mhW1uOAyGS009gAi852u0ZG_P0CW0e2c0e2mGg6kePfDktHFydu2e2r6DaBq1uI3bvKibpe2ugt9OWCojpWlW7e39y6c0tKbea1Fw0Em8GzW12stkCPcX0R2K044R2TxwV6I_K_6SWGmP0Qc17iu0QX4PgPcPcPcRaLzN4LdAFIF-aIM_0cZEST2aAO4mAe4_NJeuF9cOB15U0JYS89e1I9mWce58gt9R0KWANX8RWKWAwc2iWK1D0Kbk64ETWKc_2KWGRe58m2q1MRy9I11jWLmOhsxAEFlFnZc1RGZy3w1Q0MqB_QXGQm5gK5k1O1m1QvLyaM003mFz0MojpWlW615vWNcjUAAS0NjHBG5z260zWNflizu1VybjNu1UWN0lWNZDNNXGQP6A0O4h0Oq97wXGQu60Bu6CoAqxgMiktfQe0PYHbzBv0P0Q0PXX6u6V___m7W6HJe6UW2y1c0mWE16l__vzNplNLac1hpf2hr6W40002O6yd-Z06m6o2u6m8K01p5E587CM7Ak5H2WWqz3yBP6XBxs5n2JT83M1tPx-e6NCGgQAmE14tOe2Mt-I7DDs9WH1P4dxfIEaSt8GuN~1"
                            },
                            "algId": "3",
                            "companyName": "",
                            "metro": "",
                            "floatMarketRating": "-1",
                            "bannerFlags": "",
                            "clientId": "86158234",
                            "targetUrl": "https://ac-yugra.ru/katalog/lada/largus-5-mest/",
                            "domainVerified": "0",
                            "eventHash": "4968535808756733736",
                            "oid": "34272880",
                            "blockFavicon": "0",
                            "region": "",
                            "adId": "177938655261815406",
                            "hitLogId": "6679493960283594448",
                            "bannerLang": "1",
                            "warning": "",
                            "orderTags": [],
                            "geoDistance": "",
                            "liked": "0",
                            "phraseId": "1078710",
                            "isTurboBanner": false
                        },
                        "direct_data": {
                            "domain": "ac-yugra.ru",
                            "facilities": "1.6 MT (87 л.с.);2021;универсал;Левый руль",
                            "year": "2021",
                            "priceInfo": {
                                "currency": "RUR",
                                "current": "474900"
                            },
                            "img4": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3986452/2a000001776d850e847b33acb1d4957ede7a/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3986452/2a000001776d850e847b33acb1d4957ede7a/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3986452/2a000001776d850e847b33acb1d4957ede7a/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3986452/2a000001776d850e847b33acb1d4957ede7a/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3986452/2a000001776d850e847b33acb1d4957ede7a/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3986452/2a000001776d850e847b33acb1d4957ede7a/hugeX",
                                    "w": "900"
                                }
                            },
                            "body": "Левый руль. Универсал. 2021. 1.6 MT (87 л.с.). 474 900 ₽. Узнать подробнее!",
                            "mdsMetaInfo": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "104",
                                        "h": "156",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "37",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "94",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "139",
                                        "w": "282"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "0",
                                        "w": "500"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "208",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "187",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "277",
                                        "w": "563"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "21",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "7",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "19",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "28",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "0",
                                        "w": "100"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "42",
                                        "h": "62",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "15",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "37",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "55",
                                        "w": "113"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "0",
                                        "w": "200"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "208",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "187",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "277",
                                        "w": "563"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "187",
                                        "h": "281",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "67",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "168",
                                        "w": "675"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "249",
                                        "w": "507"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "0",
                                        "w": "899"
                                    }]
                                }
                            },
                            "mdsMetaInfo5": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "104",
                                        "h": "156",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "37",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "83",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "146",
                                        "w": "281"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "0",
                                        "w": "500"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "208",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "166",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "291",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "21",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "7",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "17",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "29",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "0",
                                        "w": "100"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "42",
                                        "h": "62",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "15",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "33",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "58",
                                        "w": "112"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "0",
                                        "w": "200"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "208",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "166",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "291",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "187",
                                        "h": "281",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "67",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "149",
                                        "w": "675"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "262",
                                        "w": "506"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "0",
                                        "w": "899"
                                    }]
                                }
                            },
                            "targetUrl": "https://ac-yugra.ru/katalog/lada/largus-5-mest/",
                            "mdsMetaInfo2": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "104",
                                        "h": "156",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "37",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "83",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "153",
                                        "w": "281"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "0",
                                        "w": "500"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "208",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "166",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "305",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "21",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "7",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "17",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "31",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "0",
                                        "w": "100"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "42",
                                        "h": "62",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "15",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "33",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "61",
                                        "w": "112"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "0",
                                        "w": "200"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "208",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "166",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "305",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "187",
                                        "h": "281",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "67",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "149",
                                        "w": "675"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "275",
                                        "w": "506"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "0",
                                        "w": "899"
                                    }]
                                }
                            },
                            "businessType": "auto",
                            "mdsMetaInfo4": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "96",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "37",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "94",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "157",
                                        "w": "281"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "0",
                                        "w": "500"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "187",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "314",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "19",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "7",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "19",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "31",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "0",
                                        "w": "100"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "38",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "15",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "37",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "63",
                                        "w": "112"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "0",
                                        "w": "200"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "187",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "314",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "173",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "67",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "168",
                                        "w": "675"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "283",
                                        "w": "506"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "0",
                                        "w": "899"
                                    }]
                                }
                            },
                            "model": "Largus универсал 5 мест",
                            "img2": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4399660/2a000001776d850bcc0cf391dc01ddae308d/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4399660/2a000001776d850bcc0cf391dc01ddae308d/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4399660/2a000001776d850bcc0cf391dc01ddae308d/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4399660/2a000001776d850bcc0cf391dc01ddae308d/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4399660/2a000001776d850bcc0cf391dc01ddae308d/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4399660/2a000001776d850bcc0cf391dc01ddae308d/hugeX",
                                    "w": "900"
                                }
                            },
                            "vendor": "Lada",
                            "img5": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4079347/2a000001776d850e922857651a86445d601b/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4079347/2a000001776d850e922857651a86445d601b/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4079347/2a000001776d850e922857651a86445d601b/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4079347/2a000001776d850e922857651a86445d601b/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4079347/2a000001776d850e922857651a86445d601b/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4079347/2a000001776d850e922857651a86445d601b/hugeX",
                                    "w": "900"
                                }
                            },
                            "faviconSizes": {
                                "w": "48",
                                "h": "48"
                            },
                            "title": "Lada Largus универсал 5 мест 2021",
                            "img3": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4389182/2a000001776d850db5c8b4fafd96b654c912/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4389182/2a000001776d850db5c8b4fafd96b654c912/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4389182/2a000001776d850db5c8b4fafd96b654c912/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4389182/2a000001776d850db5c8b4fafd96b654c912/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4389182/2a000001776d850db5c8b4fafd96b654c912/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4389182/2a000001776d850db5c8b4fafd96b654c912/hugeX",
                                    "w": "900"
                                }
                            },
                            "mdsMetaInfo3": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "112",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "37",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "96",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "132",
                                        "w": "282"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "0",
                                        "w": "500"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "223",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "191",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "263",
                                        "w": "563"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "22",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "7",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "19",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "26",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "0",
                                        "w": "100"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "45",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "15",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "38",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "53",
                                        "w": "113"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "0",
                                        "w": "200"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "223",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "191",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "263",
                                        "w": "563"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "201",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "67",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "172",
                                        "w": "674"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "237",
                                        "w": "507"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "0",
                                        "w": "899"
                                    }]
                                }
                            },
                            "offerId": "83cd27a623587edcd6973f8141142daf0eda3792",
                            "name": "Lada Largus универсал 5 мест 2021",
                            "img": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4396278/2a000001776d850ba96e6d47ce313bdebc0b/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4396278/2a000001776d850ba96e6d47ce313bdebc0b/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4396278/2a000001776d850ba96e6d47ce313bdebc0b/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4396278/2a000001776d850ba96e6d47ce313bdebc0b/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4396278/2a000001776d850ba96e6d47ce313bdebc0b/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4396278/2a000001776d850ba96e6d47ce313bdebc0b/hugeX",
                                    "w": "900"
                                }
                            }
                        }
                    },
                    "parent_data": {
                        "bs_data": {
                            "liked": "0",
                            "creativeId": "C4475022",
                            "bannerCategories": [],
                            "geoDistanceRegular": "",
                            "bannerLang": "1",
                            "domainId": "25444048",
                            "hitLogId": "6679493960283594448",
                            "metro": "",
                            "companyName": "",
                            "blockFavicon": "0",
                            "bannerFlags": "",
                            "adId": "72057604221514602",
                            "clientId": "86158234",
                            "targetUrl": "",
                            "domainVerified": "0",
                            "isTurboBanner": false,
                            "oid": "34272880",
                            "eventHash": "8726997622592132040",
                            "region": "",
                            "floatMarketRating": "-1",
                            "orderOptions": "9572352",
                            "count_links": {
                                "abuseUrl": "//an.yandex.ru/abuse/WA0ejI_z8Bkz100420UmvyWkjiSH1G2x034mUhrW000003ZIk3jmbDRcugaJa07KpUdlou20W0AO0TJDwUzBs07WsTSWw07w0Q02eFkX6Ca6yu0f8OL_moFXq1uI3bvKibpG1mBG2820W802Y0lKEweB48L90W3W507O5S6AzkoZZxpyOu4Ny3_u680P1m0k1UCiH5B3VfGv48uTj6CY7Jjd~1",
                                "count": "https://an.yandex.ru/count/WkiejI_zODW23HS0z2O7iEV8xGGjP0K0s0CnC7gzO000000uqhWxG0YKrkRYgHE80RRhGPW1rCtfxqkm0PoYeWIu0RAYiuaXs07WsTSWu06GWDSVw07w0OW2wXsv0iwan0BS8P0by0B1mzJf1816g0Cyk0J_0OW5Zy1Aa0MOlPG1i0Mu-1Au1UhV9S05Wl5jo0NjznlG1RVu4lE0AI65VyCZsGO0001WuG000Aa7q1uI3bvKibom1u20a3Iu1z0Bq0SGs0S81j08cegmWKBW2D3za0pH2SXJIA8PXXnv0idKEweB48L90kWBcBsK0V0B0-WCdmQO3TIMYG7W3OB2WK7o3IGtCpOvOZTcEIquPZ9ZBJGqPMCjOJWnCIqvEJOmCJKtPMPZCVE1fedIyD_X_Qlnf87lsxHhsGy0y3-04BRUunaR2K044R2TxwV6I_K_6SWGmP0Q-1060vWHxE06eRcGm_oH4kaIM_0cZEST2a82g1FrqwE3oPc2u1FgtoM05801e1JgtoMe59Yzb06m582buI6u582kfWh850JG59RXX3dO59lmb846u1G1w1IC0j0Lc_2KWGRO5S6AzkoZZxpyO_2O5j2FmFe5e1RGlzg51h0MfGMu5W705hbNWHUO5vhNYYce5md05xKIq1VGXWFO5wRxFU0N_9RL-0Nu5upLruK6cHYW61Am6D2H-eK6q1W2-1ZCYjEwbhBjwMg06OaPVI-G6G6W6OOHi1cu6V___m706QY4vQ2aWjYUTj8P1NHoTMvhw1de0l0PWC83WHh__ojXtZ1OrPWQywGgi1havucBkFIju6x26lKQ0G0009WRoVwC0R0R8BWR0Y80J8TuyBqCVBlAaJg80rF6fHAopY9OSTbYYiTan0FmeQl3eM5dmovwblSbguJN9EYHrO7ybE-0owa97YvzDl1Nqr8FXqV4zfq3kGoeYS5uPmuUMXmjnGwZbpys9ZkvQ7QuIAnQyE6Qu0NCyK0XpXW0~1=WYaejI_zO7O1_H0011xQuNEKTW9mbDRcugaJW06swq680RRhGP01rCtfxyk0W802c07KpUdlIx01dAAY1BW1igApYI7O0U3Pro3W0P20rn_e0Ve1e0AW-w4Om0Aswq6m0mAu1Fy1Y0MFm4gG1PYzb06m1RZu4hW5wjybm0M2yMt81Utt6z05j_WIu0LEg0Q64R07W82GDBW7q0lG1n3O1mZW1uOAyGS009gAi852u0ZG_P0CW0e2oVWAWBKOsGlG7X8ENbIoNEWBcBsK0UWCdmQO3TIMYG4_e0x0X3s04BRUuncQ41i9G0GHi9tlfyPBzJyPo131a1gO4UpW1g6vwH9Ry2QCvnqAGfWJ0gWJzTEZWycPWi4Lu1FgtoM05801e1JgtoMe59Yzb06m582buI6u582kfWh850JG59RXX3dO59lmb846w1IC0j0Lc_2KWGRO5S6AzkoZZxpyOvWMq8_0-WMW5j2_seK6i1Qb1RWM0S0MkLU15vWNcjUAAS0NjHBG5z260zWNflizu1VybjNu1VWNZDNNXGQP6A0O4h0Oq97wXGRu6CoAqxgMiktfQe0PYHbzBv0P0Q0PXX6u6V___m7e6UW2y1c0mWE16l__As7UC5ZLc1hpf2hr6W40002O6yd-Z06m6o2u6m8J0DB4E4y7AOVI-9HyhZJ440s7PPeBU-9PdZL9drvrvBEh6xWGgw2nmGSwpryXh57ig28_17j4ZF6FTNQY~1",
                                "linkTail": "=WYuejI_zO7y19H4051x_gSR5Vm9029JMvkAf4u01jkj1Y06swq6G0TJDwU_BW8200fW1rCtfxqkm0PoYeWIu0RAYiuaXs07WsTSWu06GWDSVw07w0Q02eFkX6C02jkj1i0C2k0J_0OW5Zy1Aa0MOlPG1i0Mu-1Au1UhV9S05Wl5jo0NjznlG1RVu4k05JgW6XX6m1u20a3Iu1z0Bq0SGs0S8u0U62l47002QYh21Gk08qFsG380A0idu2e2r6DaBq1uI3bvKibpe2vYzb07e39y6c0tKbea1Fw0Em8GzW12stkCPcX0R2K044R2TxwV6I_K_6SWGmP0Qc17iu0QXkUaIM_0cZEST2aAO4mAe4_NJeuF9cOB15U0JwjybW1I00Q0Kwjybg1IOlPG1i1I0fU4Xk1I0hgOAo1G4q1IMuOGvs1IRy9I11kWKZ0BG5Plmb846s1N1YlRieu-y_6EO5j2FmFe5e1RGlzg51h0MfGMu5W705hbNWHUO5vhNYYd05xKIq1VGXWFO5wRxFU0N_9RL-0Nu5upLruK6cHYW61Am6D2H-eK6-1ZCYjEwbhBjwMg06OaPVI-G6G6W6OOHk1d___y1w1de0l0PWC83WHh__ojXtZ1OrPWQywGgzHe10000c1l9_em1i1iWk1i2503Rn3XF1oc7qlYKVAuqn28DXucQ2yFYMPurIUTUTIIsgnlS4AkWiTC7ElDV8T1Hx2WdFmGBHOo1i_N9qKs8mmK0~1"
                            },
                            "bmcategoryId": "0",
                            "warning": "",
                            "geoDistance": "",
                            "orderTags": [],
                            "phraseId": "1078710",
                            "algId": "3"
                        },
                        "direct_data": {
                            "domain": "ac-ladasurgut.ru",
                            "commonData": {
                                "creative_id": "4475022",
                                "logo": {
                                    "object_id": "C4475022",
                                    "price": {},
                                    "image": {
                                        "logo": {
                                            "url": "https://storage.mds.yandex.net/get-bstor/2443932/84933D354863C5916FAF8589A8B4A8DC/22HPV7D3"
                                        }
                                    },
                                    "text": {
                                        "alt": "",
                                        "legal": "ООО «КАРСТИЛЬ», 620141,Свердловская обл., г. Екатеринбург, ул.Автомагистральная, д. 23, кв.131, (ОГРН) 1096658004431"
                                    }
                                }
                            }
                        }
                    },
                    "191431134143854037": {
                        "bs_data": {
                            "resource_links": {
                                "direct_data": {
                                    "targetUrl": "https://an.yandex.ru/count/WrGejI_zO4u3LHe0D2m7iEV8IUJhUGK0JWGnC7gzO000000uqhWxG0YKrkRYgHE00RRhGOW1jkj1a06gry7PnUQCg0MW0TJDwU_BW8200gW1rCtfxqkm0PoYeWIu0RAYiuaXm042s07WsTSWu06GWDSVw07w0VW1iA_WlW680keTc0AU_A4Oe0AW-w4OkGBEfCG2t26G9S02jkj1y0B1mzJf1816e0COg0Cyj13u18-33OW5ZuCDa0N0-XcW1Sxy0wW5xAS3i0NifmEu1ThC1i05Wl5jo0NjznlG1Ukd0-05JlE0AI65VyCZuT0U4WvULB9Si0U0W90qk0V22z074DW72WRG29gAi852u0ZG_P0CqGd8KqYY6OOSUGAO2WB12gOR6T27OCO_oTGxgWiGXKa2w0l0-Xclu9y6c0tKbea1u0s2me51yWqaDpCsEM8tPZajE6OoOoqqD6LZBM4uCJ4jEJasC34rDsLcOp7pWQQ9ql3VuVshyQI1xzkqQu0GjjxZ6Hi9G0GHi9tlfyPBzJyPo131a1hu40O3c17iu0QXkP33_94ILQdj4mZJq3_f4blm9epd7Gf20gWJzTEZWycPWk0Jsim6e1JQp0Qe5C3w6R0KWANX8RWKWAwc2iWK1D0Kbk64ETWKc_2KWGRW507e58m2q1MRy9I11jWLmOhsxAEFlFnZy9WMq8_0-WMW5j2_seK6i1Qb1RWM0S0MkLV95j0MiA_WlW615vWNcjUAAQWN2S0NjHBG5z260zWNflizu1VybjNu1UWN2FWNZDNNXGQP6A0O4h0Oq97wXGQu60ZG60Bu6CoAqxgMiktfQe0PYHbzBv0P0Q0PXX6m6RWP_m706QY4vQ2aWjYUTj8P1NHoTMvhu1aEw1de0l0PWC83WHh__xD4ogyK7PWQywGgi1havucBkFIju6x26lKQ0G0009WRoVwC0R0R8BWR0YSWGGGGWv00CSQOPhGEB0i-o94nRUNK72GDB4wLI24aSXL3S67PegA7Ck8FVC7rHXxk6s6pceqxEuJN239dEn28VihrY-rM8WVkFXeu1MkHmsKn41qDFO085lm3NGObCJZvoa7ZBXM7_cnCJrdOAveU3rOH9oBS6SjXLLLXNHxaSw0G9Hu0~1"
                                }
                            },
                            "bmcategoryId": "200018904",
                            "creativeId": "C4475022",
                            "bannerCategories": ["200018904"],
                            "adv_type": "16955046170479569392",
                            "geoDistanceRegular": "",
                            "domainId": "25444048",
                            "orderOptions": "9572352",
                            "count_links": {
                                "abuseUrl": "//an.yandex.ru/abuse/WA0ejI_z8Bkz100420UmvyZ7azEU1G2x034mUhrW000003ZIk3jmbDRcugaJa06gry7PnUQCg0Me0TJDwUzBs07WsTSWw07w0Q02eFkX6Ca6yu0f8OL_moFXq1uI3bvKibpG1mBG2820W802Y0lKEweB48L90W3W507O5S6AzkoZZxpyOu4Ny3_u680P1m0k1UCiH5B3VfGv48uTj6CY7Jjd~1",
                                "sitelinks": [{
                                    "url": "",
                                    "title": ""
                                }, {
                                    "url": "",
                                    "title": "Chevrolet Spark 2021"
                                }, {
                                    "url": "",
                                    "title": ""
                                }, {
                                    "url": "",
                                    "title": ""
                                }],
                                "url": "https://an.yandex.ru/count/WrGejI_zO4u3LHe0D2m7iEV8IUJhUGK0JWGnC7gzO000000uqhWxG0YKrkRYgHE00RRhGOW1jkj1a06gry7PnUQCg0MW0TJDwU_BW8200gW1rCtfxqkm0PoYeWIu0RAYiuaXm042s07WsTSWu06GWDSVw07w0VW1iA_WlW680keTc0AU_A4Oe0AW-w4OkGBEfCG2t26G9S02jkj1y0B1mzJf1816e0COg0Cyj13u18-33OW5ZuCDa0N0-XcW1Sxy0wW5xAS3i0NifmEu1ThC1i05Wl5jo0NjznlG1Ukd0-05JlE0AI65VyCZuT0U4WvULB9Si0U0W90qk0V22z074DW72WRG29gAi852u0ZG_P0CqGd8KqYY6OOSUGAO2WB12gOR6T27OCO_oTGxgWiGXKa2w0l0-Xclu9y6c0tKbea1u0s2me51yWqaDpCsEM8tPZajE6OoOoqqD6LZBM4uCJ4jEJasC34rDsLcOp7pWQQ9ql3VuVshyQI1xzkqQu0GjjxZ6Hi9G0GHi9tlfyPBzJyPo131a1hu40O3c17iu0QXkP33_94ILQdj4mZJq3_f4blm9epd7Gf20gWJzTEZWycPWk0Jsim6e1JQp0Qe5C3w6R0KWANX8RWKWAwc2iWK1D0Kbk64ETWKc_2KWGRW507e58m2q1MRy9I11jWLmOhsxAEFlFnZy9WMq8_0-WMW5j2_seK6i1Qb1RWM0S0MkLV95j0MiA_WlW615vWNcjUAAQWN2S0NjHBG5z260zWNflizu1VybjNu1UWN2FWNZDNNXGQP6A0O4h0Oq97wXGQu60ZG60Bu6CoAqxgMiktfQe0PYHbzBv0P0Q0PXX6m6RWP_m706QY4vQ2aWjYUTj8P1NHoTMvhu1aEw1de0l0PWC83WHh__xD4ogyK7PWQywGgi1havucBkFIju6x26lKQ0G0009WRoVwC0R0R8BWR0YSWGGGGWv00CSQOPhGEB0i-o94nRUNK72GDB4wLI24aSXL3S67PegA7Ck8FVC7rHXxk6s6pceqxEuJN239dEn28VihrY-rM8WVkFXeu1MkHmsKn41qDFO085lm3NGObCJZvoa7ZBXM7_cnCJrdOAveU3rOH9oBS6SjXLLLXNHxaSw0G9Hu0~1",
                                "count": "https://an.yandex.ru/count/WniejI_zO143ZHW0z2W7iEV8tmca_WK04GGnC7gzO000000uqhWxG0YKrkRYgHE80RRhGQ01rCtfxyk0W802g07KpUdlIx01dAAY1BW1igApYI7O0U3Pro3W0P20rn_e0Ve1Y0Bg7PW2dloX6Ba2pgJ40jmXa2Nm0i73rEa4W4Qe0poq48W5ZuCDa0N0-Xcm1Uod0xW5sim6m0M2yMt81Utt6z05wwS3yu0f8OL_moFXq1uI3bvKibom1u20a3Iu1y8Bq0SGs0SA1j08cegmWKBW2D3za0pH2SXJIA8PXXnv0fWA0i4AfXiPq8TWnZ_9r3kg2n25IGBe2y3w6Q_WdmQO3TIMYG7W3OB2WK7o3IGtCpOvOZTcEIquPZ9ZBJGqPMCjOJWnCIqvEJOmCJKtPMPZCVE1fedIyD_X_Qlnf87lsxHhW12stkCP6mb010W00000016mdU-dnalrFnd84C6G6lWG1WEO4UpW1g6vaCFyaH9LgUqJ2DFGF-aIM_0cZEST2a82g1FrqwE3oPc2u1FQp0QW5DhC1gWKmFePi1I0fU4Xk1I0hgOAo1G4q1IMuOGvs1IRy9I11k0K0UWKZ0BG5Plmb846s1N1YlRieu-y_6Fmc1RGZy3w1Q0MqB_QXGQm5gK5k1O1m1QvLyaMq1Qmh-2-0O4Nc1UQruefg1S9m1Ur4j0Nq8O3s1Uc-ptW5_oMrVW5w1S8-1UCrTU51faOe1WIi1ZGaVg51hWO2D0O0lWOp8hJkfQoxUbgW1c96Nqla1a1e1c64R0Pk1d_0S0Pg8JbeAI2s9vsqXa5T79rRclW6Gxe6UW2y1c0mWE16l__iqJAhnGTc1hpf2gm6kJdYOkuzAtWRi8QzHe10000c1l9_em1i1iWk1i29Y1X18X1I82WOH0ZMWSiIpx8oPZkSkeR98qLfwgaa8bSPH9S6BVOvBMC4C9UY7l9sxj6vEl89fO5uSe9bjMVelduTkwSWrY_3vm8jSWXM3n0buOU9EBzp85KO86H9WTGfrIY-RCn0Aamhu1uEBWzN4Ie2Yz_BTdGgXdbSw0GEHu0~1=Wd0ejI_zOBa1DHC0X2B8k9GLkG9mbDRcugaJW06swq680RRhGP01gjV1sSNcZAW5e07KpUdlou20W0Ae0TJDwUzBi06Seg84k06oehE98TW1uDdN8E01a83N7-W1-W7u0R2luBu1c0AU_A4Oe0AW-w4Om0Aswq6W0nYm0xGGY0MFWmsG1S3w6R05xAS3k0NQp0R01OBnRSW5xVSRq0NhfmFW1Kwe1eOHi0U0W90qk0V22z074DW72k07XWhn1m00cegmWKBW2D3za0o02WAO2WB12gOR6T27OCO_oVWAWBKOsGlG7X8ENbIoNEWBmFePY0omh-2-0UWCdmQO3TIMYG4_e0x0X3s04BRUuncQ41i9G0GHi9tlfyPBzJyPo131a1gO4UpW1g4HcfcPcPcPkLMfxHC8qz0_wH9Ry2QCvnqAGfWJ0gWJzTEZWycPWi4Lu1FQp0QW5DhC1gWKmFePi1I0fU4Xk1I0hgOAo1G4q1IMuOGvs1IRy9I11kWKZ0BG5Plmb846s1N1YlRieu-y_6EO5j2FmFe5e1RGlzg51h0MfGMu5W705hbNoHO00F0_q1Qmh-2-0O4Nc1UQruefm1Ur4j0Nq8O3s1Uc-ptW5_oMrVW5w1S8-1UCrTU51faOe1WIi1ZGaVg51hWO2FWOp8hJkfQoxUbgW1c96Nqla1a1e1c64RWP_m7W6Gxe6UW2y1c0mWE16l__iqJAhnGTc1hpf2hr6W40002O6yd-Z06m6o2u6m8J03Y2f0vYmfHngOG46teUX6Cr97QlkOIQfD-lEdBUrGsaY5NGM0a8cX11InxpGvfbnC08x9Er6okLwIW0~1",
                                "linkTail": "=WdKejI_zOC81NHC0b2B-ypo6mW9029JMvkAf4u01jkj1Y06swq6G0QhNmTd5veoe1Q01rCtfxyk0W802g07KpUdlIx01dAAY1BW1igApYI7O0U3Pro3W0P20rn_e0Ve1-06mh-2-0PW2dloX6A02eFkX6C02jkj1e0COi0Eq48W5ZuCDa0N0-Xcm1Uod0xW5sim6m0M2yMt81Utt6z05wwS3u0LEg0Q64R07W82GDBW7mWlG1n3O1mhW1uOAyGS009gAi852u0ZG_P0CW0e2c0e2mGgc6ndGXs36Fydu2e2r6DaBq1uI3bvKibpe2y3w6OWCiA_WlW7e39y6c0tKbea1Fw0Em8GzW12stkCPcX0R2K044R2TxwV6I_K_6SWGmP0Qc17iu0QX4PgPcPcPcRbLgUqJ2DFGF-aIM_0cZEST2aAO4mAe4_NJeuF9cOB15U0Jsim6e1JQp0Qe5C3w6R0KWANX8RWKWAwc2iWK1D0Kbk64ETWKc_2KWGRe58m2q1MRy9I11jWLmOhsxAEFlFnZc1RGZy3w1Q0MqB_QXGQm5gK5k1O1m1QvLyaM003mFz0MiA_WlW615vWNcjUAAS0NjHBG5z260zWNflizu1VybjNu1UWN2FWNZDNNXGQP6A0O4h0Oq97wXGQu60Zu6CoAqxgMiktfQe0PYHbzBv0P0Q0PXX6u6Vy1u1aEw1de0l0PWC83WHh__xD4ogyK7PWQywGgzHe10000c1l9_em1i1iWk1i2500uWgGEOiAKSQc411jw7eIhDIIsiRc4cgG3i3gItzKDjeXLq5WR29gWGKjcyqEQRiJ0KEoJzQahfNDq4-9m0G00~1"
                            },
                            "algId": "3",
                            "companyName": "",
                            "metro": "",
                            "floatMarketRating": "-1",
                            "bannerFlags": "",
                            "clientId": "86158234",
                            "targetUrl": "https://ac-yugra.ru/katalog/chevrolet/spark_2020/",
                            "domainVerified": "0",
                            "eventHash": "14371980701709080548",
                            "oid": "34272880",
                            "blockFavicon": "0",
                            "region": "",
                            "adId": "191431134143854037",
                            "hitLogId": "6679493960283594448",
                            "bannerLang": "1",
                            "warning": "",
                            "orderTags": [],
                            "geoDistance": "",
                            "liked": "0",
                            "phraseId": "1078710",
                            "isTurboBanner": false
                        },
                        "direct_data": {
                            "domain": "ac-yugra.ru",
                            "facilities": "1.3 AT (85 л.с.);2021;хэтчбек;Левый руль",
                            "year": "2021",
                            "priceInfo": {
                                "currency": "RUR",
                                "current": "557900"
                            },
                            "img4": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3658574/2a000001776d85eca57d467419f7e015b409/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3658574/2a000001776d85eca57d467419f7e015b409/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3658574/2a000001776d85eca57d467419f7e015b409/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3658574/2a000001776d85eca57d467419f7e015b409/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3658574/2a000001776d85eca57d467419f7e015b409/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3658574/2a000001776d85eca57d467419f7e015b409/hugeX",
                                    "w": "900"
                                }
                            },
                            "body": "Левый руль. Хэтчбек. 2021. 1.3 AT (85 л.с.). 557 900 ₽. Узнать подробнее!",
                            "mdsMetaInfo": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "96",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "38",
                                        "h": "280",
                                        "x": "3",
                                        "w": "498"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "64",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "126",
                                        "w": "282"
                                    }, {
                                        "y": "17",
                                        "h": "324",
                                        "x": "33",
                                        "w": "432"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "76",
                                        "h": "560",
                                        "x": "3",
                                        "w": "996"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "128",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "251",
                                        "w": "563"
                                    }, {
                                        "y": "33",
                                        "h": "647",
                                        "x": "66",
                                        "w": "864"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "19",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "8",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "13",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "25",
                                        "w": "56"
                                    }, {
                                        "y": "3",
                                        "h": "65",
                                        "x": "7",
                                        "w": "86"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "38",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "15",
                                        "h": "112",
                                        "x": "1",
                                        "w": "199"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "26",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "50",
                                        "w": "113"
                                    }, {
                                        "y": "7",
                                        "h": "129",
                                        "x": "13",
                                        "w": "173"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "76",
                                        "h": "560",
                                        "x": "3",
                                        "w": "996"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "128",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "251",
                                        "w": "563"
                                    }, {
                                        "y": "33",
                                        "h": "647",
                                        "x": "66",
                                        "w": "864"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "173",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "68",
                                        "h": "504",
                                        "x": "3",
                                        "w": "896"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "115",
                                        "w": "675"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "226",
                                        "w": "507"
                                    }, {
                                        "y": "30",
                                        "h": "582",
                                        "x": "59",
                                        "w": "778"
                                    }]
                                }
                            },
                            "mdsMetaInfo5": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "96",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "38",
                                        "h": "280",
                                        "x": "3",
                                        "w": "498"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "64",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "126",
                                        "w": "282"
                                    }, {
                                        "y": "15",
                                        "h": "335",
                                        "x": "31",
                                        "w": "447"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "76",
                                        "h": "560",
                                        "x": "3",
                                        "w": "996"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "128",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "251",
                                        "w": "563"
                                    }, {
                                        "y": "29",
                                        "h": "670",
                                        "x": "61",
                                        "w": "893"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "19",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "8",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "13",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "25",
                                        "w": "56"
                                    }, {
                                        "y": "3",
                                        "h": "67",
                                        "x": "6",
                                        "w": "89"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "38",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "15",
                                        "h": "112",
                                        "x": "1",
                                        "w": "199"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "26",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "50",
                                        "w": "113"
                                    }, {
                                        "y": "6",
                                        "h": "134",
                                        "x": "12",
                                        "w": "179"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "76",
                                        "h": "560",
                                        "x": "3",
                                        "w": "996"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "128",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "251",
                                        "w": "563"
                                    }, {
                                        "y": "29",
                                        "h": "670",
                                        "x": "61",
                                        "w": "893"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "173",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "68",
                                        "h": "504",
                                        "x": "3",
                                        "w": "896"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "115",
                                        "w": "675"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "226",
                                        "w": "507"
                                    }, {
                                        "y": "26",
                                        "h": "603",
                                        "x": "55",
                                        "w": "804"
                                    }]
                                }
                            },
                            "targetUrl": "https://ac-yugra.ru/katalog/chevrolet/spark_2020/",
                            "mdsMetaInfo2": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "96",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "38",
                                        "h": "280",
                                        "x": "3",
                                        "w": "498"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "64",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "126",
                                        "w": "282"
                                    }, {
                                        "y": "15",
                                        "h": "335",
                                        "x": "31",
                                        "w": "447"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "76",
                                        "h": "560",
                                        "x": "3",
                                        "w": "996"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "128",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "251",
                                        "w": "563"
                                    }, {
                                        "y": "29",
                                        "h": "670",
                                        "x": "61",
                                        "w": "893"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "19",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "8",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "13",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "25",
                                        "w": "56"
                                    }, {
                                        "y": "3",
                                        "h": "67",
                                        "x": "6",
                                        "w": "89"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "38",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "15",
                                        "h": "112",
                                        "x": "1",
                                        "w": "199"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "26",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "50",
                                        "w": "113"
                                    }, {
                                        "y": "6",
                                        "h": "134",
                                        "x": "12",
                                        "w": "179"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "76",
                                        "h": "560",
                                        "x": "3",
                                        "w": "996"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "128",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "251",
                                        "w": "563"
                                    }, {
                                        "y": "29",
                                        "h": "670",
                                        "x": "61",
                                        "w": "893"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "173",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "68",
                                        "h": "504",
                                        "x": "3",
                                        "w": "896"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "115",
                                        "w": "675"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "226",
                                        "w": "507"
                                    }, {
                                        "y": "26",
                                        "h": "603",
                                        "x": "55",
                                        "w": "804"
                                    }]
                                }
                            },
                            "businessType": "auto",
                            "mdsMetaInfo4": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "96",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "38",
                                        "h": "280",
                                        "x": "3",
                                        "w": "498"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "64",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "126",
                                        "w": "282"
                                    }, {
                                        "y": "15",
                                        "h": "335",
                                        "x": "31",
                                        "w": "447"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "76",
                                        "h": "560",
                                        "x": "3",
                                        "w": "996"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "128",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "251",
                                        "w": "563"
                                    }, {
                                        "y": "29",
                                        "h": "670",
                                        "x": "61",
                                        "w": "893"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "19",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "8",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "13",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "25",
                                        "w": "56"
                                    }, {
                                        "y": "3",
                                        "h": "67",
                                        "x": "6",
                                        "w": "89"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "38",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "15",
                                        "h": "112",
                                        "x": "1",
                                        "w": "199"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "26",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "50",
                                        "w": "113"
                                    }, {
                                        "y": "6",
                                        "h": "134",
                                        "x": "12",
                                        "w": "179"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "76",
                                        "h": "560",
                                        "x": "3",
                                        "w": "996"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "128",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "251",
                                        "w": "563"
                                    }, {
                                        "y": "29",
                                        "h": "670",
                                        "x": "61",
                                        "w": "893"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "173",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "68",
                                        "h": "504",
                                        "x": "3",
                                        "w": "896"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "115",
                                        "w": "675"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "226",
                                        "w": "507"
                                    }, {
                                        "y": "26",
                                        "h": "603",
                                        "x": "55",
                                        "w": "804"
                                    }]
                                }
                            },
                            "model": "Spark",
                            "img2": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4080947/2a000001776d85eb2ed135cc9f8af73a731d/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4080947/2a000001776d85eb2ed135cc9f8af73a731d/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4080947/2a000001776d85eb2ed135cc9f8af73a731d/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4080947/2a000001776d85eb2ed135cc9f8af73a731d/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4080947/2a000001776d85eb2ed135cc9f8af73a731d/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4080947/2a000001776d85eb2ed135cc9f8af73a731d/hugeX",
                                    "w": "900"
                                }
                            },
                            "vendor": "Chevrolet",
                            "img5": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4079347/2a000001776d85ed3b9212da4ec4ace74b60/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4079347/2a000001776d85ed3b9212da4ec4ace74b60/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4079347/2a000001776d85ed3b9212da4ec4ace74b60/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4079347/2a000001776d85ed3b9212da4ec4ace74b60/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4079347/2a000001776d85ed3b9212da4ec4ace74b60/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4079347/2a000001776d85ed3b9212da4ec4ace74b60/hugeX",
                                    "w": "900"
                                }
                            },
                            "faviconSizes": {
                                "w": "48",
                                "h": "48"
                            },
                            "title": "Chevrolet Spark 2021",
                            "img3": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4338654/2a000001776d85ebef2b1b42f67ba0bb1de5/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4338654/2a000001776d85ebef2b1b42f67ba0bb1de5/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4338654/2a000001776d85ebef2b1b42f67ba0bb1de5/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4338654/2a000001776d85ebef2b1b42f67ba0bb1de5/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4338654/2a000001776d85ebef2b1b42f67ba0bb1de5/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4338654/2a000001776d85ebef2b1b42f67ba0bb1de5/hugeX",
                                    "w": "900"
                                }
                            },
                            "mdsMetaInfo3": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "96",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "38",
                                        "h": "280",
                                        "x": "3",
                                        "w": "498"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "64",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "124",
                                        "w": "281"
                                    }, {
                                        "y": "17",
                                        "h": "324",
                                        "x": "33",
                                        "w": "432"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "76",
                                        "h": "560",
                                        "x": "3",
                                        "w": "996"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "128",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "248",
                                        "w": "562"
                                    }, {
                                        "y": "33",
                                        "h": "647",
                                        "x": "66",
                                        "w": "864"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "19",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "8",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "13",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "25",
                                        "w": "56"
                                    }, {
                                        "y": "3",
                                        "h": "65",
                                        "x": "7",
                                        "w": "86"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "38",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "15",
                                        "h": "112",
                                        "x": "1",
                                        "w": "199"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "26",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "50",
                                        "w": "112"
                                    }, {
                                        "y": "7",
                                        "h": "129",
                                        "x": "13",
                                        "w": "173"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "76",
                                        "h": "560",
                                        "x": "3",
                                        "w": "996"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "128",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "248",
                                        "w": "562"
                                    }, {
                                        "y": "33",
                                        "h": "647",
                                        "x": "66",
                                        "w": "864"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "173",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "68",
                                        "h": "504",
                                        "x": "3",
                                        "w": "896"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "115",
                                        "w": "675"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "223",
                                        "w": "506"
                                    }, {
                                        "y": "30",
                                        "h": "582",
                                        "x": "59",
                                        "w": "778"
                                    }]
                                }
                            },
                            "offerId": "20d62df59fdd6ad4a92eadd4af713e1ebedd9d96",
                            "name": "Chevrolet Spark 2021",
                            "img": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4365586/2a000001776d85ea3bcde502417efba0b8f1/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4365586/2a000001776d85ea3bcde502417efba0b8f1/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4365586/2a000001776d85ea3bcde502417efba0b8f1/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4365586/2a000001776d85ea3bcde502417efba0b8f1/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4365586/2a000001776d85ea3bcde502417efba0b8f1/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4365586/2a000001776d85ea3bcde502417efba0b8f1/hugeX",
                                    "w": "900"
                                }
                            }
                        }
                    },
                    "144273864119895715": {
                        "bs_data": {
                            "resource_links": {
                                "direct_data": {
                                    "targetUrl": "https://an.yandex.ru/count/Wr8ejI_zO4u3HHe0H2m7iEV8nBLGw0K0JWGnC7gzO000000uqhWxG0YKrkRYgHE00RRhGOW1jkj1a076ckhJb9J8W0IW0TJDwU_BW8200gW1rCtfxqkm0PoYeWIu0RAYiuaXm042s07WsTSWu06GWDSVw07w0VW1sAdWlW680keTc0AU_A4Oe0AW-w4OkGBEfCG2t26G9S02jkj1y0B1mzJf1816e0CGg0Cyd13u1AU648W5fuOGa0MM_X-W1Txo1AW5f8e4i0MaYWIu1VAG2C05Wl5jo0NjznlG1QEA1E05JlE0AI65VyCZuT0U4WvULB9Si0U0W90qk0V22z074DW72WRG29gAi852u0ZG_P0CqGd8KqYY6OOSUGAO2WB12bqmvD45ayi_oTGxgWiGXKa20EWBbluVdmQO3TIMYG7W3OB2WK7o3IGtCpOvOZTcEIquPZ9ZBJGqPMCjOJWnCIqvEJOmCJKtPMPZCVE1fedIyD_X_Qlnf87lsxHhW12stkCP6mb0116mdU-dnalrFnd84C6G6lWG1WEO4UpW1g6vaCFyaHAy4vur8g3JF-aIM_0cZEST2a82g1FrqwE3oPc2u1Foa0YW5FAG2AWKbluVi1I0fU4Xk1I0hgOAo1G4q1IMuOGvs1IRy9I11k0K0UWKZ0BG5Plmb846s1N1YlRieu-y_6Fmc1RGZy3w1Q0MqB_QXGQm5gK5k1O1m1QvLyaMq1QUeUI-0O4Nc1UQruefg1S9m1Ur4j0Nq8O3s1Uc-ptW5_oMrVW5w1S5-1UCrTU51faOe1WIi1ZGaVg51hWO1T0O0lWOp8hJkfQoxUbgW1c96Nqla1a1e1c64R0Pk1d___y1m1ceXEMWf8BOddRI6GLqSdLkQ-0P4EWPw0Bm6O320u4Q__z_mmjeB4wO6lEaAh0QvEU9YxZqhU1kmXhr6W40002O6yd-Z06m6o2u6m8b834434DH0iKKP9BLEYyB7XHZ0qzBEVK7IRF5gIOfD29NYGGNvYqgUYmZ_Y0lk3xauKuZR3QpSMT5U251vWm60h5FkNwmtShcmDs_WLEmbdjmxUUv7a042-O3O7x9VmOQJQauzBSnFVt2kABfss0LSIN2dV4vh2eNrkNnV0uK8iS3~1"
                                }
                            },
                            "bmcategoryId": "200050767",
                            "creativeId": "C4475022",
                            "bannerCategories": ["200018540", "200018559", "200050767"],
                            "adv_type": "16955046170479569392",
                            "geoDistanceRegular": "",
                            "domainId": "25444048",
                            "orderOptions": "9572352",
                            "count_links": {
                                "abuseUrl": "//an.yandex.ru/abuse/WA0ejI_z8Bkz100420UmvyY_F7Nv1G2x034mUhrW000003ZIk3jmbDRcugaJa076ckhJb9J8W0Ie0TJDwUzBs07WsTSWw07w0Q02eFkX6Ca6yu0f8OL_moFXq1uI3bvKibpG1mBG2820W802Y0lKEweB48L90W3W507O5S6AzkoZZxpyOu4Ny3_u680P1m0k1UCiH5B3VfGv48uTj6CY7Jjd~1",
                                "sitelinks": [{
                                    "url": "",
                                    "title": ""
                                }, {
                                    "url": "",
                                    "title": "Datsun Mi-DO 2021"
                                }, {
                                    "url": "",
                                    "title": ""
                                }, {
                                    "url": "",
                                    "title": ""
                                }],
                                "url": "https://an.yandex.ru/count/Wr8ejI_zO4u3HHe0H2m7iEV8nBLGw0K0JWGnC7gzO000000uqhWxG0YKrkRYgHE00RRhGOW1jkj1a076ckhJb9J8W0IW0TJDwU_BW8200gW1rCtfxqkm0PoYeWIu0RAYiuaXm042s07WsTSWu06GWDSVw07w0VW1sAdWlW680keTc0AU_A4Oe0AW-w4OkGBEfCG2t26G9S02jkj1y0B1mzJf1816e0CGg0Cyd13u1AU648W5fuOGa0MM_X-W1Txo1AW5f8e4i0MaYWIu1VAG2C05Wl5jo0NjznlG1QEA1E05JlE0AI65VyCZuT0U4WvULB9Si0U0W90qk0V22z074DW72WRG29gAi852u0ZG_P0CqGd8KqYY6OOSUGAO2WB12bqmvD45ayi_oTGxgWiGXKa20EWBbluVdmQO3TIMYG7W3OB2WK7o3IGtCpOvOZTcEIquPZ9ZBJGqPMCjOJWnCIqvEJOmCJKtPMPZCVE1fedIyD_X_Qlnf87lsxHhW12stkCP6mb0116mdU-dnalrFnd84C6G6lWG1WEO4UpW1g6vaCFyaHAy4vur8g3JF-aIM_0cZEST2a82g1FrqwE3oPc2u1Foa0YW5FAG2AWKbluVi1I0fU4Xk1I0hgOAo1G4q1IMuOGvs1IRy9I11k0K0UWKZ0BG5Plmb846s1N1YlRieu-y_6Fmc1RGZy3w1Q0MqB_QXGQm5gK5k1O1m1QvLyaMq1QUeUI-0O4Nc1UQruefg1S9m1Ur4j0Nq8O3s1Uc-ptW5_oMrVW5w1S5-1UCrTU51faOe1WIi1ZGaVg51hWO1T0O0lWOp8hJkfQoxUbgW1c96Nqla1a1e1c64R0Pk1d___y1m1ceXEMWf8BOddRI6GLqSdLkQ-0P4EWPw0Bm6O320u4Q__z_mmjeB4wO6lEaAh0QvEU9YxZqhU1kmXhr6W40002O6yd-Z06m6o2u6m8b834434DH0iKKP9BLEYyB7XHZ0qzBEVK7IRF5gIOfD29NYGGNvYqgUYmZ_Y0lk3xauKuZR3QpSMT5U251vWm60h5FkNwmtShcmDs_WLEmbdjmxUUv7a042-O3O7x9VmOQJQauzBSnFVt2kABfss0LSIN2dV4vh2eNrkNnV0uK8iS3~1",
                                "count": "https://an.yandex.ru/count/WnmejI_zO143bHW0z2W7iEV8qT39T0K04GGnC7gzO000000uqhWxG0YKrkRYgHE80RRhGQ01rCtfxyk0W802g07KpUdlIx01dAAY1BW1igApYI7O0U3Pro3W0P20rn_e0Ve1Y0Bg7PW2dloX6Ba2pgJ40jmXa2Nm0i73rEa4W4Qe0poS48W5fuOGa0MM_X-m1QIA1BW5yf08m0M2yMt81Utt6z05eue4yu0f8OL_moFXq1uI3bvKibom1u20a3Iu1y8Bq0SGs0SA1j08cegmWKBW2D3za0pH2SXJIA8PXXnv0fWA0i4ANJ3aqGMJop_9r3kg2n25IGBe2vR-7vy6c0tKbea1u0s2me51yWqaDpCsEM8tPZajE6OoOoqqD6LZBM4uCJ4jEJasC34rDsLcOp7pWQQ9ql3VuVshyQI1xzkqQu0GjjxZ6Hi9G0G80000000Hi9tlfyPBzJyPo131a1hu40O3c17iu0QXkP33_94Il1EUDIAWqp_f4blm9epd7Gf20gWJzTEZWycPWk0Jyf08e1Joa0Ye59R-7x0KWANX8RWKWAwc2iWK1D0Kbk64ETWKc_2KWGRW507e58m2q1MRy9I11jWLmOhsxAEFlFnZy9WMq8_0-WMW5j2_seK6i1Qb1RWM0S0MkLV95j0Mdg7alW615vWNcjUAAQWN2S0NjHBG5z260zWNflizu1VybjNu1UWN1VWNZDNNXGQP6A0O4h0Oq97wXGQu60NG60Bu6CoAqxgMiktfQe0PYHbzBv0P0Q0PXX6m6RWP____0S0Pg8JbeAI2s9vsqXa5T79rRclW6H3e6UW2y1c0mWE16l__VyCBQ2nEc1hpf2gm6kJdYOkuzAtWRi8QzHe10000c1l9_em1i1iWk1i29I0n10n3KGB5b8DIrJel2nui0GQUld8g3PAcYbCbKaX4hX89BinRRF9OHWXXByIzvEqD8_AriebbHhW2mRAgKpJVRkTkE8ZrU-14gFKUTFbvhWSGyNxvG9O1kWvcl780nKibch-D0OWMtXKGZmUtXnCHgiB8Nqisj6f6ypbGY0SF~1=WdGejI_zOBa1LHC0X2AC5qAYkG9mbDRcugaJW06swq680RRhGP01nfhgqvIKo804e07KpUdlou20W0Ae0TJDwUzBi06Seg84k06oehE98TW1uDdN8E01a83N7-W1-W7u0TYfuBu1c0AU_A4Oe0AW-w4Om0Aswq6W0n2m0mAS48W5fuOGa0MM_X-m1QIA1BW5yf08m0M2yMt81Utt6z05eue4u0LEg0Q64R07W82GDBW7mWlG1n3O1mhW1uOAyGS009gAi852u0ZG_P0CW0e2c0e2mGfTCEJH1PFBFyaAy3_u2e2r6DaBq1uI3bvKibpe2vR-7uWCdfy6c0tKbea1Fw0Em8GzW12stkCPcX0R2K044R2TxwV6I_K_6SWGmP0Qc17iu0QX4PgPcPcPcRcy4vur8g3JF-aIM_0cZEST2aAO4mAe4_NJeuF9cOB15U0Jyf08e1Joa0Ye59R-7x0KWANX8RWKWAwc2iWK1D0Kbk64ETWKc_2KWGRe58m2q1MRy9I11jWLmOhsxAEFlFnZc1RGZy3w1Q0MqB_QXGQm5gK5k1O1m1QvLyaM003mFz0Mdg7alW615vWNcjUAAS0NjHBG5z260zWNflizu1VybjNu1UWN1VWNZDNNXGQP6A0O4h0Oq97wXGQu60Nu6CoAqxgMiktfQe0PYHbzBv0P0Q0PXX6u6V___m7W6H3e6UW2y1c0mWE16l__VyCBQ2nEc1hpf2hr6W40002O6yd-Z06m6o2u6m8K01B5E587CM7Ak5H2WWqz3yAn6XAxrrn2JTBlLnqvx-e6KiGgQ8o0KCTImcFWd1fvp0zfbX438x1FrYz61XW5~1",
                                "linkTail": "=WdWejI_zOC81THC0b2AwNEenmW9029JMvkAf4u01jkj1Y06swq6G0SQQwjEKbCY01A01rCtfxyk0W802g07KpUdlIx01dAAY1BW1igApYI7O0U3Pro3W0P20rn_e0Ve1-07OgU2-0PW2dloX6A02eFkX6C02jkj1e0CGi0C2d1281QU64905bluVi0MaYWIu1VAG2C05Wl5jo0NjznlG1QEA1E05JgW6XX6m1u20a3Iu1y8Bq0SGs0SAu0U62l47002QYh21Gk08qFsG380A0fWA0i4ANJ3aqGMJop_92l0_-0g0jHZP2z0U4WvULB9Sw0kM_X-839wV1fWDr9Q90J-W3i24FO0GjjxZ6PeG6mb0116mdU-dnalrFnd84C6G6fWHxE06eH6QcPcPcPcvl1EUDIAWqp_f4blm9epd7Gf2c1C2g1FrqwE3oPc2mHNW4_AG2A0Kyf08g1IM_X-m582buI6u582kfWh850JG59RXX3dO59lmb846w1IC0j0Lc_2KWGRO5S6AzkoZZxpyOvWMq8_0-WMW5j2_seK6i1Qb1RWM0S0MkLV95W00y3_G5fwXvBu1WHUO5vhNYYd05xKIq1VGXWFO5wRxFU0N_9RL-0Ne5mNu5upLruK6cHYW61Am6D2H-eK6k1W5-1ZCYjEwbhBjwMg06OaPVI-G6G6W6OOHk1d___y1u1aGw1de0l0PWC83WHh__t_32sWiJfWQywGgzHe10000c1l9_em1i1iWk1i25G0RnJXI1p5XohXKGe8DFG_2rHeIszXSGatI0LWToU_g1bl4AcYiWL37PC9Zu9mQcSqFQReH0qEnJzPeIE28Ra8SBW00~1"
                            },
                            "algId": "3",
                            "companyName": "",
                            "metro": "",
                            "floatMarketRating": "-1",
                            "bannerFlags": "",
                            "clientId": "86158234",
                            "targetUrl": "https://ac-yugra.ru/katalog/datsun/mi_DO/",
                            "domainVerified": "0",
                            "eventHash": "9537571206142565366",
                            "oid": "34272880",
                            "blockFavicon": "0",
                            "region": "",
                            "adId": "144273864119895715",
                            "hitLogId": "6679493960283594448",
                            "bannerLang": "1",
                            "warning": "",
                            "orderTags": [],
                            "geoDistance": "",
                            "liked": "0",
                            "phraseId": "1078710",
                            "isTurboBanner": false
                        },
                        "direct_data": {
                            "domain": "ac-yugra.ru",
                            "facilities": "1.6 MT (87 л.с.);2021;хэтчбек;Левый руль",
                            "year": "2021",
                            "priceInfo": {
                                "currency": "RUR",
                                "current": "391000"
                            },
                            "img4": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3887269/2a0000017887b62347ffd9d35d9be4372690/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3887269/2a0000017887b62347ffd9d35d9be4372690/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3887269/2a0000017887b62347ffd9d35d9be4372690/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3887269/2a0000017887b62347ffd9d35d9be4372690/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3887269/2a0000017887b62347ffd9d35d9be4372690/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3887269/2a0000017887b62347ffd9d35d9be4372690/hugeX",
                                    "w": "900"
                                }
                            },
                            "body": "Левый руль. Хэтчбек. 2021. 1.6 MT (87 л.с.). 391 000 ₽. Узнать подробнее!",
                            "mdsMetaInfo": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "96",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "34",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "65",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "136",
                                        "w": "281"
                                    }, {
                                        "y": "0",
                                        "h": "352",
                                        "x": "18",
                                        "w": "470"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "68",
                                        "h": "561",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "130",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "272",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "704",
                                        "x": "36",
                                        "w": "940"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "19",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "7",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "13",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "27",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "70",
                                        "x": "4",
                                        "w": "94"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "38",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "14",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "26",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "54",
                                        "w": "112"
                                    }, {
                                        "y": "0",
                                        "h": "141",
                                        "x": "7",
                                        "w": "188"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "68",
                                        "h": "561",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "130",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "272",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "704",
                                        "x": "36",
                                        "w": "940"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "173",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "61",
                                        "h": "505",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "117",
                                        "w": "674"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "245",
                                        "w": "506"
                                    }, {
                                        "y": "0",
                                        "h": "634",
                                        "x": "32",
                                        "w": "846"
                                    }]
                                }
                            },
                            "mdsMetaInfo5": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "96",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "41",
                                        "h": "274",
                                        "x": "12",
                                        "w": "488"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "72",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "128",
                                        "w": "282"
                                    }, {
                                        "y": "5",
                                        "h": "346",
                                        "x": "29",
                                        "w": "462"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "81",
                                        "h": "548",
                                        "x": "24",
                                        "w": "975"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "144",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "256",
                                        "w": "563"
                                    }, {
                                        "y": "10",
                                        "h": "692",
                                        "x": "57",
                                        "w": "923"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "19",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "8",
                                        "h": "55",
                                        "x": "2",
                                        "w": "98"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "14",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "26",
                                        "w": "56"
                                    }, {
                                        "y": "1",
                                        "h": "69",
                                        "x": "6",
                                        "w": "92"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "38",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "16",
                                        "h": "110",
                                        "x": "5",
                                        "w": "195"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "29",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "51",
                                        "w": "113"
                                    }, {
                                        "y": "2",
                                        "h": "138",
                                        "x": "11",
                                        "w": "185"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "81",
                                        "h": "548",
                                        "x": "24",
                                        "w": "975"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "144",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "256",
                                        "w": "563"
                                    }, {
                                        "y": "10",
                                        "h": "692",
                                        "x": "57",
                                        "w": "923"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "173",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "73",
                                        "h": "493",
                                        "x": "22",
                                        "w": "877"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "130",
                                        "w": "674"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "230",
                                        "w": "507"
                                    }, {
                                        "y": "10",
                                        "h": "623",
                                        "x": "51",
                                        "w": "831"
                                    }]
                                }
                            },
                            "targetUrl": "https://ac-yugra.ru/katalog/datsun/mi_DO/",
                            "mdsMetaInfo2": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "96",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "34",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "65",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "128",
                                        "w": "282"
                                    }, {
                                        "y": "0",
                                        "h": "352",
                                        "x": "18",
                                        "w": "470"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "68",
                                        "h": "561",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "130",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "256",
                                        "w": "563"
                                    }, {
                                        "y": "0",
                                        "h": "704",
                                        "x": "36",
                                        "w": "940"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "19",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "7",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "13",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "26",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "70",
                                        "x": "4",
                                        "w": "94"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "38",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "14",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "26",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "51",
                                        "w": "113"
                                    }, {
                                        "y": "0",
                                        "h": "141",
                                        "x": "7",
                                        "w": "188"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "68",
                                        "h": "561",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "130",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "256",
                                        "w": "563"
                                    }, {
                                        "y": "0",
                                        "h": "704",
                                        "x": "36",
                                        "w": "940"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "173",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "61",
                                        "h": "505",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "117",
                                        "w": "674"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "230",
                                        "w": "507"
                                    }, {
                                        "y": "0",
                                        "h": "634",
                                        "x": "32",
                                        "w": "846"
                                    }]
                                }
                            },
                            "businessType": "auto",
                            "mdsMetaInfo4": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "96",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "31",
                                        "h": "280",
                                        "x": "3",
                                        "w": "498"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "72",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "128",
                                        "w": "282"
                                    }, {
                                        "y": "5",
                                        "h": "346",
                                        "x": "28",
                                        "w": "462"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "61",
                                        "h": "560",
                                        "x": "3",
                                        "w": "996"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "144",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "256",
                                        "w": "563"
                                    }, {
                                        "y": "10",
                                        "h": "692",
                                        "x": "55",
                                        "w": "923"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "19",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "6",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "14",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "26",
                                        "w": "56"
                                    }, {
                                        "y": "1",
                                        "h": "69",
                                        "x": "6",
                                        "w": "92"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "38",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "12",
                                        "h": "112",
                                        "x": "1",
                                        "w": "199"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "29",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "51",
                                        "w": "113"
                                    }, {
                                        "y": "2",
                                        "h": "138",
                                        "x": "11",
                                        "w": "185"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "61",
                                        "h": "560",
                                        "x": "3",
                                        "w": "996"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "144",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "256",
                                        "w": "563"
                                    }, {
                                        "y": "10",
                                        "h": "692",
                                        "x": "55",
                                        "w": "923"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "173",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "55",
                                        "h": "504",
                                        "x": "3",
                                        "w": "896"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "130",
                                        "w": "674"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "230",
                                        "w": "507"
                                    }, {
                                        "y": "10",
                                        "h": "623",
                                        "x": "49",
                                        "w": "831"
                                    }]
                                }
                            },
                            "model": "mi-DO",
                            "img2": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3887269/2a0000017887b548c983341804212a858857/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3887269/2a0000017887b548c983341804212a858857/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3887269/2a0000017887b548c983341804212a858857/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3887269/2a0000017887b548c983341804212a858857/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3887269/2a0000017887b548c983341804212a858857/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/3887269/2a0000017887b548c983341804212a858857/hugeX",
                                    "w": "900"
                                }
                            },
                            "vendor": "Datsun",
                            "img5": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/964857/2a0000017887b60832f17859f3a2deabc170/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/964857/2a0000017887b60832f17859f3a2deabc170/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/964857/2a0000017887b60832f17859f3a2deabc170/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/964857/2a0000017887b60832f17859f3a2deabc170/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/964857/2a0000017887b60832f17859f3a2deabc170/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/964857/2a0000017887b60832f17859f3a2deabc170/hugeX",
                                    "w": "900"
                                }
                            },
                            "faviconSizes": {
                                "w": "48",
                                "h": "48"
                            },
                            "title": "Datsun Mi-DO 2021",
                            "img3": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4484884/2a0000017887b591139b7b1678cabed49aff/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4484884/2a0000017887b591139b7b1678cabed49aff/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4484884/2a0000017887b591139b7b1678cabed49aff/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4484884/2a0000017887b591139b7b1678cabed49aff/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4484884/2a0000017887b591139b7b1678cabed49aff/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4484884/2a0000017887b591139b7b1678cabed49aff/hugeX",
                                    "w": "900"
                                }
                            },
                            "mdsMetaInfo3": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "89",
                                        "h": "156",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "31",
                                        "h": "280",
                                        "x": "3",
                                        "w": "498"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "65",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "136",
                                        "w": "281"
                                    }, {
                                        "y": "0",
                                        "h": "344",
                                        "x": "24",
                                        "w": "460"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "177",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "61",
                                        "h": "560",
                                        "x": "3",
                                        "w": "996"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "130",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "272",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "688",
                                        "x": "47",
                                        "w": "919"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "18",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "6",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "13",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "27",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "69",
                                        "x": "5",
                                        "w": "92"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "35",
                                        "h": "62",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "12",
                                        "h": "112",
                                        "x": "1",
                                        "w": "199"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "26",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "54",
                                        "w": "112"
                                    }, {
                                        "y": "0",
                                        "h": "138",
                                        "x": "9",
                                        "w": "184"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "177",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "61",
                                        "h": "560",
                                        "x": "3",
                                        "w": "996"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "130",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "272",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "688",
                                        "x": "47",
                                        "w": "919"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "159",
                                        "h": "281",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "55",
                                        "h": "504",
                                        "x": "3",
                                        "w": "896"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "117",
                                        "w": "674"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "245",
                                        "w": "506"
                                    }, {
                                        "y": "0",
                                        "h": "619",
                                        "x": "42",
                                        "w": "827"
                                    }]
                                }
                            },
                            "offerId": "419e673c7705b2a13ddef334fe89e2b515b09146",
                            "name": "Datsun Mi-DO 2021",
                            "img": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4549709/2a0000017887b5b304da9d5cd609209bc0c4/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4549709/2a0000017887b5b304da9d5cd609209bc0c4/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4549709/2a0000017887b5b304da9d5cd609209bc0c4/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4549709/2a0000017887b5b304da9d5cd609209bc0c4/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4549709/2a0000017887b5b304da9d5cd609209bc0c4/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4549709/2a0000017887b5b304da9d5cd609209bc0c4/hugeX",
                                    "w": "900"
                                }
                            }
                        }
                    },
                    "215867848107995204": {
                        "bs_data": {
                            "resource_links": {
                                "direct_data": {
                                    "targetUrl": "https://an.yandex.ru/count/WqSejI_zO3e3xHa0f2i7iEV8AsxEgWK0EWGnC7gzO000000uqhWxG0YKrkRYgHE00RRhGOW1jkj1a068mRtEmAhr_WMW0TJDwU_BW8200gW1rCtfxqkm0PoYeWIu0RAYiuaXm042s07WsTSWu06GWDSVw07w0OW2wXsO0fxyeHYW0g3xeHYv0iwan0BS8P0bm0Aswq7m0i73rEa4W4QW0mIe0ppr4FW4YDyKY0M8tnIG1RYhAQ05Wge6g0M2emMm1OAZ1RW5fC4Am0M2yMt81Utt6z05WQC5u0MPyu0f8OL_moFXq1uI3bvKibom1u20a3Iu1y8Bq0SGs0SA1j08cegmWKBW2D3za0pH2SXJIA8PXXnv0fWA0i4AXGyRUrwbqp_9r3kg2n25IGBe2xYhAV0B0-WCdmQO3TIMYG7W3OB2WK7o3IGtCpOvOZTcEIquPZ9ZBJGqPMCjOJWnCIqvEJOmCJKtPMPZCVE1fedIyD_X_Qlnf87lsxHhW12stkCP6mb0116mdU-dnalrFnd84C6G6lWG1WEO4UpW1g6vaCFyaH95cr9PPFZMF-aIM_0cZEST2a82g1FrqwE3oPc2u1EamGgW5AJ12gWKkAifi1I0fU4Xk1I0hgOAo1G4q1IMuOGvs1IRy9I11k0K0UWKZ0BG5Plmb846s1N1YlRieu-y_6Fmc1RGZy3w1Q0MqB_QXGQm5gK5k1O1m1QvLyaMWHUO5vhNYYce5md05xKIq1VGXWFO5wRxFU0N_9RL-0Ne5m7u5upLruK6cHYW61Am6D2H-eK6k1W1q1W2-1ZCYjEwbhBjwMg06OaPVI-G6G6W6OOHi1cu6V___m706QY4vQ2aWjYUTj8P1NHoTMvhu1a3w1de0l0PWC83WHh__-Sdw_Cqe9WQywGgi1havucBkFIju6x26lKQ0G0009WRoVwC0R0R8BWR0YKWCGGCnIY1OWmooAeRJmeUTE87PhPoAWtIf8fJ9L8gqbO9WWlt5liybX5oY1T2N_9Mln4fYzc4iq9u8K7P30Oo4ASelztEOtCGxf-1EwtMUpW04IRe3fGCFdhmy9I3GouLX3usvYPRU5SSlHvC8aw9S6Vp7EXKMdXUH_8vK8WS3m00~1"
                                }
                            },
                            "bmcategoryId": "0",
                            "creativeId": "C4475022",
                            "bannerCategories": [],
                            "adv_type": "16955046170479569392",
                            "geoDistanceRegular": "",
                            "domainId": "25444048",
                            "orderOptions": "9572352",
                            "count_links": {
                                "abuseUrl": "//an.yandex.ru/abuse/WA0ejI_z8Bkz100420UmvyWQcOxm1G2x034mUhrW000003ZIk3jmbDRcugaJa068mRtEmAhr_WMe0TJDwUzBs07WsTSWw07w0Q02eFkX6Ca6yu0f8OL_moFXq1uI3bvKibpG1mBG2820W802Y0lKEweB48L90W3W507O5S6AzkoZZxpyOu4Ny3_u680P1m0k1UCiH5B3VfGv48uTj6CY7Jjd~1",
                                "sitelinks": [{
                                    "url": "",
                                    "title": ""
                                }, {
                                    "url": "",
                                    "title": "JAC S7 2021"
                                }, {
                                    "url": "",
                                    "title": ""
                                }, {
                                    "url": "",
                                    "title": ""
                                }],
                                "url": "https://an.yandex.ru/count/WqSejI_zO3e3xHa0f2i7iEV8AsxEgWK0EWGnC7gzO000000uqhWxG0YKrkRYgHE00RRhGOW1jkj1a068mRtEmAhr_WMW0TJDwU_BW8200gW1rCtfxqkm0PoYeWIu0RAYiuaXm042s07WsTSWu06GWDSVw07w0OW2wXsO0fxyeHYW0g3xeHYv0iwan0BS8P0bm0Aswq7m0i73rEa4W4QW0mIe0ppr4FW4YDyKY0M8tnIG1RYhAQ05Wge6g0M2emMm1OAZ1RW5fC4Am0M2yMt81Utt6z05WQC5u0MPyu0f8OL_moFXq1uI3bvKibom1u20a3Iu1y8Bq0SGs0SA1j08cegmWKBW2D3za0pH2SXJIA8PXXnv0fWA0i4AXGyRUrwbqp_9r3kg2n25IGBe2xYhAV0B0-WCdmQO3TIMYG7W3OB2WK7o3IGtCpOvOZTcEIquPZ9ZBJGqPMCjOJWnCIqvEJOmCJKtPMPZCVE1fedIyD_X_Qlnf87lsxHhW12stkCP6mb0116mdU-dnalrFnd84C6G6lWG1WEO4UpW1g6vaCFyaH95cr9PPFZMF-aIM_0cZEST2a82g1FrqwE3oPc2u1EamGgW5AJ12gWKkAifi1I0fU4Xk1I0hgOAo1G4q1IMuOGvs1IRy9I11k0K0UWKZ0BG5Plmb846s1N1YlRieu-y_6Fmc1RGZy3w1Q0MqB_QXGQm5gK5k1O1m1QvLyaMWHUO5vhNYYce5md05xKIq1VGXWFO5wRxFU0N_9RL-0Ne5m7u5upLruK6cHYW61Am6D2H-eK6k1W1q1W2-1ZCYjEwbhBjwMg06OaPVI-G6G6W6OOHi1cu6V___m706QY4vQ2aWjYUTj8P1NHoTMvhu1a3w1de0l0PWC83WHh__-Sdw_Cqe9WQywGgi1havucBkFIju6x26lKQ0G0009WRoVwC0R0R8BWR0YKWCGGCnIY1OWmooAeRJmeUTE87PhPoAWtIf8fJ9L8gqbO9WWlt5liybX5oY1T2N_9Mln4fYzc4iq9u8K7P30Oo4ASelztEOtCGxf-1EwtMUpW04IRe3fGCFdhmy9I3GouLX3usvYPRU5SSlHvC8aw9S6Vp7EXKMdXUH_8vK8WS3m00~1",
                                "count": "https://an.yandex.ru/count/Wn8ejI_zO0C3HHW0P2W7iEV8usQQGGK00mGnC7gzO000000uqhWxG0YKrkRYgHE80RRhGQ01rCtfxyk0W802g07KpUdlIx01dAAY1BW1igApYI7O0U3Pro3W0P20rn_e0Ve1Y0Bg7PW2dloX6Ba2pgJ40jmXa2Nm0i73rEa4W4Qe0ppr48W5YDyKa0Mugocm1OAZ1RW5fC4Am0M2yMt81Utt6z05WQFpW2aXXN_38-7G7X8ENbIoNB07W82GDBW7mWlG1n3O1me6q0YQYh21Gk08qFsG3D49o5D8eXc677a2c0e2mGg53njxNgNJFydKEweB48L90kWBkAify0i3w0oV1fWDr9Q90U0DWiA1GV8D93SpDZbYDsOvBJXcCcCjD3HbOorXE34nBJavDZ0nDJTbPcCnyu6cYTBmt-7zg_6aWU_Rj6k04BRUunaR2K044R2TxwV6I_K_6SWGmP0Q-1060vWHxE06eRcGm_oH4aMRKbba-DO_wH9Ry2QCvnqAGWAe4_NJeuF9cOBW4wJ12g0KfC4Ag1Iugocm582buI6u582kfWh850JG59RXX3dO59lmb846u1G1w1IC0j0Lc_2KWGRO5S6AzkoZZxpyO_2O5j2FmFe5e1RGlzg51h0MfGMu5W705hbNoHQ15vWNcjUAAQWN2S0NjHBG5z260zWNflizu1VybjNu1UWN0VWNZDNNXGQP6A0O4h0Oq97wXGQu607G60Bu6CoAqxgMiktfQe0PYHbzBv0P0Q0PXX6m6RWP____0S0Pg8JbeAI2s9vsqXa5T79rRclW6GFe6UW2y1c0mWE16l__voVhypIWc1hpf2gm6kJdYOkuzAtWRi8QzHe10000c1l9_em1i1iWk1i29I0n10p5A85Y2aB9QXjF2XwyO0CpIpdr1sconQacAJtILZ622yiMZJp9Y1te1RKVUNJ727bzDggC4rv8a2ZBGAJwKoPVR7UkEL3rvy2zJuiy74J4-uq3MGReEfXno07KAPLeVZO6e5fuLq1y6TmUJaHWulIybjpGgXdCvq0X7Zm0~1=WbuejI_zOAK1fH80L273dE2VfG9mbDRcugaJW06swq680RRhGP01YC6zpi2gzVu5e07KpUdlou20W0Ae0TJDwUzBi06Seg84k06oehE98TW1uDdN8E01a83N7-W1-W6O0fxyeHYW0g3xeHZ00hRhGQ031B03zH281OZV5905kAifi0M2emMu1QJ12i05Wl5jo0NjznlG1O6Z1U05cQW6XX6m1u20a3Iu1y8Bq0SGs0SAu0U62l47002QYh21Gk08qFsG380A0fWA0i4AXGyRUrwbqp_9-0g0jHZP2z0U4WvULB9Sw0kugode39y6c0tKbea1Fw0Em8GzW12stkCPcX0R2K044R2TxwV6I_K_6SWGmP0Qc17iu0QX4PgPcPcPcRb5cr9PPFZMF-aIM_0cZEST2aAO4mAe4_NJeuF9cOB15U0JfC4Ae1IamGge5BYhAR0KWANX8RWKWAwc2iWK1D0Kbk64ETWKc_2KWGRe58m2q1MRy9I11jWLmOhsxAEFlFnZc1RGZy3w1Q0MqB_QXGQm5gK5k1O1m1QvLyaM003mFu4Nc1UQruefm1Ur4j0Nq8O3s1Uc-ptW5_oMrVW5w1S1-1UCrTU51faOe1WIi1ZGaVg51hWO0VWOp8hJkfQoxUbgW1c96Nqla1a1e1c64RWP____0U0P0-WPw0Bm6O320u4Q___d9-lpDA2O6lEaAlKQ0G0009WRoVwC0R0R8BWR0XC0_iGuKWTHOCguL4AoXY0FGdmQaX3MN49DqjLN7MdkwWP5n2fepFk1pYpGalNYaEONCJ022w9FLQbCHm40~1",
                                "linkTail": "=Wc8ejI_zOAu1nH80P25HcFtihW9029JMvkAf4u01jkj1Y06swq6G0OZ1lSx0glN-1Q01rCtfxyk0W802g07KpUdlIx01dAAY1BW1igApYI7O0U3Pro3W0P20rn_e0Ve1c0AU_A4Oe0AW-w4Om0Aswq6W0mIm0_KGY0M8tnIG1RYhAR05WgC5k0MamGh01OBnRSW5xVSRq0M1emNW1Pce1eOHi0U0W90qk0V22z074DW72k07XWhn1m00cegmWKBW2D3za0o02WAO2WB12eKF6tjUfTC_oVWAWBKOsGlG7X8ENbIoNEWBkAifw0oV1fWDr9Q90J-W3i24FO0GjjxZ6PeG6mb0116mdU-dnalrFnd84C6G6fWHxE06eH6QcPcPcPcvHPjIMMJurZ_f4blm9epd7Gf2c1C2g1FrqwE3oPc2mHNW4wJ12g0KfC4Ag1Iugocm582buI6u582kfWh850JG59RXX3dO59lmb846w1IC0j0Lc_2KWGRO5S6AzkoZZxpyOvWMq8_0-WMW5j2_seK6i1Qb1RWM0S0MkLV95W00y3-15vWNcjUAAS0NjHBG5z260zWNflizu1VybjNu1UWN0VWNZDNNXGQP6A0O4h0Oq97wXGQu607u6CoAqxgMiktfQe0PYHbzBv0P0Q0PXX6u6V___m7W6GFe6UW2y1c0mWE16l__voVhypIWc1hpf2hr6W40002O6yd-Z06m6o2u6m8K00V5E587KM3Ak5H2ieOW3qAW6f8mrrn2JTBdLntvxke6JiGgQ4m0WivGq987uv0c6Z4m50kYmLafdQER48SB~1"
                            },
                            "algId": "3",
                            "companyName": "",
                            "metro": "",
                            "floatMarketRating": "-1",
                            "bannerFlags": "",
                            "clientId": "86158234",
                            "targetUrl": "https://ac-yugra.ru/katalog/jac/s7/",
                            "domainVerified": "0",
                            "eventHash": "14979327516563294660",
                            "oid": "34272880",
                            "blockFavicon": "0",
                            "region": "",
                            "adId": "215867848107995204",
                            "hitLogId": "6679493960283594448",
                            "bannerLang": "1",
                            "warning": "",
                            "orderTags": [],
                            "geoDistance": "",
                            "liked": "0",
                            "phraseId": "1078710",
                            "isTurboBanner": false
                        },
                        "direct_data": {
                            "domain": "ac-yugra.ru",
                            "targetUrl": "https://ac-yugra.ru/katalog/jac/s7/",
                            "businessType": "auto",
                            "faviconSizes": {
                                "w": "48",
                                "h": "48"
                            },
                            "year": "2021",
                            "priceInfo": {
                                "currency": "RUR",
                                "current": "1168900"
                            },
                            "mdsMetaInfo": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "89",
                                        "h": "156",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "37",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "77",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "160",
                                        "w": "281"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "0",
                                        "w": "500"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "177",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "154",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "319",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "18",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "7",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "15",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "32",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "0",
                                        "w": "100"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "35",
                                        "h": "62",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "15",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "31",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "64",
                                        "w": "112"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "0",
                                        "w": "200"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "177",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "154",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "319",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "159",
                                        "h": "281",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "67",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "139",
                                        "w": "675"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "287",
                                        "w": "506"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "0",
                                        "w": "899"
                                    }]
                                }
                            },
                            "model": "S7",
                            "offerId": "f33a1ac615673f7071bc79716dc8448b5492f191",
                            "title": "JAC S7 2021",
                            "img": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/1518571/2a00000179a3693d64db4477e3f769e6126c/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/1518571/2a00000179a3693d64db4477e3f769e6126c/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/1518571/2a00000179a3693d64db4477e3f769e6126c/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/1518571/2a00000179a3693d64db4477e3f769e6126c/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/1518571/2a00000179a3693d64db4477e3f769e6126c/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/1518571/2a00000179a3693d64db4477e3f769e6126c/hugeX",
                                    "w": "900"
                                }
                            },
                            "facilities": "1.5 AT (150 л.с);2021;кроссовер;Левый руль",
                            "body": "Кроссовер. 2021. 1.5 AT (150 л.с). 1 168 900 ₽. Узнать подробнее!",
                            "name": "JAC S7 2021",
                            "vendor": "JAC"
                        }
                    },
                    "183594194587917619": {
                        "bs_data": {
                            "resource_links": {
                                "direct_data": {
                                    "targetUrl": "https://an.yandex.ru/count/WqSejI_zO3e3xHa0f2i7iEV8z5l-CWK0EWGnC7gzO000000uqhWxG0YKrkRYgHE00RRhGOW1jkj1a07czEJpp_oWZ0MW0TJDwU_BW8200gW1rCtfxqkm0PoYeWIu0RAYiuaXm042s07WsTSWu06GWDSVw07w0OW2wXsO0fxyeHYW0g3xeHYv0iwan0BS8P0bm0Aswq7m0i73rEa4W4QW0mYe0poq3_W4wh8JY0NgiXEG1PdK9g05lFK5g0MTzmIm1Ptt1BW5Wke9m0M2yMt81Utt6z05dVS4u0MPyu0f8OL_moFXq1uI3bvKibom1u20a3Iu1y8Bq0SGs0SA1j08cegmWKBW2D3za0pH2SXJIA8PXXnv0fWA0i4AyeqABRwfq3_9r3kg2n25IGBe2vdK9l0B0-WCdmQO3TIMYG7W3OB2WK7o3IGtCpOvOZTcEIquPZ9ZBJGqPMCjOJWnCIqvEJOmCJKtPMPZCVE1fedIyD_X_Qlnf87lsxHhW12stkCP6mb0116mdU-dnalrFnd84C6G6lWG1WEO4UpW1g6vaCFyaH9SijcMkKZGF-aIM_0cZEST2a82g1FrqwE3oPc2u1E2wWcW58Bg2QWKcTGci1I0fU4Xk1I0hgOAo1G4q1IMuOGvs1IRy9I11k0K0UWKZ0BG5Plmb846s1N1YlRieu-y_6Fmc1RGZy3w1Q0MqB_QXGQm5gK5k1O1m1QvLyaMWHUO5vhNYYce5md05xKIq1VGXWFO5wRxFU0N_9RL-0Ne5mVu5upLruK6cHYW61Am6D2H-eK6k1W7q1W2-1ZCYjEwbhBjwMg06OaPVI-G6G6W6OOHi1cu6V___m706QY4vQ2aWjYUTj8P1NHoTMvhu1aAw1de0l0PWC83WHh__w-h4_ykcPWQywGgi1havucBkFIju6x26lKQ0G0009WRoVwC0R0R8BWR0YKWCGGCnIY1OWmooAeRJmeUTE87PhPoAWtIf8fJ9L8gqbO9WWlt5liybX5oY1T2N_9Mln4fYzc4iq9u8K7P30Oo4ASelztEOtCGxf-1EwtMUpW04IRe3fGCFdhmy9I3GouLX3usvYPRU5SSlHvC8aw9S6Vp7EXKMdXUH_8vK8WS3m00~1"
                                }
                            },
                            "bmcategoryId": "0",
                            "creativeId": "C4475022",
                            "bannerCategories": [],
                            "adv_type": "16955046170479569392",
                            "geoDistanceRegular": "",
                            "domainId": "25444048",
                            "orderOptions": "9572352",
                            "count_links": {
                                "abuseUrl": "//an.yandex.ru/abuse/WA0ejI_z8Bkz100420UmvyYCNymA1G2x034mUhrW000003ZIk3jmbDRcugaJa07czEJpp_oWZ0Me0TJDwUzBs07WsTSWw07w0Q02eFkX6Ca6yu0f8OL_moFXq1uI3bvKibpG1mBG2820W802Y0lKEweB48L90W3W507O5S6AzkoZZxpyOu4Ny3_u680P1m0k1UCiH5B3VfGv48uTj6CY7Jjd~1",
                                "sitelinks": [{
                                    "url": "",
                                    "title": ""
                                }, {
                                    "url": "",
                                    "title": "JAC T6 2021"
                                }, {
                                    "url": "",
                                    "title": ""
                                }, {
                                    "url": "",
                                    "title": ""
                                }],
                                "url": "https://an.yandex.ru/count/WqSejI_zO3e3xHa0f2i7iEV8z5l-CWK0EWGnC7gzO000000uqhWxG0YKrkRYgHE00RRhGOW1jkj1a07czEJpp_oWZ0MW0TJDwU_BW8200gW1rCtfxqkm0PoYeWIu0RAYiuaXm042s07WsTSWu06GWDSVw07w0OW2wXsO0fxyeHYW0g3xeHYv0iwan0BS8P0bm0Aswq7m0i73rEa4W4QW0mYe0poq3_W4wh8JY0NgiXEG1PdK9g05lFK5g0MTzmIm1Ptt1BW5Wke9m0M2yMt81Utt6z05dVS4u0MPyu0f8OL_moFXq1uI3bvKibom1u20a3Iu1y8Bq0SGs0SA1j08cegmWKBW2D3za0pH2SXJIA8PXXnv0fWA0i4AyeqABRwfq3_9r3kg2n25IGBe2vdK9l0B0-WCdmQO3TIMYG7W3OB2WK7o3IGtCpOvOZTcEIquPZ9ZBJGqPMCjOJWnCIqvEJOmCJKtPMPZCVE1fedIyD_X_Qlnf87lsxHhW12stkCP6mb0116mdU-dnalrFnd84C6G6lWG1WEO4UpW1g6vaCFyaH9SijcMkKZGF-aIM_0cZEST2a82g1FrqwE3oPc2u1E2wWcW58Bg2QWKcTGci1I0fU4Xk1I0hgOAo1G4q1IMuOGvs1IRy9I11k0K0UWKZ0BG5Plmb846s1N1YlRieu-y_6Fmc1RGZy3w1Q0MqB_QXGQm5gK5k1O1m1QvLyaMWHUO5vhNYYce5md05xKIq1VGXWFO5wRxFU0N_9RL-0Ne5mVu5upLruK6cHYW61Am6D2H-eK6k1W7q1W2-1ZCYjEwbhBjwMg06OaPVI-G6G6W6OOHi1cu6V___m706QY4vQ2aWjYUTj8P1NHoTMvhu1aAw1de0l0PWC83WHh__w-h4_ykcPWQywGgi1havucBkFIju6x26lKQ0G0009WRoVwC0R0R8BWR0YKWCGGCnIY1OWmooAeRJmeUTE87PhPoAWtIf8fJ9L8gqbO9WWlt5liybX5oY1T2N_9Mln4fYzc4iq9u8K7P30Oo4ASelztEOtCGxf-1EwtMUpW04IRe3fGCFdhmy9I3GouLX3usvYPRU5SSlHvC8aw9S6Vp7EXKMdXUH_8vK8WS3m00~1",
                                "count": "https://an.yandex.ru/count/WnCejI_zO0C3JHW0T2W7iEV8-z7U3GK00mGnC7gzO000000uqhWxG0YKrkRYgHE80RRhGQ01rCtfxyk0W802g07KpUdlIx01dAAY1BW1igApYI7O0U3Pro3W0P20rn_e0Ve1Y0Bg7PW2dloX6Ba2pgJ40jmXa2Nm0i73rEa4W4Qe0poq3uW5wh8Ja0MPr2Qm1Ptt1BW5Wke9m0M2yMt81Utt6z05dVS4yu0f8OL_moFXq1uI3bvKibom1u20a3Iu1y8Bq0SGs0SA1j08cegmWKBW2D3za0pH2SXJIA8PXXnv0fWA0i4AyeqABRwfq3_9r3kg2n25IGBe2vdK9l0B0-WCdmQO3TIMYG7W3OB2WK7o3IGtCpOvOZTcEIquPZ9ZBJGqPMCjOJWnCIqvEJOmCJKtPMPZCVE1fedIyD_X_Qlnf87lsxHhW12stkCP6mb0116mdU-dnalrFnd84C6G6lWG1WEO4UpW1g6vaCFyaH9SijcMkKZGF-aIM_0cZEST2a82g1FrqwE3oPc2u1E2wWcW58Bg2QWKcTGci1I0fU4Xk1I0hgOAo1G4q1IMuOGvs1IRy9I11k0K0UWKZ0BG5Plmb846s1N1YlRieu-y_6Fmc1RGZy3w1Q0MqB_QXGQm5gK5k1O1m1QvLyaMWHUO5vhNYYce5md05xKIq1VGXWFO5wRxFU0N_9RL-0Ne5mVu5upLruK6cHYW61Am6D2H-eK6k1W7q1W2-1ZCYjEwbhBjwMg06OaPVI-G6G6W6OOHi1cu6V___m706QY4vQ2aWjYUTj8P1NHoTMvhu1aAw1de0l0PWC83WHh__w-h4_ykcPWQywGgi1havucBkFIju6x26lKQ0G0009WRoVwC0R0R8BWR0YKWCGGCnIY1OWf2oMeRJmeUl603CqivzGTfiiMf9YazqbOnWWlB5eqyoOWTw0Mr7tbqnmXvVJQgZ1DUI90eoq2a-bCcNsnthZbGzUV0lK-BF1n4nFkD0ra6w3gOSSW1r2cLQ7us1g1QU5T0V1dS7av4g0gNlvRSqAePpET08Huy~1=Wc0ejI_zOAK1jH80j24jL4-3fG9mbDRcugaJW06swq680RRhGP01vlJayy_ye8m5e07KpUdlou20W0Ae0TJDwUzBi06Seg84k06oehE98TW1uDdN8E01a83N7-W1-W6O0fxyeHYW0g3xeHZ00hRhGQ032B03j0-81Ugo4v05cTGci0MTzmIu1OBg2S05Wl5jo0NjznlG1Ptt1E05cQW6XX6m1u20a3Iu1y8Bq0SGs0SAu0U62l47002QYh21Gk08qFsG380A0fWA0i4AyeqABRwfq3_9-0g0jHZP2z0U4WvULB9Sw0kPr2Re39y6c0tKbea1Fw0Em8GzW12stkCPcX0R2K04200000004R2TxwV6I_K_6SWGmP0Qc17iu0QX4PgPcPcPcRbSijcMkKZGF-aIM_0cZEST2aAO4mAe4_NJeuF9cOB15U0JWke9e1I2wWce59dK9h0KWANX8RWKWAwc2iWK1D0Kbk64ETWKc_2KWGRe58m2q1MRy9I11jWLmOhsxAEFlFnZc1RGZy3w1Q0MqB_QXGQm5gK5k1O1m1QvLyaM003mFu4Nc1UQruefm1Ur4j0Nq8O3s1Uc-ptW5_oMrVW5w1S7-1UCrTU51faOe1WIi1ZGaVg51hWO1_WOp8hJkfQoxUbgW1c96Nqla1a1e1c64RWP____0U0P2kWPw0Bm6O320u4Q__-lgnF_BfcO6lEaAlKQ0G0009WRoVwC0R0R8BWR0X80_iGuKWTHOCguL4AoXY0FGdmQaX3MN08rIPgxkbSHiGyquVr0EnPeSNfn2FQB60E11T6dgbIcem00~1",
                                "linkTail": "=WcKejI_zOAu1tH80n26_K5BmhW9029JMvkAf4u01jkj1Y06swq6G0URqvFFF_A2C1Q01rCtfxyk0W802g07KpUdlIx01dAAY1BW1igApYI7O0U3Pro3W0P20rn_e0Ve1c0AU_A4Oe0AW-w4Om0Aswq6W0mYm0xGFY0NgiXEG1PdK9h05dVS4k0M2wWd01OBnRSW5xVSRq0MTzmJW1Pce1eOHi0U0W90qk0V22z074DW72k07XWhn1m00cegmWKBW2D3za0o02WAO2WB12lAD2Ys-gT0_oVWAWBKOsGlG7X8ENbIoNEWBcTGcw0oV1fWDr9Q90J-W3i24FO0GjjxZ6PeG6mb010W00000016mdU-dnalrFnd84C6G6fWHxE06eH6QcPcPcPcvNBBPbhb8q3_f4blm9epd7Gf2c1C2g1FrqwE3oPc2mHNW4uBg2Q0KWke9g1IPr2Qm582buI6u582kfWh850JG59RXX3dO59lmb846w1IC0j0Lc_2KWGRO5S6AzkoZZxpyOvWMq8_0-WMW5j2_seK6i1Qb1RWM0S0MkLV95W00y3-15vWNcjUAAS0NjHBG5z260zWNflizu1VybjNu1UWN1_WNZDNNXGQP6A0O4h0Oq97wXGQu60Vu6CoAqxgMiktfQe0PYHbzBv0P0Q0PXX6u6V___m7W6Ghe6UW2y1c0mWE16l__hwiJ_owPc1hpf2hr6W40002O6yd-Z06m6o2u6m8J00V5E587KM3Ak5H2ieOW3qAW6f8mrrm2DKc-kxgN4x4FD240GJieQ763SGWMZHW3YWNHuAoKpj5DYCC5~1"
                            },
                            "algId": "3",
                            "companyName": "",
                            "metro": "",
                            "floatMarketRating": "-1",
                            "bannerFlags": "",
                            "clientId": "86158234",
                            "targetUrl": "https://ac-yugra.ru/katalog/jac/t6/",
                            "domainVerified": "0",
                            "eventHash": "12436452478803600404",
                            "oid": "34272880",
                            "blockFavicon": "0",
                            "region": "",
                            "adId": "183594194587917619",
                            "hitLogId": "6679493960283594448",
                            "bannerLang": "1",
                            "warning": "",
                            "orderTags": [],
                            "geoDistance": "",
                            "liked": "0",
                            "phraseId": "1078710",
                            "isTurboBanner": false
                        },
                        "direct_data": {
                            "domain": "ac-yugra.ru",
                            "facilities": "2.0 МТ (177 л.с);2021;пикап;Левый руль",
                            "year": "2021",
                            "priceInfo": {
                                "currency": "RUR",
                                "current": "1098000"
                            },
                            "body": "Левый руль. Пикап. 2021. 2.0 МТ (177 л.с). 1 098 000 ₽. Узнать подробнее!",
                            "mdsMetaInfo": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "81",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "45",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "70",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "137",
                                        "w": "281"
                                    }, {
                                        "y": "2",
                                        "h": "374",
                                        "x": "2",
                                        "w": "499"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "161",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "90",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "139",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "274",
                                        "w": "562"
                                    }, {
                                        "y": "2",
                                        "h": "747",
                                        "x": "2",
                                        "w": "997"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "16",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "9",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "14",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "27",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "0",
                                        "w": "100"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "32",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "18",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "28",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "55",
                                        "w": "112"
                                    }, {
                                        "y": "0",
                                        "h": "149",
                                        "x": "0",
                                        "w": "199"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "161",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "90",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "139",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "274",
                                        "w": "562"
                                    }, {
                                        "y": "2",
                                        "h": "747",
                                        "x": "2",
                                        "w": "997"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "145",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "81",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "125",
                                        "w": "674"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "247",
                                        "w": "506"
                                    }, {
                                        "y": "2",
                                        "h": "672",
                                        "x": "2",
                                        "w": "897"
                                    }]
                                }
                            },
                            "targetUrl": "https://ac-yugra.ru/katalog/jac/t6/",
                            "mdsMetaInfo2": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "81",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "45",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "73",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "147",
                                        "w": "281"
                                    }, {
                                        "y": "0",
                                        "h": "371",
                                        "x": "5",
                                        "w": "495"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "161",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "90",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "146",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "293",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "742",
                                        "x": "9",
                                        "w": "990"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "16",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "9",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "15",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "29",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "74",
                                        "x": "1",
                                        "w": "99"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "32",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "18",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "29",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "59",
                                        "w": "112"
                                    }, {
                                        "y": "0",
                                        "h": "148",
                                        "x": "2",
                                        "w": "198"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "161",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "90",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "146",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "293",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "742",
                                        "x": "9",
                                        "w": "990"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "145",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "81",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "131",
                                        "w": "674"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "264",
                                        "w": "506"
                                    }, {
                                        "y": "0",
                                        "h": "668",
                                        "x": "9",
                                        "w": "891"
                                    }]
                                }
                            },
                            "businessType": "auto",
                            "model": "T6",
                            "img2": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/1333763/2a00000179a3693400d3a8463e2a99410a0f/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/1333763/2a00000179a3693400d3a8463e2a99410a0f/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/1333763/2a00000179a3693400d3a8463e2a99410a0f/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/1333763/2a00000179a3693400d3a8463e2a99410a0f/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/1333763/2a00000179a3693400d3a8463e2a99410a0f/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/1333763/2a00000179a3693400d3a8463e2a99410a0f/hugeX",
                                    "w": "900"
                                }
                            },
                            "vendor": "JAC",
                            "faviconSizes": {
                                "w": "48",
                                "h": "48"
                            },
                            "title": "JAC T6 2021",
                            "img3": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/467305/2a00000179a36942f63496e4ede006d500bc/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/467305/2a00000179a36942f63496e4ede006d500bc/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/467305/2a00000179a36942f63496e4ede006d500bc/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/467305/2a00000179a36942f63496e4ede006d500bc/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/467305/2a00000179a36942f63496e4ede006d500bc/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/467305/2a00000179a36942f63496e4ede006d500bc/hugeX",
                                    "w": "900"
                                }
                            },
                            "mdsMetaInfo3": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "81",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "42",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "80",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "147",
                                        "w": "281"
                                    }, {
                                        "y": "0",
                                        "h": "366",
                                        "x": "12",
                                        "w": "488"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "161",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "83",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "159",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "293",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "732",
                                        "x": "23",
                                        "w": "976"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "16",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "8",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "16",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "29",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "73",
                                        "x": "2",
                                        "w": "98"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "32",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "17",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "32",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "59",
                                        "w": "112"
                                    }, {
                                        "y": "0",
                                        "h": "146",
                                        "x": "5",
                                        "w": "195"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "161",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "83",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "159",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "293",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "732",
                                        "x": "23",
                                        "w": "976"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "145",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "75",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "143",
                                        "w": "675"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "264",
                                        "w": "506"
                                    }, {
                                        "y": "0",
                                        "h": "659",
                                        "x": "21",
                                        "w": "878"
                                    }]
                                }
                            },
                            "offerId": "a03b1c219d0fc0c569942c363a799ba4e9aa262b",
                            "name": "JAC T6 2021",
                            "img": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/765776/2a00000179a3692f682b4b82cf54d2f78565/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/765776/2a00000179a3692f682b4b82cf54d2f78565/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/765776/2a00000179a3692f682b4b82cf54d2f78565/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/765776/2a00000179a3692f682b4b82cf54d2f78565/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/765776/2a00000179a3692f682b4b82cf54d2f78565/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/765776/2a00000179a3692f682b4b82cf54d2f78565/hugeX",
                                    "w": "900"
                                }
                            }
                        }
                    },
                    "199897226393068140": {
                        "bs_data": {
                            "resource_links": {
                                "direct_data": {
                                    "targetUrl": "https://an.yandex.ru/count/WrSejI_zO4y3RHe0L2m7iEV8gCoh1mK0JmGnC7gzO000000uqhWxG0YKrkRYgHE00RRhGOW1jkj1a07OYVMh_DsMnWMW0TJDwU_BW8200gW1rCtfxqkm0PoYeWIu0RAYiuaXm042s07WsTSWu06GWDSVw07w0VW1ojpWlW680keTc0AU_A4Oe0AW-w4OkGBEfCG2t26G9S02jkj1y0B1mzJf1816e0CCg0CyjnBu1BAi3uW5igmFa0NtoXwW1QVN1AW5jlC3i0MsymEu1QdZ1y05Wl5jo0NjznlG1RNp0-05cVE0AI65VyCZuT0U4WvULB9Si0U0W90qk0V22z074DW72WRG29gAi852u0ZG_P0CqGd8KqYY6OOSUGAO2WB12ZBK37Q5GT4_oTGxgWiGXKa2w0ltoXxSu9y6c0tKbea1u0s2me51yWqaDpCsEM8tPZajE6OoOoqqD6LZBM4uCJ4jEJasC34rDsLcOp7pWQQ9ql3VuVshyQI1xzkqQu0GjjxZ6Hi9G0GHi9tlfyPBzJyPo131a1hu40O3c17iu0QXkP33_94ICxtRWIkPqJ_f4blm9epd7Gf20gWJzTEZWycPWk0JgUC7e1IfumUe5FVA7h0KWANX8RWKWAwc2iWK1D0Kbk64ETWKc_2KWGRW507e58m2q1MRy9I11jWLmOhsxAEFlFnZy9WMq8_0-WMW5j2_seK6i1Qb1RWM0S0MkLV95j0MojpWlW615vWNcjUAAQWN2S0NjHBG5z260zWNflizu1VybjNu1UWN1FWNZDNNXGQP6A0O4h0Oq97wXGQu60JG60Bu6CoAqxgMiktfQe0PYHbzBv0P0Q0PXX6m6RWP____0S0Pg8JbeAI2s9vsqXa5T79rRclW6HFe6UW2y1c0mWE16l__bszo1dhGc1hpf2gm6kJdYOkuzAtWRi8QzHe10000c1l9_em1i1iWk1i29o1110m38G5Y33BAo3OlonySGmDFnt8g3P96YrDrfD28N0KINFYskEYnZ014lF1wafUxZRZPP_FEDk4rWiwP3IGYJi5-kntBvk3TvmCdOQtl41Q3CVhGGqJOdZuGPs0IWvNt73YwL1xwlJ4-PM5VuVHky8gu8iAvpNTWLRcmBe_dSw0G91u0~1"
                                }
                            },
                            "bmcategoryId": "200021797",
                            "creativeId": "C4475022",
                            "bannerCategories": ["200021797"],
                            "adv_type": "16955046170479569392",
                            "geoDistanceRegular": "",
                            "domainId": "25444048",
                            "orderOptions": "9572352",
                            "count_links": {
                                "abuseUrl": "//an.yandex.ru/abuse/WA0ejI_z8Bkz100420UmvyZL0ywE1G2x034mUhrW000003ZIk3jmbDRcugaJa07OYVMh_DsMnWMe0TJDwUzBs07WsTSWw07w0Q02eFkX6Ca6yu0f8OL_moFXq1uI3bvKibpG1mBG2820W802Y0lKEweB48L90W3W507O5S6AzkoZZxpyOu4Ny3_u680P1m0k1UCiH5B3VfGv48uTj6CY7Jjd~1",
                                "sitelinks": [{
                                    "url": "",
                                    "title": ""
                                }, {
                                    "url": "",
                                    "title": "Lada Largus универсал 7 мест 2021"
                                }, {
                                    "url": "",
                                    "title": ""
                                }, {
                                    "url": "",
                                    "title": ""
                                }],
                                "url": "https://an.yandex.ru/count/WrSejI_zO4y3RHe0L2m7iEV8gCoh1mK0JmGnC7gzO000000uqhWxG0YKrkRYgHE00RRhGOW1jkj1a07OYVMh_DsMnWMW0TJDwU_BW8200gW1rCtfxqkm0PoYeWIu0RAYiuaXm042s07WsTSWu06GWDSVw07w0VW1ojpWlW680keTc0AU_A4Oe0AW-w4OkGBEfCG2t26G9S02jkj1y0B1mzJf1816e0CCg0CyjnBu1BAi3uW5igmFa0NtoXwW1QVN1AW5jlC3i0MsymEu1QdZ1y05Wl5jo0NjznlG1RNp0-05cVE0AI65VyCZuT0U4WvULB9Si0U0W90qk0V22z074DW72WRG29gAi852u0ZG_P0CqGd8KqYY6OOSUGAO2WB12ZBK37Q5GT4_oTGxgWiGXKa2w0ltoXxSu9y6c0tKbea1u0s2me51yWqaDpCsEM8tPZajE6OoOoqqD6LZBM4uCJ4jEJasC34rDsLcOp7pWQQ9ql3VuVshyQI1xzkqQu0GjjxZ6Hi9G0GHi9tlfyPBzJyPo131a1hu40O3c17iu0QXkP33_94ICxtRWIkPqJ_f4blm9epd7Gf20gWJzTEZWycPWk0JgUC7e1IfumUe5FVA7h0KWANX8RWKWAwc2iWK1D0Kbk64ETWKc_2KWGRW507e58m2q1MRy9I11jWLmOhsxAEFlFnZy9WMq8_0-WMW5j2_seK6i1Qb1RWM0S0MkLV95j0MojpWlW615vWNcjUAAQWN2S0NjHBG5z260zWNflizu1VybjNu1UWN1FWNZDNNXGQP6A0O4h0Oq97wXGQu60JG60Bu6CoAqxgMiktfQe0PYHbzBv0P0Q0PXX6m6RWP____0S0Pg8JbeAI2s9vsqXa5T79rRclW6HFe6UW2y1c0mWE16l__bszo1dhGc1hpf2gm6kJdYOkuzAtWRi8QzHe10000c1l9_em1i1iWk1i29o1110m38G5Y33BAo3OlonySGmDFnt8g3P96YrDrfD28N0KINFYskEYnZ014lF1wafUxZRZPP_FEDk4rWiwP3IGYJi5-kntBvk3TvmCdOQtl41Q3CVhGGqJOdZuGPs0IWvNt73YwL1xwlJ4-PM5VuVHky8gu8iAvpNTWLRcmBe_dSw0G91u0~1",
                                "count": "https://an.yandex.ru/count/Wo0ejI_zO143jHW052a7iEV8gsg0QWK04GGnC7gzO000000uqhWxG0YKrkRYgHE80RRhGQ01rCtfxyk0W802g07KpUdlIx01dAAY1BW1igApYI7O0U3Pro3W0P20rn_e0Ve1Y0Bg7PW2dloX6Ba2pgJ40jmXa2Nm0i73rEa4W4Qe0pot4eW5igmFa0NtoXwm1RRp0xW5gUC7m0M2yMt81Utt6z05jVC3yu0f8OL_moFXq1uI3bvKibom1u20a3Iu1y8Bq0SGs0SA1j08cegmWKBW2D3za0pH2SXJIA8PXXnv0fWA0i4ACjGCTeL1qJ_9r3kg2n25IGBe2_VA7jpWdmQO3TIMYG7W3OB2WK7o3IGtCpOvOZTcEIquPZ9ZBJGqPMCjOJWnCIqvEJOmCJKtPMPZCVE1fedIyD_X_Qlnf87lsxHhW12stkCP6mb010W00000016mdU-dnalrFnd84C6G6lWG1WEO4UpW1g6vaCFyaH8plTk1AvdHF-aIM_0cZEST2a82g1FrqwE3oPc2u1EfumUW5AdZ1wWKzyeUi1I0fU4Xk1I0hgOAo1G4q1IMuOGvs1IRy9I11k0K0UWKZ0BG5Plmb846s1N1YlRieu-y_6Fmc1RGZy3w1Q0MqB_QXGQm5gK5k1O1m1QvLyaMq1RAtE2-0O4Nc1UQruefg1S9m1Ur4j0Nq8O3s1Uc-ptW5_oMrVW5w1S4-1UCrTU51faOe1WIi1ZGaVg51hWO1D0O0lWOp8hJkfQoxUbgW1c96Nqla1a1e1c64R0Pk1d___y1m1ceXEMWf8BOddRI6GLqSdLkQ-0P4-WPw0Bm6O320u4Q__-NRt86Uj2O6lEaAh0QvEU9YxZqhU1kmXhr6W40002O6yd-Z06m6o2u6m8c844430CX0M98Guc86o_B3vRm0qzREJK7IVEAKoLI28bSnH1SMBROv456205VY3laxHqZyjLa4yk2S5M2PPMdQBwpdRlZ8DP70oT2hUyGB1PXfA674e5txq2H0Re6CsuvWE9IYUPxOm3Qmhu2uidWzd0YGbKu-Mi9XrRDS3u72W7X0G00~1=WcyejI_zOBe1BHC0P29NR9FjkW9mbDRcugaJW06swq680RRhGP01s8drg_pTbiO5e07KpUdlou20W0Ae0TJDwUzBi06Seg84k06oehE98TW1uDdN8E01a83N7-W1-W7u0ShSuBu1c0AU_A4Oe0AW-w4Om0Aswq6W0mom0xSIY0Moh0-G1VVA7h05jlC3k0MfumV01OBnRSW5xVSRq0MrymFW1Pce1eOHi0U0W90qk0V22z074DW72k07XWhn1m00cegmWKBW2D3za0o02WAO2WB12ZBK37Q5GT4_oVWAWBKOsGlG7X8ENbIoNEWBzyeUY0pAtE2-0UWCdmQO3TIMYG4_e0x0X3s04BRUuncQ41i9G0GHi9tlfyPBzJyPo131a1gO4UpW1g4HcfcPcPcPkJEzsu4hcT4_wH9Ry2QCvnqAGfWJ0gWJzTEZWycPWi4Lu1EfumUW5AdZ1wWKzyeUi1I0fU4Xk1I0hgOAo1G4q1IMuOGvs1IRy9I11kWKZ0BG5Plmb846s1N1YlRieu-y_6EO5j2FmFe5e1RGlzg51h0MfGMu5W705hbNoHRG5ihSuBu1WHUO5vhNYYd05xKIq1VGXWFO5wRxFU0N_9RL-0Ne5mJu5upLruK6cHYW61Am6D2H-eK6k1W4-1ZCYjEwbhBjwMg06OaPVI-G6G6W6OOHk1d___y1u1aJw1de0l0PWC83WHh__vTlSWPwq9WQywGgzHe10000c1l9_em1i1iWk1i24m0JnJXI1p5XohXKXD0GoJyV2PY2XBxc4cgIZh_gI7fNDvWYLa5ZBI1eWWGjcSmFQPeH0mEn8DgDbSfq5000~1",
                                "linkTail": "=WdCejI_zOCC1JHC0T28-N1gxmm9029JMvkAf4u01jkj1Y06swq6G0TY9zQlytPR61Q01rCtfxyk0W802g07KpUdlIx01dAAY1BW1igApYI7O0U3Pro3W0P20rn_e0Ve1-07AtE2-0PW2dloX6A02eFkX6C02jkj1e0CCi0Et4eW5igmFa0NtoXwm1RRp0xW5gUC7m0M2yMt81Utt6z05jVC3u0MPg0Q64R07W82GDBW7mWlG1n3O1mhW1uOAyGS009gAi852u0ZG_P0CW0e2c0e2mGeor0nsXK7HFydu2e2r6DaBq1uI3bvKibpe2_VA7eWCojpWlW7e39y6c0tKbea1Fw0Em8GzW12stkCPcX0R2K044R2TxwV6I_K_6SWGmP0Qc17iu0QX4PgPcPcPcRaplTk1AvdHF-aIM_0cZEST2aAO4mAe4_NJeuF9cOB15U0JgUC7e1IfumUe5FVA7h0KWANX8RWKWAwc2iWK1D0Kbk64ETWKc_2KWGRe58m2q1MRy9I11jWLmOhsxAEFlFnZc1RGZy3w1Q0MqB_QXGQm5gK5k1O1m1QvLyaMq1RAtE2-0O4Nc1UQruefm1Ur4j0Nq8O3s1Uc-ptW5_oMrVW5w1S4-1UCrTU51faOe1WIi1ZGaVg51hWO1FWOp8hJkfQoxUbgW1c96Nqla1a1e1c64RWP____0U0P4-WPw0Bm6O320u4Q__-NRt86Uj2O6lEaAlKQ0G0009WRoVwC0R0R8BWR0XG07CKuKWSnOSguL8JG4Ca_7ucSWeJ7vX9gaXx0wiX-LpVW8bP1OtKWQC86BRdD3sc-4GCZiY3wr9NIERe9SRW0~1"
                            },
                            "algId": "3",
                            "companyName": "",
                            "metro": "",
                            "floatMarketRating": "-1",
                            "bannerFlags": "",
                            "clientId": "86158234",
                            "targetUrl": "https://ac-yugra.ru/katalog/lada/largus-7-mest/",
                            "domainVerified": "0",
                            "eventHash": "33783264994048939",
                            "oid": "34272880",
                            "blockFavicon": "0",
                            "region": "",
                            "adId": "199897226393068140",
                            "hitLogId": "6679493960283594448",
                            "bannerLang": "1",
                            "warning": "",
                            "orderTags": [],
                            "geoDistance": "",
                            "liked": "0",
                            "phraseId": "1078710",
                            "isTurboBanner": false
                        },
                        "direct_data": {
                            "domain": "ac-yugra.ru",
                            "facilities": "1.6 MT (87 л.с.);2021;универсал;Левый руль",
                            "year": "2021",
                            "priceInfo": {
                                "currency": "RUR",
                                "current": "553900"
                            },
                            "img4": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4012204/2a000001776d8454d3f67a29d6ff77a92d62/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4012204/2a000001776d8454d3f67a29d6ff77a92d62/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4012204/2a000001776d8454d3f67a29d6ff77a92d62/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4012204/2a000001776d8454d3f67a29d6ff77a92d62/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4012204/2a000001776d8454d3f67a29d6ff77a92d62/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4012204/2a000001776d8454d3f67a29d6ff77a92d62/hugeX",
                                    "w": "900"
                                }
                            },
                            "body": "Левый руль. Универсал. 2021. 1.6 MT (87 л.с.). 553 900 ₽. Узнать подробнее!",
                            "mdsMetaInfo": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "104",
                                        "h": "156",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "37",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "94",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "139",
                                        "w": "282"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "0",
                                        "w": "500"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "208",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "187",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "277",
                                        "w": "563"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "21",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "7",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "19",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "28",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "0",
                                        "w": "100"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "42",
                                        "h": "62",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "15",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "37",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "55",
                                        "w": "113"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "0",
                                        "w": "200"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "208",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "187",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "277",
                                        "w": "563"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "187",
                                        "h": "281",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "67",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "168",
                                        "w": "675"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "249",
                                        "w": "507"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "0",
                                        "w": "899"
                                    }]
                                }
                            },
                            "mdsMetaInfo5": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "89",
                                        "h": "156",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "37",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "104",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "157",
                                        "w": "281"
                                    }, {
                                        "y": "0",
                                        "h": "370",
                                        "x": "5",
                                        "w": "495"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "177",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "208",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "314",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "740",
                                        "x": "10",
                                        "w": "989"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "18",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "7",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "21",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "31",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "74",
                                        "x": "1",
                                        "w": "99"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "35",
                                        "h": "62",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "15",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "42",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "63",
                                        "w": "112"
                                    }, {
                                        "y": "0",
                                        "h": "148",
                                        "x": "2",
                                        "w": "198"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "177",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "208",
                                        "w": "749"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "314",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "740",
                                        "x": "10",
                                        "w": "989"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "159",
                                        "h": "281",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "67",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "187",
                                        "w": "674"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "283",
                                        "w": "506"
                                    }, {
                                        "y": "0",
                                        "h": "666",
                                        "x": "10",
                                        "w": "890"
                                    }]
                                }
                            },
                            "targetUrl": "https://ac-yugra.ru/katalog/lada/largus-7-mest/",
                            "mdsMetaInfo2": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "104",
                                        "h": "156",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "37",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "83",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "146",
                                        "w": "281"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "0",
                                        "w": "500"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "208",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "166",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "291",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "21",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "7",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "17",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "29",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "0",
                                        "w": "100"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "42",
                                        "h": "62",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "15",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "33",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "58",
                                        "w": "112"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "0",
                                        "w": "200"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "208",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "166",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "291",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "187",
                                        "h": "281",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "67",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "149",
                                        "w": "675"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "262",
                                        "w": "506"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "0",
                                        "w": "899"
                                    }]
                                }
                            },
                            "businessType": "auto",
                            "mdsMetaInfo4": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "104",
                                        "h": "156",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "37",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "83",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "146",
                                        "w": "281"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "0",
                                        "w": "500"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "208",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "166",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "291",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "21",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "7",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "17",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "29",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "0",
                                        "w": "100"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "42",
                                        "h": "62",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "15",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "33",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "58",
                                        "w": "112"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "0",
                                        "w": "200"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "208",
                                        "h": "312",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "166",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "291",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "187",
                                        "h": "281",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "67",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "149",
                                        "w": "675"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "262",
                                        "w": "506"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "0",
                                        "w": "899"
                                    }]
                                }
                            },
                            "model": "Largus универсал 7 мест",
                            "img2": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4402523/2a000001776d84520d4ef8af17d016ec66b1/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4402523/2a000001776d84520d4ef8af17d016ec66b1/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4402523/2a000001776d84520d4ef8af17d016ec66b1/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4402523/2a000001776d84520d4ef8af17d016ec66b1/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4402523/2a000001776d84520d4ef8af17d016ec66b1/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4402523/2a000001776d84520d4ef8af17d016ec66b1/hugeX",
                                    "w": "900"
                                }
                            },
                            "vendor": "Lada",
                            "img5": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4402523/2a000001776d8454fae383d7496984af5c9d/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4402523/2a000001776d8454fae383d7496984af5c9d/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4402523/2a000001776d8454fae383d7496984af5c9d/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4402523/2a000001776d8454fae383d7496984af5c9d/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4402523/2a000001776d8454fae383d7496984af5c9d/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4402523/2a000001776d8454fae383d7496984af5c9d/hugeX",
                                    "w": "900"
                                }
                            },
                            "faviconSizes": {
                                "w": "48",
                                "h": "48"
                            },
                            "title": "Lada Largus универсал 7 мест 2021",
                            "img3": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/1062300/2a000001776d84541da8dcb4f739bc02b678/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/1062300/2a000001776d84541da8dcb4f739bc02b678/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/1062300/2a000001776d84541da8dcb4f739bc02b678/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/1062300/2a000001776d84541da8dcb4f739bc02b678/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/1062300/2a000001776d84541da8dcb4f739bc02b678/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/1062300/2a000001776d84541da8dcb4f739bc02b678/hugeX",
                                    "w": "900"
                                }
                            },
                            "mdsMetaInfo3": {
                                "25": {
                                    "smart-centers": [{
                                        "y": "96",
                                        "h": "157",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "37",
                                        "h": "281",
                                        "x": "0",
                                        "w": "500"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "94",
                                        "w": "375"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "157",
                                        "w": "281"
                                    }, {
                                        "y": "0",
                                        "h": "375",
                                        "x": "0",
                                        "w": "500"
                                    }]
                                },
                                "23": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "187",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "314",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "21": {
                                    "smart-centers": [{
                                        "y": "19",
                                        "h": "31",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "7",
                                        "h": "56",
                                        "x": "0",
                                        "w": "100"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "19",
                                        "w": "75"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "31",
                                        "w": "56"
                                    }, {
                                        "y": "0",
                                        "h": "75",
                                        "x": "0",
                                        "w": "100"
                                    }]
                                },
                                "24": {
                                    "smart-centers": [{
                                        "y": "38",
                                        "h": "63",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "15",
                                        "h": "112",
                                        "x": "0",
                                        "w": "200"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "37",
                                        "w": "150"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "63",
                                        "w": "112"
                                    }, {
                                        "y": "0",
                                        "h": "150",
                                        "x": "0",
                                        "w": "200"
                                    }]
                                },
                                "27": {
                                    "smart-centers": [{
                                        "y": "192",
                                        "h": "313",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "74",
                                        "h": "562",
                                        "x": "0",
                                        "w": "999"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "187",
                                        "w": "750"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "314",
                                        "w": "562"
                                    }, {
                                        "y": "0",
                                        "h": "749",
                                        "x": "0",
                                        "w": "999"
                                    }]
                                },
                                "26": {
                                    "smart-centers": [{
                                        "y": "173",
                                        "h": "282",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "67",
                                        "h": "506",
                                        "x": "0",
                                        "w": "899"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "168",
                                        "w": "675"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "283",
                                        "w": "506"
                                    }, {
                                        "y": "0",
                                        "h": "674",
                                        "x": "0",
                                        "w": "899"
                                    }]
                                }
                            },
                            "offerId": "d9e3ac0ea425d57ba5d3cc911587f2932ae9ac5f",
                            "name": "Lada Largus универсал 7 мест 2021",
                            "img": {
                                "25": {
                                    "h": "375",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4338654/2a000001776d845206238bfdd782be82d933/huge",
                                    "w": "500"
                                },
                                "23": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4338654/2a000001776d845206238bfdd782be82d933/orig-optimized",
                                    "w": "1000"
                                },
                                "21": {
                                    "h": "75",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4338654/2a000001776d845206238bfdd782be82d933/small",
                                    "w": "100"
                                },
                                "24": {
                                    "h": "150",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4338654/2a000001776d845206238bfdd782be82d933/big",
                                    "w": "200"
                                },
                                "27": {
                                    "h": "750",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4338654/2a000001776d845206238bfdd782be82d933/hugeXX",
                                    "w": "1000"
                                },
                                "26": {
                                    "h": "675",
                                    "val": "//avatars.mds.yandex.net/get-yabs_performance/4338654/2a000001776d845206238bfdd782be82d933/hugeX",
                                    "w": "900"
                                }
                            }
                        }
                    }
                }
            },
            "BUTTON_TEXT_COLOR": "#FFFFFF",
            "HAS_RUN": false,
            "HAS_OFFER_IMAGES": true,
            "CAROUSEL_AUTO_INTERVAL": "3",
            "OFFER_PRICE_COLOR": "#000000",
            "LEGAL_ICON_TEXT": "О продавце",
            "BUTTON_BORDER_COLOR": "#3AB349",
            "BUTTON_COLOR": "#3AB349",
            "HAS_OFFER_NAME": true,
            "LOGO.Width": "431",
            "LOGO.Height": "150",
            "OFFER_PRICE": true,
            "BUY_BUTTON_TEXT": "Подробнее",
            "HEIGHT": "0",
            "MAX_SHOW_ITEMS": "25",
            "OFFERS_ON_X_AXIS": "1",
            "WIDTH": "0",
            "HAS_FACILITY": true,
            "HAS_BUY_BUTTON": true,
            "BACKGROUND_COLOR": "#FFFFFF",
            "OFFER_DISCOUNT_THRESHOLD": "5",
            "OFFER_PRICE_FROM_TO": "0",
            "CAROUSEL_AUTO": false,
            "HAS_CAROUSEL": true
        },
        "url": "",
        "bidreqid": "7739839996145456637",
        "height": 300,
        "basePath": ""
    },
    "matchUrls": ["https://stats.mos.ru/gc/ynd/", "https://sonar.semantiqo.com/dmp/scr.php", "https://ssp.adriver.ru/cgi-bin/sync.cgi?dsp_id=109", "https://an.yandex.ru/mapuid/google/", "https://dmg.digitaltarget.ru/1/119/i/i?i=1623030320", "https://yandex-dmp-sync.rutarget.ru/sync", "https://yandex-sync.rutarget.ru/sync", "https://x01.aidata.io/0.gif?pid=YANDEX", "https://sync.1dmp.io/pixel.gif?cid=3cbc2ec8-1421-4677-89fe-2ac6fc52a09a&pid=w&o=au", "https://redirect.frontend.weborama.fr/redirect/standard?url=https://an.yandex.ru/mapuid/dmpweborama/{WEBO_CID}", "https://profile.ssp.rambler.ru/sync3.302?pid=188", "https://an.yandex.ru/mapuid/adobedmp/", "https://dm.hybrid.ai/yandexdmp-match", "https://cm.tns-counter.ru/yacm", "https://sync.upravel.com/yandex/sync"],
    "visibilitySettings": {
        "delay": 2000,
        "bannerVisibilityPercent": 30
    },
    "rtbAuctionInfo": {
        "bidReqId": 7739839996145456637,
        "bidReqIdStr": "7739839996145456637",
        "bsGeneratedUniqID": "2577043621549801715",
        "dspId": 1
    },
    "settings": {
        "3818": {
            "adFilter": "yabs.MTQ0MjczODY0MTE5ODk1NzE1CjE1MDAwMzMyMjEyNDEwNTg1MAoxNTg0NzI1OTA4OTE1ODcyNzQKMTYxMDQxNjM2MDQzNzQ5MDg0CjE3NzkzODY1NTI2MTgxNTQwNgoxODE3NTEyMzAwNzA4MTQ2NDQKMTgzNTk0MTk0NTg3OTE3NjE5CjE4NTQyMTA1MTcyNTc2NjUwNwoxOTE0MzExMzQxNDM4NTQwMzcKMTk5ODk3MjI2MzkzMDY4MTQwCjIxNTg2Nzg0ODEwNzk5NTIwNAo3MjA1NzYwNDIyMTUxNDYwMg==",
            "bannerFlags": "",
            "viewNotices": [],
            "intersectionVisibility": "1",
            "linkTail": "https://an.yandex.ru/rtbcount/1O7y_2o90Sq100000000U9nJ_DoWgTXQVrZPy6_e796A_CniIuEglGaCGE094mazyNm3Uwnc7Zj3AYDGFFE2d11VNCYccD9NV0mCjSui30ojZ21o9kFvO2QGJeQ5Z45_mGo6bN3MHf3UX8T0OY-ZN2u_mr6mp5L6aF1THWOP1eQ_Z7qUBWnpcO16CInbqW5Ah0MJPvd-0y4h9e5MJuZnCF2NYGj8jZ8p0ybUPf3SL30vbpaHP3KpKw82HmF8QkPWppbf2P9gvYUPOVwzoWos64m-PIxuniNqazd1YHziRXUBYhcncMMIUPgbhaMQKRAkYKbgicwYXQ6XhgMbcO6XgNbgMhAXnGOMnXqip0TO64-oH7zGwtako-LqWUNhvSND9sSs7HIzoG9nv0VxXt3MMnQGdnUmSfvahTM72DvarN2IT15Ai2txoWhovYzM3cCJ8tCZ2mk31hOFRrOBJ63xtBYiyzA7-m-LPx1zNgArWEt9yyxk7L_MFiXRoGOp-02RmWas9W2rB8DO",
            "bannerIds": ["144273864119895715", "150003322124105850", "158472590891587274", "161041636043749084", "177938655261815406", "181751230070814644", "183594194587917619", "185421051725766507", "191431134143854037", "199897226393068140", "215867848107995204", "72057604221514602"]
        }
    }
}

const result = mediaSmartAdapter(json);

console.log(JSON.stringify(result, null, 3))