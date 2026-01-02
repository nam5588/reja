console.log("Web Serverni Boshlash");
const express = require("express");
const app = express(); // expressning objecti olindi
const fs = require("fs");

//MongoDB 

const db = require("./server").db();


let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
    if (err) {
        console.log("ERROR", err);
    } else {
        user = JSON.parse(data);
    }
})

// 1: Kirish code                       // Bu qismdagi use bu => DP => bog'lab beryabdi
app.use(express.static("public"));      // Clientlar uchun public folderni ochib berdik
app.use(express.json());                // Kirib kelayotgan json formatni objectga uguradi
app.use(express.urlencoded({ extended: true }));    // Trad. HTML formdan post qilingan narsalarni togri qabul qiladi

// 2: Session code

// BSSR backend side site rendering || backendda fronted qurish
// 3: Views code
app.set("views", "views");      // Folderni korsatdik => 1 o'zgarmaydi 2 folder nomi bilan mos bolishi kerak
app.set("view engine", "ejs");  // views folder ichidan o'qiydi EJS bilan [biz signal berdik shu engine`da bolaman]

// 4: Routing code      -       qaymoq joyi
// hamma / ga kelganlarga pastdagi qator chiqadi
app.get("/", function (req, res) {
    console.log('user entered /');
    db.collection("plans").find().toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong")
        } else {
            console.log(data);
            res.render('reja', { items: data });
        }
    });
});

app.post('/create-item', (req, res) => {
    console.log('user entered /create-item');
    console.log(req.body);
    const new_reja = req.body.reja
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        // console.log(data.ops);
        res.json(data.ops[0])
    });
});

app.get('/author', (req, res) => {
    res.render('author', { user: user })
})

module.exports = app;