export function debounce(fn: Function, ms: number) {
  let timer: ReturnType<typeof setTimeout> | null;
  return () => {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn();
    }, ms);
  };
}
