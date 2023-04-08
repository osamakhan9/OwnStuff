const express = require("express");
const app = express.Router()
const Men = require("./men.model")

app.get("/", async(req,res)=>{
	try{
		let data = await Men.find()
		res.send(data)

	} catch(e){
		res.send(e.massage)
	}
})

app.post('/',async(req,res)=>{
	// let data = req.body.area.split(",")
  const {name,quantity,image,hoverImage,price,offerprice,fimage,simage,timage}=req.body
	try{
		let men = await Men.create({
			
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
	  let exists = await Men.findOneAndDelete({
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
