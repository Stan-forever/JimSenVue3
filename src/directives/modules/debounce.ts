const debounce = {
  //el (element 绑定的元素)
  //binding (一个对象，包含 value: 传递给指令的值 其他略)
  mounted(el, binding) {
    let timer: NodeJS.Timeout | null = null;
    if (typeof binding.value !== "function") {
      throw "callback must be a function";
    }
    el.__handleClick__ = () => {
      if (timer) {
        clearInterval(timer);
      }
      timer = setTimeout(() => {
        binding.value();
      }, 500);
    };
    el.addEventListener("click", el.__handleClick__);
  },
  beforeMount(el) {
    el.removeEventListener("click", el.__handleClick__);
  }
};

export default debounce; //按钮防抖
