// Require express
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const navRoute = require("../routes/index");


// Use static middleware
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

// set ejs template engine
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

// use router
app.use(navRoute);

app.listen(port, ()=>{
    console.log(`listen at ${port}`);
});
