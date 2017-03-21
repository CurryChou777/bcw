import {CryptoJS} from './aes_1'
import {hexMD5} from './md5'
import {utf8encode} from './utf8'
     // 工具对象
//class Tools{
    // ase 加密
   var encrypt = function(parse) {
        var params = {
            data: JSON.stringify(parse),
            device: 'Wechat-mina/1.0/1.8.1',
            timestemp: Date.parse(new Date()) / 1000,
            token: ''
        };
        params.sign = getSign(params);

        var data = JSON.stringify(params);
        var key = 'b92dff3973ebdc1786803c2ce976a627';
        var iv = key.substring(0, 16);
        key = CryptoJS.enc.Utf8.parse(key);
        iv = CryptoJS.enc.Utf8.parse(iv);
        var srcs = CryptoJS.enc.Utf8.parse(data);
        var encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.ZeroPadding });
        return { params: encrypted.toString() };
    }

// 获取sign
// @param sPara
// @returns {*}
    var getSign = function(sPara) {
        //把参数的键值取出来
        var keys = Object.keys(sPara);
        //键值升序排列
        keys = keys.sort();
        var split = '';
        var signString = '';
        for (var i = 0; i < keys.length; i++) {
            signString += split + keys[i] + '=' + (typeof sPara[keys[i]] === 'object' ? JSON.stringify(sPara[keys[i]]) : sPara[keys[i]]);
            split = '&';
        }
        signString = signString + 'FD92DF750B32765DA01A119BE1601D46';
        return hexMD5(utf8encode(signString));
    }
//}

export {encrypt}