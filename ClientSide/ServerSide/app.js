const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const mongoUrl = "mongodb+srv://rpsadmin:admin@rps.vtrpb3g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const JWT_SECRET = "your_secret_key_here"; // Ganti dengan kunci rahasia yang sebenarnya

mongoose
    .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database Connected");
    }).catch((e) => {
        console.log(e);
    });

require('./UserDetails');

const User = mongoose.model("UserInfo");

app.use(express.json());

app.post('/registration', async (req, res) => {
    const { name, email, password } = req.body;

    const oldUser = await User.findOne({ email: email });
    if (oldUser) {
        return res.send({ status: "error", message: "User already exists!" });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    try {
        await User.create({
            name: name,
            email: email,
            password: encryptedPassword,
        });
        res.send({ status: "ok", message: "User Created" });
    } catch (error) {
        res.send({ status: "error", message: error.message });
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const oldUser = await User.findOne({ email: email });

    if (!oldUser) {
        return res.send({ status: "error", message: "User doesn't exist!" });
    }

    if (await bcrypt.compare(password, oldUser.password)) {
        const token = jwt.sign({ email: oldUser.email }, JWT_SECRET);
        return res.send({ status: "ok", data: token });
    } else {
        return res.send({ status: "error", message: "Incorrect password!" });
    }
});


app.get('/', function (req, res) {
    res.send({ status: "Started" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
