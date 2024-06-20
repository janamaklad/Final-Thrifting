const express = require("express");
const app = express();
app.use(express.static("public", { maxAge: "7d" }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
});