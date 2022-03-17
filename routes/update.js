const express =  require('express');

const User = require('../models/User');

const router = express.Router();



router.put('/:username', async(req,res,next)=>{
    console.log(req.params.username);
    try {
 const data = await User.findOneAndUpdate({username : req.params.username} , {
    $set: await {
        password: req.body.password,
        name:req.body.name,
        phone:req.body.phone,
       
    }
})
if(data){
res.send("updated");}
else{
    res.send("user with this username does not exist");
}
}
catch{
    res.status(500).send("Internal server error");
}


})
module.exports = router;