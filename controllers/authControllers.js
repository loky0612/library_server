const db = require('../Database/mySql');

const test = (req,res) => {
    console.log("test is working");
    res.json("Test is working");
}


const addUser = (req, res) => {
    const details = req.body;
    const rollno = details.roll_no;
    if (rollno.length < 12) {
        console.log("error");
        return res.json("Roll Number should not be less than 12");
    }
    let sql = "INSERT into employee (name, year, dept, contact, cgpa, roll_no) VALUES (?,?,?,?,?,?)";
    let values = [details.name, details.year, details.dept, details.contact, details.cgpa, details.roll_no];
    console.log(values);
    try {
        db.query(sql, values, (err) => {
            if (err) throw err;
            res.json("Record added to DB Sucessfully")
            console.log("Record added to DB sucessfully");
        })
    } catch (error) {
        console.log(error);
        res.json("Error occured while adding record");
    }
}

const getDetails = (req, res) => {
    let sql = "SELECT * From employee";
    try {
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        })
    } catch (error) {
        console.log(error);
    }
}

const deleteStudent = (req,res) => {
    const id = req.body.id;
    let sql = "DELETE FROM employee WHERE contact = ?";
    try {
        db.query(sql,id,(err) => {
            if (err) throw err;
            res.json("Student deleted from DB sucessfully");
        })
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    test,
    addUser,
    getDetails,
    deleteStudent
}