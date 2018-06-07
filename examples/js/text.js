

function addText(){
    let me=threeLayer;
    let scene=me.getScene();
     //text
    var fontLoader = new THREE.FontLoader();
    fontLoader.load( 'data/helvetiker_regular.typeface.json', function ( font ) {
        let textGeo = new THREE.TextGeometry( 'Iverson', {
					font:font,
					size: 50,
					height: 10,
					// curveSegments: curveSegments,
					// bevelThickness: bevelThickness,
					// bevelSize: bevelSize,
					// bevelEnabled: bevelEnabled
        });
        let materials = [
                        new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } ), // front
                        new THREE.MeshPhongMaterial( { color: 0xffffff } ) // side
                    ];
        let textMesh1 = new THREE.Mesh( textGeo, materials );
        let textVec=me.coordinateToVector3(new maptalks.Coordinate(13.414327386994273,52.528206121084594));
        // console.log(textVec)
    
        const altitude=52;
        const amount = me.distanceToVector3(altitude, altitude).x;
        textMesh1.position.set(textVec.x,textVec.y,-amount);
        textMesh1.rotation.x=-Math.PI/2
        textMesh1.rotation.y=1.0766666666666623;
        scene.add(textMesh1)
    });
}