// MITTASK
/*
A-TASK: 
⭐️ Savol: Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashgan sonini return qilishi kerak boladi.
MASALAN: countLetter("e", "engineer") 3ni return qiladi.

Masalaning yechimi:
*/

/*
//birinchi hayolimga kelgan yechim 
function countLetter(a, b) {
    let count = 0;
    b.split('').forEach(e => {
        if (e == a) {
            count++;
        }
    });
    return count
}
*/

// birinchisi yoqmay qisqartirdim
function countLetter(letter, word) {
    let count = 0;                  // umumiy sonini aniqlash uchun
    for (const char of word) {      // wordni har birini ushladik char deb va {} ichi word tugagunicha ishlaydi
        if(char==letter) count++;   // tekshiryabmiz char va letter lar teng (true) bolsa count ni oshiryabmiz 1ga
    }
    return count;                   // yuqori mantiqda ishlab qoshilgan count yig'indisini return qildik
}

const res = countLetter('e', 'engineer');   // call
console.log(res);