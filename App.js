const {setupRoutes}= require("./routes/routes")
const express = require("express");
const path = require('path');
const app = express();
app.use(express.static("public", { maxAge: "7d" }));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'public')));


setupRoutes(app);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

