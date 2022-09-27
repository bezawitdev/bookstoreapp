const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const router = require("./routes/book-routes")
const app = express();
// const PORT = 5000;
const PORT = process.env.PORT || 5000
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors());

app.use('/books', router)


let MONGODB_URI =   process.env.PROD_MONGODB || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/test'

mongoose.connect(MONGODB_URI, {useUnifiedTopology: true, useNewUrlParser: true})
.then(() => {
  console.log('Succesfully connected to MongoDB');
})
.catch(e => console.error('Connection error', e.message));

const db = mongoose.connection;





db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening port: ${PORT}`))



module.exports = db;















// mongoose.connect(
//     "mongodb+srv://admin:perscholas16@cluster0.uoephg3.mongodb.net/?retryWrites=true&w=majority"
//     ).then(() => console.log("connected to the Database"))
//         .then(() => {
//             app.listen(`${PORT}`)
//         }).catch((err) => console.log(err))

