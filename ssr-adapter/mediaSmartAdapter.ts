import { BSMeta } from '../ssr/parseMeta';
import { converterAdsArrayItem, converterCallback, imgItem, mediaSmartParentData, mediaSmartCreativeIdData } from './adapterTypes';

const has = require('lodash/has');
const get = require('lodash/get');
const set = require('lodash/set');
const punycode = require('punycode/');

// таблица путей и дефолтов в ответе бк для медиа-смарта
// https://wiki.yandex-team.ru/users/yury-zh/edinyjj-otvet-mediasmart/
const converterAdsArray = [
    // click_url
    { oldPath: 'click_url.abuse', newPath: 'bs_data.count_links.abuse', defaultValue: null },
    { oldPath: 'click_url.action_button', newPath: 'bs_data.count_links.url', defaultValue: '' },
    { oldPath: 'click_url.discount', newPath: 'bs_data.count_links.url', defaultValue: '' },
    { oldPath: 'click_url.image_big', newPath: 'bs_data.count_links.url', defaultValue: '' },
    { oldPath: 'click_url.image_huge', newPath: 'bs_data.count_links.url', defaultValue: '' },
    { oldPath: 'click_url.image_hugeX', newPath: 'bs_data.count_links.url', defaultValue: '' },
    { oldPath: 'click_url.image_hugeXX', newPath: 'bs_data.count_links.url', defaultValue: '' },
    { oldPath: 'click_url.image_orig', newPath: 'bs_data.count_links.url', defaultValue: '' },
    { oldPath: 'click_url.image_orig-optimized', newPath: 'bs_data.count_links.url', defaultValue: '' },
    { oldPath: 'click_url.image_small', newPath: 'bs_data.count_links.url', defaultValue: '' },
    { oldPath: 'click_url.price_current', newPath: 'bs_data.count_links.url', defaultValue: '' },
    { oldPath: 'click_url.text_body', newPath: 'bs_data.count_links.url', defaultValue: '' },
    { oldPath: 'click_url.text_name', newPath: 'bs_data.count_links.url', defaultValue: '' },

    // price
    { oldPath: 'price.current', newPath: 'direct_data.priceInfo.current', defaultValue: '' },
    { oldPath: 'price.old', newPath: 'direct_data.priceInfo.old', defaultValue: null },

    // unmoderated
    { oldPath: 'unmoderated.bmcategoryId', newPath: 'bs_data.bmcategoryId', defaultValue: null },
    { oldPath: 'unmoderated.domainId', newPath: 'bs_data.domainId', defaultValue: null },
    { oldPath: 'unmoderated.faviconHeight', newPath: 'direct_data.faviconSizes.h', defaultValue: null },
    { oldPath: 'unmoderated.faviconWidth', newPath: 'direct_data.faviconSizes.w', defaultValue: null },
    { oldPath: 'unmoderated.floatMarketRating', newPath: 'bs_data.floatMarketRating', defaultValue: -1 },
    { oldPath: 'unmoderated.position', newPath: 'bs_data.position', defaultValue: null },
    { oldPath: 'unmoderated.punyDomain', newPath: 'direct_data.domain', defaultValue: '', cb: (val: string) => punycode.toASCII(val.toLowerCase()) },

    // text
    { oldPath: 'text.address', newPath: 'direct_data.address', defaultValue: null },
    // пока оставим так
    // { oldPath: 'text.alt', newPath: 'direct_data.alt', defaultValue: null },
    { oldPath: 'text.body', newPath: 'direct_data.body', defaultValue: null },
    { oldPath: 'text.building_name', newPath: 'direct_data.buildingName', defaultValue: null },
    { oldPath: 'text.business_type', newPath: 'direct_data.businessType', defaultValue: null },
    { oldPath: 'text.class', newPath: 'direct_data.class', defaultValue: null },
    { oldPath: 'text.client_id', newPath: 'bs_data.clientId', defaultValue: null },
    { oldPath: 'text.colors', newPath: 'direct_data.colors', defaultValue: null },
    { oldPath: 'text.consist', newPath: 'direct_data.consist', defaultValue: null },
    { oldPath: 'text.currency_iso_code', newPath: 'direct_data.priceInfo.currency', defaultValue: null },
    { oldPath: 'text.description_for_direct', newPath: 'direct_data.descriptionForDirect', defaultValue: null },
    { oldPath: 'text.facilities', newPath: 'direct_data.facilities', defaultValue: null },
    { oldPath: 'text.facility', newPath: 'direct_data.facility', defaultValue: null },
    { oldPath: 'text.from', newPath: 'direct_data.from', defaultValue: null },
    { oldPath: 'text.legal', newPath: 'direct_data.warning', defaultValue: null },
    { oldPath: 'text.location', newPath: 'direct_data.location', defaultValue: null },
    { oldPath: 'text.metro', newPath: 'direct_data.metro', defaultValue: null },
    { oldPath: 'text.metro_time_on_foot', newPath: 'direct_data.metroTimeOnFoot', defaultValue: null },
    { oldPath: 'text.metro_time_on_transport', newPath: 'direct_data.metroTimeOnTransport', defaultValue: null },
    { oldPath: 'text.model', newPath: 'direct_data.model', defaultValue: null },
    { oldPath: 'text.name', newPath: 'direct_data.name', defaultValue: null },
    { oldPath: 'text.name_for_direct', newPath: 'bs_data.title', altPath: 'direct_data.title', defaultValue: null },
    { oldPath: 'text.offer_type', newPath: 'direct_data.offerType', defaultValue: null },
    { oldPath: 'text.params_for_direct', newPath: 'direct_data.paramsForDirect', defaultValue: null },
    { oldPath: 'text.realty_type', newPath: 'direct_data.realtyType', defaultValue: null },
    { oldPath: 'text.required_info', newPath: 'direct_data.requiredInfo', defaultValue: null },
    { oldPath: 'text.run', newPath: 'direct_data.run', defaultValue: null },
    { oldPath: 'text.second_title_for_direct', newPath: 'direct_data.secondTitle', defaultValue: null },
    { oldPath: 'text.sizes', newPath: 'direct_data.sizes', defaultValue: null },
    { oldPath: 'text.sub_location', newPath: 'direct_data.subLocation', defaultValue: null },
    { oldPath: 'text.to', newPath: 'direct_data.to', defaultValue: null },
    { oldPath: 'text.vendor', newPath: 'direct_data.vendor', defaultValue: null },
    { oldPath: 'text.year', newPath: 'direct_data.year', defaultValue: null },

    // direct_data.img<i>.25 -> image.big_<i>
    { oldPath: 'image.big_1', newPath: 'direct_data.img.24', defaultValue: null, cb: getImage },
    { oldPath: 'image.big_2', newPath: 'direct_data.img2.24', defaultValue: null, cb: getImage },
    { oldPath: 'image.big_3', newPath: 'direct_data.img3.24', defaultValue: null, cb: getImage },
    { oldPath: 'image.big_4', newPath: 'direct_data.img4.24', defaultValue: null, cb: getImage },
    { oldPath: 'image.big_5', newPath: 'direct_data.img5.24', defaultValue: null, cb: getImage },

    // direct_data.img<i>.25 -> image.huge_<i>
    { oldPath: 'image.huge_1', newPath: 'direct_data.img.25', defaultValue: null, cb: getImage },
    { oldPath: 'image.huge_2', newPath: 'direct_data.img2.25', defaultValue: null, cb: getImage },
    { oldPath: 'image.huge_3', newPath: 'direct_data.img3.25', defaultValue: null, cb: getImage },
    { oldPath: 'image.huge_4', newPath: 'direct_data.img4.25', defaultValue: null, cb: getImage },
    { oldPath: 'image.huge_5', newPath: 'direct_data.img5.25', defaultValue: null, cb: getImage },

    // direct_data.img<i>.26 -> image.hugeX_<i>
    { oldPath: 'image.hugeX_1', newPath: 'direct_data.img.26', defaultValue: null, cb: getImage },
    { oldPath: 'image.hugeX_2', newPath: 'direct_data.img2.26', defaultValue: null, cb: getImage },
    { oldPath: 'image.hugeX_3', newPath: 'direct_data.img3.26', defaultValue: null, cb: getImage },
    { oldPath: 'image.hugeX_4', newPath: 'direct_data.img4.26', defaultValue: null, cb: getImage },
    { oldPath: 'image.hugeX_5', newPath: 'direct_data.img5.26', defaultValue: null, cb: getImage },

    // direct_data.img<i>.26 -> image.hugeXX_<i>
    { oldPath: 'image.hugeXX_1', newPath: 'direct_data.img.27', defaultValue: null, cb: getImage },
    { oldPath: 'image.hugeXX_2', newPath: 'direct_data.img2.27', defaultValue: null, cb: getImage },
    { oldPath: 'image.hugeXX_3', newPath: 'direct_data.img3.27', defaultValue: null, cb: getImage },
    { oldPath: 'image.hugeXX_4', newPath: 'direct_data.img4.27', defaultValue: null, cb: getImage },
    { oldPath: 'image.hugeXX_5', newPath: 'direct_data.img5.27', defaultValue: null, cb: getImage },

    // direct_data.img<i>.23 -> image.orig-optimized_<i>
    { oldPath: 'image.orig-optimized_1', newPath: 'direct_data.img.23', defaultValue: null, cb: getImage },
    { oldPath: 'image.orig-optimized_2', newPath: 'direct_data.img2.23', defaultValue: null, cb: getImage },
    { oldPath: 'image.orig-optimized_3', newPath: 'direct_data.img3.23', defaultValue: null, cb: getImage },
    { oldPath: 'image.orig-optimized_4', newPath: 'direct_data.img4.23', defaultValue: null, cb: getImage },
    { oldPath: 'image.orig-optimized_5', newPath: 'direct_data.img5.23', defaultValue: null, cb: getImage },

    // direct_data.img<i>.22 -> image.orig_<i>
    { oldPath: 'image.orig_1', newPath: 'direct_data.img.22', defaultValue: null, cb: getImage },
    { oldPath: 'image.orig_2', newPath: 'direct_data.img2.22', defaultValue: null, cb: getImage },
    { oldPath: 'image.orig_3', newPath: 'direct_data.img3.22', defaultValue: null, cb: getImage },
    { oldPath: 'image.orig_4', newPath: 'direct_data.img4.22', defaultValue: null, cb: getImage },
    { oldPath: 'image.orig_5', newPath: 'direct_data.img5.22', defaultValue: null, cb: getImage },

    // direct_data.img<i>.21 -> image.small_<i>
    { oldPath: 'image.small_1', newPath: 'direct_data.img.21', defaultValue: null, cb: getImage },
    { oldPath: 'image.small_2', newPath: 'direct_data.img2.21', defaultValue: null, cb: getImage },
    { oldPath: 'image.small_3', newPath: 'direct_data.img3.21', defaultValue: null, cb: getImage },
    { oldPath: 'image.small_4', newPath: 'direct_data.img4.21', defaultValue: null, cb: getImage },
    { oldPath: 'image.small_5', newPath: 'direct_data.img5.21', defaultValue: null, cb: getImage },

    { oldPath: 'count', newPath: 'bs_data.count_links.count', defaultValue: null },
    { oldPath: 'object_id', newPath: 'bs_data.adId', defaultValue: '' },
    { oldPath: 'target_url', newPath: 'direct_data.targetUrl', defaultValue: '' },
    { oldPath: 'warning', newPath: 'direct_data.warning', defaultValue: null },
    // пока оставим так
    // { oldPath: 'image.logo', newPath: 'image.logo', defaultValue: null },

    // https://st.yandex-team.ru/PCODE-17884
    { oldPath: 'ratings.market_ugc_rating_float', newPath: 'bs_data.ratings.market_ugc_rating_float', defaultValue: null },
    { oldPath: 'ratings.market_ugc_reviews_count', newPath: 'bs_data.ratings.market_ugc_reviews_count', defaultValue: null },
    { oldPath: 'ratings.market_ugc_reviews_link', newPath: 'bs_data.ratings.market_ugc_reviews_link', defaultValue: null },
];

