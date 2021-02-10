const express = require('express');
const listController = require('./controllers/listController');
const cardController = require('./controllers/cardController');
const labelController = require('./controllers/labelController');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello world!');
});

// LIST CONTROLLER
router.get('/lists', listController.getAllLists);
router.post('/lists', listController.createList);

router.get('/lists/:id', listController.getList);
router.patch('/lists/:id', listController.updateList);
router.delete('/lists/:id', listController.deleteList);

// On crée une route PUT flexible (fusion du POST /lists et PATCH /lists/id) qui soit:
// - PUT /lists: crée une liste
// - PUT /lists/id: update une liste
router.put('/lists/:id?', listController.createOrUpdateList);

// CARD CONTROLLER
router.get('/lists/:id/cards', cardController.getAllCardsInList);
router.get('/cards/:id', cardController.getCard);
router.post('/cards', cardController.createCard);
router.patch('/cards/:id', cardController.updateCard);
router.delete('/cards/:id', cardController.deleteCard);
router.post('/cards/:cardId/labels/:labelId', cardController.associateLabelToCard);
router.delete('/cards/:cardId/labels/:labelId', cardController.deleteLabelFromCard);
router.put('/cards/:id?', cardController.createOrUpdateCard);

// LABEL CONTROLLER
router.get('/labels', labelController.getLabels);
router.post('/labels', labelController.createLabel);
router.patch('/labels/:id', labelController.updateLabel);

router.use((_, res) => {
    res.status(404).send('Error 404');
});

module.exports = router;