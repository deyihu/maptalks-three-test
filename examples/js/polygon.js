

function addPolygon(){

    let me=threeLayer;
    let scene=me.getScene();
        
    const polygonLnglats=[[
        [13.433511804943464,52.53118555726266],[13.432342727199966,52.5302907475328],[13.430440728621988,52.53107916508006],[13.431525770092094,52.53205401981742]
    ]];
    const polygon=new maptalks.Polygon(polygonLnglats);



    //polygon
    var texture = new THREE.TextureLoader().load( "./textures/grasslight-big.jpg" );
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(0.002, 0.002);
    var m = new THREE.MeshPhongMaterial({opacity : 1,transparent: true ,  blending: THREE.AdditiveBlending,
            map: texture});
    var mesh = me.toExtrudeMesh(polygon,0, m, true);
    scene.add(mesh);

}