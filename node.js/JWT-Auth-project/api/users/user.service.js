const pool = require("../../config/database");

module.exports = {
    // if we get error it will be passed as data and callback will be null
    // if execution is sucessful then call back will have data
    create: (data, callBack) => {
        pool.query(
            `insert into registration(firstName, lastName, gender, email, password, number) 
            values(?,?,?,?,?,?)`,
            [
                data.firstName,
                data.lastName,
                data.gender,
                data.email,
                data.password,
                data.number,
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },


    getUsers: (callBack) => {
        pool.query(
            `select * from registration`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },


    getUserById: (id, callBack) => {
        pool.query(
            `select * from registration where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },



    updateUser: (data, callBack) => {
        pool.query(
            `update registration set firstName=?, lastName=?, gender=?, email=?, password=?, number=? where id=?`,
            [
                
                data.firstName,
                data.lastName,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results );
            }
        )
    },

    deleteUser: (data, callBack) => {
        pool.query(
          `delete from registration where id = ?`,
          [data.id],
          (error, results, fields) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
      getUserByUserEmail: (email, callBack) => {
        pool.query(
          `select * from registration where email = ?`,
          [email],
    
          (error, results, fileds) => {
            if(error) {
             return callBack(error)
            } return callBack(null, results[0]);
          }
        )
      }
    };