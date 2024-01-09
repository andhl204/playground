type F = (...p: any[]) => any;

export function throttle(fn: F, t: number): F {
  let timer: number | undefined;
  return function (...args) {
    if (timer !== undefined) {
      timer = setTimeout(() => {
        fn(...args);
        timer = undefined;
      }, t);
    }
  };
}
