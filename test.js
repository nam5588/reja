//console.log("Train Area!");

const list = [
    "Yaxshi talaba boling", // 0-20
    "To'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
    "O'zingizga ishlashingizni boshlang", // 30-40
    "Siz kuchli bo'lgan narsalarni qiling", // 40-50
    "Yoshlarga investitsiya qiling", //  50-60
    "Endi dam o'ling, foydasi yoq endi by Martin" // 60
];

// callBack

function giveMeAdvise(a, callback) {
    if (typeof a !== 'number') callback("Insert number", null);     // error case
    else if (a <= 20) callback(null, list[0]);                      // data case 1
    else if (a > 20 && a <= 30) callback(null, list[1]);            // data case 2
    else if (a > 30 && a <= 40) callback(null, list[2]);            // data case 3
    else if (a > 40 && a <= 50) callback(null, list[3]);            // data case 4
    else if (a > 50 && a <= 60) callback(null, list[4]);            // data case 5
    else {
        // setTimeout(() => {          // bu yerga kutish berib, kutish davomida boshqa amal bajarishini korish mumkin.
        //     callback(null, list[5]);                                // data case 6 (etch.)
        // }, 5000)
        setInterval(() => {          // bu yerga kutish berib, kutish davomida boshqa amal bajarishini korish mumkin.
            callback(null, list[5]);                                // data case 6 (etch.)
        }, 1000)
    };
};

// call qilamiz
console.log('Passed here 0');
giveMeAdvise(88, (err, data) => {
    if (err) {
        console.log("ERROR: ", err)
    } else {
        console.log("Result:", data);
    };
});
console.log('Passed here 1');


// async function - bu func. ichida setTimeout or setInterval

/*
async function giveMeAdvise(a) {        // async func. DEFINE
if (typeof a !== 'number') throw new Error("Insert number"); // agar a ning qiymati number bolmasa yangi error tayyorlash kerak = throw new Error("");
else if (a <= 20) return list[0];           // 1-case aks holatlarda shunchaki return
else if (a > 20 && a <= 30) return list[1]; // 2-case
else if (a > 30 && a <= 40) return list[2]; // 3-case
else if (a > 40 && a <= 50) return list[3]; // 4-case
else if (a > 50 && a <= 60) return list[4]; // 5-case
else {
    return new Promise((resolve, reject) => {
setInterval(() => {         //ishlamaydi
resolve(list[5]);
}, 1000)
});
};
};
*/

/*
//then/catch case           then = data uchun / catch = error uchun
//  Asynchronus holatda ishlayabdi
console.log('passed here 0'); // ich > ich > ichi > ichiga = kirib borishi calback hell 
giveMeAdvise(19)
.then(data => {
    giveMeAdvise(29)
    .then(data => {
        giveMeAdvise(39)
        .then(data => {
            console.log("Result:", data);
        }).
        catch(err => {
            console.log("ERROR:", err);
        })
        console.log("Result:", data);
    }).
    catch(err => {
        console.log("ERROR:", err);
    })
    console.log("Result:", data);
})
.catch(err => {
    console.log("ERROR:", err);
})
console.log('passed here  1');
*/

/*
// Bu kabi callBack hellda qutulish uchun yana bir async func ochamiz
// async/await orqali   =   source tiniq bo'ladi
async function run() {
    let result = await giveMeAdvise(88);
    console.log(result);
    // result = await giveMeAdvise(27);
    // console.log(result);
    // result = await giveMeAdvise(44);
    // console.log(result);
    // result = await giveMeAdvise(70);
    // console.log(result);
    // result = await giveMeAdvise(32);
    // console.log(result);
    // result = await giveMeAdvise(59);
    // console.log(result);
}
run();
*/

