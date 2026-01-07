console.log("Web Serverni Boshlash");
const express = require("express");
const app = express(); // expressning objecti olindi
const fs = require("fs");

//MongoDB 

const db = require("./server").db();
const mongodb = require("mongodb");


let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
    if (err) {
        console.log("ERROR", err);
    } else {
        user = JSON.parse(data);
    }
})

// 1: Kirish code                               // Bu qismdagi use bu => DP => bog'lab beryabdi
app.use(express.static("public"));                      // Clientlar uchun public folderni ochib berdik
app.use(express.json());                                // Kirib kelayotgan json formatni objectga uguradi
app.use(express.urlencoded({ extended: true }));        // Trad. HTML formdan post qilingan narsalarni togri qabul qiladi
// 2: Session code

// BSSR backend side site rendering || backendda fronted qurish
// 3: Views code
app.set("views", "views");      // Folderni korsatdik => 1 o'zgarmaydi 2 folder nomi bilan mos bolishi kerak
app.set("view engine", "ejs");  // views folder ichidan o'qiydi EJS bilan [biz signal berdik shu engine`da bolaman]

// 4: Routing code
// hamma / ga kelganlarga pastdagi qator chiqadi
app.get("/", function (req, res) {
    console.log('user entered /');
    db.collection("plans").find().toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong")
        } else {
            // console.log(data)
            res.render('reja', { items: data });
        }
    });
});

app.post('/create-item', (req, res) => {
    console.log('user entered /create-item');
    // console.log(req.body);
    const new_reja = req.body.reja
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        // console.log(data.ops[0]);
        res.json(data.ops[0]);
    });
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id
    console.log(id)
    db.collection("plans").deleteOne({ _id: new mongodb.ObjectID(id) }, (err, data) => {
        res.json({ state: "succes" })
    }) // oddiy stringni mongo_id ga o'tkazdik 
});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    db.collection("plans").findOneAndUpdate({ _id: new mongodb.ObjectID(data.id) }, { $set: { reja: data.new_input } }, (err, data) => {
        res.json({ state: "succes" });
    })
})

app.post("/delete-all", (req, res) => {
    if (req.body.delete_all) {
        db.collection("plans").deleteMany(() => {
            res.json({ state: "all plans deleted" })
        });
    }
});

app.get('/author', (req, res) => {
    res.render('author', { user: user })
})

module.exports = app;