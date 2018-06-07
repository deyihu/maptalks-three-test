

function addvRMLoader(){
    let me=threeLayer;
    let scene=me.getScene();

    var vRMLoader = new THREE.VRMLoader();
    vRMLoader.load( 'model//Alicia/AliciaSolid.vrm', function ( vrm ) {
                // VRMLoader doesn't support VRM Unlit extension yet so
                // converting all materials to MeshBasicMaterial here as workaround so far.
                vrm.scene.traverse( function ( object ) {
                    if ( object.material ) {
                        if ( Array.isArray( object.material ) ) {
                            for ( var i = 0, il = object.material.length; i < il; i ++ ) {
                                var material = new THREE.MeshBasicMaterial();
                                THREE.Material.prototype.copy.call( material, object.material[ i ] );
                                material.color.copy( object.material[ i ].color );
                                material.map = object.material[ i ].map;
                                material.lights = false;
                                object.material[ i ] = material;
                            }
                        } else {
                            var material = new THREE.MeshBasicMaterial();
                            THREE.Material.prototype.copy.call( material, object.material );
                            material.color.copy( object.material.color );
                            material.map = object.material.map;
                            material.lights = false;
                            object.material = material;
                        }
                    }
                } );
                let center=new maptalks.Coordinate(13.426142777347081,52.52345727626059);
                let v=me.coordinateToVector3(center);
                let mesh=vrm.scene;
                mesh.position.set(v.x,v.y,v.z);
                mesh.scale.multiplyScalar(500)
                mesh.rotation.x=-Math.PI/2;
                mesh.rotation.y=Math.PI;
                // console.log(mesh)
                scene.add( mesh );
    } );
}