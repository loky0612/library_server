const express = require('express');
const router = express.Router();
const cors = require('cors');
const {test, addEmp, getEmp, deleteEmp} = require('../controllers/authControllers');

router.use(
    cors({
        credentials : true,
        origin : 'http://localhost:3001'
    })
);

router.get('/',test);
router.get('/getEmp',getEmp);
router.post('/addEmp',addEmp);
router.post('/deleteEmp',deleteEmp);

module.exports = router;