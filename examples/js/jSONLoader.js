

function addjSONLoader(){
    let me=threeLayer;
    let scene=me.getScene();


    var jSONLoader = new THREE.JSONLoader();
    jSONLoader.load( 'model/monster/monster.js', function ( geometry, materials ) {
					// adjust color a bit
                    let center=new maptalks.Coordinate(13.427459868892356,52.530210129662834);
					var material = materials[ 0 ];
					material.morphTargets = true;
					material.color.setHex( 0xffaaaa );
					var mesh = new THREE.Mesh( geometry, materials );
                    let v=me.coordinateToVector3(center);
                    mesh.position.set(v.x,v.y,v.z);
                    mesh.scale.multiplyScalar(0.3);
                    mesh.rotation.x=-Math.PI/2;
                    scene.add(mesh);

                    let mixer = new THREE.AnimationMixer( scene );
                    let clock = new THREE.Clock();
                    mixer.clipAction( geometry.animations[ 0 ], mesh )
								.setDuration( 1 )			// one second
								.startAt( - Math.random() )	// random phase (already running)
								.play();				

                    function animate(){
                        requestAnimationFrame(animate);
                        mixer.update( clock.getDelta() );
                    }
                    animate();
    });


     var jSONLoader2 = new THREE.JSONLoader();
     jSONLoader2.load( 'model/female02/Female02_slim.json', function ( geometry, materials ) {
					// adjust color a bit
                    let center=new maptalks.Coordinate(13.437459868892356,52.530210129662834);
                
                    // setTimeout(() => {
                    //     map.setCenter(center); 
                    // }, 200);
					// var material = materials[ 0 ];
					// material.morphTargets = true;
					// material.color.setHex( 0xffaaaa );
					var mesh = new THREE.Mesh( geometry, materials );
                    let v=me.coordinateToVector3(center);
                    mesh.position.set(v.x,v.y,v.z);
                    mesh.scale.multiplyScalar(10);
                    mesh.rotation.x=-Math.PI/2;
                    scene.add(mesh);

                  
    });


     var jSONLoader3= new THREE.JSONLoader();
     jSONLoader3.load( "model/flamingo.js", function( geometry ) {
         let center=new maptalks.Coordinate(13.429067470319069,52.529019688502075);
         let v=me.coordinateToVector3(center);
         geometry.computeVertexNormals();
					geometry.computeMorphNormals();
                   var material = new THREE.MeshPhongMaterial( {
                    color: 0xffffff,
						morphTargets: true,
						morphNormals: true,
						vertexColors: THREE.FaceColors
					} );
                    var mesh = new THREE.Mesh( geometry, material );
                    mesh.position.set(v.x,v.y,-500)
                    mesh.rotation.x=-Math.PI/2;
                    mesh.scale.multiplyScalar(6)
					scene.add( mesh );
					var mixer = new THREE.AnimationMixer( mesh );
                    mixer.clipAction( geometry.animations[ 0 ] ).setDuration( 1 ).play();
                    var clock = new THREE.Clock();
                    function animation(){
                        requestAnimationFrame(animation);
                        var delta = clock.getDelta();
                        mixer.update( delta );
                        
                    }
                    animation();
   } );
}