const express = require('express');
const router = express.Router();
const cors = require('cors');
const { getBooks, addBooks } = require('../controllers/authControllers');

router.use(
    cors({
        credentials : true,
        origin : 'http://localhost:3001'
    })
);

router.get('/getBooks',getBooks);
router.post('/addBooks',addBooks);

module.exports = router;