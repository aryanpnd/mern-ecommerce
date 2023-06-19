// moudles imports----------------------------------
require('dotenv').config()

const mongoose = require('mongoose');
// const cors = require('cors')
const path = require('path')

const express = require('express');

const { productRoutes } = require("./routes/products");
const { UserRoutes } = require('./routes/users');
const { AuthRoutes } = require('./routes/auth');
const { JWT, SESSION, sessionCheck } = require('./controller/auth');
const session = require('express-session');

// -------------------------------------------------------------------


// -----------------------intializing express---------------------------
const app = express()
app.use(express.json())

// app.use(cors()) //using cors for accepting request from different port in same machine
// ------------------------------------------------------------------------




//-----------------------connecting to DB------------------------------
// -------------------------Locally--------------------
// mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
// async function connectDB() {
//     console.log("Database connected...")
// }
// connectDB().catch(e => console.log(`error while connecting to DB`))

// -------------------------Cloud--------------------
async function connectDB() {
    mongoose.connect(process.env.DB_URI);
    console.log("Database connected...")
}
connectDB().catch(e => console.log(`error while connecting to DB`))
// -------------------------------------------------------------------------



// -------------------------------Initializing session------------------
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 1000000 }
}))
// --------------------------------------------------------------------


// ----------------------------Login and register----------------------------------
app.get("/signuppage", (req, res) => { res.sendFile(path.resolve(__dirname,'signupPage.html')) })
app.get("/loginpage", (req, res) => { res.sendFile(path.resolve(__dirname,'loginPage.html')) })

app.use("/", AuthRoutes)
// ----------------------------Login and register----------------------------------





// ------------------------------homepage route/api-------------------------
app.use(sessionCheck)
app.use(express.static(path.join(__dirname, 'build')));
// ---------------------------------------------------------------------------



// -------------------------------Other middlewares and routes--------------------
// Users and product routing
app.use("/api",  productRoutes, UserRoutes)
// app.use("/api", sessionCheck, productRoutes, UserRoutes)

// page not found API
app.get('*',(req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
// app.get('*',sessionCheck,(req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//   });
// ----------------------------------------------------------------------------



// -----------------------404 not found page route----------------------------------
app.use('/',(req, res) => { res.status(404).sendFile(path.resolve(__dirname, '404.html')) })
// ----------------------------------------------------------------------------


app.listen(process.env.PORT)