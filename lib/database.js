/**
 * Created by 27353 on 2017/6/22.
 */
var Sequelize =require("sequelize")

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

const task = sequelize.define('tasks',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    pipetype:{
        type:Sequelize.STRING
    },
    describe:{
      type:Sequelize.STRING
    },
    times:{
        type:Sequelize.TIME
    },
    condition:{
        type:Sequelize.DATEONLY
    },
    geom:{
        type:Sequelize.GEOMETRY
    }
},{
    timestamps:false
})

/*
Line.findAll().then(lines =>{
    console.log(lines);//,function (result) {
      //console.log(result)
  });*/

elect.findAll().then(data => {
   /* console.log(data);*/
})

task.findAll().then(data =>{
    console.log(data);
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Line = Line;
db.elect = elect;
db.task = task;

module.exports = db;