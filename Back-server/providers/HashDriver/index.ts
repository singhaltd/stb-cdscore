import { HashDriverContract } from '@ioc:Adonis/Core/Hash'
var CryptoJS = require("crypto-js");
import Env from '@ioc:Adonis/Core/Env'
const key = Env.get('APP_KEY', '6fa979f20126cb08aa645a8f495f6d85')
const iv = Env.get('CERT_KEY', '6fa979f20126cb08aa645a8f495f6d85')
export class PlainTextDriver implements HashDriverContract {

    public async make(value: string) {
        const cip = CryptoJS.AES.encrypt(value, CryptoJS.enc.Utf8.parse(key), {
            iv: CryptoJS.enc.Utf8.parse(iv),
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC
        })
        return cip.toString()
    }

    public async verify(hashedValue: string, plainValue: string) {
        const cip = CryptoJS.AES.encrypt(plainValue, CryptoJS.enc.Utf8.parse(key), {
            iv: CryptoJS.enc.Utf8.parse(iv),
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC
        })
        return hashedValue === cip.toString()
    }
}