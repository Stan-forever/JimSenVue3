let timer: NodeJS.Timeout | null = null;

export const debounceFn = (fn: Function) => {
  if (timer) clearInterval(timer);
  timer = setTimeout(() => {
    fn();
  }, 1000);
};
