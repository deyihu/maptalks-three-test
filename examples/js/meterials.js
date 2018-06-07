var materials = (function () {
    var materials = [];
    var loader = new THREE.TextureLoader();
    for (let i = 1; i < 8; i++) {
        var texture = loader.load("./textures/"+i + ".jpg");
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(0.002, 0.002);
        materials.push(new THREE.MeshPhongMaterial({
            blending: THREE.AdditiveBlending,
            map: texture
        }));
    }
    return materials;
})();
var materialDic = {}; // index by height