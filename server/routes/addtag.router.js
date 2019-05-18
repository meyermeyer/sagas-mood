const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.post('/', (req,res)=>{
    const image_id = req.body.image_id
    const tag_id = req.body.tag_id
    console.log('in POST /api/images/addtag. tag_id:', tag_id, 'image_id:', image_id);
    const query = `INSERT INTO "images_tags" ("image_id", "tag_id")
                    VALUES ($1,$2)`
    pool.query(query, [image_id, tag_id])
    .then(response => {
        // console.log('in POST /api/images/addtag', response);
        res.sendStatus(201);
    })
    .catch(error => {
        console.log('error in POST /api/images/addtag', error);
    })

})

module.exports = router;