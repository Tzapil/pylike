export type converterCallback =
    (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        val: any,
        path: string,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        newAdsFormat: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) => any; // колбек для постобработки полученных данных из нового ответа

export type converterAdsArrayItem = {
    oldPath: string; // путь до данных в старом ответе
    newPath: string; // путь до данных в новом ответе
    altPath?: string; // альтернативный путь, если нет данных по пути newPath
    ifexist?: string; // если данных по этому path не найдено, то значение не будет выставлено (даже defaultValue)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    defaultValue: any; // дефолтное значение, которое проставляется, если нет данных в новом ответе
    cb?: converterCallback; // колбек для постобработки полученных данных из нового ответа
};

export type imgItem = {
    val?: string;
    w?: number;
    h?: number;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export type newAdsEngineTgo = {
    direct_data: {
        body?: string,
        domain?: string,
        faviconSizes?: {
            w: number,
            h: number
        },
        title?: string,
        targetUrl?: string,
        img?: imgItem[],
        img2?: imgItem[],
        img3?: imgItem[],
        img4?: imgItem[],
        img5?: imgItem[],
        warning?: string,
        age?: string,
        path?: string
        secondTitle?: string,
        permalink?: string,
        telNum?: string,
        green_url_text_prefix?: any,
        green_url_text_suffix?: any,
        assets?: {
            button?: {
                key?: any,
                caption?: any,
            }
            logo?: any
        },
        priceInfo?: {
            price?: string,
            currency?: string,
            current?: string,
            prefix?: string,
            old?: string,
            discount?: string,
        },
        metroTimeOnFoot?: any,
        mdsMetaInfo?: any[],
        mdsMetaInfo2?: any[],
        mdsMetaInfo3?: any[],
        mdsMetaInfo4?: any[],
        mdsMetaInfo5?: any[],
        metro?: string,
    }
    bs_data?: {
        title?: string,
        targetUrl?: string,
        domain?: string,
        warning?: any,
        telNum?: any,
        geoDistance?: any,
        geoDistanceRegular?: any,
        liked?: string,
        adId?: number,
        oid?: any,
        bannerFlags?: string,
        blockFavicon?: string,
        region?: string,
        floatMarketRating?: number,
        hitLogId?: number,
        algId?: string,
        bannerCategories?: any[],
        eventHash?: number,
        isTurboBanner?: boolean,
        orderOptions?: any,
        orderTags?: any[],
        bannerLang?: string,
        address?: string,
        workingTime?: string,
        callUrl?: string,
        metro?: string,
        vcardUrl?: string,
        companyName?: string,
        hidePicture?: any,
        hideIcon?: any,
        skipPictures?: any,
        metrikaSnippet?: any,
        metrika_snippet?: any,
        socialUrls?: any,
        ctr?: any,
        position?: any,
        addInfo?: any,
        vast?: any,
        vastBase64?: any,
        vastType?: any,
        bmcategoryId?: any,
        domainId?: any,
        domainVerified?: any,
        resource_links?: {
            bs_data?: {
                pathUrl?: string,
                assets?: {
                    button?: {
                        href?: any
                    }
                }
            },
            direct_data?: {
                targetUrl: string,
            }
        },
        count_links?: {
            url?: string,
            sitelinks?: any[],
            linkTail?: string,
            abuseUrl?: any
        },
        adv_type?: string,
        phraseId?: number
    }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-explicit-any */
export type mediaSmartCreativeIdData = {
    bs_data?: {
        count_links?: {
            abuse?: string,
            url?: string,
            count?: any,

        },
        bmcategoryId?: any,
        domainId?: any,
        faviconSizes?: {
            w?: number,
            h?: number,
        },
        floatMarketRating?: number,
        position?: any,
        clientId?: any,
        adId?: string,
    },
    direct_data?: {
        priceInfo?: {
            current?: string,
            old?: string,
        },
        orig_domain?: string,
        address?: any,
        body?: any,
        buildingName?: any,
        businessType?: any,
        class?: any,
        colors?: any,
        consist?: any,
        currencyIsoCode?: any,
        descriptionForDirect?: any,
        facilities?: any,
        facility?: any,
        from?: any,
        warning?: any,
        location?: any,
        metro?: any,
        metroTimeOnFoot?: any,
        metroTimeOnTransport?: any,
        model?: any,
        name?: any,
        nameForDirect?: any,
        offerType?: any,
        paramsForDirect?: any,
        realtyType?: any,
        requiredInfo?: any,
        run?: any,
        secondTitleForDirect?: any,
        sizes?: any,
        subLocation?: any,
        to?: any,
        vendor?: any,
        year?: any,
        img?: engineImgResource,
        img2?: engineImgResource,
        img3?: engineImgResource,
        img4?: engineImgResource,
        img5?: engineImgResource,
        targetUrl?: string,
        domain?: string
    }
}

type engineImgResource = {
    21: any,
    22: any,
    23: any,
    24: any,
    25: any,
    26: any,
    27: any,
}

export type mediaSmartParentData = {
    direct_data?: {
        commonData?: {
            logo?: {
                target_url?: any,
                // тут могут быть еще другие
            },
            spec?: any
        },
    },
    bs_data?: {
        count_links?: {
            abuse?: any,
            count?: any
        },
        resource_links?: {
            direct_data?: {
                targetUrl?: string,
                clickUrl?: string
            }
        },
        creativeId?: any,
    }
};
/* eslint-enable @typescript-eslint/no-explicit-any */
