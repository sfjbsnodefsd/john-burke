const {createPool} = require("mysql")

const pool = createPool({
    port:3306,
    host: "localhost",
    user : "root",
    password: "root",
    database :"test",
    connectionLimit :10  //ten connection max
})

module.exports = pool