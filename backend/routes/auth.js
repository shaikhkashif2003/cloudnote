const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    obj={
        name: "John",
    }
    res.json(obj)
})

module.exports = router