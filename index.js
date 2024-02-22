const express = require('express');
const app = express();
const db = require('./Database/mySql');

app.use(express.json());
app.use('/',require('./routes/authRoutes'));

<<<<<<< HEAD
app.listen(8001,() => {
    console.log("Server Connected at port 8001");
=======
app.listen(8000,() => {
    console.log("Server Connected at port 8000");
>>>>>>> 8ee44632c1c129f300b4e00d31b6ebf0731a44ca
    db.connect((err) => {
        if (err) throw err;
        console.log("DB connected sucessfully");
    })
})