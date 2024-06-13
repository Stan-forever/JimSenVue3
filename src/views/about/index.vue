<template>
  <el-descriptions border :column="3" title="生产环境依赖">
    <el-descriptions-item v-for="(value, key) in dependencies" :key="key" width="400" :label="key">
      <el-tag type="info">
        {{ value }}
      </el-tag>
    </el-descriptions-item>
  </el-descriptions>
  <el-descriptions border :column="3" title="开发环境依赖">
    <el-descriptions-item v-for="(value, key) in devDependencies" :key="key" width="400" :label="key">
      <el-tag type="info">
        {{ value }}
      </el-tag>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup lang="ts">
const { pkg, lastBuildTime } = __APP_INFO__;
const { dependencies, devDependencies, version } = pkg;
</script>

<style scoped></style>
