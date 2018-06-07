

function addcolladaLoader(){
    let me=threeLayer;
    let scene=me.getScene();
    // collada  精灵
	var colladaLoader1 = new THREE.ColladaLoader(  );
	colladaLoader1.load( './model/elf/elf.dae', function ( collada ) {
          let center=new maptalks.Coordinate(13.4210297991973,52.52984438065292);
        //   map.setCenter(center)
          let object=collada.scene;
          let v=me.coordinateToVector3(center);
          const altitude=72;
          const amount = me.distanceToVector3(altitude, altitude).x;
          object.position.set(v.x,v.y,-amount);
          object.scale.multiplyScalar(100)
          object.rotation.x=-Math.PI;
          scene.add(object);
          function animation(){
              requestAnimationFrame(animation);
              object.rotation.z+=0.03;
          }
          animation();
    });
    
    var colladaLoader2 = new THREE.ColladaLoader();
    colladaLoader2.load( './model/stormtrooper/stormtrooper.dae', function ( collada ) {
         let center=new maptalks.Coordinate(13.42756225115204,52.531401126684244);
        //  setTimeout(() => {
        //      map.setCenter(center);
        //  }, 200);
         let v=me.coordinateToVector3(center);
		 var animations = collada.animations;
         var avatar = collada.scene;
         clock = new THREE.Clock();
		 let mixer = new THREE.AnimationMixer( avatar );
         var action = mixer.clipAction( animations[ 0 ] ).play();
         avatar.position.set(v.x,v.y,v.z);
         avatar.scale.multiplyScalar(100);
         avatar.rotation.x=-Math.PI;
         avatar.rotation.z=Math.PI;
         scene.add( avatar );
         function animation(){
             requestAnimationFrame(animation);
             var delta = clock.getDelta();
			 if ( mixer !== undefined ) {
					mixer.update( delta );
             }
           
         }
         animation();
    } );
}