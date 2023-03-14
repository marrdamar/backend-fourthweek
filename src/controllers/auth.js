const route = require("express").Router();
const database = require("..//configs/postgre")

exports.register = (req, res) => {
    const email = req.body.email,
        password = req.body.password,
        phone = req.body.phone;
        database.query(`INSERT INTO users(email, password, phone_number) VALUES('${email}', '${password}', '${phone}') RETURNING id, email`, (err, result) => {
        if (err) { res.status(400).json({ data: `INSERT INTO users(email, password, phone_number) VALUES('${email}', '${password}', '${phone}')` }) }
        res.status(200).json({
            data: result.rows[0]
        });
    })
}

exports.login = (req, res) => {
    const email = req.body.email,
        password = req.body.password,
        saltedPassword = '12345678';//password di encrypt
    database.query(`SELECT * FROM users WHERE email = '${email}'`,
        (err, result) => {
            if (err) {
                res.status(500).json({
                    msg: 'Internal server Error',
                    data: err
                })
                return;
            }
            if (saltedPassword !== result.rows[0].password){
                res.status(200).json({msg: 'Email atau password salah'})
                return
            }
            res.status(200).json({
                msg: 'Email atau password benar',
                data: result
            })
        })
}