// из parent_data в root (раньше это и был parent_data)
const converterAdsArrayFromParentDataToRoot = [
    // Для копирования пустого значения
    { oldPath: 'misc.click_url', newPath: 'bs_data.count_links', defaultValue: null },
    { oldPath: 'misc.click_url.abuse', newPath: 'bs_data.count_links.abuse', defaultValue: null },
    { oldPath: 'misc.object_id', newPath: 'bs_data.creativeId', defaultValue: null },
    // path которого не существует, чтобы проставить дефолт, в бк логику оторвали.
    { oldPath: 'misc.target_url', newPath: 'not_exist_path', defaultValue: 'http://ru.yandex.smart' },
    { oldPath: 'logo.click_url.image_logo', newPath: 'bs_data.resource_links.direct_data.targetUrl', ifexist: 'direct_data.commonData.logo.target_url', defaultValue: null },
    { oldPath: 'logo.count', newPath: 'bs_data.count_links.count', defaultValue: null },
    { oldPath: 'price.current', newPath: 'direct_data.priceInfo.current', defaultValue: null },
    { oldPath: 'price.old', newPath: 'direct_data.priceInfo.old', defaultValue: null },
    { oldPath: 'logo.unmoderated.punyDomain', newPath: 'direct_data.domain', defaultValue: '', cb: (val: string) => punycode.toASCII(val.toLowerCase()) },
    { oldPath: 'spec.click_url.text_body', newPath: 'bs_data.resource_links.direct_data.clickUrl', ifexist: 'direct_data.commonData.spec', defaultValue: null },
];

