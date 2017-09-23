/**
 * Created by 27353 on 2017/9/22.
 */
var mapObj = {
    layers:[]
};
mapObj.layers[0] = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url:'http://www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e0!2sm!3i345013117!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0'
    }),
    name:'谷歌地图',
    visible:true
});


var map = new ol.Map({
    layers: mapObj.layers,
    target: 'map',
    view: new ol.View({
        center: [12734150,3570900],
        zoom: 17
    }),
    controls: ol.control.defaults({
        attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
            collapsible: false
        })
    })
});

var controlDisplay = {
    display:'none',
}

var control = new Vue({
    el:"#control",
    data:controlDisplay
    //渲染图层控件
});

var controlPanel = new Vue({
    el:"#control_panel",
    methods:{
        click1:function () {
            this.open();
        },
        close:function () {
            controlDisplay.display = 'none';
            this.left = 0;
        },
        open:function () {
            controlDisplay.display = 'block';
            this.left = 300;
        }
    },
    data:{
        left:0
    }
});
Vue.component('layer-item',{
    template:'\
    <li>\
        {{name}}\
        <input type="checkbox" v-model="visible" v-on:change:/>\
    </li>',
    data:function () {
        var layer = mapObj.layers[0];
        var obj ={
            name :  layer.get('name'),
            visible:layer.getVisible() //? 'checked':''

        }
        return obj;
    }
})

var layersControl = new Vue({
    el:"#layers",
})


