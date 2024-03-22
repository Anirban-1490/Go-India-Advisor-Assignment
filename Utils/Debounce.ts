export function debounce(callback: any, delay = 1000) {
  let timer: number;
  return (...args: any[]) => {
    if (timer) {
      clearTimeout(timer);
    }
    setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
