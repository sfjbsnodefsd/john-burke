const { hashSync } = require("bcrypt");
const {create,deleteUser, getUsers,getUserById, updateUser, getUserByUserEmail}   = require("./user.service")
const { genSaltSync ,compareSync} = require("bcrypt");
const pool = require("../../config/database");
const { sign } = require("jsonwebtoken");


module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);

        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    sucess: 0,
                    message: "Database connnection error",
                });
            }
            return res.status(200).json({
                sucess: 1,
                data: results,
            });
        });
    },
    getUserById: (req,res) =>{
        const id= req.params.id
        getUserById(id, (err,results) => {
            if(err) {
                console.log(err)
                return

            }if(!results){
                return res.json({
                    success:0,
                    message:"Record not found"
                })
            }return res.json({
                success:1,
                data:results
            })
        })
    },
    getUsers : (req, res) =>{
        getUsers((err,results) =>{
            if(err){
                console.log(err)
                return
            }return res.json({
                success:1,
                data:results
            })
        })
    },
    updateUser:(req,res)=>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateUser(body,(err, results)=>{
            if(err){
                console.log(err)
                return

            }
            if(!results){
                res.json({
                    success:0,
                    message:"Update failed"
                })
                }
                
                
                
                return res.json({
                success:1,
                message:"Updates successfully"
            })
        })

    },
    deleteUser: (req, res) => {
        const data = req.body;
        deleteUser(data, (err,results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (results.affectedRows == 0) {
            return res.status(400).json({
              success: 0,
              message: "No record found for user id",
            });
          }
          return res.json({
            sucess: 1,
            message: "User deleted sucessfully ",
          });
        });
      },
      login: (req, res) => {
        const body = req.body;
        getUserByUserEmail(body.email, (err, results) => {
          if (err) {
            console.log(err);
          }
          if (!results) {
            return res.json({
              sucess: 0,
              message: "Invalid email or password",
            });
          }
          const result = compareSync(body.password, results.password);
          if (result) {
            results.password = undefined;
            const jsontoken = sign({ result: results }, process.env.KEY, {
              expiresIn: "1h",
            });
            return res.json({
              sucess:1,
              message:"Login sucessfully ",
              token: jsontoken
            });
          } else  {
            return res.json({
              success : 0 ,
              data:"Invalid email or password"
            })
          }
        });
      },
    };