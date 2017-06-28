/**
 * Created by 27353 on 2017/6/23.
 */

var express = require('express');
var router = express.Router();

var db = require('../lib/database')

router.get('/',function (req,res) {
    db.Line.findAll().then(lines =>{
        console.log(lines[4].dataValues.geom);
        var json;
        /*for (line in lines){
            json += lines[l].dataValues.geom
        }*/
        res.send(lines)//,function (result) {
        //console.log(result)
    });
   /* res.send("get mobile")*/

})

router.get('/elect',function (req,res) {
    db.elect.findAll().then(data =>{
        console.log(data[0].dataValues.geom);
        res.send(data);
    })
})

router.get('/task',function (req,res) {
    db.task.findAll().then(data =>{
        res.send(data);
    })
})

router.post('/',function (req,res) {
    console.log(req.body);
    res.send("OK")
})




module.exports = router;