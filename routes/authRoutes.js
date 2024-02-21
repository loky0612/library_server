const express = require('express');
const router = express.Router();
const cors = require('cors');
const { getBooks } = require('../controllers/authControllers');

router.use(
    cors({
        credentials : true,
        origin : 'http://localhost:3000'
    })
);

router.get('/getBooks',getBooks);

module.exports = router;
