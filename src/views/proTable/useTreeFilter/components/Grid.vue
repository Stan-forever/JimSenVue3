<template>
  <el-scrollbar>
    <div class="container">
      <!-- <div v-for="(item, index) in 12" class="box" :class="index === 0 && 'box1'">box</div> -->
      <div class="box box1">box</div>
      <div class="box">box</div>
      <div class="box">box</div>
      <div class="box">box</div>
      <div class="box">box</div>
      <div class="box">box</div>
      <div class="box">box</div>
      <div class="box">box</div>
      <div class="box">box</div>
      <div class="box">box</div>
      <div class="box">box</div>
      <div class="box">box</div>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  display: grid;
  gap: 10px;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  width: 100%;
  /* height: 100%; */
  /* min-height: 500px; */
  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #7c9fb0;
    border-radius: 5px;
    padding: 30px;
    /* height: 100px; */
    aspect-ratio: 3 / 2; // 宽/高
  }
  /* .box1 {
      grid-row: 1/3;
      grid-column: 1/3;
      height: 210px;
    } */
}
</style>
