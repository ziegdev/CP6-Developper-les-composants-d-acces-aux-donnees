require('dotenv').config();

const express = require('express');
const cors = require('cors');

const sanitizeBody = require('./middlewares/sanitizeBody');

const router = require('./router');

const app = express();

app.use(cors());

// Parser le content des requetes POST
app.use(express.urlencoded({ extended: true }));
// Pour pouvoir envoyer du JSON depuis Insomnia/Postman:
app.use(express.json());

// Sanitize req.body
app.use(sanitizeBody);

app.use(router);

app.listen(3000);