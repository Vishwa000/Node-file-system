const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');

router.get('/', (req, res) => {
    res.json({
        "Files details": "/allFiles"
    });
});router.post('/createFiles', fileController.createFile);
router.get('/allFiles', fileController.getAllFiles);

module.exports = router;
