const app = require('./app');
const dbConnect = require('./config/dbConnect')
const dotenv = require('dotenv');
const express = require('express');

dotenv.config({ path: './.env' });

dbConnect;

app.listen(process.env.PORT, () => {
    console.log(`Server Running: http://localhost:${process.env.PORT}`)
})