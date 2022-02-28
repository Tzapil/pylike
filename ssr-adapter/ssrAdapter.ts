import { BSMeta } from '../ssr/parseMeta';
import { mediaSmartAdapter } from './mediaSmartAdapter';
import { tgoAdapter } from './tgoAdapter';

export function ssrAdapter(bsMeta: BSMeta): {meta: BSMeta, adapted: boolean} {
    if (!bsMeta) {
        return {
            meta: {},
            adapted: false
        };
    }

    // полагаем, что это ТГО и переводим в старый формат
    if (bsMeta.direct && Array.isArray(bsMeta.direct.ads)) {
        return tgoAdapter(bsMeta);
    }

    // полагаем, что это медиасмарт и переводим в старый формат
    if (bsMeta?.rtb?.data?.AUCTION_DC_PARAMS?.data_params) {
        return mediaSmartAdapter(bsMeta);
    }

    // иначе возвращаем просто переданную мету
    return {
        meta: bsMeta,
        adapted: false
    };
}
