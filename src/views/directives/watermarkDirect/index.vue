<template>
  <div>
    <canvas id="canvas1" width="1000" height="660"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const init = () => {
  const canvas1 = document.querySelector("#canvas1");
  const ctx1 = canvas1.getContext("2d");
  let width = 1000;
  let height = 660;
  let img = new Image();
  img.src = "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg";
  img.onload = function () {
    draw();
  };
  let scale = 1;

  let scaleX = 0;
  let scaleY = 0;

  let translateX = 0;
  let translateY = 0;

  let rects = [
    {
      x: 650,
      y: 350,
      width: 100,
      height: 100,
      isEditing: false,
      rotatable: true,
      rotateAngle: 30
    }
  ];

  document.addEventListener(
    "wheel",
    function (event) {
      if (event.ctrlKey) {
        // detect pinch
        event.preventDefault(); // prevent zoom
        if (event.deltaY < 0) {
          console.log("Pinching in");
          if (scale < 3) {
            // 注意这里两行
            scaleX = event.offsetX;
            scaleY = event.offsetY;
            scale = Math.min(scale + 0.1, 3);
            draw();
          }
        } else {
          console.log("Pinching out");
          if (scale > 1) {
            scale = Math.max(scale - 0.1, 1);
            draw();
          }
        }
      } else {
        if (!event.ctrlKey) {
          // console.log("translate", event.deltaX, event.deltaY);
          event.preventDefault();
          translateX -= event.deltaX;
          translateY -= event.deltaY;
          draw();
        }
      }
    },
    { passive: false }
  );

  function draw() {
    console.log("draw");
    ctx1.clearRect(0, 0, width, height);
    ctx1.save();
    ctx1.translate(scaleX, scaleY);
    ctx1.scale(scale, scale);
    ctx1.translate(-scaleX, -scaleY);
    ctx1.translate(translateX, translateY);
    ctx1.drawImage(img, 0, 0, width, height);

    rects.forEach(r => {
      ctx1.strokeStyle = r.isEditing ? "rgba(255, 0, 0, 0.5)" : "rgba(255, 0, 0)";

      ctx1.save();
      if (r.rotatable) {
        ctx1.translate(r.x + r.width / 2, r.y + r.height / 2);
        ctx1.rotate((r.rotateAngle * Math.PI) / 180);
        ctx1.translate(-(r.x + r.width / 2), -(r.y + r.height / 2));
      }
      ctx1.strokeRect(r.x, r.y, r.width, r.height);
      ctx1.restore();
    });

    ctx1.restore();
  }
};

onMounted(() => {
  init();
});
</script>

<style scoped></style>
