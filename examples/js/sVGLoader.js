

function addsVGLoader(){
      let me=threeLayer;
      let scene=me.getScene();


      var sVGLoader = new THREE.SVGLoader();
    sVGLoader.load( 'model/tiger.svg', function ( paths ) {
        let center=new maptalks.Coordinate(13.427673152527404,52.5278477728169);
        let v=me.coordinateToVector3(center);
        var group = new THREE.Group();
        group.position.set(v.x,v.y,v.z);
        group.scale.multiplyScalar(2);
        for ( var i = 0; i < paths.length; i ++ ) {
             var path = paths[ i ];
             var material = new THREE.MeshBasicMaterial( {
                    color: path.color,
                    side: THREE.DoubleSide,
                    depthWrite: false
             } );
            var shapes = path.toShapes( true );
            for ( var j = 0; j < shapes.length; j ++ ) {
                var shape = shapes[ j ];
                var geometry = new THREE.ShapeBufferGeometry( shape );
                // var geometry = new THREE.ExtrudeGeometry(shape, { 'amount': 100, 'bevelEnabled': true });
                var mesh = new THREE.Mesh( geometry, material );
                group.add( mesh );
            }
        };
        scene.add( group )
    } );


    //   var sVGLoader1 = new THREE.SVGLoader();
    //   sVGLoader1.load( 'model/wechat.svg', function ( paths ) {
    //         let center=new maptalks.Coordinate(13.431846929675771,52.52694217557999);
    //         let v=me.coordinateToVector3(center);
    //         let altitude=10;
    //         let amount=me.distanceToVector3(altitude,altitude).x;
    //         var group = new THREE.Group();
    //         group.position.set(v.x,v.y,-amount);
    //         // group.scale.multiplyScalar(2);
    //         for ( var i = 0; i < paths.length; i ++ ) {
    //             var path = paths[ i ];
    //             var material = new THREE.MeshBasicMaterial( {
    //                     color: path.color,
    //                     side: THREE.DoubleSide,
    //                     depthWrite: false
    //             } );
    //             var shapes = path.toShapes( true );
    //             for ( var j = 0; j < shapes.length; j ++ ) {
    //                 var shape = shapes[ j ];
    //                 var geometry = new THREE.ExtrudeGeometry(shape, { 'amount': amount, 'bevelEnabled': true });
    //                 var mesh = new THREE.Mesh( geometry, material );
    //                 group.add( mesh );
    //             }
    //         }
    //         scene.add( group );
    // } );
}