function getImage(
    img: imgItem,
    path: string,
    newAdsFormat: mediaSmartParentData | mediaSmartCreativeIdData,
) {
    const num = path.split('.').pop();
    const pathToMdsMetaInfo = `direct_data.mdsMetaInfo.${num}`;

    let mdsInfo = {};
    if (has(newAdsFormat, pathToMdsMetaInfo)) {
        mdsInfo = getValue(newAdsFormat, pathToMdsMetaInfo);
    }

    return {
        height: String(img.h),
        width: String(img.w),
        url: img.val,
        ...mdsInfo,
    };
}

function getValue(
    newAdsFormat: mediaSmartParentData | mediaSmartCreativeIdData,
    path: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cb?: converterCallback,
) {
    const valueFromNewFormat = get(newAdsFormat, path);

    return cb ? cb(valueFromNewFormat, path, newAdsFormat) : valueFromNewFormat;
}

function getValueFromNewAdsFormat(
    newAdsFormat: mediaSmartParentData | mediaSmartCreativeIdData,
    item: converterAdsArrayItem
) {
    if (item.ifexist && !has(newAdsFormat, item.ifexist)) {
        return null;
    }

    if (has(newAdsFormat, item.newPath)) {
        return getValue(newAdsFormat, item.newPath, item.cb);
    }

    if (item.altPath && has(newAdsFormat, item.altPath)) {
        return getValue(newAdsFormat, item.altPath, item.cb);
    }

    return item.defaultValue;
}

