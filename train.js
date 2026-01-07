// MITTASK

/* E-TASK
⭐️ Savol: Shunday function tuzing, u bitta string argumentni 
qabul qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh" 
*/
/* ⭐️ Masalaning yechimi: 
// 1-case:
*/
function getReverse(text){ 
    return text.split('').reverse().join('')
}
console.log(getReverse("hello"));
/* 2-case
function getReverse(text) {
    let reverse = [];
    for (let i = 0; i < text.length; i++) {
        reverse.unshift(text[i])
    }
    return reverse.join('')
}
console.log(getReverse("hello"));
*/

//===========================================================

/* D-TASK
⭐️ Savol: Shunday function tuzing, u 2ta string parametr ega bolsin,
hamda agar har ikkala string bir hil harflardan iborat
bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
*/
/* ⭐️ Masalaning yechimi:
// 1-case:

function checkContent(text1, text2) {
    const sorted1 = text1.split('').sort().join('')
    const sorted2 = text2.split('').sort().join('')

    return sorted1 === sorted2;
};
console.log(checkContent("mitgroup", "gmtiprou"))
*/

//===========================================================

/* C-TASK
⭐️ Savol: Shunday class tuzing tuzing nomi Shop,
va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning
3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul.
Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq()
return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud!
shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq()
return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
*/
/* ⭐️ Masalaning yechimi:
// 1-case:
const moment = require('moment')

const time = (moment().format("HH:mm"));

class Shop {
    constructor(non, lagmon, cola) {
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola;
    }

    qabul(mahsulot, soni) {
        return this[mahsulot] += soni
    }
    sotish(mahsulot, soni) {
        return this[mahsulot] -= soni
    }
    qoldiq() {
        return `Hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud! `
    }
}

const shop = new Shop(4, 5, 2);
console.log(shop.qoldiq());
console.log(shop.sotish('non', 3));
console.log(shop.qabul('cola', 4));
console.log(shop.qoldiq());
*/

//===========================================================

/* B-TASK
⭐️ Savol: Shunday function tuzing,u 1ta string
parametrga ega bolsin, hamda osha stringda qatnashgan
raqamlarni sonini bizga return qilsin. MASALAN:
countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
*/
/* ⭐️ Masalaning yechimi:
// 1-case:
function countDigits(text) {
    let count = 0;
    for (const char of text) {
        if (char >= '0' && char <= '9') count++;
    }
    return count
}
const result = countDigits("ad2a54y79wet0sfgb9");
console.log(result);
*/

//===========================================================

/* A-TASK: 
⭐️ Savol: Shunday 2 parametrli function tuzing,
hamda birinchi parametrdagi letterni ikkinchi parametrdagi
so'zdan qatnashgan sonini return qilishi kerak boladi.
MASALAN: countLetter("e", "engineer") 3ni return qiladi. */
/* ⭐️ Masalaning yechimi:
// 1-case: 

let count = 0;
function countLetter(letter, word) {
    for (const char of word) {
        if (char == letter) count++;
    }
    return count;
}

const res = countLetter('e', 'engineer');
console.log(res);
*/