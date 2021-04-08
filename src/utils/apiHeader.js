import EncJS from 'crypto-js'

const apiHelper = {
  key: EncJS.enc.Utf8.parse('r4rt5A8L6ye6ts8y'),
  iv: EncJS.enc.Utf8.parse('fs0HKjg8a23u8sE0'),
  mode: EncJS.mode.CBC,
  padding: EncJS.pad.Pkcs7,
  getAesString: function (t) {
    return EncJS.AES.encrypt(t, this.key, this)
  },
  getDAesString: function (t) {
    return EncJS.AES.decrypt(t, this.key, this).toString(EncJS.enc.Utf8)
  }
}

/**
 * 加密
 * @param {String} str 要加密的数据
 */
export const format = (data) => {
  return encodeURIComponent(apiHelper.getAesString(JSON.stringify(data)))
}

/**
 * 解密
 * @param {String} str 要解密的数据
 */
export const unformat = (str) => {
  return apiHelper.getDAesString(str)
}
