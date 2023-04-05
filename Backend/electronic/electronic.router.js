const express = require("express");
const app = express.Router()
const Electronic = require('./electronic.model')

app.get("/", async(req,res)=>{
	try{
		let data = await Electronic.find()
		res.send(data)

	} catch(e){
		res.send(e.massage)
	}
})

app.post('/',async(req,res)=>{
	// let data = req.body.area.split(",")
	// res.send("osama")
  const {name,quantity,image,hoverImage,price,offerprice,fimage,simage,timage}=req.body
	try{
		let electronic = await Electronic.create({
			// id: data[0],
			name,
			quantity,
			image,
            hoverImage,
			price,
			offerprice,
			fimage,
			simage,
			timage,
		})
		res.status(200).send('Added Successfully')
	}catch(e){
      // res.status(404).send(e.massage)
	}
})


app.delete("/", async (req, res) => {
	try {
	  let exists = await Electronic.findOneAndDelete({
		id: req.body.id,
		name: req.body.name,
	  });
	  console.log(exists, req.body.id, req.body.name);
  
	  res.status(200).send("Product deleted successfully");
	} catch (e) {    
	  res.send(e.massage);
	}
  });

  module.exports = app
