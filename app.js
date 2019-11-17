const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const User = require("./models/User");
const bodyParser = require("body-parser");

//mongodb+srv://admin:RYkm1vDcUAv8WLRU@mern-eansw.mongodb.net/test?retryWrites=true&w=majority

mongoose 
    .connect(db, { userNewUrlParser: true })
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.get("/", (req, res) => {
    const user = new User({
        hadnle: 'jim', 
        email: 'jim@jim.jim', 
        password: 'jimisgreat123'
    })
    user.save()
    res.send("Hello World!");
});

app.use("/api/users", users);
app.use("/api/tweets", tweets);

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Listening on port ${port}`)});


