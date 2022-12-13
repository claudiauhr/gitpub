const express = require("express")
const { read } = require("fs")
const drinks = require("./models/drinks.js")
const food = require("./models/food.js")

const app = express()
const port = 3000

// app.get("/",(req, res) => {
//     res.send('Welcome to the Github App!')
// })

app.get("/drinks", (req, res) => {
    res.render("drinks_index.ejs", {
        allDrinks: drinks,
    })
})

app.get("/drinks/:indexOfDrinksArray", (req, res) =>{
    res.render("drinks_show.ejs", {
        drink: drinks[req.params.indexOfDrinksArray],
    })
})

app.get("/food", (req, res) => {
    res.render("food_index.ejs", {
        allFood: food,
    })
})

app.get("/food/:indexOfFoodArray", (req, res) =>{
    res.render("food_show.ejs", {
        food: food[req.params.indexOfFoodArray],
    })
})


app.listen(port, () => {
    console.log("Server is listening.")
})