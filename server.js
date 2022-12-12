const express = require("express")
const { read } = require("fs")
const drinks = require("./models/drinks.js")

const app = express()
const port = 3000

// app.get("/",(req, res) => {
//     res.send('Welcome to the Github App!')
// })

app.get("/drinks", (req, res) => {
    res.render("drinks_index.ejs")
})
app.listen(port, () => {
    console.log("Server is listening.")
})