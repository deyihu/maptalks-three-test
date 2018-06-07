

function addmtlLoader(){
    let me=threeLayer;
    let scene=me.getScene();

    const scale=10;
        var mtlLoader = new THREE.MTLLoader();
        mtlLoader.setPath( 'model/obj/' );
        mtlLoader.load( 'male02.mtl', function( materials ) {
            materials.preload();
            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials( materials );
            objLoader.setPath( 'model/obj/' );
            objLoader.load( 'male02.obj', function ( object ) {
                object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                    child.scale.set(scale, scale, scale);
                    child.rotation.set(Math.PI * 3 / 2, 0, 0);
                    }
                });
                var v = threeLayer.coordinateToVector3(new maptalks.Coordinate(13.438186479666001,52.530305072175594));
                object.position.x = v.x;
                object.position.y = v.y;
                object.position.z = v.z;
                scene.add(object);
                mtlLoaded = true;
                threeLayer.renderScene();
            });
        });
}