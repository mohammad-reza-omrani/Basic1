app.get("/", (request, response) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, (request, response) => {
    console.log("Application started and Listening on port 3000");
});
