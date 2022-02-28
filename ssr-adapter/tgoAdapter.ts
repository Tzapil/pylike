import { BSMeta } from '../ssr/parseMeta';
import { converterAdsArrayItem, converterCallback, imgItem, newAdsEngineTgo } from './adapterTypes';

const has = require('lodash/has');
const get = require('lodash/get');
const set = require('lodash/set');
const punycode = require('punycode/');

// таблица путей и дефолтов в ответе бк для тго и смартго
// ТГО: https://wiki.yandex-team.ru/users/yury-zh/resursy-v-edinom-otvete/
// смартТГО: https://wiki.yandex-team.ru/users/yury-zh/edinyjj-otvet-v-smarttga/
const converterAdsArray = [
    // direct_data
    { oldPath: 'body', newPath: 'direct_data.body', defaultValue: '' },
    // в старом string, в новом int
    { oldPath: 'faviconWidth', newPath: 'direct_data.faviconSizes.w', defaultValue: null, cb: (val: number) => (String(val)) },
    { oldPath: 'faviconHeight', newPath: 'direct_data.faviconSizes.h', defaultValue: null, cb: (val: number) => (String(val)) },
    { oldPath: 'title', newPath: 'bs_data.title', altPath: 'direct_data.title', defaultValue: '' },
    { oldPath: 'targetUrl', newPath: 'bs_data.targetUrl', altPath: 'direct_data.targetUrl', defaultValue: '' },
    // в старом [[<val>string, <w>string, <h>string, {}]],  в новом [{<val>string, <w>int, <h>int}]
    { oldPath: 'images', newPath: 'direct_data.img', defaultValue: null },
    { oldPath: 'warning', newPath: 'direct_data.warning', altPath: 'bs_data.warning', defaultValue: '' },
    { oldPath: 'age', newPath: 'direct_data.age', defaultValue: '' },
    { oldPath: 'path', newPath: 'direct_data.path', defaultValue: '' },
    { oldPath: 'secondTitle', newPath: 'direct_data.secondTitle', defaultValue: '' },
    { oldPath: 'permalink', newPath: 'direct_data.permalink', defaultValue: null },
    { oldPath: 'telNum', newPath: 'direct_data.telNum', defaultValue: '' },
    { oldPath: 'green_url_text_prefix', newPath: 'direct_data.green_url_text_prefix', defaultValue: null },
    { oldPath: 'green_url_text_suffix', newPath: 'direct_data.green_url_text_suffix', defaultValue: null },
    { oldPath: 'metro', newPath: 'direct_data.metro', altPath: 'bs_data.metro', defaultValue: '' },

    // direct_data.assets
    { oldPath: 'assets.button.key', newPath: 'direct_data.assets.button.key', defaultValue: null },
    { oldPath: 'assets.button.caption', newPath: 'direct_data.assets.button.caption', defaultValue: null },
    { oldPath: 'assets.logo', newPath: 'direct_data.assets.logo', defaultValue: null },

    // direct_data.priceInfo
    { oldPath: 'price_info.price', newPath: 'direct_data.priceInfo.price', altPath: 'direct_data.priceInfo.current', defaultValue: '' },
    { oldPath: 'price_info.currency', newPath: 'direct_data.priceInfo.currency', defaultValue: '' },
    { oldPath: 'price_info.prefix', newPath: 'direct_data.priceInfo.prefix', defaultValue: '' },
    { oldPath: 'price_info.old', newPath: 'direct_data.priceInfo.old', defaultValue: '' },
    { oldPath: 'price_info.discount', newPath: 'direct_data.priceInfo.discount', defaultValue: '' },

    // bs_data
    { oldPath: 'domain', newPath: 'bs_data.domain', altPath: 'direct_data.domain', defaultValue: '' },
    { oldPath: 'geoDistance', newPath: 'bs_data.geoDistance', defaultValue: null },
    { oldPath: 'geoDistanceRegular', newPath: 'bs_data.geoDistanceRegular', defaultValue: null },
    { oldPath: 'liked', newPath: 'bs_data.liked', defaultValue: '0' },
    { oldPath: 'adId', newPath: 'bs_data.adId', defaultValue: 0 },
    { oldPath: 'oid', newPath: 'bs_data.oid', defaultValue: null },
    { oldPath: 'bannerFlags', newPath: 'bs_data.bannerFlags', defaultValue: '' },
    { oldPath: 'blockFavicon', newPath: 'bs_data.blockFavicon', defaultValue: '0' },
    { oldPath: 'region', newPath: 'bs_data.region', defaultValue: '' },
    { oldPath: 'floatMarketRating', newPath: 'bs_data.floatMarketRating', defaultValue: -1 },
    { oldPath: 'hitLogId', newPath: 'bs_data.hitLogId', defaultValue: 0 },
    { oldPath: 'algId', newPath: 'bs_data.algId', defaultValue: '' },
    { oldPath: 'bannerCategories', newPath: 'bs_data.bannerCategories', defaultValue: [] },
    { oldPath: 'eventHash', newPath: 'bs_data.eventHash', defaultValue: 0 },
    { oldPath: 'isTurboBanner', newPath: 'bs_data.isTurboBanner', defaultValue: false },
    { oldPath: 'orderOptions', newPath: 'bs_data.orderOptions', defaultValue: null },
    { oldPath: 'orderTags', newPath: 'bs_data.orderTags', defaultValue: [] },
    { oldPath: 'bannerLang', newPath: 'bs_data.bannerLang', defaultValue: '0' },
    { oldPath: 'address', newPath: 'bs_data.address', defaultValue: '' },
    { oldPath: 'workingTime', newPath: 'bs_data.workingTime', defaultValue: '' },
    { oldPath: 'callUrl', newPath: 'bs_data.callUrl', defaultValue: '' },
    { oldPath: 'vcardUrl', newPath: 'bs_data.vcardUrl', defaultValue: '' },
    { oldPath: 'companyName', newPath: 'bs_data.companyName', defaultValue: '' },
    { oldPath: 'hidePicture', newPath: 'bs_data.hidePicture', defaultValue: null },
    { oldPath: 'hideIcon', newPath: 'bs_data.hideIcon', defaultValue: null },
    { oldPath: 'skipPictures', newPath: 'bs_data.skipPictures', defaultValue: null },
    { oldPath: 'metrika_snippet', newPath: 'bs_data.metrikaSnippet', altPath: 'bs_data.metrika_snippet', defaultValue: null },
    { oldPath: 'socialUrls', newPath: 'bs_data.socialUrls', defaultValue: null },
    { oldPath: 'ctr', newPath: 'bs_data.ctr', defaultValue: null },
    { oldPath: 'position', newPath: 'bs_data.position', defaultValue: null },
    { oldPath: 'addInfo', newPath: 'bs_data.addInfo', defaultValue: null },
    { oldPath: 'vast', newPath: 'bs_data.vast', defaultValue: null },
    { oldPath: 'vastBase64', newPath: 'bs_data.vastBase64', defaultValue: null },
    { oldPath: 'vastType', newPath: 'bs_data.vastType', defaultValue: null },
    { oldPath: 'bmcategoryId', newPath: 'bs_data.bmcategoryId', defaultValue: null },
    { oldPath: 'domainId', newPath: 'bs_data.domainId', defaultValue: null },
    { oldPath: 'domainVerified', newPath: 'bs_data.domainVerified', defaultValue: null },

    // bs_data.resource_links
    { oldPath: 'pathUrl', newPath: 'bs_data.resource_links.bs_data.pathUrl', defaultValue: '' },
    { oldPath: 'assets.button.href', newPath: 'bs_data.resource_links.bs_data.assets.button.href', defaultValue: null },

    // bs_data.count_links
    { oldPath: 'url', newPath: 'bs_data.count_links.url', altPath: 'bs_data.resource_links.direct_data.targetUrl', defaultValue: '' },
    { oldPath: 'sitelinks', newPath: 'bs_data.count_links.sitelinks', defaultValue: [] },
    { oldPath: 'linkTail', newPath: 'bs_data.count_links.linkTail', defaultValue: '' },
    { oldPath: 'abuseUrl', newPath: 'bs_data.count_links.abuseUrl', defaultValue: null },

    // выпиливают
    { oldPath: 'BannerFlag', newPath: 'direct_data.warning', defaultValue: null, cb: () => '1' },
    // Т.к. БК выпиливает поле punyDomain, нужно самим получать punycode
    { oldPath: 'punyDomain', newPath: 'direct_data.domain', defaultValue: '', cb: (val: string) => punycode.toASCII(val.toLowerCase()) },

    // доп. поля смартТГО
    { oldPath: 'adv_type', newPath: 'bs_data.adv_type', defaultValue: '0' },
    { oldPath: 'phraseId', newPath: 'bs_data.phraseId', defaultValue: 0 },
    { oldPath: 'metro_time_on_foot', newPath: 'direct_data.metroTimeOnFoot', defaultValue: null },

    // https://st.yandex-team.ru/PCODE-17884
    { oldPath: 'ratings.market_ugc_rating_float', newPath: 'bs_data.ratings.market_ugc_rating_float', defaultValue: null },
    { oldPath: 'ratings.market_ugc_reviews_count', newPath: 'bs_data.ratings.market_ugc_reviews_count', defaultValue: null },
    { oldPath: 'ratings.market_ugc_reviews_link', newPath: 'bs_data.ratings.market_ugc_reviews_link', defaultValue: null },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getMetaIndex(imgs: imgItem[], mds: any, i: number) {
    // в объектах индекс считается от 1
    if (!Array.isArray(imgs) && Array.isArray(mds)) {
        return i - 1;
    }

    if (Array.isArray(imgs) && !Array.isArray(mds)) {
        return i + 1;
    }

    // imgs и mds либо оба массивы, либо оба объекты
    return i;
}

function getImage(newAdsFormat: newAdsEngineTgo, pathToImg: string, pathToMdsMetaInfo: string) {
    const imgs = get(newAdsFormat, pathToImg, []);
    const hasMetaInfo = has(newAdsFormat, pathToMdsMetaInfo);
    const mdsMetaInfo = get(newAdsFormat, pathToMdsMetaInfo, []);
    // сейчас костыли потому что может придти либо массив, либо объект, потом оставим только объект (как бк пофиксит)
    const indexes = Array.isArray(imgs) ?
        // убираем пустые дырки, чтобы результат был одинаковый с объектом и массивом
        imgs.reduce((acc: number[], img: imgItem, i: number) => {
            if (Object.keys(img).length) {
                acc.push(i);
            }

            return acc;
        }, []) :
        Object.keys(imgs).reduce((acc: number[], i: string) => {
            // еще есть артефакт,  что объект прилетает пустым по ключу. (такого в принципе быь не должно, но есть)
            if (Object.keys(imgs[i]).length) {
                acc.push(Number(i));
            }

            return acc;
        }, []);

    return indexes.map((i: number) => (
        hasMetaInfo ?
            [imgs[i].val, String(imgs[i].w), String(imgs[i].h), mdsMetaInfo[getMetaIndex(imgs, mdsMetaInfo, i)]] :
            [imgs[i].val, String(imgs[i].w), String(imgs[i].h)]
    ));
}

// Логика поменялась стили (smart-center) из images[3] лежат в direct_data.mdsMetaInfo
function getImages(newAdsFormat: newAdsEngineTgo, item: converterAdsArrayItem) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let imgs: [string, string, string, any][] = [];

    for (let i = 1; i < 6; i++) {
        const pathToImg = i !== 1 ? `direct_data.img${i}` : item.newPath;
        const pathToMdsMetaInfo = `direct_data.mdsMetaInfo${i !== 1 ? i : ''}`;
        const img = get(newAdsFormat, pathToImg, undefined);

        if (!img) {
            continue;
        }

        imgs = imgs.concat(getImage(newAdsFormat, pathToImg, pathToMdsMetaInfo));
    }

    return !imgs.length ? item.defaultValue : imgs;
}

