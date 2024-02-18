<template>
  <div id="three" class="w-full h-full"></div>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from "vue";
import * as THREE from "three";

const init = () => {
  const scene = new THREE.Scene(); //创建场景
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); //创建相机

  const renderer = new THREE.WebGLRenderer(); //渲染器
  renderer.setSize(window.innerWidth / 1.5, window.innerHeight / 1.5);
  const threeBody = document.getElementById("three");
  threeBody && threeBody.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: "#fff" });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }
  animate();
};

onMounted(() => {
  nextTick(() => {
    init();
  });
});
</script>

<style scoped></style>
