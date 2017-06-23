/**
 * Created by 27353 on 2017/6/23.
 */

var express = require('express');
var router = express.Router();

var db = require('../lib/database')

router.get('/',function (req,res) {
    db.Line.findAll().then(lines =>{
        console.log(lines[0].dataValues.geom);
        res.send(lines[0].dataValues.geom)//,function (result) {
        //console.log(result)
    });
   /* res.send("get mobile")*/

})


module.exports = router;