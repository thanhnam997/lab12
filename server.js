// Import required modules
const express = require('express');
const path = require('path');
// Create an Express application
const app = express();
const port = 3001;

// Set up Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('home');
});
// Route for calculating BMI
app.get('/calculate', (req, res) => {
    const { height, weight } = req.query;
    const bmi = calculateBMI(parseFloat(height), parseFloat(weight));
    res.render('result', { bmi });
});

// BMI calculation function
function calculateBMI(height, weight) {
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        return null;
    }
    const bmi = weight / (height * height);
    return bmi.toFixed(2);
}

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/styles/style.css', (req, res) => {
    res.type('text/css');
    res.sendFile(path.join(__dirname, 'public', 'style.css'));
});
