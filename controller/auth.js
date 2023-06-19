const jwt = require("jsonwebtoken")
var session = require('express-session')
var bcrypt = require('bcryptjs');

const { User } = require('../model/user');



const addUser = async (req, res, next) => {
    const user = new User(req.body)
    
    var hash = bcrypt.hashSync(req.body.password, 10);
    user.password = hash
    await user.save()
        .then((docs) => {
             req.session.userId = req.body.email;
             res.sendStatus(200) 
             next()
            })
        .catch((err) => { res.status(400).json({ "error": err }) })

}

const login = async (req, res, next) => {

    try {
        const hashedPass = await User.findOne({ email: req.body.email })

        const isAuthenticated = bcrypt.compareSync(req.body.password, hashedPass.password);
        if (isAuthenticated) {
            req.session.userId = req.body.email
            res.sendStatus(200)
            // next()
        }
        else{
            res.send("wrong password")
        }
    } catch (error) {
        res.sendStatus(401)
    }

}


const sessionCheck = async (req, res, next) => {
    if (req.session && req.session.userId) {
        next()
    } else {
        res.redirect('/loginpage')
    }
// res.sendStatus(200)
}

module.exports = { addUser, login, sessionCheck }