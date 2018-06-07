

function addboxgeometry(){

      let me=threeLayer;
      let scene=me.getScene();
            (function(){
                    
                var map = new THREE.TextureLoader().load( 'textures/UV_Grid_Sm.jpg' );
                map.wrapS = map.wrapT = THREE.RepeatWrapping;
                map.anisotropy = 16;
                var material = new THREE.MeshPhongMaterial( { map: map, side: THREE.DoubleSide } );
                let boxGeometry=new THREE.BoxGeometry( 100, 100, 100, 4, 4, 4 );
                            
                let cube  = new THREE.Mesh( boxGeometry, material );
                let center=new maptalks.Coordinate(13.427296951967492,52.523218520954714);
                let v=me.coordinateToVector3(center);
                // console.log(v);
                cube.position.set(v.x,v.y,-100);
                cube.scale.multiplyScalar(2);
                scene.add( cube );
                // console.log(boxGeometry)
                // // console.log(boxGeometry.center())
                // console.log(boxGeometry.boundingBox)
                // console.log(boxGeometry.vertices)

        })();


        (function(){
                let center=new maptalks.Coordinate(13.429811264482964,52.52326324703748);
                let v=me.coordinateToVector3(center);
                let size=100;
                let boxGeometry=new THREE.BoxGeometry( size, size, size, 4, 4, 4 );
                // console.log(boxGeometry)
                let cols=20,rows=10;
                for(let i=0;i<cols;i++){
                    for(let j=0;j<rows;j++){
                        var material = new THREE.MeshPhongMaterial( { color:randomColor(), side: THREE.DoubleSide } );
                        let cube  = new THREE.Mesh( boxGeometry, material );
                        cube.position.set(v.x+(i*size*2),v.y,-size-(j*size*2));
                        cube.scale.multiplyScalar(2);
                        cube.castShadow=true;
                        scene.add( cube );
                        // console.log(cubu)
                    }
                }
        })();
}