const express = require('express');
const router=express.Router();
const pool=require('../modules/pool')

//GET tags from database
router.get('/', (req,res) => {
    const query = 'SELECT * FROM "tags"';
    pool.query(query)
    .then(result => {
        console.log('GET /api/tags', result);
        res.send(result.rows)
    })// end .then
    .catch(error => {
        console.log('error in GET /api/tags', error);
    })//end .catch
})//end GET

module.exports = router;