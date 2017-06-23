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

Line.findAll().then(lines =>{
    console.log(lines[0].dataValues.geom);//,function (result) {
      //console.log(result)
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Line = Line;

module.exports = db;