// direct_data.telNum[1 или 2 в объекте], а если нет то bs_data.telNum
function getTelNum(newAdsFormat: newAdsEngineTgo, item: converterAdsArrayItem) {
    const bsDataPathTelNum = 'bs_data.telNum';

    if (has(newAdsFormat, item.newPath)) {
        const telNums = get(newAdsFormat, item.newPath);

        if (Array.isArray(telNums) && telNums[1]) {
            return telNums[1];
        }

        // может прилететь объект, тогда берем из 2го индекса
        // также есть вероятность получить в этом поле строку
        if (!Array.isArray(telNums) && typeof telNums === 'object' && telNums[2]) {
            return telNums[2];
        }
    }

    if (has(newAdsFormat, bsDataPathTelNum)) {
        return get(newAdsFormat, bsDataPathTelNum);
    }

    return item.defaultValue;
}

function getValue(newAdsFormat: newAdsEngineTgo, path: string, cb?: converterCallback) {
    const valueFromNewFormat = get(newAdsFormat, path);

    return cb ? cb(valueFromNewFormat, path, newAdsFormat) : valueFromNewFormat;
}

function getDefault(newAdsFormat: newAdsEngineTgo, item: converterAdsArrayItem) {
    if (has(newAdsFormat, item.newPath)) {
        return getValue(newAdsFormat, item.newPath, item.cb);
    }

    if (item.altPath && has(newAdsFormat, item.altPath)) {
        return getValue(newAdsFormat, item.altPath, item.cb);
    }

    return item.defaultValue;
}

