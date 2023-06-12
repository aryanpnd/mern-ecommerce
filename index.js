// moudles imports----------------------------------
require('dotenv').config()

const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path')

const express = require('express');
const { productRoutes } = require("./routes/products");
const { UserRoutes } = require('./routes/users');
// --------------------------------------------------

const app = express() // intializing express
app.use(express.json())

app.use(cors()) //cors

// console.log(process.env.DB_PASS) // testing dotenv 


//connecting to DB---------------------------------------------------
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


// homepage route/api-------------------------------------------------------
app.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)))
// app.get("/", (req, res) => { res.sendFile("D:/myfiles/CS stuffs/Programming/nodejs/playground/restAPI/homepage.html") })
// 
// ---------------------------------------------------------------------------


// Users and product routing
app.use("/", productRoutes, UserRoutes)

// page not found API
app.use('*',(req, res) => { res.status(200).sendFile(path.resolve(__dirname,'build','index.html')) })

app.use((req, res) => { res.status(404).sendFile("D:/myfiles/CS stuffs/Programming/nodejs/playground/restAPI/404.html") })


app.listen(8080)