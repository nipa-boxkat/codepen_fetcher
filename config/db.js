const config = require('config');
const mongoose = require('mongoose');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        console.log("Connected to MongoDB.")
    } catch (error) {
        console.error(error.message);
        // Exit with failure
        process.exit(1);
    }
}

module.exports = connectDB;