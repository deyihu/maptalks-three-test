

function addamfLoader(){
    let me=threeLayer;
    let scene=me.getScene();
     //天台圆柱
    var amfLoader = new THREE.AMFLoader();
    amfLoader.load( './model/rook.amf', function ( amfobject ) {
        // scene.add( amfobject );
        let v=me.coordinateToVector3(new maptalks.Coordinate(13.4210297991973,52.52984438065292));
        // console.log(amfobject)
        amfobject.position.set(v.x,v.y,v.z);
        amfobject.scale.set(200,200,200)
        amfobject.rotation.x=-Math.PI
        scene.add(amfobject);		
     });
     
}