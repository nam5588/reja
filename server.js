console.log("Web Serverni Boshlash");
const express = require("express");
const app = express(); // expressning objecti olindi
const http = require('http');
const fs = require("fs");


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
app.post('/create-item', (req, res) => {
    console.log(req.body);
    res.json({ test: "succes" });
})

app.get('/author', (req, res) => {
    res.render('author', { user: user })
})

app.get("/", function (req, res) {
    res.render('reja')
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`);
});