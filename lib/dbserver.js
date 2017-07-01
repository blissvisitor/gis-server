
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


/*
electriLines.findAll().then(lines =>{
    console.log(lines);//,function (result) {
    //console.log(result)
});*/
const task = sequelize.define('tasks',{
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
    /*    date:{
     type:Sequelize.DATEONLY
     },*/
    geom:{
        type:Sequelize.GEOMETRY
    }
},{
    timestamps:false
});

const point = {
    type: 'MultiPoint',
    coordinates: [[114.39864,30.52128]],
    crs: { type: 'name', properties: { name: 'EPSG:4326'} }
};
/*const  point = {type:'Point',coordinates:[114.39864,30.52128],srid:'EPSG::4326'}*/

/*task.create({
    pipeId:2,
    pipeType:'elect',
    reasons:'node 测试',
    backWords:null,
    checkTime:null,
    geom:point

})*/

/*task.findAll().then(data=>{
    console.log(data)
})*/
/*const  waste_line = sequelize.define("waste_line",{
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
})*/
const communication_line=sequelize.define('communication_lines', {
    gid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id: {
        type: Sequelize.INTEGER
    },
    location: {
        type: Sequelize.STRING
    },
    last_check: {
        type: Sequelize.STRING
    },
    condition: {
        type: Sequelize.STRING
    },
    geom: {
        type: Sequelize.GEOMETRY
    }
},{
    timestamps:false
})
/*
communication_line.findAll().then(function (data) {
    console.log(data);
})*/

const electric_line=sequelize.define('electric_lines',{
    gid:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    id:{
        type:Sequelize.INTEGER
    },
    location:{
        type:Sequelize.STRING
    },
    last_check:{
        type:Sequelize.STRING
    },
    condition:{
        type:Sequelize.STRING
    },
    geom:{
        type:Sequelize.GEOMETRY
    }
},{
    timestamps:false
})

/*
electric_line.findAll().then(function (data) {
    console.log(data);
})
*/
const gas_line=sequelize.define('gas_lines',{
    gid:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    id:{
        type:Sequelize.INTEGER
    },
    location:{
        type:Sequelize.STRING
    },
    last_check:{
        type:Sequelize.STRING
    },
    condition:{
        type:Sequelize.STRING
    },
    geom:{
        type:Sequelize.GEOMETRY
    }
},{
    timestamps:false
})
/*gas_line.findAll().then(function (data) {
    console.log(data)
});*/

const rain_line=sequelize.define('rain_lines',{
    gid:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    id:{
        type:Sequelize.INTEGER
    },
    location:{
        type:Sequelize.STRING
    },
    last_check:{
        type:Sequelize.STRING
    },
    condition:{
        type:Sequelize.STRING
    },
    geom:{
        type:Sequelize.GEOMETRY
    }
},{
    timestamps:false
})

/*
rain_line.findAll().then(function (data) {
    console.log(data)
});
*/
const waste_line=sequelize.define('waste_lines',{
    gid:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    id:{
        type:Sequelize.INTEGER
    },
    location:{
        type:Sequelize.STRING
    },
    last_check:{
        type:Sequelize.STRING
    },
    condition:{
        type:Sequelize.STRING
    },
    geom:{
        type:Sequelize.GEOMETRY
    }
},{
    timestamps:false
})
/*waste_line.findAll().then(function (data) {
 console.log(data)
 });*/
const water_line=sequelize.define('water_lines',{
    gid:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    location:{
        type:Sequelize.STRING
    },
    last_check:{
        type:Sequelize.STRING
    },
    condition:{
        type:Sequelize.STRING
    },
    geom:{
        type:Sequelize.GEOMETRY
    }
},{
    timestamps:false
})
/*water_line.findAll().then(function (data) {
 console.log(data)
 })*/

var dbs={};

dbs.sequelize=sequelize;
dbs.task=task;
dbs.commun = communication_line;
dbs.elect = electric_line;
dbs.gas = gas_line;
dbs.rain = rain_line;
dbs.waste = waste_line;
dbs.water = water_line;

module.exports=dbs;


