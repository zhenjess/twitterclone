const express = require("express");

const app = express();

//mongodb+srv://admin:RYkm1vDcUAv8WLRU@mern-eansw.mongodb.net/test?retryWrites=true&w=majority

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Listening on port ${port}`)});


