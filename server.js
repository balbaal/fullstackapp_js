const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

// Connect To MongoDB
const db = require('./config/db').mongoURI
mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('MongoDB is Connected . . .'))
	.catch(err => console.log(`Something Wrong Connecting MongoDB : ${err}`))

// Middleware Body Parsing
app.use(bodyParser.json())

// Require Routes


// End Point API List
app.get('/', (req, res) => {
	res.send("root api test ...")
})

// Running Server
const PORT = process.env.PORT || 4000
app.listen(PORT, ()=> console.log(`Server running on port : ${PORT}`))
