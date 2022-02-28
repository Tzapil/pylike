# coding=utf-8
import hmac
import base64
import hashlib
from time import strftime, localtime

import numpy



SYMBOLS_TO_REMOVE = '/?.=&!$*~[]'  # symbols used to mix up crypted links
SEED_LENGTH = 6



def generate_seed(change_period=1, salt=None, time_func=localtime):
    now = time_func()
    return bytes(hashlib.sha512(strftime("%Y%m%d", now) + str(now.tm_hour / change_period) + (str(salt) if salt is not None else '')).hexdigest())[:SEED_LENGTH]



def get_key(secret, seed):
    return hmac.new(secret, seed, hashlib.sha512).digest()



def crypto_xor(data, key):
    key = (key * ((len(data) / len(key)) + 1))[:len(data)]

    if not len(data) % 8:
        dt = numpy.uint64
    elif not len(data) % 4:
        dt = numpy.uint32
    elif not len(data) % 2:
        dt = numpy.uint16
    else:
        dt = numpy.uint8
    return numpy.bitwise_xor(numpy.fromstring(key, dtype=dt), numpy.fromstring(data, dtype=dt)).tostring()



def encrypt_base64(bdata):
    return base64.urlsafe_b64encode(bdata).rstrip(b'=')



def decrypt_base64(bdata):
    return base64.urlsafe_b64decode(bdata + b"=" * ((4 - len(bdata)) % 4))



def encrypt_xor(bdata, key):
    return encrypt_base64(crypto_xor(bdata, key))



def decrypt_xor(bdata, key):
    b64_data = decrypt_base64(bdata)

    # while len(b64_data) > 0:
    #     print crypto_xor(b64_data, key)
    #     b64_data = b64_data[1:]

    return crypto_xor(b64_data, key)



def resplit_using_length(length, cry_part, noncry_part=''):
    joined = cry_part + noncry_part
    i, s = 0, ''
    while len(s) < length:
        if i > len(joined):
            raise Exception("Failed to decrypt url")
        appender = joined[i:i + (length - len(s))].translate(None, SYMBOLS_TO_REMOVE)
        i += length - len(s)
        s += appender
    return bytes(s), joined[i:]


