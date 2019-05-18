const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.post('/', (req,res)=>{
    const tag_id = req.body.tag_id
    const image_id = req.body.image_id
    console.log('in POST /api/images/addtag. tag_id:', tag_id, 'image_id:', image_id);
})

module.exports = router;