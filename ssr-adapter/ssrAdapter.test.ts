import { ssrAdapter } from './ssrAdapter';

const newMetaFormat = {
    settings: {
        // не изменялось
    },
    visibilitySettings: {
        // не изменялось
    },
    rtbAuctionInfo: {
        // не изменялось
    },
    direct: {
        directTitle: {
            title: 'реклама',
            url: 'https://direct.yandex.ru/?partner',
        },
        ads: [
            {
                direct_data: {
                    body: 'Запишись на прием врача остеопата - лечение боли в суставах, позвоночнике и спине',
                    domain: 'atmosferika.ru',
                    mdsMetaInfo: [
                        {
                            ColorWizButton: '#C0BFC6',
                            ColorWizButtonText: '#563E4A',
                            ColorWizBackRight: '#949B9F',
                            'smart-center': {
                                y: 69,
                                h: 140,
                                x: 0,
                                w: 45,
                            },
                            'smart-centers': [
                                {
                                    y: 69,
                                    h: 140,
                                    x: 0,
                                    w: 45,
                                },
                                {
                                    y: 45,
                                    h: 252,
                                    x: 0,
                                    w: 44,
                                },
                                {
                                    y: 0,
                                    h: 339,
                                    x: 75,
                                    w: 34,
                                },
                                {
                                    y: 45,
                                    h: 155,
                                    x: 0,
                                    w: 44,
                                },
                                {
                                    y: 0,
                                    h: 339,
                                    x: 179,
                                    w: 25,
                                },
                                {
                                    y: 0,
                                    h: 336,
                                    x: 0,
                                    w: 45,
                                },
                            ],
                            ColorWizBack: '#D3D6DC',
                        },
                    ],
                    img: [
                        {
                            h: 339,
                            val: '//avatars.mds.yandex.net/get-direct/2398261/B8dOWL4p_wELhMoDIhm3kw/x450',
                            w: 450,
                        },
                    ],
                    title: 'Дипломированный врач остеопат',
                    faviconSizes: {
                        h: 300,
                        w: 300,
                    },
                    targetUrl: 'https://atmosferika.ru/?utm_ya_campaign=32967230642&utm_banner_type=209',
                },
                bs_data: {
                    count_links: {
                        url: 'count-url',
                        sitelinks: [
                            {
                                url: '',
                                targetUrl: '',
                                title: '',
                            },
                            {
                                url: '',
                                targetUrl: '',
                                title: '',
                            },
                        ],
                        linkTail: 'tail-link',
                    },
                    pathUrl: '',
                },
            },
            {
                body: 'Запишись на прием врача остеопата - лечение боли в суставах, позвоночнике и спине',
                domain: 'atmosferika.ru',
                faviconWidth: '300',
                faviconHeight: '300',
                title: 'Дипломированный врач остеопат',
                targetUrl: 'https://atmosferika.ru/?utm_ya_campaign=32967230642&utm_banner_type=209',
                images: [
                    [
                        '//avatars.mds.yandex.net/get-direct/2398261/B8dOWL4p_wELhMoDIhm3kw/x450',
                        '450',
                        '339',
                        {
                            ColorWizButton: '#C0BFC6',
                            ColorWizButtonText: '#563E4A',
                            ColorWizBackRight: '#949B9F',
                            'smart-center': {
                                y: 69,
                                h: 140,
                                x: 0,
                                w: 45,
                            },
                            'smart-centers': [
                                {
                                    y: 69,
                                    h: 140,
                                    x: 0,
                                    w: 45,
                                },
                                {
                                    y: 45,
                                    h: 252,
                                    x: 0,
                                    w: 44,
                                },
                                {
                                    y: 0,
                                    h: 339,
                                    x: 75,
                                    w: 34,
                                },
                                {
                                    y: 45,
                                    h: 155,
                                    x: 0,
                                    w: 44,
                                },
                                {
                                    y: 0,
                                    h: 339,
                                    x: 179,
                                    w: 25,
                                },
                                {
                                    y: 0,
                                    h: 336,
                                    x: 0,
                                    w: 45,
                                },
                            ],
                            ColorWizBack: '#D3D6DC',
                        },
                    ],
                ],
            }
        ],
    },
    common: {
        // не изменялось
    },
    matchUrls: [
        // не изменялось
    ],
};

