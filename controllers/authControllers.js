const db = require('../Database/mySql');

const test = (req,res) => {
    console.log("test is working");
    res.json("Test is working");
}

const addEmp = (req, res) => {
    const {id, name, dept, dob, gender, desig, salary} = req.body;
    if (name.length > 30) {
        console.log("error");
        return res.json("Employee name should not exceed 30 characters");
    }
    if (salary.length > 8) {
        console.log("error");
        return res.json("Employee salary should not exceed 8 digits");
    }
    let sql = "INSERT into emp_details (id, name, dept, dob, gender, desig, salary) VALUES (?,?,?,?,?,?,?)";
    let values = [id, name, dept, dob, gender, desig, salary];
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

const getEmp= (req, res) => {
    let sql = "SELECT * From emp_details";
    try {
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        })
    } catch (error) {
        console.log(error);
    }
}


const deleteEmp = (req,res) => {
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
    addEmp,
    getEmp,
    deleteEmp
}