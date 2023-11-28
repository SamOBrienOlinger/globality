const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get("/api", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({"User": "Sam is globality"});
});

app.listen(3001, () => {
    console.log("Server started on port 3001");
});

