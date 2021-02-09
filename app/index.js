require('dotenv').config();

const express = require('express');
const router = require('./router');

const app = express();

// Parser le content des requetes POST
app.use(express.urlencoded({ extended: true }));
// Pour pouvoir envoyer du JSON depuis Insomnia/Postman:
app.use(express.json());

app.use(router);

app.listen(3000);