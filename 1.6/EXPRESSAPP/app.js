const express = require("express");
const app = express();

app.get("/", () => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => { });