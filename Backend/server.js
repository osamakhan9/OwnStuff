const express = require('express')

require("dotenv").config()

const connect = require('./config/db')
const cors = require("cors")
const PORT = process.env.PORT
const app = express()
app.use(express.json())

app.use(cors())



// file ko yaha bulaya  

const User = require('./user/user.router')
const userData = require('./users_data/users.router')




// jo file bulaya us ko manage kaya

app.use("/user", User)
app.use('/users',userData)




app.get("/", (req, res) => {
	res.send("Welcome to Server ");
  });


app.listen(PORT,async()=>{

	await connect()
	console.log(`listen at http://localhost:${PORT}`);
})