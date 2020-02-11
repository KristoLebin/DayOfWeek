const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

function day_of_the_week(date){
    var days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return days_of_week[date.getDay()];
}

app.get('/today', (req, res) => {
    var today = new Date();
    res.render("day_of_week",{
        date: today,
        days_of_week: day_of_the_week(today)
    });
})
app.get('/birthday', (req, res) => {
    var birthday = new Date(2002, 9, 5);
    res.render("day_of_week",{
        date: birthday,
        days_of_week: day_of_the_week(birthday)
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))