# урл для декода без хоста
# xkr/tvpz4sMxiy4GV-PP8DB6Ui0ulQqg7_ELaaWVK1ZjAYATJRQ3O
# URL = "xkr/tvpz4sMxiy4GV-PP8DB6Ui0ulQqg7_ELaaWVK1ZjAYATJRQ3O6aYY9NPKVSDmBdm59exuBSq5Gwee8Hexh1pymhdatfs-Z0uL9_EYCjctdtWXZdeBbm391VdSY1n1ZyABIutnw9AwSczX2mFpowC40P30AjUvkHP_AizvLVvK4mrv5hnDOkor97_lTDJ6XTrNP6SL4X5Rlb1belMp2TMceTavR8vYXHGQr-ZpVbNYgMzV-BIFU4hrw3oQx2Fn9o5mn5pBg3pqS6evxWAiekky0Xf86-EGFemNM2p7JaE3VB1alx_DkHBx1Ku-bWmrZIjI3YA2NQeAG58CJL9ZU4LiHsOyTb9-Rjfnt4lsLh5Jeo0LhJe9fj2VjSdCTxGhFygVYvsLj6hUbcCrrgFds2CkzMmsalkjlDvPCjy7YTf2mgLrxjHLFkIv06_tYCZicQ6JV9yDuVIV5b1nYgsh2RskUWrjc7vIeB3Al4oRafdk3MSlyBp1e_hnm0Isw31_qv4a25Yxz05SU6eXqWgOSi1y0Tew2-l2HYnBK35POfFPPFEC_2vTkEgRsP-yXX2LBKDMsZAOJRfEb-NSFM9tZ9beNpPOBfcOGleP38UURl5VBtEj8Pv1OmGViVNmVymRK1x1UvM3u_xEZYyv3nEdzxyA9OHgZikj9HfzdkCvBR_ehlbT1lG3LhJvr5PxRBYeCX7RS9jfgVZNjYlrQicxsXdUeRKPe7PAfB2ot45xVYNk3Mzd4HolK-hX_wJo0y0jvuYu385Vp2p2S8Oz6VBSdl0yoUegw9VSEfWBa1pPMaUHbDUi8wvLjBgFlPuKYSW_EMisqfgaESvAU_M6bJdlQ_b6HsvOWbsuciPHr80kAloZark72IOhamG5hSdaO1W9TyhxNo8by8xgJbCD-jU5t3TM3NWAfm0HmE_ffkirLUfitjqzskXLLgono8ONNEZSAQrNe9j_vVJN9aUrdjNVjT90VWLzL9e8eEHI07YRcZd8vOy92A4JV8gD8yoUow1Loo5uw6YZl0oSZ7ubxRgiWhEuzW_ct9USGZX1E0ZfEbFzFBky9zPbsBx5wMvqCV37VJy0qYAODV_kW_d-ZK8Bc8qCXuPaGdMSdiu_s90gOjJJVoVzqLepQhH93RsmexGJC0QZDtMb7_x4HaiHpgFpv1Sw7MWkPlEr2G_janzTUVuG7nrX6lHXakp7t7uRPFZ6SXLhA5SX0RZBjflDEltt2T84dWKHe--AYBHg2-YBCdNMuOzF3G4lL4AP_yZs_y0nhrJev54p2y5CE4u_hQBaXkk22XvE4_0ONbXBbyZPXeV3PAEu13PP-EBZ4P-yHX3PGKisiZAWWVvkV58-JL9pa77iAr_eLbcGHlvnx60YImJJEr0DgNu5Uj2FjTcaPwnpPywJHtNPy5Rkaaz3xhEty3CA6OHwJg1T7Hu_AizbBSOy9m6r9mmvNmo_r8ehYDpiGWqtT5D7tWJFrb0bUlcx_T9kVU6HK9OUMG2Mp4pVEbcY1NDRpEoNI4Bn6wpkrxkrhqJim7YFtyYSX_vLnTBOZjkepSeUl-1eddmBNzorMdEfVGVe9xvD0AAZsNuidQWHePSosfQyCUOkS_8qVNM1L9aCZofmZbNqflu3t_FQGlINfpEzgPu1SnXhrXc-S3Wlc3gNbtdz27gIBdTD9ikF2yTIsMX4KiVT_Gu3WlTvGSfi2hq_mjWPDnpvy-_NWEoaNRaxP7i_7WpdqcVLemM58UcoBVqjM4-kXFGEm84tCZcUuPyt0HI9R-gHo1ZUz3kngopem_Ih-zpCG6_bzUw2blkm1QOE_61WBZmBVz5LNd1jRB1a72OngHQlxJfCCXmLBMDoxaBCHRfEP_dqfKsxM7aCFruiKbsCDiPDt4UADkIJXr03rM-hYh35pSs-dwmdbxRVYsMzl4xcFZyzzjEZ02CU6KmcfiEX1GefakyXGRO-0iq_wm2jAlYvt9_k".translate(None, SYMBOLS_TO_REMOVE)  # если имеем урл "не до конца" или просто кривой, то вставляем сюда то, что после сида

