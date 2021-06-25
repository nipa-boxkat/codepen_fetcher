const express = require('express');
const app = express();
app.use(express.json({ extended: false }));

// Use cors middleware for cross-domain GET, allow all requsets by default
const cors = require('cors');
app.use(cors());

// DBconnect info saved in config
const connectDB = require('./config/db');
connectDB();


// Routes 
// For GET requests
app.use('/', require('./routes/index'));
// For POST requests
app.use('/api/post', require('./routes/post'));


// Port
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is now running on ${PORT}`));