function setAdsValues(
    converterArray: converterAdsArrayItem[],
    newFormat: mediaSmartParentData | mediaSmartCreativeIdData,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    oldFormat: any
) {
    converterArray.forEach((item: converterAdsArrayItem) => {
        const value = getValueFromNewAdsFormat(newFormat, item);

        // считаем, что если null (none), то данные не пришли и проставлять их не нужно.
        if (value !== null) {
            set(oldFormat, item.oldPath, value);
        }
    });
}

export function mediaSmartAdapter(bsMeta: BSMeta): {meta: BSMeta, adapted: boolean} {
    const dataParams = bsMeta.rtb.data.AUCTION_DC_PARAMS.data_params;
    let adapted = false;
    let meta = bsMeta;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let oldDataParams: any = {};

    // выдергиваем все данные из таблицы commonData
    if (has(dataParams, 'parent_data.direct_data.commonData')) {
        const commonData = dataParams.parent_data.direct_data.commonData;
        Object.keys(commonData).forEach(commonDataKey => {
            // Поле creative_id не копируем
            if (commonDataKey === 'creative_id') {
                return;
            }

            const value = get(commonData, commonDataKey);

            // Особая логика для вычищения price
            if (commonDataKey === 'price') {
                if (value.old === '') {
                    delete value.old;
                }

                if (Object.keys(value).length === 0) {
                    return;
                }
            }

            set(oldDataParams, commonDataKey, value);
        });
    }

    Object.keys(dataParams).forEach((creativeId: string) => {
        // если у поля нет bs_data (признак uniformat), то просто копируем.
        if (!dataParams[creativeId].bs_data) {
            oldDataParams[creativeId] = dataParams[creativeId];

            return;
        }

        // для parent_data выворачиваем все сразу в data_params
        if (creativeId === 'parent_data' && has(dataParams, creativeId)) {
            setAdsValues(converterAdsArrayFromParentDataToRoot, dataParams.parent_data, oldDataParams);

            return;
        }

        // сейчас вроде как resourceId прилетает, вместо bannerId (creativeId),
        // здесь из ресурса вставляем в верный id
        if (has(dataParams[creativeId], 'direct_data.offerId')) {
            const bannerId = get(dataParams[creativeId], 'direct_data.offerId');

            // дошли сюда, значит что-то пришло в uniformat
            oldDataParams[bannerId] = {};
            adapted = true;

            setAdsValues(converterAdsArray, dataParams[creativeId], oldDataParams[bannerId]);
        }
    });

    if (adapted) {
        meta = {
            ...bsMeta
        };

        meta.rtb.data.AUCTION_DC_PARAMS.data_params = oldDataParams;
    }

    return {
        meta,
        adapted
    };
}
