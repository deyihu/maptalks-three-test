
function addcTMLoader(){
    let me=threeLayer;
    let scene=me.getScene();

     var cTMLoader = new THREE.CTMLoader();
    cTMLoader.loadParts( "./model/camaro/camaro.js", function( geometries, materials ) {
                    hackMaterials( materials );
                    let center=new maptalks.Coordinate(13.42547506669598,52.529860476744574);
                    // setTimeout(() => {
                    //     map.setCenter(center);
                    // }, 500);
                    let v=me.coordinateToVector3(center);
                    const altitude=22;
                    const amount = me.distanceToVector3(altitude, altitude).x;
					for ( var i = 0; i < (geometries.length); i ++ ) {
                        // console.log(geometries[i])
                        // console.log(materials[i])
                        let name=materials[i].name;
                        // console.log(name)
                        if(name==='Material.001_plane-ao-256'||name==='Body'||name==='Material.001') continue;
						var mesh = new THREE.Mesh( geometries[ i ], materials[ i ] );
						mesh.position.set(v.x,v.y,amount);
                        mesh.scale.multiplyScalar(100)
                        mesh.rotation.x=-Math.PI/2;
                        mesh.rotation.y=-Math.PI/4;
						scene.add( mesh );
					}
					// var end = Date.now();
					// console.log( "load time:", end - start, "ms" );
	  }, { useWorker: false } );
}