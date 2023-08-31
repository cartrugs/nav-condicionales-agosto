const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// Rutas
app.get('/', (req, res) => {
    res.render('index', { showLinks: 'default' });
});

app.get('/login', (req, res) => {
    res.render('index', { showLinks: 'login' });
});

app.get('/register', (req, res) => {
    res.render('index', { showLinks: 'register' });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
