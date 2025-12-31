const http = require('http');
const mongodb = require('mongodb');

let db;
const connectionString = "mongodb+srv://Adam:RG3XEzD1AgnQkAe9@cluster0.lwmnslt.mongodb.net/Reja?appName=Cluster0";

mongodb.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
        if (err) {
            console.log("ERROR on connection mongoDB")
        } else {
            console.log("mongoDB connetion succeed");
            module.exports = client;
            const app = require('./app');
            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, function () {
                console.log(`The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`);
            });
        };
    });