URL = "xkrtvp/z4sMxiy4GV-PP8DB6Ui0ulQqg7_ELaaWVK1ZjAYATJRQ2RW586a-rEnfZPjtmIFreAvkE8dbAbfFh2I-tndCxTe2-suH5_AwelItLpUKoJ-xpqi99UdKL3mdD3A5Ro9717R0BcDThjFx23TMpN2EChED_H_3XijfPRu-piqr0lXHTkZnv-PdUAYaOXqtR9DTqQ5p4ZVXdkcRkSdASWrbR6-gMCXI2-oJLaNIxJjN3DINK_BvxyIwxwFjgo5ml-45yz46P_-j_TBWChlWvUfE27VGMYGVLzI7Ifk3aEUS3w_LzAh9wJPGCWmnEMCk1eA6CSOIS_d2OLddG7b2XqOaVbNiEjPDp9FMFhJVWrEjxJPpOkn9yVcaRyHtH1xxEv9zw_RkaYyr4hV9pwCskM3kFg03pBebUiyXDROu8mbH7i2vSmZPt8_VVCIKMVa5X_zn7WYR6c17MjcRrT8YQWrzf4f8fBG4y85lfZskvKSJ4G4FW8BntwpAy1lbvop6j7JJt3o2T7OXxShWMnVekXegm7UGfbGdXzpbbeEjXFlCp2eHlGAJ0JP-aQ3zHPCw9YASDU-Yc-dmfMMhS4aGapfOaZsybnuL140sfnoZItlj2O-1Ej2RgRNGRyWZO0RJIsMHo8RsVbj_8h0xo3Dc0LGYMjUf6BvrUkzbMW_S5gLvxjH7cnYvy_eFFF42LXKJI4SXtXoVtfV_al8loR80UQKfD6-EEBmww8plFbsg3Jj94G4NI-gH51pQ-z0b-poq06ZRg35uK9uz4TAyFjVmzUvQ28V2bamhezYnLaEHXFEW7zfjtGxpyI-ufSn3JMzowZR6bVfwZ9NaeP8xI_7eYrPuTbNqbifH9-VYNgoREp1nlIPdChXp1UNGayntByg1Dqdzp6AQecjP1l0Nj1SY9Mnwfh0riAOvdiDjHWfa4iq3-gGXEhI7t_edXFJmUQLZb4zjqUoVlcl7aicJ4SsgNT7XL4P0bE3Uv845dd8YvLzp-A4tQ9BzyyZwrzEzhuoKu7o5w2IGZ-uThRxKPhkuvWecx6leEd2hOz5HWdkbTHECm0_PpGhR2LOqAX3HRKSQhdAudVeIc88uXPc1Z_bmBoPSNfNCemevy-FQThYBFqUPxL_hQmXd3Ws2L3HRe2hxOuMfz5hMeez_zmUViwispMHQAi07rEOTWmDDIXPumlarnlnXdkovq7PdAEYeTQrJR8SbhTJZ_aU_Zl9ViU9IDWrXY6P0GBnsg9ZpXddIrMStyAotO9QT5144oz0__rYq154F8x4-V6f31Wh6Glk2xWPE371KCYmJJxJnbaV7XD1Wn2fXuEgRzPv2IV3zHLCwsZwabXeYa5sqXPtdJ7b2bpumVa8eflPL34kgFmJxLr1fxPvZMk2xzXsaVyH9RyxpWtd334hMLciX0hER-2i84LX0Mikf-FvPIlTXfRu-kgLTqkHDClYX0-_9RF5ifValX5SDyX5dkcFLYn8R0Q9EUU7XP4PYGEnQl4YVMask-NzJnGYRL6w3z1I4yykT9uYe254VzzoWe8v_hSQKbkEG0Vu098EWWf2Zd1ILLf1nOFFi9w-zyGh5wNO2YQ3XDNjI-fxGaU_8T8syHOc9M8aaMt_ONcsmRhvPs-kgRhItZoVvgJf1Ak2RwWNSMwG9Y1gVFpsj2_hIEdi7vn1pz1iEyKWgenE78FfnIkTHdUPGph7X-m23HjpL89ftFDpKEW7VJ7j_1Q511ZlDentpgSdwWUKvc9PMPFGMp-opOZdggMTpkAo9U9gP_zZQq2FPxoZ-15o98zpSX4fj1WBefhF6qVPUz7EySZXZfyJLLZ1jWFVuix_LzHABpIPCXXmbbKS09YByKTuoP99mfJM1c-7iNsOuNbsaAlfH25lYMhJZNpF_hLfZBmGl1Us6KwnhY2RpLodPg_RcUZSP6m0hv2Cc1K3kJilXlAPjZmzLXXPe3h7jpmWHHmIT39vA".translate(None, SYMBOLS_TO_REMOVE)  # если имеем урл "не до конца" или просто кривой, то вставляем сюда то, что после сида

# e89528
# j1b0a3215/473a8cgRH
SEED = "473a8c"
SECRET = "5ae23359a11ba7211aab403ee01583b0"  # секретный ключ партнера
KEY = get_key(SECRET, SEED)
# или такой ключ, если ссылка начинается на __URL_FOR_ADBLOCK_USERS____ADB_SEED__...
# KEY = decrypt_base64("__ADB_KEY__")
print "LOL HERE", "KEY", len(KEY), '"', KEY, '"'
print decrypt_xor(URL, KEY)


# если надо расшифровать css класс
CSS_CLASS = "PKVSDmBdm59ex"
SEED = "473a8c"
SECRET = "5ae23359a11ba7211aab403ee01583b0"  # секретный ключ партнера
KEY = get_key(SECRET, SEED)
# # отрезаем первый символ - это префикс
# # может расшифроваться с багами, не все классы можно дешифровать, замены в зашифрованных классах необратимы.

print "CLASS"
print decrypt_xor(CSS_CLASS[1:], KEY)
#https://favicon.yandex.net/favicon/v2/