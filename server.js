const express = require('express')
const mongoose = require('mongoose')

const app = express()

// End Point API List
app.get('/', (req, res) => {
	res.send("root api test ...")
})

// Running Server
const PORT = process.env.PORT || 4000
app.listen(PORT, ()=> console.log(`Server running on port : ${PORT}`))
