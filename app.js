//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function(req, res) {
    var today = new Date();
    var currentday = today.getDay();
    var day = "";
    switch (currentday) {
        case 0:
            day="Sunday! XD";
            break;
        case 1:
            day="Monday :(";
            break;
        case 2:
            day="Tuesday :|";
            break;
        case 3:
            day="Wednesday :|";
            break;
        case 4:
            day="Thursday :)";
            break;
        case 5:
            day="Friday :D";
            break;
        case 6:
            day="Saturday ;D";
            break;
        default:
            day="Get back to work idiot!";
    }
    res.render("list", {
        kindOfDay: day
    });
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
