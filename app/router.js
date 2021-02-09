const express = require('express');
const listController = require('./controllers/listController');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello world!');
});

router.get('/lists', listController.getAllLists);
router.post('/lists', listController.createList);

router.get('/lists/:id', listController.getList);
router.patch('/lists/:id', listController.updateList);
router.delete('/lists/:id', listController.deleteList);

// On crée une route PUT flexible (fusion du POST /lists et PATCH /lists/id) qui soit:
// - PUT /lists: crée une liste
// - PUT /lists/id: update une liste
router.put('/lists/:id?', listController.createOrUpdateList);

router.use((_, res) => {
    res.status(404).send('Error 404');
});

module.exports = router;