const express = require('express');
const app = express();
const devCards = require('./routes/devCards');
const connectDB = require('./db/connect');
const { connect } = require('./routes/devCards');
// const populateDevCards = require('./populate');
require('dotenv').config();

const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use('/api/v1/devCards', devCards);
app.use(express.static('public'));

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}`));
    } catch (error) { console.log(error) }
}
start();