const express = require('express');
const router = express.Router();
const cors = require('cors');
const { getBooks } = require('../controllers/authControllers');

router.use(
    cors({
        credentials : true,
        origin : 'http://librarymanagementapp.s3-website.ap-south-1.amazonaws.com'
    })
);

router.get('/getBooks',getBooks);

module.exports = router;
