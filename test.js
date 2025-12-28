/*
console.log("Train Area!");

const list = [
    "Yaxshi talaba boling", // 0-20
    "To'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
    "O'zingizga ishlashingizni boshlang", // 30-40
    "Siz kuchli bo'lgan narsalarni qiling", // 40-50
    "Yoshlarga investitsiya qiling", //  50-60
    "Endi dam o'ling, foydasi yoq endi by Martin" // 60
];

function giveMeAdvise(a, callback) {
    if (typeof a !== 'number') callback("Insert number", null);
    else if (a <= 20) callback(null, list[0]);
    else if (a > 20 && a <= 30) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) callback(null, list[3]);
    else if (a > 50 && a <= 60) callback(null, list[4]);
    else {
        callback(null, list[5]);
};
};

giveMeAdvise(73, (err, data) => {
    if (err) {
        console.log("ERROR: ", err)
    } else {
        console.log("Result:", data);
}
})
*/