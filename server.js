const express = require('express');
const app = express();
const path = require('path');


// publicを参照
app.use(express.static(path.join(__dirname, 'public')));

// Set the views directory
app.set('views', './views');

// Set the view engine
app.set('view engine', 'ejs');

// Define the index route
app.get('/', (req, res) => {
  // Render the index view
  res.render('index', { title: 'Express' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
