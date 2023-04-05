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
const men = require('./men/men.router')
const women = require('./women/women.router')
const electronic = require('./electronic/electronic.router')
const kid = require('./kid/kid.router')



// jo file bulaya us ko manage kaya

app.use("/user", User)
app.use('/users',userData)
app.use('/men',men)
app.use('/women',women)
app.use('/electronic',electronic)
app.use('/kid',kid)





app.get("/", (req, res) => {
	res.send("Welcome to Server ");
  });


app.listen(PORT,async()=>{

	await connect()
	console.log(`listen at http://localhost:${PORT}`);
})