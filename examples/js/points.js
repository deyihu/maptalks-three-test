let points;

function addPoints(){
    let me=threeLayer;
    let scene=me.getScene();
    let camera=me.getCamera();
    const lineLnglat=[
        // [13.419188624711296, 52.52961582604334],
        // [13.415122968111746, 52.52684954527709],
        [13.40848467236151, 52.52179120198329],
        [13.408923807596352, 52.522007965071765],
        [13.409375375937088, 52.52223022219212],
        [13.409969419916251, 52.522520524607756],
        [13.410456571643977, 52.52281264605725],
        [13.41106171957722, 52.523190089346116],
        [13.411496067393955, 52.5234262280413],
        [13.411775175745674, 52.52362091997222],
        [13.412737549367193, 52.524399599231884],
        [13.413178413138212, 52.524749015506444],
        [13.413440976340098, 52.52494501921669],
        [13.413590505947582, 52.52508538546559],
        [13.41391909781646, 52.525377761150565],
        [13.414353381453452, 52.52570694523186],
        [13.414678273348613, 52.52599543125089],
        [13.415057912663542, 52.52626757495713],
        [13.41518865206774, 52.526399090805256],
        [13.415586583508116, 52.52673070217841],
        [13.415843528807045, 52.526980975526584],
        [13.415946546352188, 52.52707948993552],
        [13.41617916899213, 52.52728565191509],
        [13.416328747052148, 52.52749605290674],
        [13.416447270414665, 52.52761956312813],
        [13.417360200980283,52.528625356655624],
        [13.417992565758482,52.52929044890706],
        [13.418421901737247,52.52971826531805],
        [13.418848954196392,52.530194542006],
        [13.419291755130189,52.530678472758126],
        [13.419528802749483,52.531049302652065],
        [13.419927477552278,52.531631625218296],
        [13.420179851546663,52.532141068336756],
        [13.420608364057557,52.53283761719686],
        [13.4208389094199,52.53317317375874],
        [13.42105279019222,52.533606755692205],
        [13.421252828546812,52.533898937757584],
        [13.42184134872059,52.5348348894162],
        [13.4221976948279,52.53539044881168],
        [13.422525935967201,52.53596977654965],
        [13.423185804626996,52.53714608284858],
        [13.423509708184156,52.537734610219644],
        [13.424052512065487,52.5385659063962],
        [13.424266828244072,52.538958908131946],
        [13.424401451809445,52.53922882879621],
        [13.424147962065945,52.53929452892018],
        [13.423389181907169,52.539413811223056],
        [13.421678393570346,52.53968193600255],
        [13.418676210670583,52.54014046458323],
        [13.416428366718492,52.540490795053216],
        [13.41453556571878,52.540785783662244],
        [13.41405886260759,52.54077976658911],
        [13.412309779561156,52.540975698931646],
        [13.410362716424743,52.53917616511765],
        [13.408101698321957,52.53696708151605],
        [13.406776148758468,52.535715924198456],
        [13.405579603256683,52.53449337429507],
        [13.404785691412826,52.53362986894612],
        [13.402956602549125,52.531714779248176],
        [13.401306567729762,52.52989385981434],
        [13.401355058215245,52.52960991315226],
    ]
   
    let positions=[]
  
    lineLnglat.forEach(element => {
        let ve= me.coordinateToVector3(new maptalks.Coordinate(element))
        positions.push(
            ve.x,ve.y,ve.z
        )
    });

    var buffergeometry = new THREE.BufferGeometry();
    buffergeometry.addAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
    var sprite = new THREE.TextureLoader().load( './textures/disc.png' );

    let pointsMaterial = new THREE.PointsMaterial( { size: 35, sizeAttenuation: false, map:sprite,color:'yellow', alphaTest: 0.5, transparent: true } )
    points=new THREE.Points(buffergeometry,pointsMaterial)
    // scene.add( points );
    let parentTransform = new THREE.Object3D();
    parentTransform.add(points);

    // let center=new maptalks.Coordinate(13.412096813581456,52.531343819449575);
    // let v=me.coordinateToVector3(center);
    // points.position.set(v.x,v.y,v.z);
    scene.add( parentTransform );


    (function(){

        let center=new maptalks.Coordinate(13.427564223413697,52.52463776744307);
        let v=me.coordinateToVector3(center);
        
        var map = new THREE.TextureLoader().load( 'textures/UV_Grid_Sm.jpg' );
        map.wrapS = map.wrapT = THREE.RepeatWrapping;
        map.anisotropy = 16;

        var material = new THREE.MeshPhongMaterial( { map: map, side: THREE.DoubleSide } );
        let geometry=new THREE.TorusKnotBufferGeometry( 50, 10, 50, 20 );
        let object = new THREE.Mesh( geometry, material );
        object.position.set(v.x,v.y,v.z );
        object.scale.multiplyScalar(5)
        // scene.add( object );


        var buffergeometry = new THREE.BufferGeometry();
        buffergeometry.addAttribute( 'position', geometry.attributes.position );

        var sprite = new THREE.CanvasTexture(generatePointTexture());

        let pointsMaterial = new THREE.PointsMaterial( {size:5, sizeAttenuation: false, alphaTest: 0.5, transparent: true,color:'red' } )
        var points=new THREE.Points(buffergeometry,pointsMaterial);

        let object3D=new THREE.Object3D();

        object3D.add(points);
        object3D.position.set(v.x,v.y,v.z);
        object3D.scale.multiplyScalar(5)
        scene.add( object3D );
    })();
}