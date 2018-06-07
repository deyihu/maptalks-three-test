

function addassimpJSONLoader(){
    let me=threeLayer;
    let scene=me.getScene();
    
    //吉普车
     var assimpJSONLoader = new THREE.AssimpJSONLoader();
     assimpJSONLoader.load( 'model/jeep/jeep.assimp.json', function ( object ) {
                    let center=new maptalks.Coordinate(13.419797468749948,52.5254259170035);
                    // map.setCenter(center);
					object.scale.multiplyScalar( 50 );
                    let v=me.coordinateToVector3(center);
                    object.position.set(v.x,v.y,v.z);
                    object.rotation.x=-Math.PI/2;
                    object.rotation.y=Math.PI/3;
                    scene.add( object );
     });
}