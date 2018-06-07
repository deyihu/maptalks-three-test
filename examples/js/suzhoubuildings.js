

function addSuzhouBuildings(){
    let me=threeLayer;
    let scene=me.getScene();
    const total=32;
    var buildingsCount=0;
    function getData(index){
            $.getJSON('data/'+index+'.json', function(buildingsGeoJSON) {
                buildingsGeoJSON=buildingsGeoJSON.features;
                buildingsCount+=buildingsGeoJSON.length;
                buildingsGeoJSON.forEach(feature => {
                    let height=feature.height||feature.properties.height||20;
                    let lnglats=feature.geometry.coordinates;
                    let polygon=new maptalks.Polygon(lnglats);
                    var material = materialDic[height] ? materialDic[height] : materials[Math.floor(Math.random() * materials.length)];
                    if (!materialDic[height])
                        materialDic[height] = material;

                    var mesh = me.toExtrudeMesh(polygon, height, material, true);
                    if (Array.isArray(mesh)) {
                            scene.add.apply(scene, mesh);
                    } else {
                            scene.add(mesh);
                    }

                });
                index++;
                if(index<=total) getData(index);
                else{
                    console.log('buildingsCount:',buildingsCount)
                }
        });
    }

    getData(1);
      
}