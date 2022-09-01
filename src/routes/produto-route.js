const express = require('express');
const router = express.Router();
const controller = require('../controllers/produto-controller')


router.get('/', controller.get);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.get('/:id', controller.getByIdCateg);
router.delete('/:id', controller.delete);
module.exports = router;