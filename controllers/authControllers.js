const db = require('../Database/mySql');

const test = (req, res) => {
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

const addBooks = (req, res) => {
    const { book_id, author, title, subject, date, genre } = req.body;
    let sql = "INSERT into books ( book_id, author, title, subject, date, genre) VALUES (?,?,?,?,?,?)";
    let values = [book_id, author, title, subject, date, genre];
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

const addCard = (req, res) => {
    const { card_no, name, email, contact, aadhar_no, dom } = req.body;
    console.log(dom,"iii");
    let sql = "INSERT into library_cards ( card_no, name, email, contact, aadhar_no, dom ) VALUES (?,?,?,?,?,?)";
    let values = [card_no, name, email, contact, aadhar_no, dom];
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

const checkUniqueness = (req, res) => {
    const card_no = req.body.card_no;
    let sql = "SELECT * FROM library_cards WHERE card_no = ?"
    db.query(sql, [card_no], (error, results, fields) => {
        if (error) {
            console.error('Error executing MySQL query:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (results.length > 0) {
            return res.json("not-unique");
        }
        return res.json("unique");
    });

}

const getCardMembers = (req, res) => {
    let sql = "SELECT * From library_cards";
    try {
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        })
    } catch (error) {
        console.log(error);
    }

}

const checkUser = (req, res) => {
    const card_no = req.body.card_no;
    let sql = "SELECT * From library_cards WHERE card_no = ?";
    try {
        db.query(sql, [card_no], (err, results) => {
            if (err) throw err;
            res.json(results);
        })
    } catch (error) {
        console.log(error);
    }
}

const books = (req,res) => {
    let sql = "SELECT title From books";
    try {
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        })
    } catch (error) {
        console.log(error);
    }
}

const addRent = (req, res) => {
    const { card_no, name, email, contact, aadhar_no, book, date } = req.body;
    let sql = "INSERT into rentals ( card_no, name, email, contact, aadhar_no, book_name, date ) VALUES (?,?,?,?,?,?,?)";
    let values = [card_no, name, email, contact, aadhar_no, book, date];
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

const getRentals = (req,res) => {
    let sql = "SELECT * From rentals";
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
    addBooks,
    addCard,
    checkUniqueness,
    getCardMembers,
    checkUser,
    books,
    addRent,
    getRentals
}
