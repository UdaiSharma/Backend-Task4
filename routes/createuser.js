const express =  require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const { body, validationResult } = require('express-validator');

const router = express.Router();


router.post('/',[


body('username').isLength({min:3}),
body('password','Minimum length must be 8').isLength({min:8}),
body('name','Minimum length must be 3').isLength({min:3}),
body('phone','Enter valid number').isLength({max : 10}),


],async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
    let user = await User.findOne({username:req.body.username});
    if(user){
      return res.status(400).json({error:"Sorry , user with this username already exists"});
    }

    const salt = await bcrypt.genSalt(10);
   const secPass = await bcrypt.hash(req.body.password , salt);
   user  = await User.create({
        username: req.body.username,
        password: secPass,
        name:req.body.name,
        phone:req.body.phone,
       
      });
     
      
    //   .then(user => res.json(user))
    //   .catch(err=>{console.log(err)
    // res.json({error:'Please enter unique value for username or password'})
    // })




res.json({user}); 


}
catch{
  res.status(500).send("Internal server error");
}
 
})






module.exports = router;