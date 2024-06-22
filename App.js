const express = require("express");
const app = express();

const productRoutes = require('./routes/productRoutes');

app.use(express.static("public", { maxAge: "7d" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('./controllers/products', productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
});
