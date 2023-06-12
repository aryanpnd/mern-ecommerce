const fs = require('fs');
const path = require('path');

// assets imports----------------------------------
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname,"data.json"), "utf-8"))


const addUsers = (req, res, next) => {
    res.json(`successfully added ${JSON.stringify(req.body.firstName)} with Id no : ${req.body.id}`)
    data.users.push(req.body)
    // res.send("User add successfully")
    // res.json(data.Users.find(id=>id.id===1))
}

const getUsers = (req, res) => { res.json(data.users) }

const getUsersById = (req, res) => {
    console.log(`parameter Id : ${req.params.id}`)

    fs.appendFile(path.resolve(__dirname,"request.txt"), `parameter Id : ${req.params.id} at ${req.protocol}://${req.hostname}${req.url} \n`,
        (err) => { })
    const reqId = +req.params.id
    const requestUserData = data.users.find(p => p.id === reqId)
    requestUserData == undefined ? res.send(data.users) : res.send(requestUserData)
}

const updateUser = (req, res) => {
    const reqId = +req.params.id
    const UserIndex = data.users.findIndex(p => p.id === reqId)
    data.users.splice(UserIndex, 1, { id: reqId, ...req.body })
    res.send(`Updated in User list with User Id:${reqId}`)

}


const patchUser = (req, res) => {
    const reqId = +req.params.id
    const UserIndex = data.users.findIndex(p => p.id === reqId)

    // approach 1 to replace
    const UsersCopy = data.users[UserIndex]
    data.users.splice(UserIndex, 1, { ...UsersCopy, ...req.body, })

    // sending response
    res.send(`Updated in User at User Id:${reqId}  with ${[...Object.keys(req.body)]}: ${[...Object.values(req.body)]}`)

}


const deleteUser = (req, res) => {
    const reqId = +req.params.id
    const UserIndex = data.users.findIndex(p => p.id === reqId)

    data.users.splice(UserIndex, 1)

    // sending response
    res.send(`Deleted in User with User Id:${reqId}`)

}

module.exports = { addUsers, deleteUser, updateUser, patchUser, getUsers, getUsersById }