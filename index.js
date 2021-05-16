const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.send("Web App 2 is running!!");
});

app.listen(3000, () => {
    console.log("running at 3000");
});