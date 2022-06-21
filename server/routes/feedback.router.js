const express = require('express');
const router = express.Router();

//DB Connection
const pool = require ('../modules/pool')



//POST
router.post('/', (req,res)=>{
    console.log ('in /feedback POST:',req.body);
    let queryString = `INSERT INTO feedback ( feeling, understanding, support, comments) VALUES ($1,$2,$3,$4);`;
    let values = [req.body.feeling, req.body.understanding,req.body.support, req.body.comments ];
    pool.query( queryString, values).then((results)=>{
        res.sendStatus(200);//201 = created
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    });
    });


    module.exports = router;