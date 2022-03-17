const express =  require('express');

const User = require('../models/User');

const router = express.Router();



router.post('/:username', async (req,res)=>{
    let detail = await User.findOne({username : req.params.username});

    if(detail){
        res.json({
           detail 
        })
    }
    else{
        res.send("User with this username does not exist");
    }
})

module.exports = router;