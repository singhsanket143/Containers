const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
// changes from container
app.get('/home', (req, res) => {
    return res.json({message: 'Homecoming'})
});

app.get('/info', (req, res) => {
    return res.json({message: 'info'})
});

app.get('/about', (req, res) => {
    return res.json({message: 'about'})
})

app.listen(process.env.PORT, () => {
    console.log(`Started the server at PORT: ${process.env.PORT}`);
});
