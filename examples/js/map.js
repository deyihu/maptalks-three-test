function gotosuzhou(){

    // map.setCenterAndZoom([120.62105323720971,31.301730234758992],)
    map.setView({
        zoom   :  15,
        center : [120.67604935959594, 31.312652994743047],
        pitch : 60.80000000000001,
        // bearing : 27.000000000000227,
    });

}

function gotooringal(){
    map.setView({
        center : [13.424288666080088, 52.52433983347183],
        zoom   :  18,
        // maxPitch:60,
        pitch : 60.80000000000001,
        // bearing : 27.000000000000227,
      });
}

function gotony(){
    map.setView({
        center: [-73.97084145593703, 40.77501762399001],
        zoom: 13,
        pitch: 55,
    });
}

var map = new maptalks.Map("map",{
        center : [120.67604935959594, 31.312652994743047],
        zoom:15,
                // maxPitch:60,
                // pitch : 60.80000000000001,
        maxPitch:60,
        pitch : 60.80000000000001,
        bearing : -102.00000000000114,

        centerCross : true,
        doubleClickZoom : false,
        attribution : {
        'content' : '<span style="padding:4px;">&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a> &copy; <a href="https://osmbuilding.org">osmbuilding.org</a></span>'
        },
        baseLayer : new maptalks.TileLayer('tile',{
            'urlTemplate' : 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
            // 'urlTemplate' : 'https://b.tiles.mapbox.com/v3/osmbuildings.kbpalbpk/{z}/{x}/{y}.png',
            'subdomains'  : ['a','b','c','d']
        })
});

map.on('click',function(e){
console.log(e.coordinate)
})