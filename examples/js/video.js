

function addvideo(){
    let me=threeLayer;
    let scene=me.getScene();
    let video=document.createElement('video');
    video.autoplay='autoplay';
    video.loop='loop';
    video.src='textures/XWz14WWu_1034459_hd.mp4'
        // let  video = document.getElementById( 'video' );
        if(!video) return;
        let texture = new THREE.VideoTexture( video );
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.format = THREE.RGBFormat;
        var parameters = { color: 0xffffff, map: texture };
        let x=4000,y=10,z=2000,scale=0.6;
        let geometry = new THREE.BoxBufferGeometry( x, y, z );
        let material = new THREE.MeshLambertMaterial( parameters );
        let mesh=new THREE.Mesh(geometry,material);


        let center=new maptalks.Coordinate(120.67592157746378,31.319070236251804);
        //    setTimeout(() => {
        //        map.setCenter(center);
        //    }, 200);
        let v=me.coordinateToVector3(center);
        mesh.position.set(v.x,v.y,-(z/2*scale)-0)
        mesh.scale.multiplyScalar(scale);
        //    mesh.rotation.x=-Math.PI/3;
           mesh.rotation.z=-Math.PI/2*1.1;
        //   
        scene.add(mesh);

        function animate(){
            requestAnimationFrame(animate);
            mesh.rotation.x+=0.01;
            //    console.log(mesh.rotation.z)
        }
        // animate();
}