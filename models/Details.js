const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DetailsSchema = new Schema({
	ifsc:{
		type:String,
		required:true
	},

	bank_id:{
		type:Number,
		required:true

	},

	branch:{
		type:String,
		required:true

	},
	
	address:{
		type:String,
		required:true
	},
	city:{
		type:String,
		required:true
	},
	district:{
		type:String,
		required:true
	},
	state:{
		type:String,
		required:true
	},
	bank_name:{
		type:String,
		required:true
	}

});

mongoose.model('details',DetailsSchema);