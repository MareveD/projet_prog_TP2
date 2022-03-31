/////////////////////////////// COPY PASTE DES EXOS MONGOOSE ///////////////////////////////

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

/////////////////////////////// SESSIONS ET COOKIES ///////////////////////////////

app.use(cookieParser("my_secret_code"));
app.use(expressSession({
    secret: "my_secret_code",
    cookie: {
        maxAge: 40000 //serait donc infini
    },
    saveUninitialized: false,
    resave: false
}));

app.use(connectFlash());
app.use((req, res, next) => {
    res.locals.flashMessages = req.flash();
    next();
});

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.resolve(__dirname, "public")));
app.set("view engine", "ejs");

app.use(userRoutes);

app.use(  "/css",  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")))
app.use(  "/js",  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")))
app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")))
app.get("/", (req, res) => {  res.sendFile(path.join(__dirname, "views/index.ejs"))})
///////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////

const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server is on, on port " + port)
});