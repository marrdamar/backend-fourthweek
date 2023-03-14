const route = require("express").Router();
const database = require("..//configs/postgre")


exports.profile = (req, res) => {
    database.query(`select profiles.*, users.phone_number, users.email from profiles left join users on profiles.users_id = users.id where profiles.id = '${req.params.id}'`, (err, result) => {
        if (err) {
            res.status(500).json({
                msg: "Internal server error"
            });
            return
        }
        res.status(200).json({
            data: result.rows[0]
        })
    })
}

exports.updateProfile = (req, res) => {
    const email = req.body.email,
        address = req.body.address,
        phone_number = req.body.phone_number,
        display_name = req.body.display_name,
        first_name = req.body.first_name,
        last_name = req.body.last_name,
        users_id = req.body.users_id,
        id = req.body.id;
    database.query(`UPDATE users SET email = '${email}', phone_number = '${phone_number}' WHERE users.id = '${id}'`,
        (err) => {
            if (err) {
                res.status(500).json({
                    msg: 'Internal Server Error 1',
                    data: err
                })
                return
            }
        })
    database.query(`UPDATE profiles SET address = '${address}', display_name = '${display_name}', first_name = '${first_name}', last_name = '${last_name}' where profiles.id = '${id}' RETURNING id`,
        (err, result) => {
            if (err) {
                res.status(500).json({
                    msg: 'Internal Server Error',
                    data: err
                })
                return
            }
            res.status(200).json({
                data: result.rows,
            })
        }); return
}