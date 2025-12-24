console.log("Web Serverni Boshlash");
const { log } = require("console");
const express = require("express");
const app = express(); // expressning objecti olindi
const http = require('http');

// 1: kirish code
app.use(express.static("public")); // clientlar uchun public folderni ochib berdik
app.use(express.json()); // kirib kelayotgan json formatni objectga uguradi
app.use(express.urlencoded({ extended: true })); // trad. html formdan post qilingan narsalarni qabul qiladi

// 2: session code

// BSSR backend side site rendering || backendda fronted qurish
// 3: views code
app.set("views", "views");      // folderni korsatdik | bu qator folder nomi bilan birxil bolshi kk
app.set("view engine", "ejs");  // views folder ichidan o'qiydi

// 4: routing code
// hamma / ga kelganlarga pastdagi qator chiqadi

app.post('/create-item', (req, res) => {
    console.log(req.body);
    res.json({test:"succes"}); 
})

app.get("/", function (req, res) {
    res.render('harid')
});
/*
app.get("/hello", function (req, res) {
    res.end(`<h1 style="background: red">Hello World! <br/> Express</h1> <br/> <a href="http://localhost:3000">Back</a>`);
});

app.get("/gift", function (req, res) {
    res.end(`<h1 style="background: yellow">Your are in gift page</h1> <br/> <a href="http://localhost:3000">Back</a>`);
});
*/

const server = http.createServer(app);
let PORT = 3000
server.listen(PORT, function () {
    console.log(`The server is running succesfully on port: ${PORT}`);
});