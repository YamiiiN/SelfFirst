const express = require("express");
const app = express();
const cors = require('cors');

//CONFIGS
app.use(express.json());
app.use(cors()); 

require('dotenv').config();


module.exports = app;