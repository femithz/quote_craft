            const express=require('express');
            const router=express.Router();
            const Quote=require('../models/quote');
            // Function to add quote
            router.post('/quote', function (req,res,next) {
                        const quote = new Quote({
                          author_name:req.body.author_name,
                          quote:req.body.quote,
                        });
                        quote.save(function (err,result) {
                              if (err) {
                                return res.status(501).json()
                              }else{
                                return res.status(200).json({
                                  message:'Quote added Successfully',
                                  result: result
                                })
                              };
                            }) 
            })
            // router to get list of quotes 
            router.get('/quotes', function (req,res) {
              Quote.find()
                .select("author_name quote")
                .exec()
                .then(results=>{
                    res.status(200).json(results)
                  })
                  .catch(err=>{
                  res.status(500).json({
                  error:err
              });  
            });
          }) 
          // router to seacrh for quotes
          
module.exports=router;