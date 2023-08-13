// Create web server
// 1. npm install express
// 2. npm install body-parser

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const fs = require('fs');

// body-parser
app.use(bodyParser.urlencoded({ extended: false }