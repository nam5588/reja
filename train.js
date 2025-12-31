// MITTASK

/* B-TASK
⭐️ Savol: Shunday function tuzing,u 1ta string
parametrga ega bolsin, hamda osha stringda qatnashgan
raqamlarni sonini bizga return qilsin. MASALAN:
countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
*/
/* ⭐️ Masalaning yechimi:
*/
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