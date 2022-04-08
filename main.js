const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const methodOverride = require("method-override");
const path = require("path");
const userRoutes = require("./route/users");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const connectFlash = require("connect-flash");

dotenv.config({
    path: "./config.env"
});

mongoose.connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true
});

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(methodOverride("_method"));
app.use(cookieParser("my_secret_code"));
app.use(expressSession({
    secret: "my_secret_code",
    cookie: {
        maxAge: 40000
    },
    saveUninitialized: false,
    resave: false
}));
app.use(connectFlash());
app.use((req, res, next) => {
    res.locals.flashMessages = req.flash();
    next();
});
app.use(express.static(path.join(__dirname, "public")));
app.use(userRoutes);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/index.ejs"))
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server is on, on port " + port)
});