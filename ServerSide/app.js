const express = require('express');
const cors = require('cors');

const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const mongoUrl = "mongodb+srv://nuralibasyah:my7pHh3ly1Zub86q@cluster0.ozivslz.mongodb.net/?retryWrites=true&w=majority";
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
app.use(cors());
  
app.post('/registration', async (req, res) => {
    const { username, email, password } = req.body;

    const oldUser = await User.findOne({ email: email });
    if (oldUser) {
        return res.send({ status: "error", message: "User already exists!" });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    try {
        await User.create({
            username: username,
            email: email,
            password: password,
            password: encryptedPassword,
            totalScore: 0,
        });
        res.send({ status: "ok", message: "User Created" });
    } catch (error) {
        res.send({ status: "error", message: error.message });
    }
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username: username });
        if (!user) {
            return res.status(404).json({ status: "error", message: "User not found" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            const token = jwt.sign({ email: user.email }, JWT_SECRET);
            return res.status(200).json({ status: "ok", token: token, email: user.email });
        } else {
            return res.status(401).json({ status: "error", message: "Incorrect password" });
        }
    } catch (error) {
        console.error("Error while logging in:", error);
        return res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
});

// untuk menyimpan jumlah total skor
app.post("/update-score", async(req,res)=>{
    const{email, newScore}= req.body;

    try{
        const user = await User.findOne({email:email});
        if (!user) {
            return res.send({ status: "error", message: "User not found!" });
        }
        user.totalSscore = user.totalScore + newScore;
        await user.save();

        res.status(200).json({ message: "Total score saved successfully" });
    } catch (error) {
        console.error("Error saving total score:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


// untuk leaderboard
app.get('/leaderboards', async (req, res) => {
    try {
        const users = await User.find().sort({ totalScore: -1 });

        const leaderboard = users.map(user => ({ name: user.username, totalScore: user.totalScore }));
        res.json(leaderboard);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/', function (req, res) {
    res.send({ status: "Started" });
}); 

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
