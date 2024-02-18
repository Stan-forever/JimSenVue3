<template>
  <div class="dataScreen-container">
    <div class="dataScreen-content" ref="dataScreenRef">
      <div class="header"></div>
      <div class="content">
        <div class="left">
          <div class="left-box1"></div>
          <div class="left-box2"></div>
        </div>
        <div class="center"></div>
        <div class="right">
          <div class="right-box1"></div>
          <div class="right-box2"></div>
        </div>
      </div>
      <div class="dataScreen-footer">
        <div class="footer-left"></div>
        <div class="footer-center"></div>
        <div class="footer-right"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const dataScreenRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (dataScreenRef.value) {
    dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
    dataScreenRef.value.style.width = `1920px`;
    dataScreenRef.value.style.height = `1080px`;
  }
  window.addEventListener("resize", resize);
});

// 设置响应式
const resize = () => {
  if (dataScreenRef.value) {
    dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
  }
};

// 根据浏览器大小推断缩放比例
const getScale = (width = 1920, height = 1080) => {
  let ww = window.innerWidth / width;
  let wh = window.innerHeight / height;
  return ww < wh ? ww : wh;
};
</script>

<style lang="scss" scoped>
.dataScreen-container {
  width: 100%;
  height: 100%;
  background: url("./images/bg.png") no-repeat;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 100% 100%;
  background-size: cover;
  .dataScreen-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transition: all 0.3s;
    transform-origin: left top;
    display: flex;
    flex-direction: column;
    gap: 30px;
    .header {
      height: 60px;
      border: 1px solid white;
    }
    .content {
      display: flex;
      gap: 0 30px;
      height: 100%;
      .left,
      .right {
        height: 100%;
        width: 450px;
        display: flex;
        flex-direction: column;
        gap: 30px;
      }
      .left {
        .left-box1,
        .left-box2 {
          border: 1px solid white;
          width: 100%;
          height: 100%;
        }
      }
      .right {
        .right-box1,
        .right-box2 {
          border: 1px solid white;
          width: 100%;
          height: 100%;
        }
      }
      .center {
        flex: 1;
        height: 100%;
        border: 1px solid white;
      }
    }
    .dataScreen-footer {
      display: flex;
      gap: 0 30px;

      .footer-left,
      .footer-right {
        height: 300px;
        width: 450px;
        border: 1px solid white;
      }
      .footer-center {
        flex: 1;
        height: 300px;
        border: 1px solid white;
      }
    }
  }
}
</style>
