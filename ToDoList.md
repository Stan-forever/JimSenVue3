### 沉淀！ (面试过有offer了就奖励自己一台电脑)

优先级/顺序

***** Vue3
**** Uniapp/小程序(Vue3 + TS 也能用)
*** 组件库搭建
*** React
**博客
**开源(github)



vue3官方文档
1、错误处理 
app.config.errorHandler = (err) => {
    ...
}

2、自定义指令
v-for
v-if
v-show
v-bind(:)
v-on(@)
v-html
v-slot:插槽名 (简写 template #插槽名)

3、computed 
get和set
响应式依赖

4、v-if v-for在同一节点时的优先级 (v-if更高)

5、defineModel ?

6、属性透传
透传指父组件调用子组件(ChildCom)时，<ChildCom class="child-class" style="font-size: 12px"/>
如class、style、id会直接赋给子组件的根节点，且无需像props那样传参。

当子组件存在多个节点如
<header></header>
<content></content>
<footer></footer>
时，若想指定某个节点进行透传，需绑定对应的节点并赋给v-bind="$attrs"，并设置
defineOptions({
  inheritAttrs: false
});。

7、插槽

8、异步组件?

9、hooks
在.vue文件中抽离一些冗余可复用的代码，封装到另一个文件。
文件导出以use开头的函数，在函数中处理相应逻辑即可

10、自定义指令

11、toValue



组件库

八股文
sass
大屏适配
大数据量
组件二次封装


setTimeout0 线程、进程
哪些方法会改变原数组
箭头函数
异步 
Promise
getter函数、setter函数
null、undefined区别


项目细节、协作分工等等

vue性能优化

uniapp + uview
小程序
公众号开发
springBoot
