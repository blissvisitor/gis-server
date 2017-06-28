
/**
 * Created by 27353 on 2017/6/26.
 */
var Sequelize =require("sequelize")

var db = {};

const sequelize = new Sequelize('postgis_23_sample','postgres','1234',{
    host:'119.23.244.169',
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

const electriLines = sequelize.define('dianlixians',{
    gid:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    id:{
        type:Sequelize.INTEGER
    },
    '位置': {
        type: Sequelize.STRING
    },
    '上次检查时':{
        type:Sequelize.TIME
    },
    '状况':{
        type:Sequelize.STRING
    }
},{
    timestamps:false
})
electriLines.findAll().then(lines =>{
    console.log(lines);//,function (result) {
    //console.log(result)
});