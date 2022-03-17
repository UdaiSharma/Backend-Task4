const express =  require('express');

const User = require('../models/User');

const router = express.Router();

router.delete('/:username' , async (req,res,next)=>{

try{
   await User.findOneAndDelete({username : req.params.username})
   

res.send('deleted');

}

catch{
    res.status(404).send({error : "no user found"});
}
});

module.exports = router;