<template>
  <el-scrollbar>
    <div class="container">
      <div v-for="item in imgList" :key="item.url" class="box">
        <img :src="item.url" alt="" />
      </div>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
const imgList = [
  { url: "https://cdn2.thecatapi.com/images/6ea.jpg" },
  { url: "https://cdn2.thecatapi.com/images/6v0.jpg" },
  { url: "https://cdn2.thecatapi.com/images/9pg.jpg" },
  { url: "https://cdn2.thecatapi.com/images/b13.jpg" },
  { url: "https://cdn2.thecatapi.com/images/cps.jpg" },
  { url: "https://cdn2.thecatapi.com/images/MTc5NDkzMg.jpg" },
  { url: "https://cdn2.thecatapi.com/images/MTg1MzQxOQ.jpg" },
  { url: "https://cdn2.thecatapi.com/images/MTk4NjE3NQ.jpg" },
  { url: "https://cdn2.thecatapi.com/images/MjA1MTc4Mw.jpg" },
  { url: "https://cdn2.thecatapi.com/images/II9dOZmrw.jpg" }
];
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 30px;
  .box {
    border: 1px solid white;
    border-radius: 10px;
    /* aspect-ratio: 9/16; */
    height: 150px;
    aspect-ratio: 16/9;

    img {
      width: 100%;
      height: 100%;
      /* height: 150px; */
      object-fit: cover;
    }
  }
}
</style>
