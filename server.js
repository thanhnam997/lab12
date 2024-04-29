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





// Define a route handler for the '/calculate' endpoint
// Route for calculating BMI
app.get('/calculate', (req, res) => {
   // Destructure the 'height' and 'weight' values from the query parameters
    const { height, weight } = req.query;
    // Parse the height and weight values as floating-point numbers
    
    const parsedHeight = parseFloat(height);
  const parsedWeight = parseFloat(weight);



    // Calculate the BMI using the provided height and weight
    const bmi = calculateBMI(parseFloat(height), parseFloat(weight));
    
     // Render the 'result' Handlebars template and pass the calculated BMI value as data
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
