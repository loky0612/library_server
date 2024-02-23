const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, getBooks, addBooks, addCard, checkUniqueness, getCardMembers, checkUser, books, addRent, getRentals } = require('../controllers/authControllers');

router.use(
    cors({
        credentials : true,
        origin : 'http://librarymanagementapp.s3-website.ap-south-1.amazonaws.com'
    })
);

router.get('/',test);
router.get('/getBooks',getBooks);
router.get('/getCardMembers',getCardMembers);
router.get('/books',books);
router.get('/getRentals',getRentals);
router.post('/addBooks',addBooks);
router.post('/addCard',addCard);
router.post('/checkUniqueness',checkUniqueness);
router.post('/checkUser',checkUser);
router.post('/addRent',addRent);


module.exports = router;