const expectedOldFormat = {
    settings: {
        // не изменялось
    },
    visibilitySettings: {
        // не изменялось
    },
    rtbAuctionInfo: {
        // не изменялось
    },
    direct: {
        directTitle: {
            title: 'реклама',
            url: 'https://direct.yandex.ru/?partner',
        },
        ads: [
            {
                body: 'Запишись на прием врача остеопата - лечение боли в суставах, позвоночнике и спине',
                faviconWidth: '300',
                faviconHeight: '300',
                title: 'Дипломированный врач остеопат',
                targetUrl: 'https://atmosferika.ru/?utm_ya_campaign=32967230642&utm_banner_type=209',
                images: [
                    [
                        '//avatars.mds.yandex.net/get-direct/2398261/B8dOWL4p_wELhMoDIhm3kw/x450',
                        '450',
                        '339',
                        {
                            ColorWizButton: '#C0BFC6',
                            ColorWizButtonText: '#563E4A',
                            ColorWizBackRight: '#949B9F',
                            'smart-center': {
                                y: 69,
                                h: 140,
                                x: 0,
                                w: 45,
                            },
                            'smart-centers': [
                                {
                                    y: 69,
                                    h: 140,
                                    x: 0,
                                    w: 45,
                                },
                                {
                                    y: 45,
                                    h: 252,
                                    x: 0,
                                    w: 44,
                                },
                                {
                                    y: 0,
                                    h: 339,
                                    x: 75,
                                    w: 34,
                                },
                                {
                                    y: 45,
                                    h: 155,
                                    x: 0,
                                    w: 44,
                                },
                                {
                                    y: 0,
                                    h: 339,
                                    x: 179,
                                    w: 25,
                                },
                                {
                                    y: 0,
                                    h: 336,
                                    x: 0,
                                    w: 45,
                                },
                            ],
                            ColorWizBack: '#D3D6DC',
                        },
                    ],
                ],
                warning: '',
                age: '',
                path: '',
                secondTitle: '',
                telNum: '',
                metro: '',
                price_info: {
                    price: '',
                    currency: '',
                    prefix: '',
                    old: '',
                    discount: '',
                },
                domain: 'atmosferika.ru',
                liked: '0',
                adId: 0,
                bannerFlags: '',
                blockFavicon: '0',
                region: '',
                floatMarketRating: -1,
                hitLogId: 0,
                algId: '',
                bannerCategories: [],
                eventHash: 0,
                isTurboBanner: false,
                orderTags: [],
                bannerLang: '0',
                address: '',
                workingTime: '',
                callUrl: '',
                vcardUrl: '',
                companyName: '',
                pathUrl: '',
                url: 'count-url',
                sitelinks: [
                    {
                        url: '',
                        targetUrl: '',
                        title: '',
                    },
                    {
                        url: '',
                        targetUrl: '',
                        title: '',
                    },
                ],
                linkTail: 'tail-link',
                punyDomain: 'atmosferika.ru',
                adv_type: '0',
                phraseId: 0,
            },
            {
                body: 'Запишись на прием врача остеопата - лечение боли в суставах, позвоночнике и спине',
                domain: 'atmosferika.ru',
                faviconWidth: '300',
                faviconHeight: '300',
                title: 'Дипломированный врач остеопат',
                targetUrl: 'https://atmosferika.ru/?utm_ya_campaign=32967230642&utm_banner_type=209',
                images: [
                    [
                        '//avatars.mds.yandex.net/get-direct/2398261/B8dOWL4p_wELhMoDIhm3kw/x450',
                        '450',
                        '339',
                        {
                            ColorWizButton: '#C0BFC6',
                            ColorWizButtonText: '#563E4A',
                            ColorWizBackRight: '#949B9F',
                            'smart-center': {
                                y: 69,
                                h: 140,
                                x: 0,
                                w: 45,
                            },
                            'smart-centers': [
                                {
                                    y: 69,
                                    h: 140,
                                    x: 0,
                                    w: 45,
                                },
                                {
                                    y: 45,
                                    h: 252,
                                    x: 0,
                                    w: 44,
                                },
                                {
                                    y: 0,
                                    h: 339,
                                    x: 75,
                                    w: 34,
                                },
                                {
                                    y: 45,
                                    h: 155,
                                    x: 0,
                                    w: 44,
                                },
                                {
                                    y: 0,
                                    h: 339,
                                    x: 179,
                                    w: 25,
                                },
                                {
                                    y: 0,
                                    h: 336,
                                    x: 0,
                                    w: 45,
                                },
                            ],
                            ColorWizBack: '#D3D6DC',
                        },
                    ],
                ],
            }
        ],
    },
    common: {
        // не изменялось
    },
    matchUrls: [
        // не изменялось
    ],
};

describe('ssrAdapter', () => {
    it('Тест для ТГО: Первый баннер в новом формате, второй в старом', () => {
        const adaptedDate = ssrAdapter(newMetaFormat);
        const preparedMetaToOldFormat = adaptedDate.meta;
        const isAdaptedData = adaptedDate.adapted;

        expect(isAdaptedData).toEqual(true);
        expect(JSON.stringify(preparedMetaToOldFormat)).toEqual(JSON.stringify(expectedOldFormat));
    });
});
