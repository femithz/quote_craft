var mongoose=require('mongoose');
var Schema=mongoose.Schema

var QuoteSchema=mongoose.Schema({
  
    author_name:{
    	type:String,
    	require:true
    },
    quote:{
       type:String,
       require:true
    },
});

module.exports=mongoose.model('Quote', QuoteSchema);