/**
 * Created by 27353 on 2017/6/23.
 */

var express = require('express');
var router = express.Router();

var db = require('../lib/database')
var dbs = require('../lib/dbserver');

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
    dbs.elect.findAll().then(data =>{
        console.log(data[0].dataValues.geom);
        res.send(data);
    })
})

router.get('/commun',function (req,res) {
    dbs.commun.findAll().then(data =>{
        console.log("get-----commun")
        res.send(data)
    })
})

router.get('/gas',function (req,res) {
    dbs.gas.findAll().then(data =>{
        console.log("get-----gas")
        res.send(data)
    })
})

router.get('/task',function (req,res) {
    dbs.task.findAll().then(data =>{
        res.send(data);
    })
})

router.get('/rain',function (req,res) {
    dbs.rain.findAll().then(data =>{
        res.send(data);
    })
})

router.get('/waste',function (req,res) {
    dbs.waste.findAll().then(data =>{
        console.log("get-----waste")
        res.send(data)
    })
})

router.get('/water',function (req,res) {
    dbs.water.findAll().then(data =>{
        console.log("get----water")
        res.send(data)
    })
})

router.post('/',function (req,res) {
    console.log(req.body);
    res.send("OK")
})


//////////////为marker提供数据
router.get('/alltask',function (req,res) {
    dbs.task.findAll({
        where:
            {
                backWords: null
            }
        }
    ).then(data =>{
        res.send(data)
    })
    console.log("marker start")
})
////地瓜瓜
router.post('/webtask',function (req,res) {
    var postdata=req.body;
    const point = {
     type: 'MultiPoint',
     coordinates: [[postdata.locationX,postdata.locationY]],
     crs: { type: 'name', properties: { name: 'EPSG:4326'} }
     };
     /*const  point = {type:'Point',coordinates:[114.39864,30.52128],srid:'EPSG::4326'}*/


     dbs.task.create({

     pipeId:postdata.pipetype_geopoint,
     pipeType:postdata.pipetype,
     reasons:postdata.reason,
     backWords:null,
     checkTime:null,
     geom:point

     })
    console.log("地瓜："+JSON.stringify(postdata));


})

router.get('/taskoneid',function (req,res) {
   // var id=req.params.id;

    var id=req.query.id;
    console.log("/taskoneid"+id);

    dbs.task.findAll({
        where:{
            id:id
        }
    }).then(data =>{
        res.send(data)
    })

  /*  console.log(kk);
    console.log(id)

    var ob={};
    ob.content = "任务一";
    ob.name = req.query.name;
  /!*  ob.id=id.toString();*!/
    res.send(JSON.stringify(ob));;*/
})

//提交更改数据
router.post('/taskid',function (req,res) {
    var postdata=req.body;
    console.log(postdata);




    dbs.task.update({
        backWords:postdata.content,
        checkTime:db.gettime()
    },{
        where:{
            id:postdata.id
        }
    }).then(function (result) {
        var data={};
        data.state = "OK";
        console.log("成功");
        res.send(data);
    }).catch(function (err) {
        var data={};
        data.state = "FAIL"
        console.log("失败");
        res.send(data);
    })

})




module.exports = router;