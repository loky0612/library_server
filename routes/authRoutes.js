const express = require('express');
const router = express.Router();
const cors = require('cors');
const {test, addUser, getDetails, deleteStudent} = require('../controllers/authControllers');

router.use(
    cors({
        credentials : true,
        origin : 'http://studentdetails-by-loky.s3-website.ap-south-1.amazonaws.com'
    })
);

router.get('/',test);
router.get('/getDetails',getDetails);
router.post('/addUser',addUser);
router.post('/deleteStudent',deleteStudent);

module.exports = router;
