const express = require('express');

const app = express();


app.use(express.static('public')); //TO BE ABLE TO ACCESS OUR STATIC FILES SUCH AS IMAGES, CSS, etc

 app.use(express.urlencoded({extended:true})); //FOR US TO BE ABLE TO PROCESS OUR FORM FIELDS
// CREATING OUR ROUTES 

// HOME ROUTE

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

// ABOUT ROUTE

app.get('/resource', (req, res) => {
	res.sendFile(__dirname + '/resource.html');
});

// CONTACT ROUTE

app.get('/events', (req, res) => {
	res.sendFile(__dirname + '/event.html');
});

// REGISTRATION ROUTE

app.get('/contact', (req, res) => {
	res.sendFile(__dirname + '/contact.html');
});


app.listen(4040, () => console.log("Server started on Port 4040"));