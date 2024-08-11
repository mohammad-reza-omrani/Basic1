const express = require("express");
const app = express();

const HomePageSchema = new Schema({
       color: {
              type: String,
       },
});
const HomePage = mongoose.model('homepages', HomePageSchema);

const DB_URI ="mongodb+srv://dbmohammd:eIsm1Du5dGGb2jDk@electron.y2r5l.mongodb.net/Website?retryWrites=true&w=majority"; 
mongoose.connect(DB_URI, {});

app.get('/', (reqest, response) => {
        HomePage.findOne({title: "red"}) 
              .then(result => { 
                     res.render('index', { homepages: result }); 
               }) 
});

app.set('view engine', 'ejs');

app.get("/", () => {
       res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {});

