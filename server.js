const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

app.get('/', (req, res) => res.render('home.hbs', {
    pageTitle: 'Home page',
    welcomeMessage: 'Welcome to my website',
}));

app.get('/about', (req, res) =>
    res.render('about.hbs', {
        pageTitle: 'About Page',
        aboutMessage: 'Description about us...',
    })
);

app.listen(3000, () => console.log('Server up on Port 3000'));