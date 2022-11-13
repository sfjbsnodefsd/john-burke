const mysql = require('mysql');
const express = require("express")
var app = express()
const bodyparser = require("body-parser")

app.use(bodyparser.json())

var mysqlConnection = mysql.createConnection({
    host: 'database-1-john.ccuk83kbvjoz.ap-northeast-1.rds.amazonaws.com',
    user: 'admin',
    password: 'root1234',
    database: 'employeedb',
    multipleStatements: true
})
mysqlConnection.connect((err) => {
    if (!err){
        console.log("successful connection")

    }
    else console.log("DB failed" + JSON.stringify(err, undefined, 2))
})

app.listen(3000,() => console.log("running express server on port 3000"))

// get all employees
app.get('/getemployees',(req, res) =>{
    mysqlConnection.query("select * from employee", (err, rows, fields) =>{
        if(!err) {
            console.log(rows)
            res.json({rows})

        }else console.log(err)
    })
})

// get all employees by id
app.get('/getemployees/:id',(req,res) =>{
    mysqlConnection.query("select * from employee where EmpID = ?",[req.params.id],(err,rows,fields) =>{
        if(!err) {
            res.send(rows)

        }else console.log(err)

    })
})

//delete employee by id
app.delete('/deleteemployees/:id',(req,res) =>{
    mysqlConnection.query("DELETE FROM employee WHERE EmpID = ?",[req.params.id],(err,rows,fields) =>{
        if(!err) {
           res.send("Deleted success")
        }else console.log(err)

    })
})

//add employee
app.post('/addemployee',(req,res) =>{
    let emp = req.body;
    var sql = "SET @EmpID = ? ; SET @Name = ?;  SET @EmpCode = ?; SET @Salary = ?; \
    CALL EmployeeAddOrEdit(@EmpID,@Name,@EmpCode,@Salary);"
    mysqlConnection.query(sql,[emp.EmpID,emp.Name,emp.EmpCode,emp.Salary],(err,rows,fields) =>{
        if(!err) {
          rows.forEach(element =>{
            if(element.constructor == Array)
            res.send("Employee ID of the inserted employee is : " + element[0].EmpID)
          })
        }else console.log(err)

    })
})

//update employee
app.put('/updateemployee',(req,res) =>{
    let emp = req.body;
    var sql = "SET @EmpID = ? ; SET @Name = ?;  SET @EmpCode = ?; SET @Salary = ?; \
    CALL EmployeeAddOrEdit(@EmpID,@Name,@EmpCode,@Salary);"
    mysqlConnection.query(sql,[emp.EmpID,emp.Name,emp.EmpCode,emp.Salary],(err,rows,fields) =>{
        if(!err) {
           res.send("update success")
        }else console.log(err)

    })
})

