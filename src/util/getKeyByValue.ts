export function getKeyByValue<T extends Record<string, any>>(
  obj: T,
  value: any,
): string | undefined {
  return Object.keys(obj).find((key) => obj[key] === value);
}

export default getKeyByValue;
