/**
 * Created by 27353 on 2017/6/22.
 */
var Sequelize =require("sequelize")

var moment=require("moment")

/*var bdarr = new Array();
bdarr[0]={};
bdarr[o].id=*/
var db = {};

const sequelize = new Sequelize('spatial','postgres','123456',{
    host:'localhost',
    dialect:'postgres',

    pool:{
        max:5,
        min:0,
        idle:10000
    }

});

sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

const Line = sequelize.define('lines',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    geom:{
        type:Sequelize.GEOMETRY
    }
},{
    timestamps:false
})

const elect = sequelize.define('elect84',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    geom:{
        type:Sequelize.GEOMETRY
    }
},{
    timestamps:false
})

/*const task = sequelize.define('taskmians',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    pipeId:{
        type:Sequelize.INTEGER
    },
    pipeType:{
        type:Sequelize.STRING
    },
    reasons:{
        type:Sequelize.STRING
    },
    backWords:{
        type:Sequelize.STRING
    },
    checkTime:{
        type:Sequelize.DATEONLY,
    },
    /!*    date:{
     type:Sequelize.DATEONLY
     },*!/
    geom:{
        type:Sequelize.GEOMETRY
    }
},{
    timestamps:false
})
const point = {
    type: 'MultiPoint',
    coordinates: [[114.39864,30.53128]],
    crs: { type: 'name', properties: { name: 'EPSG:4326'} }
};
/!*const  point = {type:'Point',coordinates:[114.39864,30.52128],srid:'EPSG::4326'}*!/


task.create({
    pipeId:2,
    pipeType:'elect',
    reasons:'node 测试',
    backWords:null,
    checkTime:null,
    geom:point

})*/
/*task.findAll({

}).then(function (data) {
    console.log(data)
})*/



const  waste_line = sequelize.define("waste_lines",{
    gid:{type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true},
    location:{
        type:Sequelize.STRING
    },
    last_check:{
        type:Sequelize.STRING
    },
    condition:{
        type:Sequelize.STRING
    }

},{
    timestamps:false
})


/*
waste_line.findAll().then(function (data) {
    console.log(data);
})
*/




/*
Line.findAll().then(lines =>{
    console.log(lines);//,function (result) {
      //console.log(result)
  });*/

/*
elect.findAll().then(data => {
   /!* console.log(data);*!/
})
*/

/*
task.findAll({
    where: {
        id: 1
    }
}).then(data =>{
    console.log(data);
})
*/
function gettime() {
    var times=new Date().getTime();
    var time=moment.tz(times,"Asia/Shanghai").format("YYYY-MM-DD");
    return time;
}


/*
task.update({
    backwords:"修改成功了",
    checktime:gettime()
},{
    where:{
        id:1
    }
}).then(function (result) {
    console.log("成功");
}).catch(function (err) {
    console.log("失败")
})*/

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Line = Line;
db.elect = elect;

db.gettime = gettime;
module.exports = db;