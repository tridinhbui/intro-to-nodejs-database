const express = require('express');
const app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.get("/", function(req, res) {
    res.send("<h1> hello </h1>");
});

app.get("/contact", function(req, res) {
    res.send("contact me: tridinhbui0901@gmail.com");
});

app.get("/about", function(req, res) {
    res.send("My name is Bui Dinh Tri");
});

app.get("/hobbies", function(req, res) {
    res.send("Coffee");
});


app.listen(3000, function() {
    console.log("Server started on port 3000");
});