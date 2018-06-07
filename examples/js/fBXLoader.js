
function addfBXLoader(){
    let me=threeLayer;
    let scene=me.getScene();

    var fBXLoader = new THREE.FBXLoader();
    fBXLoader.load( 'model/Samba Dancing.fbx', function ( object ) {
                let center=new maptalks.Coordinate(13.42948518733374,52.53043764065009);
                // setTimeout(() => {
                //     map.setCenter(center);

                // }, 1000);
                let v=me.coordinateToVector3(center);
                    object.mixer = new THREE.AnimationMixer( object );
                    let mixers=[];
					mixers.push( object.mixer );
					var action = object.mixer.clipAction( object.animations[ 0 ] );
					action.play();
					object.traverse( function ( child ) {
						if ( child.isMesh ) {
                            child.scale.multiplyScalar(400);
							child.castShadow = true;
							child.receiveShadow = true;
						}
                    } );
                    object.scale.multiplyScalar(4)
                    object.position.set(v.x,v.y,v.z);
                    object.rotation.x=-Math.PI/2;
                    scene.add( object );
                    let clock = new THREE.Clock();
                    function animate() {
                        requestAnimationFrame( animate );
                        if ( mixers.length > 0 ) {
                            for ( var i = 0; i < mixers.length; i ++ ) {
                                mixers[ i ].update( clock.getDelta() );
                            }
                        }
               
                        // stats.update();
                    }
                    animate();
	} );
}