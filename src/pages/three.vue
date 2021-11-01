<template>
    <div>

    </div>
</template>

<script>
import * as THREE from 'three';
// import { WEBGL } from 'three/examples/jsm/WebGL.js';
    export default {
        name: 'three',
        created () {   
        },
        mounted () {
            this.render();
        },
        methods: {
            render() {
                let scene = new THREE.Scene();  // 场景
                let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 ); // 相机
                let renderer = new THREE.WebGLRenderer(); // 渲染器
                renderer.setSize( window.innerWidth, window.innerHeight);
                document.getElementById('app').appendChild( renderer.domElement);
                let geometry = new THREE.BoxGeometry( 1, 1, 1 );
                let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
                let cube = new THREE.Mesh( geometry, material );
                scene.add( cube );

                camera.position.z = 5;

                let animate = () =>{
                    requestAnimationFrame( animate );
                    cube.rotation.x += 0.01;
                    cube.rotation.y += 0.01;
                    renderer.render( scene, camera );
                };
                animate();
            },
        }
    }
</script>

<style scoped>

</style>