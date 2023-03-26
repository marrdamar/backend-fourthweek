const express = require("express");
const cors = require('cors')

const server = express();
const PORT = 3004;
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
const masterRouter = require("./src/routers");

server.use(masterRouter); 

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://admin:admin@testweek6.khuq2ny.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("coffee_shop").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

//product
//profile
// const profileController = require('./src/routers/profile')
// server.use('/profile', profileController)

// //auth
// const authRoute = require('./src/routers/auth')
// server.use('/auth', authRoute)

// //auth
// const authProduct = require('./src/routers/product')
// server.use('/items', authProduct)

// server.get('/users/email=:email', (req, res) => {
//     const database = require("./src/configs/postgre")
//     database.query(`select email from users where email = '${req.params.email}'`, (err, result) => {
//         if (err) {
//             res.status(500).json({
//                 msg: "Internal Server Error!",
//             });
//             return;
//         }

//         if (result.rows.length > 0) {
//             res.status(200).json({
//                 data: 'email exist'
//             });
//             return;
//         }

//         res.status(404).json({
//             data: 'go on'
//         });
//     })
// })



server.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`)
    console.log(`Welcome`)
});