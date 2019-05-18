const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//GET images from database
router.get('/', (req,res) => {
    const query = 'SELECT * FROM "images";';
    pool.query(query)
    .then((result)=>{
        console.log('GET /api/images', result.rows);
        res.send(result.rows)
    })//end .then
    .catch(error => {
        console.log('error in GET /api/images', error);     
    })// end .catch
})//end GET


module.exports = router;
