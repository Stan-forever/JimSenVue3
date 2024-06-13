<template>
  <section class="my-gantt">
    <div id="gantt_here" class="gantt-container"></div>
  </section>
</template>

<script lang="ts" setup>
import { reactive, toRefs, onBeforeMount, onMounted, watchEffect, defineExpose } from "vue";

import { gantt } from "dhtmlx-gantt";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import demoData from "./ganttData.json";

const data = reactive({});

//初始化甘特图
const initGantt = () => {
  gantt.config.grid_width = 350;
  gantt.config.add_column = false; //添加符号

  //时间轴图表中，如果不设置，只有行边框，区分上下的任务，设置之后带有列的边框，整个时间轴变成格子状。
  gantt.config.autofit = false;
  gantt.config.row_height = 60;
  gantt.config.bar_height = 34;
  // gantt.config.fit_tasks = true //自动延长时间刻度，以适应所有显示的任务
  gantt.config.auto_types = true; //将包含子任务的任务转换为项目，将没有子任务的项目转换回任务
  // gantt.config.xml_date = '%Y-%m-%d' //甘特图时间格式
  gantt.config.readonly = true; //是否只读
  gantt.i18n.setLocale("cn"); //设置语言
  gantt.init("gantt_here"); //初始化
  gantt.parse(demoData); //填充数据
};

onBeforeMount(() => {});
onMounted(() => {
  initGantt();
});
watchEffect(() => {});
defineExpose({
  ...toRefs(data)
});
</script>
<style scoped lang="scss">
.my-gantt {
  height: calc(100vh - 200px);
  width: 100%;
  .gantt-container {
    width: 100%;
    height: 100%;
  }
}
</style>
