const express = require('express');
const app = express();
const products = require('./routes/products');
const connectDB = require('./db/connect');
const { connect } = require('./routes/products');
// const populateProducts = require('./populate');
require('dotenv').config();

const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use('/api/v1/cards', products);
app.use(express.static('public'));

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}`));
    } catch (error) { console.log(error) }
}
start();