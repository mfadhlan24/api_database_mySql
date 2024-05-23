const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
// Routes utama method GET
app.get('/', (req, res) => {
    res.send('Utama!');
});
app.get('/hello', (req, res) => {
    console.log( { urlParam : req.query })
    res.send('hello!');
});
app.post('/login', (req, res) => {
    console.log({ requestFromOutside: req.body });
        res.send('Login berhasil!');
    
});
app.put('/update', (req, res) => {
    console.log({ updateData: req.body });
    res.send('Data berhasil diupdate!');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});