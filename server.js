const express = require('express');
const hbs = require('hbs');

const app = express();

const port = process.env.PORT || 3000;

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

app.listen(port, () => console.log(`Server up on Port ${port}`));