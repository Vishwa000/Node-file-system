const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');

router.post('/create', fileController.createFile);
router.get('/all', fileController.getAllFiles);

module.exports = router;
