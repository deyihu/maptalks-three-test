

function addparticle(){
    let me=threeLayer;
    let scene=me.getScene();

    //点 粒子
        (function(){

            let uniforms = {
				texture:   { value: new THREE.TextureLoader().load( "textures/sprites/spark1.png" ) }
			};
			var shaderMaterial = new THREE.ShaderMaterial( {
				uniforms:       uniforms,
				vertexShader:   document.getElementById( 'vertexshader' ).textContent,
				fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
				blending:       THREE.AdditiveBlending,
				depthTest:      false,
				transparent:    true,
				vertexColors:   true
            });

             function generate(num) {
                var lng = 13.420508710320178 + Math.random() * 0.011944541356911031;
                var lat = 52.517712893879064 + Math.random() * 0.0018672090262157326;
                return [lng,lat];

             }
            
            // let data=5000;
            // let lnglats=[];
            // for (var i = 0; i < data; i++) {
            //         var a = data[i];
            //         lnglats.push(new maptalks.Coordinate(generate()));
            // }
            
			var positions = [];
			var colors = [];
			var sizes = [];
            var color = new THREE.Color();
         
            let data=gsAreaPoi.data;//.slice(0,10000);
            let len=data.length;
            let timeId='gener time ';
            console.time(timeId)
            for(let i=0;i<data.length;i++){
                let element=data[i];

                color.setHSL( i / len, 1.0, 0.5 );
				colors.push( color.r, color.g, color.b );
                sizes.push( 200 );

                let center=new maptalks.Coordinate(element.lng,element.lat);
                let v=me.coordinateToVector3(center);
                positions.push(v.x,v.y,v.z);
            }
            console.timeEnd(timeId)
        

            // for(let i=0;i<len;i++){
            //     color.setHSL( i / len, 1.0, 0.5 );
			// 	colors.push( color.r, color.g, color.b );
            //     sizes.push( 20 );
            //     let v=me.coordinateToVector3(lnglats[i]);
            //     positions.push(v.x,v.y,v.z);
            // }
            let geometry = new THREE.BufferGeometry();
            geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
			geometry.addAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );
			geometry.addAttribute( 'size', new THREE.Float32BufferAttribute( sizes, 1 ).setDynamic( true ) );
            let particleSystem = new THREE.Points( geometry, shaderMaterial );
            scene.add( particleSystem );
            function animate(){
                requestAnimationFrame(animate)
                var time = Date.now() * 0.005;
                // particleSystem.rotation.z = 0.01 * time;
                var ss = geometry.attributes.size.array;
                for ( var i = 0; i < len; i++ ) {
                    ss[ i ] = 5000 * ( 1 + Math.sin( 0.1 * i + time ) );
                }
                geometry.attributes.size.needsUpdate = true;
            }
            animate();

        })();
}