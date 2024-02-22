const db = require('../Database/mySql');

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

const addBooks = (req, res) => {
    const { book_id, author, title, subject, date, genre} = req.body;
    let sql = "INSERT into books ( book_id, author, title, subject, date, genre) VALUES (?,?,?,?,?,?)";
    let values = [ book_id, author, title, subject, date, genre];
    console.log(values);
    try {
        db.query(sql, values, (err) => {
            if (err) throw err;
            res.json("Book added to DB Sucessfully")
            console.log("Book added to DB sucessfully");
        })
    } catch (error) {
        console.log(error);
        res.json("Error occured while adding record");
    }
}


module.exports = {
    getBooks,
    addBooks
}