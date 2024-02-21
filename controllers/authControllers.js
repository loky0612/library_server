const db = require('../Database/mySql');

const test = (req,res) => {
    res.json("Test Working");
}

const getBooks = (req, res) => {
    let sql = "SELECT * From books";
    try {
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        })
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getBooks,
    test
}