function getValueFromNewAdsFormat(newAdsFormat: newAdsEngineTgo, item: converterAdsArrayItem) {
    // кастомная логика для обработки сложных параметров
    if (item.oldPath === 'images') {
        return getImages(newAdsFormat, item);
    }

    if (item.oldPath === 'telNum') {
        return getTelNum(newAdsFormat, item);
    }

    return getDefault(newAdsFormat, item);
}

export function tgoAdapter(bsMeta: BSMeta): {meta: BSMeta, adapted: boolean} {
    let adapted = false;

    return {
        meta: {
            ...bsMeta,
            direct: {
                ...bsMeta.direct,
                ads: bsMeta.direct.ads.map((newAdsFormat: newAdsEngineTgo) => {
                    // если нет bs_data, считаем что баннер прилетел в старом формате.
                    if (!newAdsFormat.bs_data) {
                        return newAdsFormat;
                    }

                    let oldFormat = {};
                    adapted = true;

                    converterAdsArray.forEach((item: converterAdsArrayItem) => {
                        const value = getValueFromNewAdsFormat(newAdsFormat, item);

                        // считаем, что если null (none), то данные не пришли и проставлять их не нужно.
                        if (value !== null) {
                            set(oldFormat, item.oldPath, value);
                        }
                    });

                    return oldFormat;
                }),
            },
        },
        adapted
    };
}
