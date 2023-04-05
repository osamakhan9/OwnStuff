const mongoose = require("mongoose")

const menSchema = new mongoose.Schema({
	id:{type: Number, require:true},
	name:{type:String},
	quantity:{type:String},
	image:{type:String},
	price:{type:String},
	offerprice:{type:String},
	hoverImage:{type:String},
	fimage:{type:String},
	simage:{type:String},
	timage:{type:String},

})

const Electronic = mongoose.model("electronic",menSchema);
module.exports =Electronic


