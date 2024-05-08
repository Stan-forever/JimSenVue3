setTimeout(() => {
  console.log(1) //4 同步任务
  Promise.resolve().then(() => {
    console.log(7) //5 微任务
  })
}, 0) //异步任务-宏任务

console.log(2) //1 同步任务

Promise.resolve().then(() => {
  console.log(3) //3 同步任务
}) //异步任务-微任务

setTimeout(() => {
  console.log(8) //6 同步任务
  setTimeout(() => {
    console.log(5) //宏任务
  }, 0)
}, 0) //异步任务-宏任务

setTimeout(() => {
  Promise.resolve().then(() => {
    console.log(4)
  }) //7 微任务
}, 0) //异步任务-宏任务

console.log(6) //2 同步任务

//输出顺序
//2 6 3 1 7 8 5
