export const clone = (state: any) => JSON.parse(JSON.stringify(state))

export const mod = (n: number, m: number) => {
  return ((n % m) + m) % m
}

export const sanitize = (input: string): string => {
  return input.replace(/\t/g, '').replace(/  /g, '')
}

export function debounce<T extends Function>(cb: T, wait = 20) {
  let h: any = 0;
  let callable = (...args: any) => {
      clearTimeout(h);
      h = setTimeout(() => cb(...args), wait);
  };
  return <T>(<any>callable);
}