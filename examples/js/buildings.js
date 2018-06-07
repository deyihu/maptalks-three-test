

// features to draw

function addBuildings(){
    let me=threeLayer;
    let scene=threeLayer.getScene();

    var features = [];
    buildings.forEach(function (b) {
        features = features.concat(b.features);
    });
    features.forEach(function (g) {
        var heightPerLevel = 10;
        var levels = g.properties.levels || 1;
        // var color = getColor(levels);
        let height=levels*heightPerLevel;
        var material = materialDic[height] ? materialDic[height] : materials[Math.floor(Math.random() * materials.length)];
            if (!materialDic[height])
                materialDic[height] = material;
    
        // var m = new THREE.MeshPhongMaterial({color: color, opacity : 1,map:material});
        let m=material;
    
        var mesh = me.toExtrudeMesh(maptalks.GeoJSON.toGeometry(g), height, m, true);
        // console.log(mesh.geometry.ver)
        if (Array.isArray(mesh)) {
          scene.add.apply(scene, mesh);
        } else {
          scene.add(mesh);
        }
    });


     //   $.getJSON('data/data-1524056463493-H1PcbpN2z.json', function(buildingsGeoJSON) {

    //          buildingsGeoJSON.forEach(feature => {
    //               let height=feature.height||20;
    //               let lnglats=feature.polygon;
    //               let polygon=new maptalks.Polygon([lnglats]);
    //               var material = materialDic[height] ? materialDic[height] : materials[Math.floor(Math.random() * materials.length)];
    //               if (!materialDic[height])
    //                     materialDic[height] = material;

    //             var mesh = me.toExtrudeMesh(polygon, height, material, true);
    //             if (Array.isArray(mesh)) {
    //                  scene.add.apply(scene, mesh);
    //             } else {
    //                  scene.add(mesh);
    //             }

    //          });
    //   });


    var grassPolygonlnglats=[
        [
        [13.440557393762674,52.52960038403663],
        [13.440841626918768,52.52959942785125],
        [13.441037957096569,52.52960173141773],
        [13.441245685055492,52.529566157341634],
        [13.441463054414953,52.52950092567542],
        [13.441581599610345,52.5294540170066],
        [13.44303876593824,52.5281684258068],
        [13.443114559653168,52.52807390777954],
        [13.443172744548292,52.52792605011413],
        [13.443160404466198,52.52775475275283],
        [13.443141976890615,52.52761025657625],
        [13.443082660583514,52.527505848978905],
        [13.443004602671408,52.5273911118488],
        [13.442866200510707,52.52727374519506],
        [13.44266289720963,52.52716943720438],
        [13.442413842038718,52.52708381163936],
        [13.442111637793573,52.527061783794665],
        [13.441940026360498,52.52703985780133],
        [13.441629027775434,52.52703712837402],
        [13.441368213506166,52.52708333523546],
        [13.4412369527887,52.52711660730958],
        [13.441084677507774,52.52714232200978],
        [13.440991195221955,52.52725949293469],
        [13.439624140158799,52.52849060118527],
        [13.439538899843456,52.528752563194956],
        [13.43954533884471,52.529011205738556],
        [13.439635420687864,52.529157144639186],
        [13.439765883023028,52.52927149539116],
        [13.439911497874618,52.52936979854732],
        ]
    ]

    var grassPolygon=new maptalks.Polygon(grassPolygonlnglats);

    (function(){
        var texture = new THREE.CanvasTexture( generateTexture() );

        // let geometry = new THREE.PlaneGeometry( 100, 100 );
        let altitude=100;
        let amount=me.distanceToVector3(altitude,altitude).x;
        console.log(amount)
        let shape=me.toShape(grassPolygon);
        const geom = new THREE.ExtrudeGeometry(shape, { 'amount': amount, 'bevelEnabled': true });
        const buffGeom = new THREE.BufferGeometry();
        buffGeom.fromGeometry(geom);

        // let center=new maptalks.Coordinate(13.428589786583643,52.52418576254158);
        let v=me.coordinateToVector3(grassPolygon.getCenter());
        // let altitude=100;
        // let amount=me.distanceToVector3(altitude,altitude).x;
        for ( var m = 0; m< 1; m ++ ) {
                        var material = new THREE.MeshBasicMaterial( {
                            // color: new THREE.Color().setHSL( 0.3, 0.75, ( m / 15 ) * 0.4 + 0.1 ),
                            // map: texture,
                            color:'red'
                            // depthTest: false,
                            // depthWrite: false,
                            // transparent: true
                        } );
                        // var mesh = me.toExtrudeMesh(grassPolygon,1*100,material,true);
                        var mesh = new THREE.Mesh(buffGeom, material );

                        mesh.position.set(v.x,v.y,-amount);
                        // mesh.rotation.x = -Math.PI ;
                        // mesh.scale.multiplyScalar(10)
                        scene.add( mesh );
        }
    })();
}
