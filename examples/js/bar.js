
function addBar(){
    let me=threeLayer;
    let scene=me.getScene();


    let data=gsAreaPoi.data.slice(0,5000)
    let timeId='gener time ';
    console.time(timeId)
    data.forEach(element => {
            let center=new maptalks.Coordinate(element.lng,element.lat);
            let v=me.coordinateToVector3(center);
            let height=Math.random()*5000;

            let geometry=new THREE.BoxGeometry(50,50,height);
          //   height=50;
          //   var geometry = new THREE.SphereGeometry( height, 32, 32 );
            // let geometry=new THREE.CylinderBufferGeometry(45,45,height);

            let material = new THREE.MeshPhongMaterial( { color:'red', side: THREE.DoubleSide  });
            let mesh=new THREE.Mesh(geometry,material);
            mesh.position.set(v.x,v.y,-height/2);
            // mesh.rotation.x=-Math.PI/2;
            scene.add(mesh);
            
    });
    console.timeEnd(timeId)


}